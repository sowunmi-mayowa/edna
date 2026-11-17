export default function Header() {
  return (
    <>
      <header className="shell top">
        <a className="wordmark" href="#main">
          Edna<span>.</span>
        </a>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Get in touch{" "}
          </a>
        </nav>
      </header>
    </>
  );
}
