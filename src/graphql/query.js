import { gql } from '@apollo/client'

const GET_MESSAGES_SUBSCRIPTION = gql`
  subscription MySubscription {
    messages {
      name
      message
      id
      created_at
    }
  }
`

export default GET_MESSAGES_SUBSCRIPTION
