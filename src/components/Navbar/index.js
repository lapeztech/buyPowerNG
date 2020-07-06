import React from 'react';
import './style.css';
import logo from '../../assets/images/logo.png';

function Navbar() {
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <img src={logo} alt="logo" />
                    <a class="navbar-brand" href="#"><img src="./../../assets/images/logo.png" alt="" /></a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Buy Electricity</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Merchant</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">14 Hour Support</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">0908-749-3044</a>
                            </li>
                            <li class="nav-item button">
                                <a class="nav-link" href="#">LOGIN</a>
                            </li>


                        </ul>

                    </div>
                </nav>
            </div>
            <div className="col-md-1"></div>



        </div>
    )
}

export default Navbar
