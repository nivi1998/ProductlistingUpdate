import React, { useState } from 'react';
import { USER_LOGOUT } from '../../redux/features/login';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../global/constant';
import UserIcon from '../../images/userIcon.png';
import BellIcon from '../../images/bell.png';
import Logo from '../../images/logo.png';
import './Header.scss';

const Header = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('topnav');

	const logout = () => {
		dispatch(USER_LOGOUT(false));
	};

	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<img src={Logo} height="30px" alt=""></img>
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0 hideList">
							<button className="registerButtonHeader">
								Register patient +
							</button>
							<li class="nav-item">
								<NavLink
									className="navlink fontColor"
									to={APP_ROUTES.ROUTE_CHART}
								>
									Chart Screen
								</NavLink>
							</li>
							<li class="nav-item">
								<NavLink
									className="navlink fontColor"
									to={APP_ROUTES.ROUTE_HOME}
								>
									Product List
								</NavLink>
							</li>

							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Patients
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Department
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									History
								</a>
							</li>
						</ul>
						<div className="menuHeader">
							<form class="d-flex">
								<input
									class="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
							</form>

							{/* <div
								className="logout headText"
								onClick={() => {
									logout();
								}}
							>
								Logout
							</div> */}
							<div className="notification">
								<img
									className="marginTop"
									src={BellIcon}
									height="20px"
									alt=""
								></img>
								<img src={UserIcon} height="40px" alt=""></img>
								{/* <span className="fontColor ml-1">Emma Kwan</span> */}
								<span class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Emma Kwan
									</a>
									<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
										<li
											className="logout headText"
											onClick={() => {
												logout();
											}}
										>
											<a class="dropdown-item" href="#">
												Logout
											</a>
										</li>
									</ul>
								</span>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
