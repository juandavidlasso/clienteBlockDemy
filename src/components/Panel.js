import React, { useState, Fragment } from 'react';
import { Wrapper,
        DivTitulo,
        Titulo,
        DivMenu,
        DivButtonModal,
        DivButtonGenerate,
        DivContentBtnGenerate,
        DivContentBtnModal,
        ButtonGenerate,
        ButtonModal } from './styles'
import PageMenu from './PageMenu'
import Page from './Page'
// Graphql
import { OBTENER_CHARACTERS } from '../apollo/queries'
import { useQuery } from '@apollo/client'

const Panel = () => {

    // State
    const [active, setActive] = useState(false)
    const [load, setLoad] = useState(false)
    const [arrayData, setArrayData] = useState([])
    // Query
    const {data, loading, error, refetch} = useQuery(OBTENER_CHARACTERS)

    if(loading) {
        return null
    }

    if(error) {
        return null
    }

    // Functions
    const click = () => {
        refetch()
        setLoad(true)
    }

    return (
        <Fragment>
            {arrayData.length === 0 ?
                <Wrapper>
                    <DivTitulo>
                        <Titulo>No se ha cargado ningún personaje</Titulo>
                    </DivTitulo>
                </Wrapper> 
                
            :
                <Page data={data} arrayData={arrayData} setArrayData={setArrayData} />   
            }

            <PageMenu
                active={active}
                setActive={setActive}
                hideModal={() => setActive(false)}
                arrayData={arrayData}
                setArrayData={setArrayData}
                data={data}
                load={load}
            />

            <DivMenu>
                <DivButtonModal>
                    <DivContentBtnModal>
                        <ButtonModal onClick={() => setActive(true)}>History</ButtonModal>
                    </DivContentBtnModal>
                </DivButtonModal>
                <DivButtonGenerate>
                    <DivContentBtnGenerate>
                        <ButtonGenerate onClick={() => click()}>
                            <span>Generate</span>
                        </ButtonGenerate>
                    </DivContentBtnGenerate>
                </DivButtonGenerate>
            </DivMenu>
        </Fragment>
    );
}
 
export default Panel;