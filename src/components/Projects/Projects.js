/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import Netflex from '../../Assets/Projects/Netflex.png';
import Mapty from '../../Assets/Projects/Mapty.png';
import EgyptLaptop from '../../Assets/Projects/EgyptLaptop.png';
import Amazon from '../../Assets/Projects/Amazon.png';
import DrugStore from '../../Assets/Projects/DrugStore.png';
import Forkify from '../../Assets/Projects/Forkify.png';

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent{' '}
					<strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{
						justifyContent: 'center',
						paddingBottom: '10px',
					}}>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={EgyptLaptop}
							isBlog={false}
							title='Egypt Laptop'
							description='creating Ecommerce website with all features you want like dashboard and cart and profile for each user and admin has features like collect income for each month and see it in chart and add new product and see all orders maked and users details , (used React and Next js for routing and firebase for auth and database , used chart js-2 for chart and chakra ui for design).'
							link='https://mobile-shop-qfhj4w52g-hossamhelmyy.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={DrugStore}
							isBlog={false}
							title='Al madina pharmacy'
							description='creating Real Freelancing project has features like cart , admin has features like add new product and delete product and he recived orders on whatsapp with all details of the products and the user , (used React and Next js for routing and firebase for auth and database , used chakra ui for design).'
							link='https://drug-store-ebon.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Amazon}
							isBlog={false}
							title='Amazon Clone'
							description='Creating Amazon clone using Next and React with cart feature and product details page and use firebase for store Database details used (firebase for auth and database , material ui for design).'
							link='https://amazonappclone-2498a0n1j-hossamhelmyy.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Forkify}
							isBlog={false}
							title='Forkify'
							description='Create online Recpie website to search for new recipe you want to make and you can create your own recipe and publish it , (used js modules and es6 classes) '
							link='https://forkify-app-ten.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Mapty}
							isBlog={false}
							title='Mapty'
							description='creating an app it collect the distance you take and store it (used js classes).'
							link='https://hossamhelmyy.github.io/Mapty/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Netflex}
							isBlog={false}
							title='Netflex Clone'
							description='creating Netflex clone with auth and search features (used firebase for auth and data base , (used redux for state mangement).'
							link='https://netflexx.vercel.app/'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
