import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CoreCode from '../CoreCode'


export default function InfoPage() {
    const player = useSelector(state => state.playerInfo)    
    const gameData = useSelector(state => state.gameData)
    CoreCode.navigate = useNavigate()    

    return(
        <>
        <Card style={{ textAlign: 'left', marginBottom: '10px' }}>            
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: 'red' }}>Identification</Card.Title>
                <p><span style={{ fontWeight: 'bold' }}>Player Name</span> <span>{player.name}</span></p>
                <p><span style={{ fontWeight: 'bold' }}>Player ID</span> <span>{player.id}</span></p>                
            </Card.Body>
        </Card>
        <Card style={{ textAlign: 'left' }}>
            <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: 'red' }}>Current Game</Card.Title>
                    <p><span style={{ fontWeight: 'bold' }} >Asked</span> <span>{gameData.asked}</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Answered</span> <span>{gameData.answered}</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Points</span> <span>{gameData.points}</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Right</span> <span>{gameData.right}</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Wrong</span> <span>{gameData.wrong}</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Total Time</span> <span>{gameData.totalTime}</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Slowest</span> <span>{gameData.slowest}</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Fastest</span> <span>{gameData.fastest}</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Average</span> <span>{gameData.average}</span></p>              
            </Card.Body>
        </Card>        
        </>
    )
}