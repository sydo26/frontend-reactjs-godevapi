// Logo Component - index.tsx

import * as React from 'react'

import { Div_ } from './style'

import { ReactSVG } from 'react-svg'

const Logo: React.FC = () => {
  return (
    <Div_>
      <ReactSVG src="/assets/images/logo.svg" />
    </Div_>
  )
}

export default Logo
