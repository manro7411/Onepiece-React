/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function headsec() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-ligh'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav">
                         <a class="nav-link active" aria-current="page" href="#">Home</a>
                          <a class="nav-link" href="#">Features</a>
                          <a class="nav-link" href="#">Pricing</a>
                          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                     </div>
                </div>
            </div>
        </nav>
            );    
}
export default headsec;