import React from 'react'
import styled from 'styled-components'

import InputFeedback from './InputFeedback'

const Wrapper = styled.div`

`

class CheckboxGroup extends React.Component {
  handleChange = (event) => {
    const {
      value,
      onChange,
      id,
    } = this.props

    const target = event.currentTarget
    const valueArray = value || []

    if (target.checked) {
      valueArray.push(target.id)
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1)
    }

    onChange(id, valueArray)
  }

  handleBlur = () => {
    const {
      id,
      onBlur,
    } = this.props

    // take care of touched
    onBlur(id, true)
  }

  render() {
    const {
      value,
      error,
      touched,
      label,
      children,
    } = this.props

    return (
      <Wrapper
        success={value || (!error && touched)}
        error={!!error && touched}
      >
        <fieldset>
          <legend>{label}</legend>
          {(React.Children.map(children, child => React.cloneElement(child, {
            field: {
              value: value.includes(child.props.id),
              onChange: this.handleChange,
              onBlur: this.handleBlur,
            },
          })))}
          {touched
            && <InputFeedback error={error} />
          }
        </fieldset>
      </Wrapper>
    )
  }
}

export default CheckboxGroup
