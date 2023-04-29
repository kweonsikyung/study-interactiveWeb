import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ isShowing, hide, message }) =>
  isShowing
    ? ReactDOM.createPortal(
        <OutSide>
          <ModalLayOut>
            <div>
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p>저는 {message}입니다.</p>
          </ModalLayOut>
        </OutSide>,
        document.body
      )
    : null;

export default Modal;

const OutSide = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalLayOut = styled.div`
  padding: 20px;
  width: 200px;
  height: 100px;
  margin: auto;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5%;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
`;
