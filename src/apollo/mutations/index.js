import { gql } from '@apollo/client'

export const DELETE_CHARACTER = gql`
    mutation deleteCharacter($idCharacter: ID) {
        deleteCharacter(idCharacter: $idCharacter) {
            success
            message
        }
    }
`


export const UPDATE_CHARACTER = gql`
    mutation updateCharacter($idCharacter: ID, $input: CharacterInput) {
        updateCharacter(idCharacter: $idCharacter, input: $input) {
            id
            name
            status
            species
            type
            gender
        }
    }
`