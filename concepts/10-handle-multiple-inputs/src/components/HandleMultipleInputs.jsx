import { useState } from "react";

function HandleMultipleInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {firstName, lastName, username, email, password, confirmPassword} =
    formData;
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="formGroup">
        <label htmlFor="firstName">First Name</label> <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="lastName">Last Name</label> <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="username">Username</label> <br />
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="passwrod">Password</label> <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="confirmPassword">Confirm Password</label> <br />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </div>
      <input type="submit" style={{ marginTop: "1rem" }} />
    </form>
  );
}

export default HandleMultipleInputs;
