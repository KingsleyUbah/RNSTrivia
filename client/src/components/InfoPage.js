import React from 'react'
import { Card } from 'react-bootstrap'


export default function InfoPage() {
    
    return(
        <>
        <Card style={{ textAlign: 'left', marginBottom: '10px' }}>            
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: 'red' }}>Identification</Card.Title>
                <p><span style={{ fontWeight: 'bold' }}>Player Name</span> <span>Kingsley Ubah</span></p>
                <p><span style={{ fontWeight: 'bold' }}>Player ID</span> <span>5614352</span></p>                
            </Card.Body>
        </Card>
        <Card style={{ textAlign: 'left' }}>
            <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', color: 'red' }}>Current Game</Card.Title>
                    <p><span style={{ fontWeight: 'bold' }} >Asked</span> <span>5</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Answered</span> <span>5</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Points</span> <span>35</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Right</span> <span>5</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Wrong</span> <span>0</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Total Time</span> <span>23</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Slowest</span> <span>4</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Fastest</span> <span>2</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Average</span> <span>15.8</span></p>              
            </Card.Body>
        </Card>        
        </>
    )
}