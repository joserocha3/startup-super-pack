import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { Form, Formik, Field as FormikField } from 'formik'
import * as yup from 'yup'

import { Field, Checkbox } from '../Form'

import queries from '../../queries'
import mutations from '../../mutations'

const INITIAL_VALUES = {
  title: '',
  description: '',
}

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  points: yup.number().required(),
})

const update = (cache, { data: { createListing } }) => {
  const { listings } = cache.readQuery({ query: queries.listings.ALL_FIELDS })
  cache.writeQuery({
    query: queries.listings.ALL_FIELDS,
    data: { listings: listings.concat([createListing]) },
  })
}

const ListingCreateForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const createListing = useMutation(mutations.listings.CREATE, {
    update,
  })

  const onSubmit = async (values, { setSubmitting }) => {
    setLoading(true)

    try {
      await createListing({ variables: values })
    } catch (err) {
      setError(err)
    }

    setSubmitting(false)
    setLoading(false)
  }
  return (
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
  )
}

export default ListingCreateForm
