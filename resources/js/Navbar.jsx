import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg shadow-lg">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">MYCafeSystem</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-white active" aria-current="page" href="/">Home</a>
      </div>
    </div>
    <a className="nav-link text-white me-3 " aria-current="page" href="/">Login</a>
    <span className='text-dark me-2'>|</span>
    <a className="nav-link text-white me-3 " aria-current="page" href="/">Signin</a>

  </div>
</nav>
    </>
  );
}

export default Navbar;