declare module 'components-props' {
  import * as React from 'react'

  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
    type?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large' | 'giant'
  }

  export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    text?: string
    type?: 'weak' | 'strong' | 'default'
    weight?: 'normal' | 'medium' | 'bold' | 'bolder'
    size?: 'small' | 'medium' | 'large' | 'giant'
  }

  export interface WrapperProps extends {} {}

  export interface NavbarProps extends {} {}

  export interface FormProps
    extends React.FormHTMLAttributes<HTMLFormElement> {}

  export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    text?: string
    size?: 'small' | 'medium' | 'large' | 'giant'
    weight?: 'normal' | 'medium' | 'bold' | 'bolder'
  }

  export interface ContainerProps extends {} {
    bgSrc: string
  }
}
