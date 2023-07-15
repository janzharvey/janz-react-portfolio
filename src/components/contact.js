import './styles/contact.css';
import { FaPhoneAlt, FaGithub,FaEnvelope, FaRegEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaArrowUp } from 'react-icons/fa'
function Contact(){
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up')
  
        if(this.scrollY >= 560){
          scrollUp.classList.add('show-scroll');
        } else {
          scrollUp.classList.remove('show-scroll');
        }
      }
  
      window.addEventListener('scroll', scrollUp);

    return(
        <div>
            <section className='contact section' id="contact">
                <h2 className='section_title'>Contact Me</h2>
                <span className='section_subtitle'>Get in touch</span>

                <div className='contact_container container grid'>
                    <div>
                        <div className='contact_information'>
                            <i className='contact_icon'><FaPhoneAlt/></i>

                            <div>
                                <h3 className='contact_title'>Call Me</h3>
                                <span className='contact_subtitle'>(+63) 9083718793</span>
                            </div>
                        </div>

                        <div className='contact_information'>
                            <i className='contact_icon'><FaRegEnvelope/></i>

                            <div>
                                <h3 className='contact_title'>Email</h3>
                                <span className='contact_subtitle'>janzharveysacdalanortega@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <form action="" className='contact_form-grid'>
                        <div className='contact_inputs grid'>
                            <div className='contact_content'>
                                <label for="" className='contact_label'>Name</label>
                                <input type="text" className='contact_input'></input>
                            </div>
                            <div className='contact_content'>
                                <label for="" className='contact_label'>Email</label>
                                <input type="email" className='contact_input'></input>
                            </div>
                            <div className='contact_content'>
                                <label for="" className='contact_label'>Message</label>
                                <textarea name="" id='' cols="0" rows="7" className='contact_input'></textarea>
                            </div>

                            <div>
                                <a href="#send  " className='button button--flex'>
                                    Send Message
                                </a>
                            </div>
                        </div>
                    </form>

                </div>
            </section>

            <footer className='footer'>
                <div className='foot_bg'>
                    <div className='footer_container container grid'>
                        <div>
                            <h1 className='footer_title'>Janz</h1>
                            <span className='footer_subtitle'>Developer</span>
                        </div>

                        <div className='footer_socials'>
                            <a href="https://www.facebook.com/janz.harvey.9/" target="_blank" rel="noreferrer" className='footer_socials'>
                                <FaFacebook/>
                            </a>
                            <a href="https://www.instagram.com/_iamjanz/" target="_blank" rel="noreferrer" className='footer_socials'>
                                <FaInstagram/>
                            </a>
                            <a  href="https://twitter.com/_iamjanz" target="_blank" rel="noreferrer" className='footer_socials'>
                                <FaTwitter/>
                            </a>
                            <a  href="https://www.linkedin.com/in/janzharvey/" target="_blank" rel="noreferrer" className='footer_socials'>
                                <FaLinkedinIn/>
                            </a>
                            <a href="https://github.com/janzharvey" target="_blank" rel="noreferrer" className='footer_socials'>
                                <FaGithub/>
                            </a>
                            <a href="https://github.com/janzharvey" className='footer_socials'>
                                <FaEnvelope/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="#" className='scrollup' id='scroll-up'>
                <i className='scrollup_icon'><FaArrowUp/></i>
            </a>
        </div>
    )
}

export default Contact;
