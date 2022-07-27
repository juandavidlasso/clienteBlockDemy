import styled, { keyframes } from "styled-components";
// Styles App
export const Contenedor = styled.div`
  width: 100%;
  padding: 0px;
  margin: 0px;
`

// Styles Header
export const HeaderDiv = styled.header`
    background: #000;
    padding: 10px; 
`
export const Image = styled.img`
    width: 10%;
    padding-left: 3%;
`

// Styles Page
export const DivWrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
`
export const DivLeft = styled.div`
    text-align: right;
    padding: 8px;
`
export const ImageRick = styled.img`
    width: 410px;
`
export const DivRight = styled.div`
    padding: 8px;
`
export const DivTable = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
    margin-right: 20%;
    &:last-child {
        border-bottom: none;
    }
`
export const ContentTable = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
    transition: all 0.5s ease 0s;
    border-radius: 0.3rem;
`
export const RowHeader = styled.div`
    border-bottom: 1px solid rgb(236, 237, 239);
    padding: 0.55rem 1.25rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: rgb(255, 255, 255);
`
export const RowBody = styled.div`
    padding: 1.25rem;
    flex: 1 1 auto;
`
export const DivText = styled.div`
    display: flex;
`
export const Hr = styled.hr`
    border: 0.5px solid rgb(236, 237, 239);
`
export const H5 = styled.h5`
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0px;
    color: rgb(31, 38, 45);
`
export const H6 = styled.h6`
    font-size: 0.625rem;
    text-transform: uppercase;
    margin: 4px 0px;
    font-weight: 600;
    color: rgb(111, 115, 122);
`
export const Text = styled.span`
    font-weight: bold;
    margin-right: auto;
`
export const DivButtonModal = styled.div`
    padding: 15px;
`
export const DivButtonGenerate = styled.div`
    padding: 15px;
`
export const DivContentBtnModal = styled.div`
    padding: 15px;
    text-align: left;
`
export const DivContentBtnGenerate = styled.div`
    padding: 15px;
    text-align: right;
`
export const ButtonGenerate = styled.button`
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    border: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.875rem 1rem;
    background: linear-gradient(135deg, rgb(48, 206, 231), rgb(130, 101, 252));
    color: rgb(255, 255, 255);
    margin-right: 9%;
`
export const ButtonModal = styled.button`
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    border: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.875rem 1rem;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 52%, rgba(255,0,0,0.8888597675398284) 100%);
    color: rgb(255, 255, 255);
    margin-left: 9%;
`
export const ButtonEdit = styled.button`
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    border: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.875rem 1rem;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,0.8412407199207808) 0%, rgba(21,121,9,1) 0%, rgba(16,14,153,1) 0%, rgba(8,107,201,1) 48%, rgba(0,212,255,1) 100%);
    color: white;
    margin-top: 10px;
    margin-right: 10px;
    &:hover {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,0.8412407199207808) 0%, rgba(21,121,9,1) 0%, rgba(16,14,153,1) 0%, rgba(8,107,201,1) 0%, rgba(0,212,255,1) 100%);
    }
`
export const ButtonDelete = styled.button`
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    border: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.875rem 1rem;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,0.8412407199207808) 0%, rgba(21,121,9,1) 0%, rgba(16,14,153,1) 0%, rgba(8,107,201,1) 48%, rgba(0,212,255,1) 100%);
    color: white;
    margin-top: 10px;
    &:hover {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,0.8412407199207808) 0%, rgba(21,121,9,1) 0%, rgba(16,14,153,1) 0%, rgba(8,107,201,1) 0%, rgba(0,212,255,1) 100%);
    }
`


// Styles Modal Panel Lateral
export const ModalBlock = styled.div`
    align-items: center;
    bottom: 0;
    justify-content: flex-end;
    left: 0;
    overflow: hidden;
    padding: 0rem;
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    opacity: 1;
    z-index: 400;
