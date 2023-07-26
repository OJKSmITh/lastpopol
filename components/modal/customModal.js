import React, {useEffect, useState} from 'react';
import Modal from "react-modal"

export const Custom = (props) => {
    const { isOpen = false, content, onClose, width, height} = props
    useEffect(() => {
      if (typeof window !== "undefined") {
        Modal.setAppElement("body")
      }
    }, [])
    const handleClose = () => {
      if (onClose) {
        onClose(false)
      }
    }
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          content: {
            width: `${width}px`,
            height: `${height}px`,
            top: "50%",
            left:"50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "20px",
            backgroundColor: "rgba(255, 255, 255)",
            border: "none",
            overflow:"hidden",
            padding:"0"
          },
          overlay: {
            backgroundColor: "rgba(38, 37, 37, 0.75)",
            // backgroundColor: 'rgba(0, 0, 0, 0)',
          },
        }}
      >
        {content}
      </Modal>
    )
  }
  