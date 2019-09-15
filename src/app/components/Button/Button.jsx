/* eslint no-unused-vars: 0 */

import React from 'react'
import './Button.scss'

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children.toUpperCase()}
  </button>
)

export default Button
