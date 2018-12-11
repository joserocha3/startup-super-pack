import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

import { Field, Checkbox } from '../Form'
import { UserSelect } from '../Users'
import { EquipmentTypeSelect } from '../EquipmentTypes'

import useAuthState from '../../utilities/useAuthState'
import queries from '../../queries'
import mutations from '../../mutations'

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  type: yup.string().required(),
  published: yup.boolean().required(),
  owner: yup.string().required(),
})

const update = (cache, { data: { createEquipment } }) => {
  const { equipments } = cache.readQuery({ query: queries.equipments.ALL_FIELDS })
  cache.writeQuery({
    query: queries.equipments.ALL_FIELDS,
    data: { equipments: equipments.concat([createEquipment]) },
  })
}

const EquipmentCreateForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { user } = useAuthState()

  const createEquipment = useMutation(
    mutations.equipments.CREATE, {
      update,
    },
  )

  const onSubmit = async (values, { setSubmitting }) => {
    setLoading(true)
    const variables = {
      ...values,
      status: values.published ? 'PUBLISHED' : 'DRAFT',
    }

    try {
      await createEquipment({ variables })
    } catch (err) {
      setError(err)
    }

    setSubmitting(false)
    setLoading(false)
  }

  const initialValues = {
    title: '',
    description: '',
    type: '',
    published: false,
    owner: user.admin ? '' : user.uid,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        touched,
        errors,
        dirty,
        isSubmitting,
        handleReset,
      }) => (
        <Form>
          <Field errors={errors} touched={touched} name="title" placeholder="Enter a title" />
          <Field errors={errors} touched={touched} name="description" placeholder="Enter a description" />
          {user.admin
            ? <UserSelect errors={errors} touched={touched} name="owner" />
            : <Field hidden name="owner" />
                    }
          <Field component={Checkbox} name="published" id="published" label="Publish Equipment?" />
          <EquipmentTypeSelect errors={errors} touched={touched} />

          {loading && <p>Loading...</p>}
          {error && <p>{`Error :( Please try again. ${error.message}`}</p>}

          <button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</button>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default EquipmentCreateForm
