import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        field
        message
      }
      user {
        id
        email
      }
    }
  }
`;

const SIGNUP = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    register(options: { name: $name, email: $email, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        name
        email
      }
    }
  }
`;

const ME_QUERY = gql`
  {
    me {
      id
      name
      email
    }
  }
`;

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  onLogin(email: string, password: string) {
    return this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        email,
        password,
      },
    });
  }

  onSignup(name: string, email: string, password: string) {
    return this.apollo.mutate({
      mutation: SIGNUP,
      variables: {
        name,
        email,
        password,
      },
    });
  }

  getCurrentUser() {
    return this.apollo.watchQuery({
      // @ts-ignore
      query: ME_QUERY,
    });
  }

  onLogout() {
    return this.apollo.mutate({
      mutation: LOGOUT,
    });
  }
}
