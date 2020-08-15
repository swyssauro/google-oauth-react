import React from 'react';
import GoogleBtn from '../GoogleBtn';
import './styles.css';
export default function Googleform() {
    return (
        <div className="backjlong">
            <div className="modal-info">
                <h1 className="tittle-bols">Login</h1>
                <h3 className="description-bols">Mollis massa consectetur augue metus vivamus sed, <br /> rutrum venenatis pharetra congue </h3>
            </div>
            <br />
            <div className="container">
                <div className="card">
                    <GoogleBtn />
                </div>
            </div>
        </div>
    );
}  