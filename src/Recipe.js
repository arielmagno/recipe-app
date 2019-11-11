import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck'
import { ListGroup, ListGroupItem } from 'reactstrap';


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <React.Fragment>
            <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Card style={{ width: '100%', flex: 1 }} >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        <Card.Text>
                            Calories: {calories}
                        </Card.Text>
                        <ListGroup>
                            {ingredients.map(ingredient => (<ListGroupItem>{ingredient.text}</ListGroupItem>))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br />
        </React.Fragment>
    )
}

export default Recipe
