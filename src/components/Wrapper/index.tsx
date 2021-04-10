// Wrapper Component - index.tsx

import * as React from 'react'

import { WrapperProps } from 'components-props'

import './style.css'

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>
}

export default Wrapper
