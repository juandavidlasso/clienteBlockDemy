import React, { useState } from 'react';
import { DivInput, Input, ButtonModalEdit, InputSubmit } from '../components/styles'
import Swal from 'sweetalert2'
// GraphQL
import {UPDATE_CHARACTER} from '../apollo/mutations'
import { OBTENER_CHARACTERS } from '../apollo/queries'
import { useMutation } from '@apollo/client'

const PageUpdate = ({dataCharacter, hideModal}) => {

    const {gender, id, name, species, status, type} = dataCharacter.character
    const idCharacter = id
    // Mutation
    const [ updateCharacter ] = useMutation(UPDATE_CHARACTER)

    // State
    const [newCharacter, setNewCharacter] = useState({
        name: name,
        status: status,
        species: species,
        type: type,
        gender: gender
    })

    // OnChange
    const actualizarState = (e) => {
        setNewCharacter({
            ...newCharacter,
            [e.target.name]: e.target.value
        })
    }

    // Extract
    const input = {
        name: newCharacter.name,
        status: newCharacter.status,
        species: newCharacter.species,
        type: newCharacter.type,
        gender: newCharacter.gender
    }

    // Function Update
    const submitUpdate = async (e) => {
        e.preventDefault()

        try {
            await updateCharacter({
                variables: {
                    idCharacter,
                    input
                },
                refetchQueries: [
                    {query: OBTENER_CHARACTERS}
                ]
            })

            Swal.fire({
                title: 'Successfully',
                text: 'The character was updated successfully',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Done',
                allowEscapeKey: false,
                allowOutsideClick: false
            }).then( () => {
                hideModal()
            })
            
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: (error.message.replace('GraphQL error: ', '')),
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, Cancel',
                allowEscapeKey: false,
                allowOutsideClick: false
            })
        }
    }

    return (
        <form onSubmit={submitUpdate}>
            <DivInput>
                <label htmlFor='name'>Name:</label>
                <Input type='text' id='name' name='name' defaultValue={name} onChange={actualizarState}  />
                <label htmlFor='status'>Status:</label>
                <Input type='text' id='status' name='status' defaultValue={status} onChange={actualizarState} />
            </DivInput>
            <DivInput>
                <label htmlFor='species'>Species:</label>
                <Input type='text' id='species' name='species' defaultValue={species} onChange={actualizarState} />
                <label htmlFor='type'>Type:</label>
                <Input type='text' id='type' name='type' defaultValue={type} onChange={actualizarState} />
            </DivInput>
            <DivInput>
                <label htmlFor='gender'>Gender:</label>
                <Input type='text' id='gender' name='gender' defaultValue={gender} onChange={actualizarState} />
            </DivInput>
            <div>
                <InputSubmit type='submit' value='Update' />
                <ButtonModalEdit onClick={() => hideModal()}>Close</ButtonModalEdit>
            </div>
        </form>
    );
}
 
export default PageUpdate;