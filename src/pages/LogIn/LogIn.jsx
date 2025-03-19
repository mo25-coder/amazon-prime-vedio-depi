import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import '../../assets/css/LogIn/LogIn.css';
import LogInLogo from "./LogInLogo/LogInLogo";
import LogInFooter from "./LogInFooter/LogInFooter";
import ToolTip from "./ToolTip/ToolTip";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [step, setStep] = useState(1);
    const [showHelp, setShowHelp] = useState(false);

    const handleNext = () => {
      if (email) setStep(2);
    };

    const handleLogin = () => {
      if (password) alert("Login Successful!");
    };

    return (
        <>
            <LogInLogo/>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-box-inside">
                        <div className="sign_in_txt">
                            <p>Sign in</p>
                        </div>
                        {step === 1 ? (
                            <>
                                <div className="email_input">
                                    <label class="label-input">Email or mobile phone number</label>
                                </div>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button onClick={handleNext} className="btn-primary continue">Continue</button>
                                <div className="links-down">
                                    <p className="terms-and-condition"> By continuing, you agree to the Amazon <a href="https://www.primevideo.com/ww-av-legal-home/ref=av_auth_te">Conditions of Use and Privacy Notice</a>.</p>
                                    {/* <a href="#" className="forgot-password">Forgot your password?</a> */}
                                </div>
                                <div className="help-container">

                                <button className="help-button" onClick={() => setShowHelp(!showHelp)}>
                                    <i
                                    className={`fa-solid fa-angle-down ${showHelp ? "rotate" : ""}`}
                                    ></i>
                                    Need help?
                                </button>

                                {showHelp && <p className="forgot-password">Forgot your password?</p>}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="email-change">
                                    <p>{email}</p>
                                    {/* <Link to="/LogIn" className="home-link-change">Change</Link> */}
                                    <Link to="#" className="home-link-change" onClick={() => setStep(1)}>Change</Link>
                                </div>
                                {/* <div className="password_input_and_forgot">
                                    <label class="label-input">Password</label>
                                    <a href="#" >Forgot password?</a>
                                </div> */}


                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button onClick={handleLogin} className="btn-primary sign-in">Sign in</button>
                                <ToolTip/>
                            </>
                        )}
                    </div>
                </div>
                <div className="new-to-amazon">
                    <div className="new-to-amazon-line">
                        <div className="new-to-amazon-txt">New to Amazon?</div>
                        <hr />
                    </div>
                    <Link to="/signup" className="sign-up-btn">
                        Create your Amazon account
                    </Link>
                </div>
                <LogInFooter/>
            </div>
        </>
    );
};

export default LogIn;
