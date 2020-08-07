import React, { useState } from 'react';
import { Card, Button} from 'react-bootstrap';
import styles from './Feature.module.css'; 

export const Feature = () => {
	
	return (
		<div className={styles.featurebg}>
			<center><h1 className="display-2" >Features</h1></center>
			<div className={styles.maincards1}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
			<br />
			<div className={styles.maincards2}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
	)
}