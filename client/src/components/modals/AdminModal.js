import React from 'react'
import { Modal, Badge, Button } from 'react-bootstrap'
import CoreCode from '../../CoreCode'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AdminModal() {
    const currentStatus = useSelector(state => state.modals.currentStatus)    
    CoreCode.navigate = useNavigate()

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
                    <Button 
                        variant="primary" 
                        size="lg" 
                        onClick={(e) => {                        
                            CoreCode.io.emit("adminNewGame", {});
                        }}>
                     New Game
                    </Button>
                    <Button 
                        variant="secondary" 
                        size="lg"
                        onClick={(e) => {                           
                            CoreCode.io.emit("adminNextQuestion", {});
                        }}
                        >
                        Next Question
                    </Button>
                    <Button 
                        variant="danger" 
                        size="lg"
                        onClick={(e) => {                           
                            CoreCode.io.emit("adminEndGame", {});
                        }}
                        >
                        End Game
                    </Button>
                    </div>   

                    <div style={{marginTop: 15, color: 'gray'}}>
                        Current Status: <Badge bg="success">{currentStatus}</Badge>             
                    </div>                    
                </Modal.Body>            
            </Modal>            
        </div>        
    )
}