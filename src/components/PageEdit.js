import React, { Fragment } from 'react';
import {ModalBlockEdit,
    ModalBodyEdit,
    ModalCloseEdit,
    ModalContainerEdit,
    ModalHeaderEdit,
    ModalOverlayEdit,
    ModalTitleEdit } from '../components/styles'
import PageUpdate from './PageUpdate'


const PageEdit = ({active, hideModal, dataCharacter}) => {

    return (
        <Fragment>
            {active && (
                <ModalBlockEdit>
                    <ModalOverlayEdit onClick={() => hideModal()}></ModalOverlayEdit>
                    <ModalContainerEdit>
                        <ModalHeaderEdit>
                            <ModalTitleEdit>Edit Character</ModalTitleEdit>
                            <ModalCloseEdit onClick={() => hideModal()}>X</ModalCloseEdit>
                        </ModalHeaderEdit>
                        <ModalBodyEdit>
                            <PageUpdate dataCharacter={dataCharacter} hideModal={hideModal} />
                        </ModalBodyEdit>
                    </ModalContainerEdit>
                </ModalBlockEdit>
            )}
        </Fragment>
    );
}
 
export default PageEdit;