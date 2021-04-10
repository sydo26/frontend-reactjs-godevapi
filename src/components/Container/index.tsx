// Container Component - index.tsx

import * as React from 'react'

import { ContainerProps } from 'components-props'

import './style.css'
import Wrapper from '../Wrapper'

const Container: React.FC<ContainerProps> = ({ children, bgSrc = '' }) => {
  return (
    <div className="container">
      <div
        className="background"
        style={{ backgroundImage: `url(${bgSrc})` }}
      />
      <Wrapper>{children}</Wrapper>
    </div>
  )
}

export default Container
