import React, { useState } from 'react'
import question from '../test-question'
import { Button } from 'react-bootstrap'
import { answerButtonHighlight } from '../../state/engine'
import { useSelector, useDispatch } from 'react-redux'

export default function GameQuestion() {  
    const listData = useSelector(state => state.modals.leaderboard.listData)
    const dispatch = useDispatch()
    const [choice, setChoice] = useState(0)

    return(
        <>
            <h1 style={{ textAlign: 'center', color: 'red', marginBottom: '50px'}}>{question.question}</h1>

            <div className="d-grid gap-3" style={{ marginBottom: '50px'}}>
                <Button 
                    variant={ choice === 1 ? 'danger' : 'primary'} 
                    size="lg" 
                    onClick={() => {
                        setChoice(1)
                        dispatch(answerButtonHighlight(0))
                    }}>
                    {question.decoys[0]}
                </Button>
                <Button 
                    variant={ choice === 2 ? 'danger' : 'primary'} 
                    size="lg" 
                    onClick={() => {
                        setChoice(2)
                        dispatch(answerButtonHighlight(1))
                    }}>
                    {question.decoys[1]}
                </Button>
                <Button 
                    variant={ choice === 3 ? 'danger' : 'primary'} 
                    size="lg" 
                    onClick={() => {
                        setChoice(3)
                        dispatch(answerButtonHighlight(2))
                    }}>
                    {question.decoys[2]}
                </Button>
                <Button 
                    variant={ choice === 4 ? 'danger' : 'primary'} 
                    size="lg" 
                    onClick={() => {
                        setChoice(4)
                        dispatch(answerButtonHighlight(3))
                    }}>
                    {question.decoys[3]}
                </Button>
                <Button 
                    variant={ choice === 5 ? 'danger' : 'primary'} 
                    size="lg" 
                    onClick={() => {
                        setChoice(5)
                        dispatch(answerButtonHighlight(4))
                    }}>
                    {question.decoys[4]}
                </Button>
                <Button 
                    variant={ choice === 6 ? 'danger' : 'primary'} 
                    size="lg" 
                    onClick={() => {
                        setChoice(6)
                        dispatch(answerButtonHighlight(5))
                    }}>
                    {question.decoys[5]}
                </Button>
            </div>   

            <div className="d-grid gap-2">
                <Button 
                    variant="success" size="lg"
                    onClick={() => {
                        if (store.getState().question.selectedAnswer === -1) {
                                alert("D'oh! Please select an answer");
                        } else {
                            CoreCode.io.emit("submitAnswer", {
                            playerID : store.getState().playerInfo.id,
                            answer : store.getState().question.answerButtonLabels[
                                store.getState().question.selectedAnswer
                            ]
                        });
                    }}}
                >                  
                    Submit                 
                </Button>
            </div>
        </>
    );
}