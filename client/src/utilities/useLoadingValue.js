import { useReducer } from 'react'

const initialState = {
  loading: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'error':
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case 'reset':
      return {
        ...state,
        value: action.defaultValue,
      }
    case 'value':
      return {
        ...state,
        loading: false,
        value: action.value,
      }
    default:
      return state
  }
}

export default (defaultValue) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    value: defaultValue,
  })

  const reset = () => {
    dispatch({ type: 'reset', defaultValue })
  }

  const setError = (error) => {
    dispatch({ type: 'error', error })
  }

  const setValue = (value) => {
    dispatch({ type: 'value', value })
  }

  return {
    error: state.error,
    loading: state.loading,
    reset,
    setError,
    setValue,
    value: state.value,
  }
}
