import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import { Form, Formik, Field as FormikField } from 'formik'
import * as yup from 'yup'

import { Field, Checkbox } from '../Form'

import { LISTINGS_QUERY } from '.'

const INITIAL_VALUES = {
  title: '',
  description: '',
}

const CREATE_LISTING = gql`
  mutation createListing(
    $title: String!
    $description: String!
    $active: Boolean!
  ) {
    createListing(
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
  points: yup.number().required(),
})

const update = (cache, { data: { createListing } }) => {
  const { listings } = cache.readQuery({ query: LISTINGS_QUERY })
  cache.writeQuery({
    query: LISTINGS_QUERY,
    data: { listings: listings.concat([createListing]) },
  })
}

const onSubmit = async (createListing, values, setSubmitting) => {
  try {
    await createListing({ variables: values })
  } finally {
    setSubmitting(false)
  }
}

const ListingCreateForm = () => (
  <Mutation mutation={CREATE_LISTING} update={update}>
    {(createListing, { loading, error }) => (
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values, { setSubmitting }) => onSubmit(createListing, values, setSubmitting)}
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
            <FormikField component={Checkbox} name="active" id="active" label="Active" />

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

export default ListingCreateForm
