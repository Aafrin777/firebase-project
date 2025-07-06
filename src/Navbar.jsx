// npm run dev
//we are using usestate hooks to make our navbar responsive code is already written in html but we'll use react way
import { NavLink } from 'react-router-dom'
import React,{useState} from 'react'

const Navbar = () => {

  const[show, setShow] = useState(false)
  return (
  <>
  <section className='navbar-bg'>
  <nav className="navbar navbar-expand-lg navbar-light">
  {/* container-fluid -> maintain distance left and right */}
  <div className="container">
    <NavLink className="navbar-brand" to="/">E-Payment</NavLink>

    {/* to make our navbar responsive */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
     aria-label="Toggle navigation" onClick={() => setShow(!show)}>
       {/*react way */}
      <span className="navbar-toggler-icon"></span>
    </button>

{/* if our clicking is true so show if its false than blank */}
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >

      {/* me ->ms {start} to shift navbar at right */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ContactUs">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service">Services</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/AboutUs">About</NavLink>
        </li>
          </ul>
      <form className="d-flex">

        <button className="btn  btn-style" type="submit">Sign up</button>

        <button className="btn  btn-style btn-style-border" type="submit">Log in</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar ;
