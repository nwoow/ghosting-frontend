import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context/MyContext";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);

  const { userLogin, verifyOtp, message } = useGlobalContext();

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSendOtpClick = () => {
    if (phoneNumber !== "") {
      setShowOtpInput(true);
      setTimer(120); // Set timer to 2 minutes (120 seconds)
      userLogin(phoneNumber);
    }
  };

  const handleResendOtpClick = () => {
    if (phoneNumber !== "") {
      setTimer(120); // Reset timer to 2 minutes (120 seconds)
      userLogin(phoneNumber);
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    setOtp(value);
  };

  const handleOtpSubmit = () => {
    verifyOtp(otp, phoneNumber);
  };

  return (
    <div>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-md-12 square">
            <i style={{ "--clr": "#ffd277" }}></i>
            <i style={{ "--clr": "#ffffff" }}></i>
            <i style={{ "--clr": "#00ff0a" }}></i>
            <div className="card p-4 login">
              <h2 className="text-center mb-4 text-white fw-bold">Login</h2>
              {/*------------- Phone number part --------------- */}
              <div className="mb-3 inputBx">
                <label htmlFor="phoneNumber" className="form-label text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]*"
                  className="form-control"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
              {/* Display message after sending OTP */}
              {!showOtpInput && (
                <button
                  className="button-69 w-100"
                  onClick={handleSendOtpClick}
                  disabled={!phoneNumber || phoneNumber.length !== 10}
                >
                  Send OTP
                </button>
              )}
              {/*------------------ OTP PART ---------------- */}
              {showOtpInput && (
                <div className="mt-3 inputBx">
                  <label htmlFor="otp" className="form-label text-white">
                    OTP
                  </label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ width: "auto" }}
                  >
                    <input
                      type="text"
                      maxLength="6"
                      className="form-control text-center me-2"
                      value={otp}
                      onChange={(e) => handleOtpChange(e)}
                    />
                  </div>
                </div>
              )}
              {showOtpInput && (
                <div className="inputBx mt-3">
                  <button
                    className="button-89 w-100 mt-3"
                    onClick={handleOtpSubmit}
                    type="submit"
                  >
                    Submit OTP
                  </button>
                </div>
              )}
              {showOtpInput && timer === 0 && (
                <div className="inputBx mt-3">
                  <button
                    className="button-69 w-100 mt-3"
                    onClick={handleResendOtpClick}
                  >
                    Resend OTP
                  </button>
                </div>
              )}
              {showOtpInput && timer > 0 && (
                <p className="text-center text-white mt-3">
                  Resend OTP in {timer} seconds
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
