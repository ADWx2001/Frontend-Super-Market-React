
function Header() {
  return (
    <div className="App">
      <header id="header" className="header fixed-top" data-scrollto-offset="0">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
      
        <h1>HeroBiz<span>.</span></h1>
      </a>

      <nav id="navbar" className="navbar">
        <ul>

          <li className="nav-link scrollto"><a href="#"><span>Home</span></a></li>

          <li><a className="nav-link scrollto" href="index.html#about">About</a></li>
          <li><a className="nav-link scrollto" href="index.html#services">Services</a></li>
          <li><a className="nav-link scrollto" href="index.html#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="index.html#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li className="dropdown megamenu"><a href="#"><span>Shop by Category</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li>
                <a href="#">Vegetables</a>
                <a href="#">Fruits</a>
                <a href="#">Baby Products</a>
              </li>
              <li>
                <a href="#">Dairy</a>
                <a href="#">Beverages</a>
                <a href="#">Stationary</a>
              </li>
              <li>
                <a href="#">Food Cupboard</a>
                <a href="#">Household</a>
                <a href="#">Cooking Essentials</a>
              </li>
              <li>
                <a href="#">Bakery</a>
                <a href="#">Frozen Food</a>
                <a href="#">Meats</a>
              </li>
              <li>
                <a href="#">Snacks & Confectionary</a>
                <a href="#">Rice</a>
                <a href="#">Seeds & Spices</a>
              </li>
            </ul>
            
          </li>
          
          <li><a className="nav-link scrollto" href="index.html#contact">Contact</a></li>
          <li><a className="nav-link scrollto" href="index.html#contact"><i class="bi bi-basket fa-10x"></i></a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>

      <a className="btn-getstarted scrollto" href="index.html#about">Get Started</a>

    </div>
  </header>
    </div>
  );
}

export default Header;

export function Footer(){
  return(
  <div>
    <footer>
      <div className="container">
        
      </div>
    </footer>
  </div>)
}
