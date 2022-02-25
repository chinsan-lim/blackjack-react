import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './ScoreCard.css';

function ScoreCard(props) {
	return (
		<div className='scorecard d-flex justify-content-center'>
			<div className='p-5'>
				<div className='input-group m-3'>
					<div className='input-group-prepend'>
						<span className='input-group-text' id='inputGroup-sizing-default'>
							Place Your Bet
						</span>
					</div>
					<input
						type='text'
						className='form-control'
						aria-label='bet'
						aria-describedby='inputGroup-sizing-default'
					/>
				<div className='btn-group d-flex justify-content-center'>
					<Button type='submit' size='sm' className='btn-default'>
						Hit
					</Button>
					<Button type='submit' size='sm' className='btn-default'>
						Stand
					</Button>
					<Button type='submit' size='sm' className='btn-default'>
						Redeal
					</Button>
				</div>
				</div>
			</div>
		</div>
	);
}

export default ScoreCard;
