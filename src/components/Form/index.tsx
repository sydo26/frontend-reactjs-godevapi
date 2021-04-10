// Form Component - index.tsx

import * as React from 'react'

import { FormProps } from 'components-props'

import { Form_ } from './style'

const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Form_ {...rest} onSubmit={handleSubmit}>
      {children}
    </Form_>
  )
}

export default Form
