
import {FaFacebook , FaGoogle} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import imgUp from '../../../public/img/Sign up-rafiki-new 1.png'
export default function Register(){
    return(
        <section className="vh-100" >
        <div className="container py-5 h-100" >
          <div className="row d-flex align-items-center justify-content-center h-100 rounded-2 overflow-hidden" style={{"background-color":"#EBECEC"}}>
            <div className="d-flex align-items-center justify-content-center col-md-8 col-lg-7 col-xl-6 p-0 h-100  mh-100  " style={{"background-color":"#424B5A"}}>
              <img src={imgUp}
                className="img-fluid w-75" alt="Phone image"/>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 m-auto p-0" >
              <form>
                
                <div className="form-outline mb-4">
                    <label className="form-label">Full Name</label>
                  <input type="email" id="form1Example13" className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label">Email address</label>
                  <input type="email" id="form1Example13" className="form-control form-control-lg" />
                </div>
      
                
                <div className="form-outline mb-4">
                    <label className="form-label" >Password</label>
                  <input type="password" id="form1Example23" className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" >Confirm Password</label>
                  <input type="password" id="form1Example23" className="form-control form-control-lg" />
                </div>
      
                <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Sign Up</button>
                <div className="d-flex flex-column justify-content-around align-items-center mb-4 mt-4">
                   <p>Already A Member ? <Link to="/login">Sign In</Link></p>
                </div>
      
                
      
                <div className=" d-flex align-items-center justify-content-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted ">-------- OR --------</p>
                </div>
      
                <a className="btn btn-primary btn-lg btn-block  w-100 mb-3 d-flex align-items-center justify-content-center" style={{"background-color": "#3b5998"}} href="#!"
                  >
                 <FaFacebook className='mx-2'/> Continue with Facebook
                </a>
                <a className="btn btn-primary btn-lg btn-block w-100 d-flex align-items-center justify-content-center " href="#!"  style={{"background-color": "#fff" , "color":"#555" , "border-color":"#555"}}
                  >
                  <FaGoogle className='mx-2'/> Continue with Google</a>
      
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}