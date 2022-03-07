import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiGit,
} from 'react-icons/di';
import {
	SiPytorch,
	SiTensorflow,
	SiFirebase,
} from 'react-icons/si';

import {
	SiNextDotJs,
	SiMaterialUi,
	SiRedux,
	SiCss3,
	SiHtml5,
} from 'react-icons/si';

function Techstack() {
	return (
		<Row
			style={{
				justifyContent: 'center',
				paddingBottom: '50px',
			}}>
			<Col xs={4} md={2} className='tech-icons'>
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiReact />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiNextDotJs />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiRedux />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiMaterialUi />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiHtml5 />
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<SiCss3 />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiTensorflow />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiGit />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiFirebase />
			</Col>
		</Row>
	);
}

export default Techstack;
