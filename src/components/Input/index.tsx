// Input Component - index.tsx

import * as React from 'react'

import { InputProps } from 'components-props'

import { Div_, Button_, Input_, Label_, Object_ } from './style'
import Text from '../Text'
import Button from '../Button'

const Input: React.FC<InputProps> = ({
  text = '',
  size = 'small',
  weight = 'normal',
  ...rest
}) => {
  const id = rest.id || 'id' + Math.floor(Math.random() * 100000)

  return (
    <Div_>
      <Label_ htmlFor={id}>
        <Text text={text} size="small" type="weak" />
      </Label_>
      <Object_>
        <Input_
          className={`text-${weight} text-${size}`}
          type="text"
          id={id}
          {...rest}
        />
        <Button_>
          <Button style={{ height: '100%' }} text="a" size={size} />
        </Button_>
      </Object_>
    </Div_>
  )
}

export default Input
