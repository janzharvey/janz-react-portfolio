import './styles/projects.css';
import mobile from './img/mobile-img-card.png';
import FC from './img/FC-LOGO.png';
import Christmas from './img/CC.png';
function Projects(){
    return(
        <div>
            <section className='projects section' id='projects'>
                <h2 className='section_title'>Projects</h2>
                <span className='section_subtitle'>Collections of my projects</span>

                <div className='section_container container grid'>

                    <div className='project_content grid'>
                        <div className='project_card'>
                           <a href="https://drive.google.com/file/d/1NOvmoBy5lkbrkokteg0cV_YZ8XS2J0sM/view?usp=share_link" target="_blank" className="project_card-link"  >
                            <img src={mobile} alt=""/>
                           </a>

                           <div className='project_card-content'>
                                <h3 className='project_card-title'>Baliuag University QR</h3>
                           </div>
                        </div>

                        <div className='project_card'>
                           <a href="https://janzharvey.github.io/fourcourners-project/" target="_blank" className="project_card-link"  >
                            <img src={FC} alt=""/>
                           </a>

                           <div className='project_card-content'>
                                <h3 className='project_card-title'>FOUR CORNERS TUTORIAL CENTER</h3>
                           </div>
                        </div>

                        <div className='project_card'>
                           <a href="janzharvey.github.io/christmas-carolling/" target="_blank" className="project_card-link"  >
                            <img src={Christmas} alt=""/>
                           </a>

                           <div className='project_card-content'>
                                <h3 className='project_card-title'>INNOVATED ONLINE CAROLLING</h3>
                           </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;