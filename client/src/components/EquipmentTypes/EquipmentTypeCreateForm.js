import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

import { Field } from '../Form'

import queries from '../../queries'
import mutations from '../../mutations'

const INITIAL_VALUES = {
  title: '',
  description: '',
}

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
})

const update = (cache, { data: { createEquipmentType } }) => {
  const { equipmentTypes } = cache.readQuery({ query: queries.equipmentTypes.ALL_FIELDS })
  cache.writeQuery({
    query: queries.equipmentTypes.ALL_FIELDS,
    data: { equipmentTypes: equipmentTypes.concat([createEquipmentType]) },
  })
}

const EquipmentTypeCreateForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const createEquipmentType = useMutation(mutations.equipmentTypes.CREATE, {
    update,
  })

  const onSubmit = async (values, { setSubmitting }) => {
    setLoading(true)
    const variables = {
      ...values,
      status: values.active ? 'ACTIVE' : 'INACTIVE',
    }

    try {
      await createEquipmentType({ variables })
    } catch (err) {
      setError(err)
    }

    setLoading(false)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
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

          {loading && <p>Loading...</p>}
          {error && <p>{`Error :( Please try again. ${error.message}`}</p>}

          <button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</button>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default EquipmentTypeCreateForm
