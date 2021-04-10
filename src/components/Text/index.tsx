// Text Component - index.tsx

import * as React from 'react'

import { TextProps } from 'components-props'

import { Span_ } from './style'

const Text: React.FC<TextProps> = ({
  text = '',
  type = 'default',
  weight = 'normal',
  size = 'small',
  ...rest
}) => {
  return (
    <Span_ className={`text ${type} text-${weight} text-${size}`} {...rest}>
      {text}
    </Span_>
  )
}

export default Text
