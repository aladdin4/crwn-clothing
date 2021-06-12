import React from "react";
import CustomBtn from "../custom-btn/customBtn.component";
import FormInput from "../form-input/formInput.component";
import { createUserProfile, myAuth } from "../../firebase/firebase.util";

import "./signUp.styles.scss";

export class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // will call docRef.create() eventually which is async-fn() and needs await
  handleSubmit = async (e) => {
    // 1st prevent default behavior
    e.preventDefault();

    // 2nd check the password match
    if (this.state.password !== this.state.confirmPassword) {
      alert("password don't match");
      console.log(this.state.Password, this.state.confirmPassword);
      return;
    }

    try {
      // 3rd create new user with data (the method check if it's already there and returns an exception)
      // it returns user credentials
      const userCredentials = await myAuth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      const user = userCredentials.user;

      // 4th save the data if new in the DB
      // create new profile with user created by fire base and complete the data with the data he entered through local state
      await createUserProfile(user, {
        userName: this.state.displayName,
      });

      // 5th clear the field (which are fed from state, So clear the state)
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with ur email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={this.state.displayName}
            label="Name"
            // required
          />
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            // required
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="Password"
            // required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            label="Confirm Password"
            // required
          />
          <CustomBtn type="submit">Sign Up</CustomBtn>
        </form>
      </div>
    );
  }
}

export default SignUp;
