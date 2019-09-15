/* eslint no-unused-vars: 0 */

import React from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils'
import './SignIn.scss'

class SignIn extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render () {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            required
            type="email"
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            value={this.state.password}
            required
            label="Password"
            type="password"
            handleChange={this.handleChange}
          />

          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
