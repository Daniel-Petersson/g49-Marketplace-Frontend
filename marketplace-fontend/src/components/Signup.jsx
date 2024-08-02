import { useState } from "react";
import { registerUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setemail] = useState(" ");
  const [userName, setuserName] = useState(" ");
  const [password, setpassword] = useState(" ");
  const navigate = useNavigate();
    function saveUser(e) {
        e.preventDefault();
        const user = { email, userName, password };
        console.log(user);
        registerUser(user).then((response) => {
            console.log(response.data);
            navigate("/login");
        });
    }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">Sign up</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">email address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setemail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName">userName</label>
                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={e => setuserName(e.target.value)}
                    className="form-control"
                    id="exampleInputName"
                    placeholder="userName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputpassword1">password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveUser}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
