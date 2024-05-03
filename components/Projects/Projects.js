import data from "../../data/data";
import "./Projects.css";

const template = () => {
  return `
  <section class="projects" id="projects">
    <h2>Portfolio Website</h2>
    <ul>
      ${data.projects
        .map(
          (project) => `
      <li>
        <img src=${project.preview} alt=${project.title}/>
        <p>${project.description}</p>
        <a href=${project.link}>Portfolio</a>
      </li>
      `
        )
        .join("")}
    </ul>
  </section>
  `;
};

const Projects = () => {
  return template();
};

export default Projects;
