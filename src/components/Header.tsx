export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Ather Qureshi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="assets/atherqureshi_resume.pdf">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/atherqureshi">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
