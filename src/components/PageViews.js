import React, { Fragment } from 'react';
import { DivView, LabelView } from '../components/styles'

const PageViews = ({datos}) => {

    const {gender, name, species, status, type} = datos.character

    return (
        <Fragment>
            <DivView>
                <LabelView>Name:</LabelView>
                <span>{name ? name : 'unknown'}</span>
            </DivView>
            <DivView>
                <LabelView>Status:</LabelView>
                <span>{status ? status : 'unknown' }</span>
            </DivView>
            <DivView>
                <LabelView>Species:</LabelView>
                <span>{species ? species : 'unknown'}</span>
            </DivView>
            <DivView>
                <LabelView>Type:</LabelView>
                <span>{type ? type : 'unknown'}</span>
            </DivView>
            <DivView>
                <LabelView>Gender:</LabelView>
                <span>{gender ? gender : 'unknown'}</span>
            </DivView>
        </Fragment>
    );
}
 
export default PageViews;