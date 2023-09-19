import React, { useState, useEffect } from 'react';
import './Footer.css';
import imglogo from '../../assets/fiorosea2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

  return (
        <div className='wrapper'>
        <div className='container-footer'>
            <div className='row1'>
                <img src={imglogo} alt="" />
                <p>The best marketplace on eth to buy, trade and sell non-fungible tokens (NFTs). Chat on chain with buyers/sellers, launch a project with our launchpad or just explore.</p>
            </div>
            <div className='row2'>
                <div className='row2-1'>
                    <h2>Explore</h2>
                    <ul>
                        <li>DeGod</li>
                        <li>Mirascape</li>
                        <li>Tower</li>
                    
                    </ul>
                </div>
                <div className='row2-2'>
                    <h2>Owner</h2>
                    <p>Fiorotto, Leandro</p>

                </div>
            </div>
        </div>
        <div className='social-icons'>
                <h3>Follow us on our social networks</h3>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>

        </div>

        </div>
      

  );
}

export default Footer;
