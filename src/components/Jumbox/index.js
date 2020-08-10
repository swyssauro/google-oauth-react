import React from 'react';
import './styles.css';
import { FiInfo, FiStar } from 'react-icons/fi';

export default function Jumbox() {
    return (
        <div className="backjlong">
            <div className="modal-info">
                <h1 className="tittle-bols">Explore</h1>
                <h3 className="description-bols">Mollis massa consectetur augue metus vivamus sed, <br /> rutrum venenatis pharetra congue </h3>
            </div>
            <br />
            <div className="container">
                <div className="card">
                    <h1 className="tittle">Prime</h1>
                    <h3 className="description">Mollis massa consectetur augue metus</h3>
                    <div className="info-card">
                        <h3 className="creator"><FiStar className="stars active" size="13" /><FiStar className="stars" size="13" /></h3>
                        <a href="/"> <FiInfo color="#8f9294" /> </a>
                    </div>
                </div>

                <div className="card">
                    <h1 className="tittle">Prime</h1>
                    <h3 className="description">Mollis massa consectetur augue metus</h3>
                    <div className="info-card">
                        <h3 className="creator"><FiStar className="stars active" size="13" /><FiStar className="stars" size="13" /></h3>
                        <a href="/"> <FiInfo color="#8f9294" /> </a>
                    </div>
                </div>

                <div className="card">
                    <h1 className="tittle">Prime</h1>
                    <h3 className="description">Mollis massa consectetur augue metus</h3>
                    <div className="info-card">
                        <h3 className="creator"><FiStar className="stars active" size="13" /><FiStar className="stars" size="13" /></h3>
                        <a href="/"> <FiInfo color="#8f9294" /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}  