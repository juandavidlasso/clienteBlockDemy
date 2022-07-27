import React from 'react';
import { HeaderDiv, Image } from './styles'
import logo from './images/logo.png'

const Header = () => {
    return (
        <HeaderDiv>
            <Image src={logo} />
        </HeaderDiv>
    );
}
 
export default Header;