import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import { Form, Formik, Field as FormikField } from 'formik'
import * as yup from 'yup'

import { Field, Checkbox } from '../Form'
import { UserSelect } from '../Users'
import { EquipmentTypeSelect } from '../EquipmentTypes'

import { EQUIPMENTS_QUERY } from '.'

const INITIAL_VALUES = {
  title: '',
  description: '',
  type: '',
  published: false,
  owner: '',
}

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

const onSubmit = async (createEquipment, values, setSubmitting) => {
  try {
    await createEquipment({ variables: { ...values, status: values.published ? 'PUBLISHED' : 'DRAFT' } })
  } finally {
    setSubmitting(false)
  }
}

const EquipmentCreateForm = () => (
  <Mutation mutation={CREATE_EQUIPMENT} update={update}>
    {(createEquipment, { loading, error }) => (
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values, { setSubmitting }) => onSubmit(createEquipment, values, setSubmitting)}
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
            <UserSelect errors={errors} touched={touched} name="owner" />
            <FormikField component={Checkbox} name="published" id="published" label="Publish Equipment?" />
            <EquipmentTypeSelect errors={errors} touched={touched} />

            {loading && <p>Loading...</p>}
            {error && <p>{`Error :( Please try again. ${error.message}`}</p>}

            <button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</button>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    )}
  </Mutation>
)

export default EquipmentCreateForm
