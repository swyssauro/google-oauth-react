import React from 'react';
import './styles.css';
import { Img } from 'react-image';

import { history } from '../../history.js';

import { FiKey, FiInfo, FiXCircle} from 'react-icons/fi';

const name_g = localStorage.getItem('name');
const avatar_g = localStorage.getItem('avatar');
const GithubLink = "https://github.com/swyssauro";

export default function Navbar() {

    function handleLogout() {
        localStorage.clear();
        history.push('/');
        history.go();
    }

    return (
        <>
            <div className="navbar">
                <div className="nav">
                    <a href="/"><FiKey className="igithub" size="30" color="#fff" /></a>
                    <h3>why, <br /><b>{name_g}</b></h3>
                    <a href='/' target="_blank" rel="noopener noreferrer"><h3 className="name-c">{name_g}</h3></a>
                    <Img src={avatar_g} className="avatar-google" unloader={<img  className="avatar-google" src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png' alt="img"/>} />
                    <hr />
                    <b onClick={handleLogout} target="_blank" rel="noopener noreferrer"><FiXCircle className="iinfo pointer-clicker" size="20" color="#ff5c5c" /></b>
                    <a href={GithubLink} target="_blank" rel="noopener noreferrer"><FiInfo className="iinfo" size="20" color="#fff" /></a>
                </div>
            </div>
        </>
    );
}