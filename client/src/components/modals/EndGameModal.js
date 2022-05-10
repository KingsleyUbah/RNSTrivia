import React from 'react'
import { Modal, Alert } from 'react-bootstrap'

export default function EndGameModal() { 
    return(
        <Modal
            show={true}            
            backdrop="static"
            keyboard={false}
            centered
            >        

                <Modal.Header>
                    <Modal.Title>Game Over!</Modal.Title>
                </Modal.Header>    
                <Modal.Body>
                    <Alert variant="info">
                        You have a total score of <strong>125</strong>
                    </Alert>
                    <a href="twitter.com">Play again</a>                    
                </Modal.Body>            
        </Modal>
    )
}