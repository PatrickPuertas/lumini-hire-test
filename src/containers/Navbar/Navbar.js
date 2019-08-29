import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navigation sidebar-left main-nav fixed-top">
                <div class="container">
                    <button class="navbar-toggler" type="button">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#main" class="navbar-brand">
                        <img src="img/logo-light.png" alt="CompIAnce" class="logo logo-sticky d-block d-md-none"/>
                            <img src="img/logo.png" alt="CompIAnce" class="logo d-none d-md-block"/>
                                {/* <img src="img/logo.png" alt="CompIAnce" class="logo logo-sticky"/> */}
			</a>
                                <div class="collapse navbar-collapse ml-auto">
                                    <div class="sidebar-brand">
                                        <a href="#main">
                                            <img src="img/logo.png" alt="CompIAnce" class="logo"/>
					</a>
				</div>
                                        <ul class="nav navbar-nav ml-auto">
                                            <li class="nav-item">
                                                <a class="nav-link" href="#main">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#pricing">Preços</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#about">Sobre a CompIAnce</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#whyChoose">Porque a CompIAnce</a>
                                            </li>
                                        </ul>
                                        <span class="navbar-divider"></span>
                                        <nav class="nav navbar-nav ml-md-auto justify-content-center mt-4 mt-md-0 flex-row">
                                            <a class="btn btn-rounded btn-outline mr-3 px-3" target="_blank">
                                                <i class="fas fa-sign-in-alt d-none d-md-inline mr-md-0 mr-lg-2"></i>
                                                <span class="d-md-none d-lg-inline">Login</span>
                                            </a>
                                            <a class="btn btn-rounded btn-1 px-3" target="_blank">
                                                <i class="fas fa-user-plus d-none d-md-inline mr-md-0 mr-lg-2"></i>
                                                <span class="d-md-none d-lg-inline">Signup</span>
                                            </a>
                                        </nav>
                                    </div>
                                </div>
	                        </nav>
                            );
                        }
                    }
                    
export default Navbar;