import React from 'react'
import SocialLogin from 'react-social-login'

// import { OldSocialLogin as SocialLogin } from 'react-social-login'

class SocialButton extends React.Component {

    constructor(props) {
        super(props)

        console.log('SocialButton props ---> ', props)
    }

    handleSocialLogin = (user, err) => {
        console.log(user)
        console.log(err)
      }
    render() {
        const { children, triggerLogin, triggerLogout, ...props } = this.props
        return (
            <button onClick={triggerLogin} {...this.props}>
              { this.props.children }
            </button>
        )
    }
}

export default SocialLogin(SocialButton);