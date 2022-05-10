import React from 'react'
import question from '../test-question'
import { Button } from 'react-bootstrap'

export default function GameQuestion() {    
    return(
        <>
            <h1 style={{ textAlign: 'center', color: 'red', marginBottom: '50px'}}>{question.question}</h1>

            <div className="d-grid gap-3" style={{ marginBottom: '50px'}}>
                <Button variant="primary" size="lg">
                    {question.decoys[0]}
                </Button>
                <Button variant="primary" size="lg">
                    {question.decoys[1]}
                </Button>
                <Button variant="primary" size="lg">
                    {question.decoys[2]}
                </Button>
                <Button variant="primary" size="lg">
                    {question.decoys[3]}
                </Button>
                <Button variant="primary" size="lg">
                    {question.decoys[4]}
                </Button>
                <Button variant="primary" size="lg">
                    {question.decoys[5]}
                </Button>
            </div>   

            <div className="d-grid gap-2">
                <Button variant="success" size="lg">
                    Submit
                </Button>
            </div>
        </>
    );
}