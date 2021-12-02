import React from 'react'
import Logo from "./logo";
import "./logo.scss";
import ReactLogo from "../../assets/tech-logos/React"
import NodeJSLogo from '../../assets/tech-logos/NodeJS';
import SCSSLogo from '../../assets/tech-logos/SCSS';
import JSLogo from '../../assets/tech-logos/JS';
import TSLogo from '../../assets/tech-logos/TS';
import CLogo from '../../assets/tech-logos/C';
import PythonLogo from '../../assets/tech-logos/Python';
import GitLogo from '../../assets/tech-logos/Git';
import ShellLogo from '../../assets/tech-logos/Shell';
import LinuxLogo from '../../assets/tech-logos/Linux';
import MongoLogo from '../../assets/tech-logos/MongoDB';
import ExpressLogo from '../../assets/tech-logos/Express';
import SQLLogo from '../../assets/tech-logos/SQL';

const AllLogos = () => {
    return (
        <div id='about-techs'>
            <div className='about-techs-item' id='about-techs-langs'>
                <Logo text="JavaScript">
                    <JSLogo />
                </Logo>
                <Logo text="TypeScript">
                    <TSLogo />
                </Logo>
                <Logo text="C">
                    <CLogo />
                </Logo>
                <Logo text="Python">
                    <PythonLogo />
                </Logo>
            </div>
            <div className='about-techs-item' id='about-techs-frameworks'>
                <Logo text="ReactJS">
                    <ReactLogo />
                </Logo>
                <Logo text="SCSS">
                    <SCSSLogo />
                </Logo>
                <Logo text="NodeJS">
                    <NodeJSLogo />
                </Logo>
                <Logo text="express.js">
                    <ExpressLogo />
                </Logo>
            </div>
            <div className='about-techs-item' id='about-techs-other'>
                <Logo text="SQL">
                    <SQLLogo />
                </Logo>
                <Logo text="MongoDB">
                    <MongoLogo />
                </Logo>
                <Logo text="Linux">
                    <LinuxLogo />
                </Logo>
                <Logo text="Shell scripting">
                    <ShellLogo />
                </Logo>
                <Logo text="Git">
                    <GitLogo />
                </Logo>
            </div>
        </div>
    );
}

export default AllLogos;