import { gql } from '@apollo/client'

const ADD_MESSAGE = gql`
  mutation AddMessage($message: String!, $name: String!) {
    insert_messages(objects: { message: $message, name: $name }) {
      returning {
        id
        message
      }
    }
  }
`

export default ADD_MESSAGE
