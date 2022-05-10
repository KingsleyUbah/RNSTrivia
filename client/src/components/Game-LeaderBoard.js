import React from 'react'
import listData from '../test'
import { Card } from 'react-bootstrap'

export default function GameLeaderboard() {
    
    return(
        <div>            
            <h1 style={{ textAlign: 'left', marginBottom: '30px' }}>Current Leaderboard</h1>
            
            <Card style={{ textAlign: 'left', marginBottom: '30px', width: '60rem' }}>            
                <Card.Body>     
                    <ul style={{ listStyle: 'none' }}>
                        {listData.map((item, i) => {
                            return (
                                <li key={i} style={{ marginBottom: '10px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 'bold' }}>{item.playerName} {item.playerID === 577342 ? "(YOU)" : ""}</span>
                                        <span style={{ fontWeight: 'bold' }}>{item.points} points</span>
                                    </div>
                            </li>
                            )
                        })}
                    </ul>                               
                </Card.Body>
            </Card>          
           <h1 style={{ textAlign: 'left', color: 'red'}}>Awaiting Question</h1>
        </div>
    )
}