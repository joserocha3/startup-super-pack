import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

import { Field } from '../Form'

import { EQUIPMENT_TYPE_QUERY } from '.'

const INITIAL_VALUES = {
  title: '',
  description: '',
}

const CREATE_EQUIPMENT_TYPE = gql`
  mutation createEquipmentType(
    $title: String!
    $description: String!
  ) {
    createEquipmentType(
      data: {
        title: $title
        description: $description
      }
    ) {
      id
      title
      description
    }
  }
`

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
})

const update = (cache, { data: { createEquipmentType } }) => {
  const { equipmentTypes } = cache.readQuery({ query: EQUIPMENT_TYPE_QUERY })
  cache.writeQuery({
    query: EQUIPMENT_TYPE_QUERY,
    data: { equipmentTypes: equipmentTypes.concat([createEquipmentType]) },
  })
}

const onSubmit = async (createEquipmentType, values, setSubmitting) => {
  try {
    await createEquipmentType({ variables: { ...values, status: values.active ? 'ACTIVE' : 'INACTIVE' } })
  } finally {
    setSubmitting(false)
  }
}

const EquipmentTypeCreateForm = () => (
  <Mutation mutation={CREATE_EQUIPMENT_TYPE} update={update}>
    {(createEquipmentType, { loading, error }) => (
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values, { setSubmitting }) => onSubmit(createEquipmentType, values, setSubmitting)}
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
    )}
  </Mutation>
)

export default EquipmentTypeCreateForm
