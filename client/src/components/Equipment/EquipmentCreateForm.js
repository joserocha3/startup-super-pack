import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo-hooks'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

import Firebase from '../Firebase'
import { Field, Checkbox } from '../Form'
import { UserSelect } from '../Users'
import { EquipmentTypeSelect } from '../EquipmentTypes'

import { EQUIPMENTS_QUERY } from '.'

const CREATE_EQUIPMENT = gql`
  mutation createEquipment(
    $title: String!
    $description: String!
    $status: EquipmentStatus!
    $type: ID!
    $owner: ID!
  ) {
    createEquipment(
      data: {
        title: $title
        description: $description
        status: $status
        type: $type
        owner: $owner
      }
    ) {
      id
      title
      description
      status
    }
  }
`

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  type: yup.string().required(),
  published: yup.boolean().required(),
  owner: yup.string().required(),
})

const update = (cache, { data: { createEquipment } }) => {
  const { equipments } = cache.readQuery({ query: EQUIPMENTS_QUERY })
  cache.writeQuery({
    query: EQUIPMENTS_QUERY,
    data: { equipments: equipments.concat([createEquipment]) },
  })
}

const EquipmentCreateForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const createEquipment = useMutation(
    CREATE_EQUIPMENT, {
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
    } finally {
      setSubmitting(false)
      setLoading(false)
    }
  }

  return (
    <Firebase>
      {({ auth: { user } }) => {
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
      }}
    </Firebase>
  )
}

export default EquipmentCreateForm
