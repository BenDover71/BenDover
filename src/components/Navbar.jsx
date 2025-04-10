import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="row ">
        <div className="col-md-12">
            
            <nav className="navbar navbar-expand-md">
               <Link to={"/"} className="navbar-brand text-danger nav-muted"><b>Loop & Needle Records Online Store </b></Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarcollapse">
                    <div className="navbar-nav">
                       <Link to={"/Signup"} className="nav-link text-primary">Sign up</Link>
                       <Link to={"/Signin"} className="nav-link text-primary">Sign in</Link>
                       <Link to={"Adddisc"} className="nav-link text-primary">Upload Catalogue</Link>
                    </div>
                </div>
            </nav>
        </div>
    </section>
  )
}

export default Navbar