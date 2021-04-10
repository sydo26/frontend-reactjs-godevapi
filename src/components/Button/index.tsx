// Button Component - index.tsx

import * as React from 'react'

import { ButtonProps } from 'components-props'

import { Button_, Span_ } from './style'

const Button: React.FC<ButtonProps> = ({
  text = '',
  type = 'primary',
  size = 'small',
  ...rest
}) => {
  return (
    <Button_ className={`${type} text-${size}`} {...rest}>
      <Span_>{text}</Span_>
    </Button_>
  )
}

export default Button
