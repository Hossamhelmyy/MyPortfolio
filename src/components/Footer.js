import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
	AiFillFacebook,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className='footer'>
			<Row>
				<Col md='4' className='footer-copywright'>
					<h3>Designed and Developed by Hossam Helmy</h3>
				</Col>
				<Col md='4' className='footer-copywright'>
					<h3>Copyright © {year} HM</h3>
				</Col>
				<Col md='4' className='footer-body'>
					<ul className='footer-icons'>
						<li className='social-icons'>
							<a
								href='https://github.com/Hossamhelmyy'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillGithub />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://twitter.com/hossamm84479392'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiOutlineTwitter />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://www.linkedin.com/in/hossam-mohamed-helmy-5128b61a1/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedinIn />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://www.facebook.com/hossamhelmyh/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillFacebook />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
