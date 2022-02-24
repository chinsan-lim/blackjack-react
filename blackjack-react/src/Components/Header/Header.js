import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header(props) {
	return (
		<Navbar bg='dark'>
			<Container>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<Nav.Link as={Link} to='/howtoplay' className='text-warning'>
							How to Play
						</Nav.Link>
						<Nav.Link as={Link} to='#' className='text-warning'>
							New Game
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
