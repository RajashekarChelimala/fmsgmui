import React from "react";
export const Login = () => {
  return (
    <div className="col-md-4 offset-2">
      <div className="card">
        <div className="card-header">Official Login</div>
        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                defaultValue
                placeholder="User Name"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                defaultValue
                placeholder="Password"
              />
            </div>
            <div className="form-group mb-3">
              <select className="form-control">
                <option>Financial Year</option>
                <option>2023</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <div className="row">
                <div className="col-md-7">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue
                    placeholder="Captcha"
                  />
                </div>
                <div className="col-md-5">
                  {" "}
                  <img
                    src="img/captch.jpg"
                    style={{
                      height: 38,
                      border: "solid 1px #ccc",
                      padding: 2,
                      marginBottom: 5,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mb-2">
              <button type="submit" className="btn btn-primary" value="Login">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
