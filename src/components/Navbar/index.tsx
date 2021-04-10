// Navbar Component - index.tsx

import * as React from 'react'

// Others components
import Wrapper from '../Wrapper'

import { NavbarProps } from 'components-props'

import { Parent_, Object_, Divide_ } from './style'
import Logo from '../Logo'
import Avatar from '../Avatar'

const Text: React.FC<NavbarProps> = ({ children }) => {
  return (
    <Parent_ className="navbar">
      <Wrapper>
        <Divide_>
          <Object_
            style={{
              justifyContent: 'flex-start',
            }}
          >
            <Logo />
          </Object_>
          <Object_ style={{ justifyContent: 'flex-end' }}>
            <Avatar />
          </Object_>
        </Divide_>
      </Wrapper>
    </Parent_>
  )
}

export default Text
