import { useState } from "react";
export default function Update() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <div className="row justify-content-center mt-5">
        <h3 style={{ color: "red" }}>Update Your Password Here</h3>
      </div>
      <div className="row">
        <div className="col-md-9 col-lg-8 mx-auto">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(password, confirmPassword);
              setPassword("");
              setConfirmPassword("");
              setEmail("");

              await fetch(
                "https://resetpasswordserver.herokuapp.com/auth/update-password",
                {
                  method: "PUT",
                  body: JSON.stringify({
                    email,
                    password,
                    confirmPassword,
                  }),
                  headers: {
                    "content-type": "application/json",
                  },
                }
              );
            }}
          >
            <label>Enter Your Email:</label>
            <input
              type="text"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Enter New Password:</label>
            <input
              type="text"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm Password:</label>
            <input
              type="text"
              className="form-control"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className="btn btn-success btn-block btn-send text-uppercase font-weight-bold mb-2 mt-3">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
