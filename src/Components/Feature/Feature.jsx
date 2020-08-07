import React from 'react';
import { Card, Button} from 'react-bootstrap';
import styles from './Feature.module.css'; 
import agreements from '../../assets/agreements.svg';
import contract from '../../assets/contract.svg';
import payments from '../../assets/payments.svg';
import secure from '../../assets/secure.svg';

export const Feature = () => {
	
	return (
		<div className={styles.featurebg}>
			<center><h1 className="display-2" >Features</h1></center>
			<div className={styles.maincards1}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={payments} />
					<Card.Body>
						<Card.Title>Central Authority</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>						
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={agreements} />
					<Card.Body>
						<Card.Title>Decentralized Network</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>						
					</Card.Body>
				</Card>
			</div>
			<br />
			<div className={styles.maincards2}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={contract} />
					<Card.Body>
						<Card.Title>Smart Contract</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>						
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={secure} />
					<Card.Body>
						<Card.Title>Data Safety</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	)
}