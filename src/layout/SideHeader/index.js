import React from 'react';
import './sideHeader.scss';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../global/constant';
import Logo from '../../images/logo.png';

const index = () => {
	return (
		<div id="sideHeader">
			<div className="container setPadding">
				<div>
					<a class="navbar-brand mt-2 setPadding setBottom" href="#">
						<img src={Logo} height="35px" alt=""></img>
					</a>
				</div>
				<button className="registerButton">Register patient +</button>
				<div className="headText setPadding">
					<NavLink className="navlink" to={APP_ROUTES.ROUTE_CHART}>
						Chart Screen
					</NavLink>
				</div>
				<div className="headText setPadding">
					<NavLink className="navlink" to={APP_ROUTES.ROUTE_HOME}>
						Product List
					</NavLink>
				</div>
				<div className="headText setPadding">Patients</div>
				<div className="headText setPadding">Department</div>
				<div className="headText setPadding">History</div>
			</div>
		</div>
	);
};

export default index;
