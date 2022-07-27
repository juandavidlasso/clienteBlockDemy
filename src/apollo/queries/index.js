import { gql } from '@apollo/client'

export const OBTENER_CHARACTERS = gql`
    query characters {
        characters {
            id
            name
            status
            species
            type
            gender
            origin {
                id
                name
            }
            location {
                id
                name
            }
            image
            episode {
                id
            }
            created
        }
    }
`

export const OBTENER_CHARACTER = gql`
    query character($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
        }
    } 
`


export const OBTENER_EPISODES = gql`
    query episodes {
        episodes {
            id
            name
            air_date
            episode
            characters {
                id
                name
            }
            created
        }
    }
`

export const OBTENER_EPISODE = gql`
    query episode($id: ID!) {
        episode(id: $id) {
            id
            name
            air_date
            episode
            characters {
                id
                name
            }
            created
        }
    }
`


export const OBTENER_LOCATIONS = gql`
    query locations {
        locations {
            id
            name
            type
            dimension
            residents {
                id
            }
            created
        }
    }
`


export const OBTENER_LOCATION = gql`
    query location($id: ID!) {
        location(id: $id) {
            id
            type
            dimension
            residents {
                id
            }
            created
        }
    }
`