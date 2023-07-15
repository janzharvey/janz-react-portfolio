import "./styles/home.css";
import "./styles/styles.css";

import { AiOutlineHome, AiOutlineUser, AiOutlineFileText, AiOutlineAppstore, 
    AiOutlineLinkedin, AiOutlineGithub, AiOutlineSend } from "react-icons/ai";
import {  FiSend, FiArrowDown } from "react-icons/fi";
import { TiTimes } from "react-icons/ti";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CgMouse } from "react-icons/cg";
import { BsFolderPlus } from "react-icons/bs";
import React, { useRef, useEffect } from 'react';
import home_image from './img/home-profile.png';



function Home() {
  
    function scrollHeader(){
      const nav = document.getElementById('header')

      if(this.scrollY >= 80){
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);
  

    const navMenuRef = useRef(null);
    const navToggleRef = useRef(null);
    const navCloseRef = useRef(null);
  
    useEffect(() => {
      const navMenu = navMenuRef.current;
      const navToggle = navToggleRef.current;
      const navClose = navCloseRef.current;
  
      if (navToggle) {
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
        });
      }
  
      if (navClose) {
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
        });
      }
  
      return () => {
        if (navToggle) {
          navToggle.removeEventListener('click', () => {
            navMenu.classList.add('show-menu');
          });
        }
  
        if (navClose) {
          navClose.removeEventListener('click', () => {
            navMenu.classList.remove('show-menu');
          });
        }
      };
    }, [navMenuRef, navToggleRef, navCloseRef]);
  
  const handleLinkClick = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
  }

  


    return(
        <div>
           
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#home" className="nav_logo">Janz</a>
                    <div className="nav_menu" id="nav-menu" ref={navMenuRef}>
                        <ul className="nav_list grid">
                            <li className="nav_item">
                                <a href="#home" className="nav_link" onClick={handleLinkClick}>
                                    <i className="nav_icon"><AiOutlineHome/></i>Home
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#about" className="nav_link" onClick={handleLinkClick}>
                                <i className="nav_icon"><AiOutlineUser/></i>About
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#skills" className="nav_link" onClick={handleLinkClick}>
                                <i className="nav_icon"><AiOutlineFileText/></i>Skills
                                </a>
                             </li>
                             <li className="nav_item">
                                <a href="#projects" className="nav_link" onClick={handleLinkClick}>
                                <i className="nav_icon"> <BsFolderPlus/></i>Projects
                                </a>
                             </li>
                            <li className="nav_item">
                                <a href="#contact" className="nav_link" onClick={handleLinkClick}>
                                <i className="nav_icon"><FiSend/></i>Contact Me
                                </a>
                            </li>                         
                        </ul>
                        <i className="nav_close" id="nav-close" ref={navCloseRef}><TiTimes/></i>
                    </div>
                    <div className="nav_btns">
                        <div className="nav_toggle" id="nav-toggle" ref={navToggleRef}>                        
                            <AiOutlineAppstore/>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="main">
                <section className="home section" id="home">
                    <div className="home_container container grid">
                        <div className="home_content grid">
                            <div className="home_social">
                                <a href="https://www.linkedin.com/in/janzharvey/" target="_blank" rel="noreferrer"  className="home_social-icon">
                                    <AiOutlineLinkedin/>
                                </a>
                                <a href="https://github.com/janzharvey" target="_blank" rel="noreferrer"  className="home_social-icon">
                                    <AiOutlineGithub/>
                                </a>
                                <a href="mailto:janzharveyortega.personal@gmail.com"  className="home_social-icon">
                                    <HiOutlineMailOpen/>
                                </a>
                            </div>

                            <div className="home_img">
                              <img src={home_image} alt=""/>                                                      
                            </div>

                            <div className="home_data">
                              <h1 className="home_title">Hi, I'm Janz</h1>
                              <h3 className="home_subtitle">Developer</h3>
                              <p className="home_description">Entry-level in web design and mobile application development knowledge, producing quality work.</p>
                              <a href="#contact" className="button button--flex">
                                Contact Me <i className="button_icon"><AiOutlineSend/></i>
                              </a>
                              
                            </div>

                            <div className="home_scroll">
                              <a href="#about" className="home_scroll-button button--flex"> 
                                <i className="home_scroll-mouse"><CgMouse/></i>
                                <span className="home_scroll-name">Scroll Down</span>
                                <i className="home_scroll-arrow-down home_scroll-arrow"><FiArrowDown/></i>
                              </a>
                            </div>
                        </div>
                    </div>
                </section>        
            </main>      
    </div>
    )
}

export default Home;