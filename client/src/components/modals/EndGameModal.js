import React from 'react'
import { Modal, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CoreCode from '../../CoreCode'

export default function EndGameModal() {     
    CoreCode.navigate = useNavigate()

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