import React, { Fragment } from 'react';
import {ModalBlockEdit,
    ModalBodyEdit,
    ModalCloseEdit,
    ModalContainerEdit,
    ModalHeaderEdit,
    ModalOverlayEdit,
    ModalTitleEdit, ModalFooter, ButtonEdit } from '../components/styles'
import PageViews from './PageViews'

const PageView = ({modal, hide, datos}) => {

    return (
        <Fragment>
            {modal && (
                <ModalBlockEdit>
                    <ModalOverlayEdit onClick={() => hide()}></ModalOverlayEdit>
                    <ModalContainerEdit>
                        <ModalHeaderEdit>
                            <ModalTitleEdit>View Character</ModalTitleEdit>
                            <ModalCloseEdit onClick={() => hide()}>X</ModalCloseEdit>
                        </ModalHeaderEdit>
                        <ModalBodyEdit>
                            <PageViews datos={datos} />
                        </ModalBodyEdit>
                        <ModalFooter>
                            <ButtonEdit onClick={() => hide()}>Close</ButtonEdit>
                        </ModalFooter>
                    </ModalContainerEdit>
                </ModalBlockEdit>
            )}
        </Fragment>
    );
}
 
export default PageView;