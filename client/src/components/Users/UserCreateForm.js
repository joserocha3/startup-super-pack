import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { Form, Formik, Field as FormikField } from 'formik'
import * as Yup from 'yup'

import { Field, RadioButton, RadioButtonGroup } from '../Form'

import queries from '../../queries'
import mutations from '../../mutations'

const INITIAL_VALUES = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  role: '',
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  role: Yup.string().matches(/(ADMIN|CLIENT)/).required(),
})

const update = (cache, { data: { createUser } }) => {
  const { users } = cache.readQuery({ query: queries.users.ALL_FIELDS })
  cache.writeQuery({
    query: queries.users.ALL_FIELDS,
    data: { users: users.concat([createUser]) },
  })
}

const UserCreateForm = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const createUser = useMutation(mutations.users.CREATE, { update })

  const onSubmit = async (values, setSubmitting) => {
    setLoading(true)

    try {
      await createUser({ variables: values })
    } catch (err) {
      setError(err)
    }

    setLoading(false)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}
      validationSchema={validationSchema}
    >
      {({
        touched,
        errors,
        dirty,
        isSubmitting,
        handleReset,
        values,
      }) => (
        <Form>
          <Field errors={errors} touched={touched} name="email" placeholder="Enter an email address" />
          <Field errors={errors} touched={touched} name="password" placeholder="Enter a password" />
          <Field errors={errors} touched={touched} name="firstName" placeholder="Enter a first name" />
          <Field errors={errors} touched={touched} name="lastName" placeholder="Enter a last name" />

          <RadioButtonGroup
            id="role"
            label="Role"
            value={values.role}
            error={errors.role}
            touched={touched.role}
          >
            <FormikField component={RadioButton} name="role" id="ADMIN" label="Admin" />
            <FormikField component={RadioButton} name="role" id="CLIENT" label="Client" />
          </RadioButtonGroup>

          {loading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}

          <button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</button>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default UserCreateForm
