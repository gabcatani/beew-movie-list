import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/beew_logo.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Beew Movies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                    <a href="https://github.com/gabcatani/beew-movie-list" target="_blank">Github</a>
                    </div>
                    <div className="footer__content__menu">
                    <a href="https://www.unoesc.edu.br/" target="_blank">Unoesc</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="https://www.instagram.com/beew_movies/" target="_blank">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
