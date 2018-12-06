import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import { Form, Formik, Field as FormikField } from 'formik'
import * as yup from 'yup'

import { Field, RadioButton, RadioButtonGroup } from '../Form'

import { USER_QUERY } from '.'

const INITIAL_VALUES = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  role: '',
}

const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $role: UserRole!
  ) {
    createUser(
      data: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        role: $role
      }
    ) {
      id
      email
      firstName
      lastName
      role
    }
  }
`

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  role: yup.string().matches(/(ADMIN|CLIENT)/).required(),
})

const update = (cache, { data: { createUser } }) => {
  const { users } = cache.readQuery({ query: USER_QUERY })
  cache.writeQuery({
    query: USER_QUERY,
    data: { users: users.concat([createUser]) },
  })
}

const onSubmit = async (createUser, values, setSubmitting) => {
  try {
    await createUser({ variables: values })
  } finally {
    setSubmitting(false)
  }
}

const UserCreateForm = () => (
  <Mutation mutation={CREATE_USER} update={update}>
    {(createUser, { loading, error }) => (
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values, { setSubmitting }) => onSubmit(createUser, values, setSubmitting)}
        validationSchema={validationSchema}
      >
        {({
          touched,
          errors,
          dirty,
          isSubmitting,
          handleReset,
          values,
          setFieldValue,
          setFieldTouched,
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
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            >
              <FormikField
                component={RadioButton}
                name="role"
                id="ADMIN"
                label="Admin"
              />
              <FormikField
                component={RadioButton}
                name="role"
                id="CLIENT"
                label="Client"
              />
            </RadioButtonGroup>

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

export default UserCreateForm
