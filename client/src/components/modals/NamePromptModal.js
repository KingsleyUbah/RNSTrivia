import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function NamePromptModal() {
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
                            <Form.Control type="email" placeholder="eg. UbahTheBuilder" />
                            <Form.Text className="text-muted">
                            This is the name that you'll be recognized with
                            </Form.Text>
                        </Form.Group>                        
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label="I am the admin"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>            
            </Modal>            
        </div>        
    )
}