import React from "react";
import logo from '../assets/img/telanganalogo.png'

const Header = () => {
  return (
    <div className="logo-wrap">
      <div className="container ">
        <div className="row row align-items-center">
          <div className="col-md-8 logo d-flex align-items-center">
            <img src={logo} className="logo-img " />
            <h2 className="site_name">
              FINANCIAL MANAGEMENT SYSTEM
              <br />
              <span>Telangana State Housing Corporation Limited</span>
            </h2>
          </div>
          <div className="col-md-4  ">
            <ul className="social-custom list-inline pull-right">
              <li className="list-inline-item">
                <a
                  className="increase btn btn-default accessibility"
                  href="javascript:void(0);"
                >
                  {" "}
                  A+{" "}
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  className="reset btn btn-default accessibility"
                  href="javascript:void(0);"
                >
                  {" "}
                  A&nbsp;{" "}
                </a>{" "}
              </li>
              <li className="list-inline-item">
                <a
                  className="decrease btn btn-default accessibility"
                  href="javascript:void(0);"
                >
                  {" "}
                  A-{" "}
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  className="dark btn btn-default"
                  onclick="swapStyleSheet('css/style.default.css')"
                  style={{
                    background: "#007135",
                    borderColor: "none",
                    color: "#fff",
                  }}
                >
                  {" "}
                  A
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  href="#"
                  className="dark btn btn-default"
                  onclick="swapStyleSheet('css/dark.css')"
                  style={{
                    background: "#000",
                    borderColor: "none",
                    color: "#fff",
                  }}
                >
                  {" "}
                  A
                </a>
              </li>
              <li className="list-inline-item" style={{ marginRight: 0 }}>
                <a
                  href="#"
                  className="dark btn btn-default bg-orange"
                  style={{ borderColor: "none" }}
                >
                  <i className="fa fa-wheelchair"> </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
