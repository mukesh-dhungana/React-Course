import React from "react";
import styled, { css } from "styled-components";

const StyledModel = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.show &&
    css`
      display: flex;
    `}
  ${props =>
    !props.show &&
    css`
      display: none;
    `}
`;

const ModalDiv = styled.div`
  background-color: white;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  padding: 30px;
  overflow: hidden;
`;
const Modal = ({ children, title, show, setShow }) => {
  return (
    <StyledModel show={show}>
      <ModalDiv>
        <button onClick={() => setShow(false)}>X</button>
        <h1 style={{ marginTop: 0 }}>{title}</h1>
        {children}
      </ModalDiv>
    </StyledModel>
  );
};

export default Modal;
