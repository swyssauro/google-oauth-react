import React from 'react';
import './styles.css';
import { FiKey, FiInfo } from 'react-icons/fi';

const name_g = localStorage.getItem('name');
const avatar_g = localStorage.getItem('avatar');
const GithubLink = "https://github.com/swyssauro/";

export default function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="nav">
                <a href="/"><FiKey className="igithub" size="30" color="#fff" /></a>
                <h3>why, <br /><b>{ name_g }</b></h3>
                <a href='/' target="_blank" rel="noopener noreferrer"><h3 className="name-c">{name_g}</h3></a>
                <img src={ avatar_g } className="avatar-google" alt="avatar" />
                <hr />
                <a href={ GithubLink } target="_blank" rel="noopener noreferrer"><FiInfo className="iinfo" size="20" color="#fff" /></a>
            </div>
        </div>
        </>
    );  
}