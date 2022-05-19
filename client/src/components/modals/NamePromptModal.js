import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import store from '../../state/engine'
import { useDispatch } from 'react-redux'
import { setPlayerName, setIsAdmin } from '../../state/engine'
import CoreCode from '../../CoreCode'
import { useNavigate } from 'react-router-dom'
import io from "socket.io-client";
import { showHideModal } from "../../state/engine"

export default function NamePromptModal() {    
    const [checked, setChecked] = useState(true); 
    const dispatch = useDispatch()    

    let navigate = useNavigate()    

    const startup = () => {
        if (!store.getState().modals.isAdmin &&
        (store.getState().playerInfo.name == null ||
        store.getState().playerInfo.name.trim() === "" ||
        store.getState().playerInfo.name.length === 1)
        ) {
        return;
        }

        store.dispatch(showHideModal("namePrompt", false));
        CoreCode.io = io(`http://${CoreCode.serverIP}:8000`);

        if (store.getState().modals.isAdmin) {
            CoreCode.io.on("connected", function() { 
                console.log("ADMIN CONNECTED"); 
                console.log(store.getState().modals.isAdmin)
                store.dispatch(showHideModal("admin", true));
                navigate("/")                
            });
            CoreCode.io.on("adminMessage", CoreCode.adminMessage);            
        } else {
            CoreCode.io.on("connected", CoreCode.connected);
            CoreCode.io.on("validatePlayer", CoreCode.validatePlayer);
            CoreCode.io.on("newGame", CoreCode.newGame);
            CoreCode.io.on("nextQuestion", CoreCode.nextQuestion);
            CoreCode.io.on("answerOutcome", CoreCode.answerOutcome);
            CoreCode.io.on("endGame", CoreCode.endGame);
        }
    }

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

                            startup();
                        }}>
                            Submit
                        </Button>
                    </Form>                    
                </Modal.Body>            
            </Modal>            
        </div>        
    )
}