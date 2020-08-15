import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import { history } from '../../history.js';

const CLIENT_ID = " ";

class GoogleBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
    };

    this.login = this.login.bind(this);
  }

  login(response) {
    if (response.accessToken) {
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
    localStorage.setItem('name', response.profileObj.givenName);
    localStorage.setItem('avatar', response.profileObj.imageUrl);

    history.push('/explore')
    return history.go();
    }
  }

  render() {
    return (
      <div>
         <GoogleLogin  className="googleLindo"
            clientId={CLIENT_ID}
            buttonText="Google"
            icon = { false }
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            responseType='code,token'
          />
      </div>
    )
  }
}

export default GoogleBtn;