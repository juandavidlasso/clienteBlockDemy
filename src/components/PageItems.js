import React, { useState, Fragment } from 'react';
import {ImageData, DivItems, DivImage, Span, DivTxt, ButtonView, Spinner } from '../components/styles'
import PageView from './PageView'
// GraphQL
import { OBTENER_CHARACTER } from '../apollo/queries'
import { useQuery } from '@apollo/client'

const PageItems = ({dataRick}) => {

    const {image, name, id} = dataRick.characters
    // State
    const [modal, setModal] = useState(false)
    const [datos, setDatos] = useState({})

    // Query
    const {data, loading, error, refetch} = useQuery(OBTENER_CHARACTER, { variables: {id} })

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h1>`${error.message}`</h1>
    }

    // Function View
    const view = () => {
        refetch()
        setDatos(data)
        setModal(true)
    }

    return (
        <Fragment key={id}>
            <DivItems>
                <DivImage>
                    <ImageData src={image} />
                </DivImage>
                <DivTxt>
                    <Span>{name}</Span>
                    <br />
                    <ButtonView onClick={() => view()}>View</ButtonView>
                </DivTxt>
            </DivItems>

            <PageView modal={modal} hide={() => setModal(false)} datos={datos} />
        </Fragment>
    );
}
 
export default PageItems;