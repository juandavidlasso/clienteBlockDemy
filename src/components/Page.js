import React, { useState } from 'react';
import { DivWrapper, DivLeft, DivRight, ImageRick, DivTable, ContentTable, RowHeader, RowBody, DivText, Text, H5, H6, Hr, ButtonEdit, ButtonDelete, Spinner } from './styles'
import Swal from 'sweetalert2'
import PageEdit from './PageEdit'
// GraphQL
import {DELETE_CHARACTER} from '../apollo/mutations'
import { OBTENER_CHARACTERS, OBTENER_CHARACTER } from '../apollo/queries'
import { useMutation, useQuery } from '@apollo/client'

const Page = ({data, arrayData, setArrayData}) => {

    // State
    const [active, setActive] = useState(false)
    const [dataCharacter, setDataCharacter] = useState({})
    // Extract data
    const {name, image, status, species, type, gender, origin, location, created, id} = data.characters

    // Mutation
    const [ deleteCharacter ] = useMutation(DELETE_CHARACTER)
    // Query
    const {data:DataQuery, loading, error, refetch} = useQuery(OBTENER_CHARACTER, { variables: {id} })

    // Function delete
    const submitDelete = async (e, idCharacter) => {
        e.preventDefault()

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, Cancel',
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then( async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteCharacter({
                        variables: {
                            idCharacter
                        },
                        refetchQueries: [
                            { query: OBTENER_CHARACTERS}
                        ]
                    }).then( (res) => {
                        // Remove character from state
                        const newArray = arrayData.filter(data => data.characters.id !== idCharacter)
                        setArrayData(newArray)

                        // Message successfully
                        Swal.fire({
                            title: 'Successfully',
                            text: (res.data.deleteCharacter.message),
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Done',
                            allowEscapeKey: false,
                            allowOutsideClick: false
                        })
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
        })
    }

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h1>`${error.message}`</h1>
    }

    // Function Edit
    const submitEdit = () => {
        refetch()
        setDataCharacter(DataQuery)
        setActive(true)
    }

    return (
        <DivWrapper>
            <PageEdit active={active} hideModal={() => setActive(false)} dataCharacter={dataCharacter} />
            <DivLeft>
                <ImageRick src={image} />
            </DivLeft>
            <DivRight>
                <DivTable>
                    <ContentTable>
                        <RowHeader>
                            <H5>{name}</H5>
                            <H6>CHARACTER ID: {id}</H6>
                        </RowHeader>
                        <RowBody>
                            <DivText>
                                <Text>Status:</Text>
                                {status}
                            </DivText>
                            <Hr />
                            <DivText>
                                <Text>Species:</Text>
                                {species}
                            </DivText>
                            <Hr />
                            <DivText>
                                <Text>Type:</Text>
                                {type ? type : 'unknown'}
                            </DivText>
                            <Hr />
                            <DivText>
                                <Text>Gender:</Text>
                                {gender}
                            </DivText>
                            <Hr />
                            <DivText>
                                <Text>Origin:</Text>
                                {origin ? origin.name : 'unknown'}
                            </DivText>
                            <Hr />
                            <DivText>
                                <Text>Location:</Text>
                                {location ? location.name : 'unknown'}
                            </DivText>
                            <Hr />
                            <DivText>
                                <Text>Created at:</Text>
                                {created}
                            </DivText>
                        </RowBody>
                    </ContentTable>
                </DivTable>
                <ButtonEdit onClick={() => submitEdit()}>Edit</ButtonEdit>
                <ButtonDelete onClick={(e) => submitDelete(e, id)}>Delete</ButtonDelete>
            </DivRight>            
        </DivWrapper>
    );
}
 
export default Page;