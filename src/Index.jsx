import React, { Component } from 'react';
import emailjs from '@emailjs/browser';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import pic from './avatar2.png';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project4.png';
import './index.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageDelivered: false,
        };
        this.form = React.createRef();
      }
    
      sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_nhc3uju', 'template_ij6l70d', this.form.current, {publicKey: 'rLtqEB7dc-1El-ZEF',})
          .then(
            () => {
              console.log('SUCCESS!');
              this.setState({ messageDelivered: true }); // Show the message
    
              // Hide the message after 3 seconds
              setTimeout(() => {
                this.setState({ messageDelivered: false });
              }, 3000);
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );
      };


  render() {
    const resumeUrl = "SARTHAK_GUPTA_RESUME.pdf";
    return (
      <div className="App">
        {/* Header */}
        <header className="header">
          <nav className="navbar">
              <a href="#skills" className='navbarr'>Skills</a>
              <a href="#projects" className='navbarr'>Projects</a>
              <a href="#experience" className='navbarr'>Experience</a>
              <a href="#certification" className='navbarr'>Certifications</a>
              <a href="#contact" className='navbarr'>Contact</a>
          </nav>
        </header>

        {/* Section 1: Introduction */}
        <section className="intro">
        <h1 className="head">PORTFOLIO</h1>
          <img src={pic} alt="Sarthak" className="intro-image" />
          <div className="intro-text">
            <p><span className='name'>SARTHAK GUPTA</span><br/><span className='prof'>Full Stack Web Developer</span></p>
            <a href={resumeUrl} download="SARTHAK_GUPTA_RESUME.pdf">
                <button className='resume'>⤓ Download Resume</button>
            </a>
          </div>
        </section>
        {/* <hr /> */}

        {/* Section 2: Skills */}
        <section id="skills" className="skills">
          <p className='headings'>SKILLS</p>
          <div className='skilldiv'>
              <div className='skillbox'>Java</div>
              <div className='skillbox'>HTML</div>
              <div className='skillbox'>CSS</div>
              <div className='skillbox'>Javascript</div>
              <div className='skillbox'>React.js</div>
              <div className='skillbox'>Node.js</div>
              <div className='skillbox'>Express.js</div>
              <div className='skillbox'>SQL</div>
          </div>
        </section>
        <hr />

        {/* Section 3: Projects */}
        <section id="projects" className="projects">
          <p className='headings'>PROJECTS</p>
          <div className="project">
            <img src={project1} alt="Project 1" className="project-image-left" />
            <div className="project-text-left">Developed a job portal aimed at connecting job seekers with employers through a streamlined and user-friendly interface. The portal allows users to create profiles and browse job listings across various industries. Employers can post job openings and review applications and communicate with candidates. The platform also incorporates advanced search filters to help users find the most relevant positions. <br/>
            <span className='techstack'>Tech Stack:</span> HTML, CSS, JS, React, Node, Express, SQL <br/>
            <a href="https://job-portal-three-teal.vercel.app/" className='projlink'>Deployement Link</a> <a href="https://github.com/sarthakgupta06/JobPortal" className='projlink'>Source Code</a>
            </div>
          </div>
          <div className="project">
            <img src={project2} alt="Project 2" className="project-image-right"/>
            <div className="project-text-right">Developed a portfolio website to present the core aspects of my profile as a developer. It highlights my technical expertise by showcasing the skills I possess, provides detailed insights into the projects I’ve completed, demonstrating my hands-on experience, and outlines my roles and contributions through the experience section. Additionally, it features the certifications I’ve earned and also includes a contact section that allows visitors to easily get in touch. <br /> <span className='techstack'>Tech Stack:</span> HTML, CSS, Javascript, React <br /> <a href="" className='projlink'>Deployement Link</a> <a href="" className='projlink'>Source Code</a></div>
          </div>
          <div className="project">
            <img src={project3} alt="Project 3" className="project-image-left"/>
            <div className="project-text-left">Developed a small-scale IoT project aimed at optimizing car parking systems. The setup includes an LED display that informs drivers whether a parking slot is available. If a slot is free, the barrier is lifted to allow the car to enter. It simplifies the parking process and reduces the searching time for parking spaces. By leveraging sensors and automation, the project offers a smart solution for parking management and can be scaled for larger implementations. <br />
            <span className='techstack'>Tools Used:</span> Arduino Uno, IR Proximity Sensors, Servo Motor, LCD, I2C, Breadboard. <br /> <a href="https://github.com/sarthakgupta06/ParkAssist" className='projlink'>Source Code</a>
            </div>
          </div>
          <div className="project">
            <img src={project4} alt="Project 4" className="project-image-right" />
            <div className="project-text-right">Created an animal adoption website to connect potential pet owners with animals in need of a home. The platform provides a user-friendly interface where shelters and individual users can list animals available for adoption, descriptions, and important details such as age, breed and gender. Visitors can easily browse through the listings, filter by preferences, and contact shelters directly through the site. <br /> <span className='techstack'>Tech Stack:</span> HTML, CSS, JS, React, Node, Express, MongoDB <br /> <a href="https://github.com/ProjectPetAdoption/test23" className='projlink'>Source Code</a></div>
          </div>
        </section>
        <hr />

        {/* Section 4: Experience */}
        <section id="experience" className="experience">
          <p className='headings'>EXPERIENCE</p>
          <div className='expcont'>
            <div className='expdesc'> <span className='exp1'>Summer Intern</span> <br/> <span className='exp2'>BCS Infallible Technology</span> <br/> <span className='exp3'>2024</span> </div>
            <div className="experience-text">During the internship, I gained valuable experience working on an intra-university application which enhances communication among students, alumni, and faculty, facilitating the sharing of skills and achievements. I got hands-on experience with various technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MySQL. The internship allowed me to develop my skills in web development, requirement gathering, and UI design, while also providing insights into project management and teamwork in a professional setting.</div>
          </div>

          <div className='expcont2'>
            <div className='expdesc1'> <span className='exp11'>Secretary</span> <br/> <span className='exp22'>Bulls and Bears Club</span> <br/> <span className='exp33'>2024-2025</span> </div>
            <div className="experience-text1">As the Secretary, I developed strong management and leadership skills. Organized various events, including the offline trading event Dalal Street, which attracted over 600 participants, while overseeing a team of over 100 members. Additionally, I coordinated online webinars featuring esteemed guest speakers like Zerodha Co-Founder Mr. Nithin Kamath and managed club's course. This role enhanced my organizational skills and strategic planning, fostering collaboration and effective communication within the club.</div>
          </div>
        </section>
        <hr />

        {/* Section 5: certification */}
        <section id="certification">
          <br />
          <br />
        <p className='headings'>CERTIFICATIONS</p>
          <div className="certificationcont">
            <div className="certification-text"><a href="https://www.credly.com/badges/35f3ad57-563a-48b8-85a5-4f447a6f45e2/linked_in?t=s7tqs4"><span className='certtext2'>AWS Cloud Practitioner</span></a></div>
          </div>
          <div className='certificationcont2'>
            <div className="certification-text"><a href="https://drive.google.com/file/d/17psCWrNb0i52RogknQkHKW3wgecGutl2/view?usp=drive_link"><span className='certtext1'>MERN Full Stack</span></a></div>
            <div className="certification-text"><a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22HS72S6460081910089710"><span className='certtext3'>NPTEL - Financial Markets</span></a></div>
          </div>
        </section>
        <hr />
        {/* Section 6: Contact */}
        <section id="contact" className="contact">
          <p className="headings" id='contacthead'>CONTACT</p>
          <div className="contact-container">
            <div className="contact-info">
              <p className="contacttext">Email: sarthak.gupta610a@gmail.com</p>
              <p className="contacttext">Phone: 7500837572</p>
              <p>
              <a href="https://www.linkedin.com/in/sarthakdgupta/"><FontAwesomeIcon icon={faLinkedin}/></a> | <a href="https://github.com/sarthakgupta06"><FontAwesomeIcon icon={faGithub}/></a>
              </p>
            </div>
            <div className="contact-form">
              <form ref={this.form} onSubmit={this.sendEmail}>
                <input type="text" name="from_name" placeholder="Your Name" required />
                <input type="email" name="from_email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" className='sendbut'>Send</button>
              </form>
            </div>
          </div>
          {this.state.messageDelivered && (
            <div className="side-message">Message Delivered</div>
          )}
        </section>
        <style jsx>{`
          .side-message {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #f15a29;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            font-size: 18px;
            z-index: 1000;
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
          }

          button:hover {
            background-color: transparent;
          }
        `}</style>
      </div>
    );
    // ReactDOM.render(element, document.body)
  }
}

export default Index;