import React from "react";
import logo from '../assets/img/telanganalogo.png'
import logo2 from '../assets/img/logo-2.png'


export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row align-items-start justify-content-between mb-3">
          <div className="col-md-1 px-0">
            <a href="./index.html" className="opacity-1">
              <img
                src={logo}
                alt="logo"
                className="footer-logo"
              />
            </a>
          </div>
          <div className="col-md-3 px-0">
            <strong>
              FINANCIAL MANAGEMENT SYSTEM
              <br />
              Telangana State Housing Corporation Limited
            </strong>
            <br />
            Managing Director,
            <br />
            Telangana State Housing Corporation Limited
            <br />
            Himayatnagar
            <br />
            Phone: 040-23225018
            <br />
            Mail Id: housingadmnts@gmail.com
            <br />
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="footerlinks">
              <li>
                <a href="#" target="_blank">
                  Home{" "}
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  GO's and Acts
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Faq's
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  National Portal of India
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  State Portal
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Right To Information Act 2005
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Policies</h5>
            <ul className="footerlinks">
              <li>
                <a href="#" target="_blank">
                  Privacy Policy{" "}
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  HyperLinking policy
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Copyright policy
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer_contact">
            <h5 className="footer-title">Contact Us </h5>
            <p>For any queries please mail to housingadmnts@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row border-top">
          <div className="col-md-6 ">
            <div>
              <p className="pt-2 text-white" style={{ fontSize: 12 }}>
                {" "}
                Copyright 2023 FMS. <br />
                Content owned, maintained and updated by Telangana State Housing
                Corporation Ltd., Government of Telangana.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div>
              <p className="pt-2 text-white text-end">
                {" "}
                Designed &amp; Developed by :{" "}
                <img src={logo2} style={{ width: 225 }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
