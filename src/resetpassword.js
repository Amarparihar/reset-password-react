import { useState } from "react";

export default function Reset() {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="row justify-content-center mt-5">
        <h3 style={{ color: "red" }}>Forgot Password</h3>
      </div>
      <div className="row">
        <div className="col-md-9 col-lg-8 mx-auto">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(email);

              setEmail("");

              await fetch(
                "https://resetpasswordserver.herokuapp.com/auth/forgot-password",
                {
                  method: "POST",
                  body: JSON.stringify({
                    email,
                  }),
                  headers: {
                    "content-type": "application/json",
                  },
                }
              );
            }}
          >
            <label>Enter valid Email:</label>
            <input
              type="text"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-success btn-block btn-send text-uppercase font-weight-bold mb-2 mt-3">
              send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
