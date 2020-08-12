import React, { Component } from 'react';
import GitHubLogin from 'react-github-login';

class GithubBtn extends Component {
    render() {

        const onSuccessGithub = (response) => {
            console.log(response);
          } 

        return(
            <GitHubLogin
            clientId=" "
            onSuccess = { onSuccessGithub }
            valid={ true }
            redirectUri="http://localhost:3000/explore" />
        );
    }
}


export default GithubBtn;