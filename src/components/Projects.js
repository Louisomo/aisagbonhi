import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/portfolio.png";
import projImg8 from "../assets/img/resp-education-website-02.png";
import projImg9 from "../assets/img/budgetapp.png";
import projImg10 from "../assets/img/netflix.png";
import projImg11 from "../assets/img/comfy.png";
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Restaurant Website",
      description: "A beautiful modern restaurant website built with react.",
      imgUrl: projImg1,
      websiteLink: [
         (
        <a href="https://louisomo.github.io/louis-restaurant/" target="_blank">
          <div className="link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </a>
      ),
      (
        <a href="https://github.com/Louisomo/louis-restaurant" target="_blank">
          <div className="link">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
      ),
    ],
    },
    {
      title: "Hacker News",
      description: "A react website built with API which you can use to search any news.", 
      imgUrl: projImg2,
      websiteLink: [
        (
       <a href="https://louisomo.github.io/hacker-news//" target="_blank">
         <div className="link">
           <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
         </div>
       </a>
     ),
     (
       <a href="https://github.com/Louisomo/hacker-news" target="_blank">
         <div className="link">
           <FontAwesomeIcon icon={faGithub} />
         </div>
       </a>
     ),
   ],
    },
    {
      title: "GPT AI",
      description: "GPT AI website built with react.",
      imgUrl: projImg3,
      websiteLink: [
        (
       <a href="https://louisomo.github.io/gpt3ai/" target="_blank">
         <div className="link">
           <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
         </div>
       </a>
     ),
     (
       <a href="https://github.com/Louisomo/gpt3ai" target="_blank">
         <div className="link">
           <FontAwesomeIcon icon={faGithub} />
         </div>
       </a>
     ),
   ],
    },
    {
      title: "Menu",
      description: "",
      imgUrl: projImg4, 
      websiteLink: [
        (
       <a href="https://louisomo.github.io/food-menu/" target="_blank">
         <div className="link">
           <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
         </div>
       </a>
        ),
     (
       <a href="https://github.com/Louisomo/food-menu" target="_blank">
         <div className="link">
           <FontAwesomeIcon icon={faGithub} />
         </div>
       </a>
     ),
   ],
    },
    {
      title: "Bank Website",
      description: "A modern responsive UI & UX React plus Vite and tailwind css website.",
      imgUrl: projImg5,
      websiteLink:
      (
        <a href="https://github.com/Louisomo/bank-design" target="_blank">
          <div className="link">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
      ),
    },
    {
      title: "Metaverse",
      description: "A responsive next 13 website built with framer emotion and tailwind css.",
      imgUrl: projImg6,
      websiteLink: 
      (
        <a href="https://github.com/Louisomo/metaverse" target="_blank">
          <div className="link">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
      ),
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Other Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Open Source</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>I’m passionate about building things for the web and here are some of the projects I have created.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
  <p>I’m passionate about building things for the web and here are some of the projects I have created.</p>
  <Row>
    {projects.filter((project) => project.id % 2 === 0).map((project) => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </Row>
  <Row>
    <ProjectCard
      title="My Old Portfolio"
      description="The first portfolio I created before now inside this portfolio you can find other amazing projects I have created."
      imgUrl={projImg7}
      websiteLink={[
        <a href="https://louisomo.github.io/My-portfolio/" target="_blank" rel="noopener noreferrer">
          <div className="link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </a>,
        <a href="https://github.com/Louisomo/my-portfolio" target="_blank" rel="noopener noreferrer">
          <div className="link">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>,
      ]}
    />
    <ProjectCard
      title="Education Website"
      description="Fully responsive education school website."
      imgUrl={projImg8}
      websiteLink={[
        <a href="https://louisomo.github.io/education-website/" target="_blank" rel="noopener noreferrer">
          <div className="link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </a>,
        <a href="https://github.com/Louisomo/education-website" target="_blank" rel="noopener noreferrer">
          <div className="link">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>,
      ]}
    />
    <ProjectCard
      title="Budget App"
      description="An application that can allow you to make the total budget you which to spend on your shopping."
      imgUrl={projImg9}
      websiteLink={[
        <a href="https://louisomo.github.io/budget-app/" target="_blank" rel="noopener noreferrer">
          <div className="link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </a>,
        <a href="https://github.com/Louisomo/budget-app" target="_blank" rel="noopener noreferrer">
          <div className="link">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>,
      ]}
    />
  </Row>
</Tab.Pane>

  
<Tab.Pane eventKey="third">
  <p></p>
  <Row>
    {projects.filter((project) => project.id % 3 === 0).map((project) => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </Row>
  <Row>
    <ProjectCard
      title="Netflix Clone"
      description=""
      imgUrl={projImg10}
      websiteLink={[
        <a href="https://netflix-clone-ebon-nu.vercel.app//" target="_blank" rel="noopener noreferrer">
          <div className="link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </a>,
      ]}
    />
    <ProjectCard
      title="Comfy Store"
      description=""
      imgUrl={projImg11}
      websiteLink={[
        <a href="https://vanilla-js-store.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div className="link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </a>,
      ]}
    />
  </Row>
</Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
         </section>
  )
}