`

export const ModalOverlay = styled.a`
    background: rgba(247, 248, 249, 0.75);
    bottom: 0;
    cursor: default;
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`

export const ModalClose = styled.a`
    float: right !important;
    text-decoration: none !important;
    cursor: pointer;
    font-size: 1rem;
`

export const ModalContainer = styled.div`
    background: white;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 250px;
    padding: 0 0.8rem;
    width: 100%;
    animation: slide-down 0.2s ease 1;
    z-index: 1;
    box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`

export const ModalBody = styled.div`
    overflow-y: auto;
    padding: 20px 0px;
    position: relative;
`
export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #303742;
    padding: 20px 5px 10px 5px;
`
export const ModalTitle = styled.span`
    font-size: 30px;
    font-weight: 500;
`
export const ModalFooter = styled.div`
    padding: 10px 0px;
    text-align: right;
`
export const Button = styled.button`
    background: #7b2cbf;
    color: white;
    font-size: 1em;
    margin: 10px;
    padding: 5px 10px;
    border: 2px solid #7b2cbf;
    border-radius: 3px;
    cursor: pointer;
`
export const BodyHistory = styled.div`
    margin-bottom: 5px;
    padding: 1px;
`




// Styles Loading
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 3px solid rgb(244, 208, 63);
  border-right: 3px solid rgb(211, 84, 0);
  border-bottom: 3px solid rgb(52, 152, 219);
  border-left: 3px solid rgb(236, 240, 241);
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`



// Styles Panel
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    padding: 10px;
`
export const DivTitulo = styled.div`
    display: flex;
`
export const Titulo = styled.div`
    width: 100%;
    padding: 70px;
    font-size: 30px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    font-family: Play,sans-serif;
`
export const DivMenu = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`



// Styles Page Items
export const ImageData = styled.img`
    width: 100%;
    border-radius: 7px;
`
export const DivItems = styled.div`
    display: flex;
    border: 2px solid rgb(130, 101, 252);
    margin-bottom: 5px;
    border-radius: 5px;
`
export const DivImage = styled.div`
    width: 50%;
    padding: 2px;
`
export const DivTxt = styled.div`
    width: 50%;
    padding: 2px;
    padding-top: 5%;
    text-align: center;
`
export const Span = styled.span`
    font-size: .8rem;
    font-weight: bold;
`
export const ButtonView = styled.button`
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    font-size: 12px;
    width: max-content;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.625rem 1.25rem;
    border: 1px solid rgb(130, 101, 252);
    color: rgb(130, 101, 252);
    background-color: transparent;
    margin-top: 15%;
    &:hover {
        background: rgb(130, 101, 252);
        color: white;
    }
`



// Styles modal edit
export const ModalBlockEdit = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`

export const ModalOverlayEdit = styled.a`
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const ModalCloseEdit = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
`

export const ModalContainerEdit = styled.div`
  background: #fff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  text-align: center;
`

export const ModalBodyEdit = styled.div`
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
`

export const ModalHeaderEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`

export const ModalTitleEdit = styled.span`
  font-size: 30px;
  font-weight: 500;
  margin: 0 auto;
`

export const ButtonModalEdit = styled.button`
  background: #7b2cbf;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #7b2cbf;
  border-radius: 3px;
  cursor: pointer;
`
export const DivInput = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
`
export const Input = styled.input`
    font-size: 1em;
    border: 2px solid rgb(130, 101, 252);
    border-radius: 3px;
    padding: 6px;
    width: 300px;
`

export const InputSubmit = styled.input`
    background: #7b2cbf;
    color: white;
    font-size: 1em;
    margin: 10px;
    padding: 5px 10px;
    border: 2px solid #7b2cbf;
    border-radius: 3px;
    cursor: pointer;
`


// Styles View
export const DivView = styled.div`
    width: 95%;
    padding: 5px;
    text-align: left;
`
export const LabelView = styled.label`
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 10px;
`
