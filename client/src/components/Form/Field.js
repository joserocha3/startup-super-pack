import React from 'react'
import { Field as FormikField } from 'formik'

const Field = ({
  name,
  type = 'text',
  errors = {},
  touched = {},
  children = null,
  ...others
}) => (
  <div>
    <FormikField name={name} type={type} {...others}>
      {children}
    </FormikField>
    {errors[name] && touched[name] && <div>{errors[name]}</div>}
  </div>
)

export default Field
