import React from 'react'
import store from '../state/engine'
import CoreCode from '../CoreCode'
import { Card, Button, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function GameLeaderboard() {
    const listData = useSelector(state => state.leaderboard.listData) 
    CoreCode.navigate = useNavigate()   
    
    return(
        <div>            
            <h1 style={{ textAlign: 'center', color: 'red', marginBottom: '30px' }}>Current Leaderboard</h1>
            
            <Card style={{ textAlign: 'center', marginBottom: '30px', width: '80%' }}>            
                <Card.Body>     
                    <ul style={{ listStyle: 'none' }}>
                        {listData.map((item, i) => {
                            return (
                                <li key={i} style={{ marginBottom: '10px' }}>
                                    <Card
                                        bg="primary"
                                        style={{ width: '100%' }}
                                    >
                                        <Card.Body style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                        <span style={{ fontWeight: 'bold' }}>{item.playerName} {store.getState().playerInfo.id === item.playerID ? "(YOU)" : ""}</span>
                                        <span style={{ fontWeight: 'bold' }}>{item.points} points</span>
                                        </Card.Body>                                        
                                    </Card>
                            </li>
                            )
                        })}
                    </ul>                               
                </Card.Body>
            </Card>          
            <Button variant="primary" size="lg" disabled>
                <Spinner
                as="span"
                animation="grow"
                size="lg"
                role="status"
                aria-hidden="true"
                />
                <span>
                    Awaiting Question...
                </span>
            </Button>
        </div>
    )
}