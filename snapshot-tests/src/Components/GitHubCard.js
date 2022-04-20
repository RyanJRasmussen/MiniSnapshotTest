import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headshot from "../images/Headshot.jpeg"

function GitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Headshot} />
        <Card.Body>
            <Card.Title>Github Username: RyanJRasmussen</Card.Title>
            <Card.Text>
                Gamer, musician, software dev
            </Card.Text>

        </Card.Body>
        </Card>
    )
}

export default GitHubCard;