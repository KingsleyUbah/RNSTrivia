import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import store from '../../state/engine'
import { useDispatch } from 'react-redux'
import { setPlayerName, setIsAdmin } from '../../state/engine'
import CoreCode from '../../CoreCode'

export default function NamePromptModal() {
    const [checked, setChecked] = useState(true); 
    const dispatch = useDispatch()    

    return(
        <div>            
            <Modal
            show={true}            
            backdrop="static"
            keyboard={false}
            centered
            >        

                <Modal.Header>
                    <Modal.Title>Join RNTrivia</Modal.Title>
                </Modal.Header>    
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="eg. UbahTheBuilder" 
                                onChange={(event) => {                                    
                                    dispatch(setPlayerName(event.target.value))
                                    console.log(JSON.stringify(store.getState()))
                                }}                                
                            />
                            <Form.Text className="text-muted">
                            This is the name that you'll be recognized by in the game
                            </Form.Text>
                        </Form.Group>                        
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label="I am the admin"
                                onChange={() => {                                    
                                    setChecked(!checked); 
                                    dispatch(setIsAdmin(checked))
                                    console.log(checked)
                                    console.log(JSON.stringify(store.getState()))
                                }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => {
                            e.preventDefault();

                            CoreCode.startup();
                        }}>
                            Submit
                        </Button>
                    </Form>                    
                </Modal.Body>            
            </Modal>            
        </div>        
    )
}