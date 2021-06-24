import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <>
      <div className="row">
        <div className="col-md-9 col-lg-8 mx-auto">
          <div className="row mt-5">
            <h3 className="login-heading mb-4" style={{ color: "green" }}>
              Welcome back!
            </h3>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              //console.log(email,password);

              setEmail("");
              setPassword("");
              let response = await fetch(
                "https://resetpasswordserver.herokuapp.com/auth/login",
                {
                  method: "POST",
                  body: JSON.stringify({
                    email,
                    password,
                  }),
                  headers: {
                    "content-type": "application/json",
                  },
                }
              );
             let data = await response.json();
                if(data.message==='Login Successfull'){
                  toast.success('user login successfully')
                  setTimeout(() => {
                    history.push('/profile');
                  }, 5000);

                }else if(data.message==='Invalid Creadentials'){
                  toast.error('warning:Invalid Creadentials')
                }else{
                  toast.warn('opps...!user not registered')
                }
            }}
          >
            <div className="form-label-group">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required
                autofocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="inputEmail">Email address</label>
            </div>

            <div className="form-label-group">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="inputPassword">Password</label>
            </div>

            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" for="customCheck1">
                Remember password
              </label>
            </div>
            
            
              <button
                className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                type="submit"
              >
                Sign in
              </button>
              
            <div className="text-center">
              <Link to="/reset-pass">Forgot password?</Link>
            </div>
          </form>
          <hr />
          <div className="text-center">
            Not Registered?
            <Link to="/register">Register Now</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
