import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function AdminModal() {
    return(
        <div>            
            <Modal
            show={true}            
            backdrop="static"
            keyboard={false}
            centered
            >                           
                <Modal.Body>
                    <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                     New Game
                    </Button>
                    <Button variant="secondary" size="lg">
                        Next Question
                    </Button>
                    <Button variant="danger" size="lg">
                        End Game
                    </Button>
                    </div>   

                    <div style={{marginTop: 15, color: 'gray'}}>
                        Current Status: active             
                    </div>                    
                </Modal.Body>            
            </Modal>            
        </div>        
    )
}