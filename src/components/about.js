import "./styles/about.css";
import "./styles/styles.css";
import profile_about from './img/about-profile.png';
import { FiDownload } from "react-icons/fi";
import { FaJava, FaGraduationCap, FaBriefcase, FaCalendarAlt, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoAndroid } from "react-icons/io";
import { TbSql } from "react-icons/tb";
import { SiEclipseide } from "react-icons/si";
import resume from './pdf/CV-JANZ-HARVEY.pdf';
import React, { useRef, useEffect } from 'react';



function About() {    
    const educationMenuRef = useRef(null);
    const workMenuRef = useRef(null);
    const educationToggleRef = useRef(null);
    const workToggleRef = useRef(null);
  
    useEffect(() => {
      const educationMenu = educationMenuRef.current;
      const workMenu = workMenuRef.current;
      const educationToggle = educationToggleRef.current;
      const workToggle = workToggleRef.current;
      const target = document.getElementById('education')
      
  
      if (educationToggle) {
        educationToggle.addEventListener('click', () => {
            educationMenu.classList.add('active');
            workMenu.classList.remove('active');
            
                    
        });
      }
  
      if (workToggle) {
        workToggle.addEventListener('click', () => {
            educationMenu.classList.remove('active');
            target.classList.remove('default');
            workMenu.classList.add('active');
        });
      }
  
      return () => {    
      };
    }, [educationMenuRef, educationToggleRef, workToggleRef]);
  
    

    return( 
        <div>        
            <section className="about section" id="about">
                <h2 className="section_title">About Me</h2>
                <span className="section_subtitle">My Introduction</span>
                <div className="about_container container grid">
                    <img src={profile_about} alt="" className="about_img"/>
                    <div className="about_data">
                        <p className="about_description">
                        An entry-level developer with experience and proficient knowledge in developing interactive web assessment and mobile application.</p>
                        <div className="about_icon-logo">
                                <i className="about_icons javascript">
                                    <IoLogoJavascript/>
                                </i>
                                <i className="about_icons html">
                                   <IoLogoHtml5/>
                                </i>
                                <i className="about_icons css">
                                   <IoLogoCss3/>
                                </i>
                                <i className="about_icons java">
                                   <FaJava/>
                                </i>
                                <i className="about_icons android">
                                   <IoLogoAndroid/>
                                </i>
                                <i className="about_icons eclipse">
                                   <SiEclipseide/>
                                </i>
                                <i className="about_icons sql">
                                   <TbSql/>
                                </i>
                                <i className="about_icons react">
                                   <FaReact/>
                                </i>
                    </div>
                    <div className="about_buttons">
                        <a download="" href={resume} className="button button--flex">
                           Download CV <i className="button_icon"><FiDownload/></i>
                        </a>
                    </div>
                    </div>
                    
                   


                </div>
            </section>  

              {/*============ QUALIFICATION  ============ */}
            <section className="qualification section">
                  <h2 className="section_title">Qualification</h2>
                  <span className="section_subtitle">My personal journey</span>

                  <div className="qualification_container container">
                    <div className="qualification_tabs">
                        
                        <div className="qualification_button button--flex default" ref={educationToggleRef} id="education">
                            <i className="qualification_icon">
                                <FaGraduationCap/>
                            </i> Education                             
                        </div>

                        <div className="qualification_button button--flex" ref={workToggleRef} id="work">
                             <i className="qualification_icon">
                                <FaBriefcase/>
                                
                            </i>
                            Experience                  
                        </div>
                    </div>
                    <div className="qualification_sections" >
                        {/*============ QUALIFICATION CONTENT 1 ============ */}
                        <div className="qualification_content active" ref={educationMenuRef}>
                            {/* ========= QUALIFICATION 1 ========== */}
                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">Information Technology</h3>
                                    <span className="qualification_subtitle">Baliuag University</span>
                                    <div className="qualification_calendar">
                                        <i className="qualification_icon">
                                            <FaCalendarAlt/>
                                        </i> 2019 - 2023  
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>

                              {/* ========= QUALIFICATION 2 ========== */}
                              <div className="qualification_data">
                                <div></div>
                              <div>
                                    <span className="qualification_rounder"></span>
                                   
                                </div>
                                <div>
                                    <h3 className="qualification_title">Senior High School</h3>
                                    <span className="qualification_subtitle">Carlos F. Gonzales High School</span>
                                    <div className="qualification_calendar">
                                        <i className="qualification_icon">
                                            <FaCalendarAlt/>
                                        </i> 2017 - 2019  
                                    </div>
                                </div>

                                
                            </div>
                        </div>


                        {/*============ QUALIFICATION CONTENT 2 ============ */}
                        <div className="qualification_content"  ref={workMenuRef}>
                            {/* ========= QUALIFICATION 1 ========== */}
                            <div className="qualification_data" >
                                <div>
                                    <h3 className="qualification_title">Developer</h3>
                                    <span className="qualification_subtitle">Abiva Publishing House, Inc.</span><br></br>
                                    <div className="qualification_calendar">
                                        <i className="qualification_icon">
                                            <FaCalendarAlt/>
                                        </i> Aug 2022 - Nov 2022 
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>

                              {/* ========= QUALIFICATION 2 ========== */}
                            <div className="qualification_data">
                                <div></div>
                              <div>
                                    <span className="qualification_rounder"></span>                                   
                                </div>                               
                                <div>
                                    <h3 className="qualification_title">Data Encoder & Staff Inventory</h3>
                                    <span className="qualification_subtitle">Baliwag Transit, Inc. Main Office</span><br></br>                           
                                    <div className="qualification_calendar">
                                        <i className="qualification_icon">
                                            <FaCalendarAlt/>
                                        </i> Nov 2018 - Dec 2018
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                  </div>
                </section> 
               
            </div>
   
    
    )
}

export default About;