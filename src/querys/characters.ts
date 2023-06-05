import { gql } from '@apollo/client'

// eslint-disable-next-line import/prefer-default-export
export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        image
        name
        status
        id
      }
      info {
        count
        next
        prev
      }
    }
  }
`
