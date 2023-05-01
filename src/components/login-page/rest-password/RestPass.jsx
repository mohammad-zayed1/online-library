import { Link } from "react-router-dom"


export default function RestPass(){
    return(
        <div className="d-flex justify-content-center align-items-center h-100 min-vh-100">
        <div className="card text-center" style={{"max-width": "300px"}}>
    <div className="card-header h2 text-white  p-3 "  style={{"background-color": "#424B5A"}}>Password Reset</div>
    <div className="card-body px-5">
        <p className="card-text py-2 fs-3 my-5">
            Enter your email address and we&#39;ll send you an email with instructions to reset your password.
        </p>
        <div className="form-outline">
            <input type="email" id="typeEmail" className="form-control my-3 fs-4" placeholder="Email"/>
        </div>
        <a href="#" className="btn btn-primary w-100">Reset password</a>
        <div className="d-flex justify-content-between mt-4">
            <Link className=" fs-4 text-dark" to="/login">Login</Link>
            <Link className=" fs-4 text-dark" to="/register">Register</Link>
        </div>
    </div>
</div>
</div>
    )
}