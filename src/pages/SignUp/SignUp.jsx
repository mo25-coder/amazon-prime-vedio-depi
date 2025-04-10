// import { useState, React } from "react";
// import { Link } from "react-router-dom";
// import "../../assets/css/SignUp/SignUp.css";
// import LogInLogo from "../LogIn/LogInLogo/LogInLogo";
// import LogInFooter from "../LogIn/LogInFooter/LogInFooter";

// function SignUp() {
//   const [useEmail, setUseEmail] = useState(false);
//   return (
//     <>
//       <LogInLogo />
//       <div className="signup-container">
//         <div className="signup-box">
//           <form action="{{url_for(SignUp)}" method="POST">
//             <h2>Create Account</h2>
//             <p className="required-text">All fields are required</p>

//             <label className="input-label">Your name</label>
//             <input
//               type="text"
//               placeholder="First and last name"
//               className="input-field"
//             />

//             <label className="input-label">
//               {useEmail ? "Email" : "Mobile number"}
//             </label>

//             <div className="mobile-input">
//               {!useEmail ? (
//                 <>
//                   <select className="country-code">
//                     <option>EG +20</option>
//                     <option>GB +44</option>
//                     <option>US +1</option>
//                     <option>IN +91</option>
//                   </select>
//                   <input
//                     type="text"
//                     placeholder="Mobile number"
//                     className="input-field"
//                   />
//                 </>
//               ) : (
//                 // إدخال البريد الإلكتروني
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="input-field"
//                 />
//               )}
//             </div>

//             <a
//               href="#"
//               className="email-link"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setUseEmail(!useEmail);
//               }}
//             >
//               {useEmail
//                 ? "Use your phone number instead"
//                 : "Use your email instead"}
//               <i className="fa-solid fa-angle-right"></i>
//             </a>

//             <label className="input-label">Password</label>
//             <input
//               type="password"
//               placeholder="At least 6 characters"
//               className="input-field"
//             />
//             <p className="password-info">
//               <i class="fa-solid fa-circle-info"></i>Passwords must be at least
//               6 characters.
//             </p>

//             <p className="verification-info">
//               To verify your number, we will send you a text message with a
//               temporary code. Message and data rates may apply.
//             </p>

//             <button className="continue-btn" type="submit">
//               Create Account
//             </button>
//           </form>

//           <div className="break_line"></div>

//           <p className="signin-link">
//             Already have an account?{" "}
//             <Link to="/login">
//               Sign in <i class="fa-solid fa-angle-right"></i>
//             </Link>
//           </p>
//         </div>
//       </div>
//       <LogInFooter />
//     </>
//   );
// }

// export default SignUp;

import { useState, React } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/SignUp/SignUp.css";
import LogInLogo from "../LogIn/LogInLogo/LogInLogo";
import LogInFooter from "../LogIn/LogInFooter/LogInFooter";

function SignUp() {
  const [useEmail, setUseEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Enter your name";
    if (useEmail) {
      if (!formData.email.trim()) newErrors.email = "Enter your email";
    } else {
      if (!formData.phone.trim()) newErrors.phone = "Enter your phone number";
    }
    if (!formData.password.trim()) newErrors.password = "Enter your password";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // submit the form here
      console.log("Form is valid:", formData);
    }
  };

  return (
    <>
    <div className="signup-main-container">
    <LogInLogo />
      <div className="signup-container">
        <div className="signup-box">
          <form onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <p className="required-text">All fields are required</p>

            <label className="input-label">Your name</label>
            {errors.name && <p className="error-text">{errors.name}</p>}
            <input
              type="text"
              name="name"
              placeholder="First and last name"
              className={`input-field ${errors.name ? "input-error" : ""}`}
              value={formData.name}
              onChange={handleInputChange}
            />

            <label className="input-label">
              {useEmail ? "Email" : "Mobile number"}
            </label>
            {useEmail && errors.email && (
              <p className="error-text">{errors.email}</p>
            )}
            {!useEmail && errors.phone && (
              <p className="error-text">{errors.phone}</p>
            )}
            <div className="mobile-input">
              {!useEmail ? (
                <>
                  <select className="country-code">
                    <option>EG +20</option>
                    <option>GB +44</option>
                    <option>US +1</option>
                    <option>IN +91</option>
                  </select>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Mobile number"
                    className={`input-field ${errors.phone ? "input-error" : ""}`}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`input-field ${errors.email ? "input-error" : ""}`}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              )}
            </div>

            <a
              href="#"
              className="email-link"
              onClick={(e) => {
                e.preventDefault();
                setUseEmail(!useEmail);
              }}
            >
              {useEmail
                ? "Use your phone number instead"
                : "Use your email instead"}
              <i className="fa-solid fa-angle-right"></i>
            </a>

            <label className="input-label">Password</label>
            {errors.password && (
              <p className="error-text">{errors.password}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="At least 6 characters"
              className={`input-field ${errors.password ? "input-error" : ""}`}
              value={formData.password}
              onChange={handleInputChange}
            />
            <p className="password-info">
              <i className="fa-solid fa-circle-info"></i> Passwords must be at least
              6 characters.
            </p>

            <p className="verification-info">
              To verify your number, we will send you a text message with a
              temporary code. Message and data rates may apply.
            </p>

            <button className="continue-btn" type="submit">
              Create Account
            </button>
          </form>

          <div className="break_line"></div>

          <p className="signin-link">
            Already have an account?{" "}
            <Link to="/login">
              Sign in <i className="fa-solid fa-angle-right"></i>
            </Link>
          </p>
        </div>
      </div>
      <LogInFooter />
    </div>

    </>
  );
}

export default SignUp;
