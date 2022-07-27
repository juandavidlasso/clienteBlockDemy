import React, { Fragment, useEffect } from 'react';
import PageItems from './PageItems';
import {
    ModalBlock,
    ModalBody,
    ModalClose,
    ModalContainer,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
    Button,
    BodyHistory
  } from './styles'

const PageMenu = ({ active, setActive, hideModal, arrayData, setArrayData, data, load }) => {

    useEffect(() => {
        if (load === true) {
            const exists = arrayData.find( (dato) => dato.characters.id === data.characters.id)
            if (exists === undefined) {
                setArrayData([...arrayData, data])   
            }
        }
    }, [data])

    return (
        <Fragment>
            {active && (
                <ModalBlock>
                    <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
                    <ModalContainer>
                        <ModalHeader>
                            <ModalTitle>History</ModalTitle>
                            <ModalClose onClick={() => hideModal()}>X</ModalClose>
                        </ModalHeader>
                        <ModalBody>
                            {arrayData.length === 0 ?
                                <BodyHistory>
                                    There aren't data
                                </BodyHistory>
                            :
                                <BodyHistory>
                                    {arrayData.map( (dataRick, index) => (
                                        <PageItems key={index} dataRick={dataRick} />
                                    ))}
                                </BodyHistory>
                            }
                            </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => setActive(false)}>Close</Button>
                        </ModalFooter>
                    </ModalContainer>
                </ModalBlock>
            )}
        </Fragment>
    );
}
 
export default PageMenu;