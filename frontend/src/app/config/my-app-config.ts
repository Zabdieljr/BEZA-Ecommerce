export default {
  // add okta develop app config here

  oidc: {
    clientId: '0oadijedlg58MxMUD5d7',
    issuer: 'https://dev-61749373.okta.com/oauth2/default',
    redirectUri: 'https://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email']
  }

}
