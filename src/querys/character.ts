import { gql } from '@apollo/client'

// eslint-disable-next-line import/prefer-default-export
export const GET_CHARACTER_INFO = gql`
  query CharacterInfo($characterId: ID!) {
    character(id: $characterId) {
      episode {
        characters {
          name
          id
          type
        }
        name
        air_date
        id
      }
      name
      status
      id
    }
  }
`
