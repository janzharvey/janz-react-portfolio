import "./styles/skills.css";
import { BiCodeAlt} from "react-icons/bi";
import { RiArrowDownSLine, RiComputerLine} from "react-icons/ri";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoAndroid } from "react-icons/io";
import { FaJava, FaReact, FaWifi } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiEclipseide } from "react-icons/si";
import { BiServer } from "react-icons/bi";
import { GiComputerFan, GiAutoRepair } from "react-icons/gi";
import { BsRouterFill } from "react-icons/bs";
import React, { useState } from 'react';



function Skills(){
    const [isFrontendOpen, setIsFrontendOpen] = useState(false);
    const [isBackendOpen, setBackendIsOpen] = useState(false);
    const [isHardwareOpen, setHardwareIsOpen] = useState(false);

    function toggleSkillsFrontend() {
    setIsFrontendOpen(!isFrontendOpen);
  }

    function toggleSkillsBackend() {
        setBackendIsOpen(!isBackendOpen);
    }

    function toggleSkillsHarware() {
        setHardwareIsOpen(!isHardwareOpen);
    }

    return(        
      <div>
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My technical skills</span>

            <div className="skills_container container grid">
                <div>
                    <div className={`skills_content ${isFrontendOpen ? 'skills_close' : 'skills_open'}`}>
                        <div className="skills_header" onClick={toggleSkillsFrontend}>
                            <i className="skills_icon"><BiCodeAlt/></i>
                            <div>
                                <h1 className="skills_title">Frontend Developer</h1>
                                <span className="skills_subtitle">More than a year</span>
                                
                            </div>
                            <i className="skills_icon skills_arrow"><RiArrowDownSLine/></i>
                        </div>
                        <div className="skills_list grid"> 
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <div className="skills_name-logo">
                                        <i className="about_icons html">
                                            <IoLogoHtml5/>
                                        </i>
                                        <h3 className="skills_name">HTML</h3>
                                    </div>                                  
                                    <span className="skills_number">80%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skill_html"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <div className="skills_name-logo">
                                        <i className="about_icons css">
                                            <IoLogoCss3/>
                                        </i>
                                    <h3 className="skills_name">CSS</h3>
                                    </div>
                                    
                                    <span className="skills_number">70%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skill_css"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <div className="skills_name-logo">
                                        <i className="about_icons javascript">
                                            <IoLogoJavascript/>
                                        </i>
                                        <h3 className="skills_name">Javascript</h3>
                                    </div>                                 
                                    <span className="skills_number">40%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skill_javascript"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <div className="skills_name-logo">
                                        <i className="about_icons react">
                                            <FaReact/>
                                        </i>
                                        <h3 className="skills_name">React</h3>
                                    </div>                             
                                    <span className="skills_number">40%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skill_react"></span>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>

                <div>
                    <div className={`skills_content ${isBackendOpen ? 'skills_open' : 'skills_close'}`}>
                            <div className="skills_header" onClick={toggleSkillsBackend}>
                                <i className="skills_icon"><BiServer/></i>
                                <div>
                                    <h1 className="skills_title">Backend Developer</h1>
                                    <span className="skills_subtitle">More than a year</span>
                                    
                                </div>
                                <i className="skills_icon skills_arrow"><RiArrowDownSLine/></i>
                            </div>
                            <div className="skills_list grid"> 
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <div className="skills_name-logo">
                                            <i className="about_icons java">
                                            <FaJava/>
                                            </i>
                                            <h3 className="skills_name">Java</h3>
                                        </div>
                                        
                                        <span className="skills_number">70%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skill_java"></span>
                                    </div>
                            </div>
                            <div className="skills_data">
                                    <div className="skills_titles">
                                        <div className="skills_name-logo">
                                            <i className="about_icons sql">
                                                <TbSql/>
                                            </i>
                                        <h3 className="skills_name">SQL</h3>
                                        </div>
                                        
                                        <span className="skills_number">40%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skill_sql"></span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <div className="skills_name-logo">
                                            <i className="about_icons android">
                                                <IoLogoAndroid/>
                                            </i>
                                        <h3 className="skills_name">Android Studio</h3>
                                        </div>                                       
                                        <span className="skills_number">50%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skill_android"></span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <div className="skills_name-logo">
                                            <i className="about_icons eclipse">
                                                <SiEclipseide/>
                                            </i>
                                        <h3 className="skills_name">Eclipse</h3>
                                        </div>                                      
                                        <span className="skills_number">60%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skill_eclipse"></span>
                                    </div>
                                </div>                           
                        </div>
                    </div>
                </div>

                <div>
                    <div className={`skills_content ${isHardwareOpen ? 'skills_open' : 'skills_close'}`}>
                            <div className="skills_header" onClick={toggleSkillsHarware}>
                                <i className="skills_icon"><RiComputerLine/></i>
                                <div>
                                    <h1 className="skills_title">Computer Hardware</h1>
                                    <span className="skills_subtitle">More than a year</span>
                                    
                                </div>
                                <i className="skills_icon skills_arrow"><RiArrowDownSLine/></i>
                            </div>
                            <div className="skills_list grid"> 
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <div className="skills_name-logo">
                                            <i className="about_icons build">
                                            <GiComputerFan/>
                                            </i>
                                            <h3 className="skills_name">PC System Build</h3>
                                        </div>
                                        
                                        <span className="skills_number">90%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skill_build"></span>
                                    </div>
                            </div>
                            <div className="skills_data">
                                    <div className="skills_titles">
                                        <div className="skills_name-logo">
                                            <i className="about_icons router">
                                                <BsRouterFill/>
                                            </i>
                                        <h3 className="skills_name">Router Configuration</h3>
                                        </div>
                                        
                                        <span className="skills_number">70%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skill_router"></span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <div className="skills_name-logo">
                                            <i className="about_icons repair">
                                                <GiAutoRepair/>
                                            </i>
                                        <h3 className="skills_name">Computer Repair</h3>
                                        </div>                                       
                                        <span className="skills_number">80%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skill_repair"></span>
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

export default Skills;