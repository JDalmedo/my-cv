import "./Header.css";

const template = () => {
  return `
  <header>
    <h1>Juan José Martínez Dalmedo</h1>
    <nav>
      <ul>
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Portfolio website</a>
        </li>
        <li>
          <a href="/CV.pdf" target="_blank">Download CV</a>
        </li>  
      </ul>
    </nav>
  </header>
  `;
};

const Header = () => {
  return template();
};

export default Header;