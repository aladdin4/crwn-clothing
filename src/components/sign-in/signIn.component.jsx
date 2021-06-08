import React from "react";

import CustomBtn from "../custom-btn/customBtn.component";
import FormInput from "../form-input/formInput.component";
import "./signIn.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  state = { email: "", password: "" };

  onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted");
    this.setState({ email: "", password: "" });
  };

  onChangeHandler = (e) => {
    // let name = e.target.name;
    // name = name.toString(); //will work that way or simply [name] #ES6

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form autoComplete="off" onSubmit={this.onSubmitHandler}>
          <FormInput
            type="email"
            name="email"
            id="email"
            onChange={this.onChangeHandler}
            value={this.state.email}
            required={false}
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            id="password"
            onChange={this.onChangeHandler}
            value={this.state.password}
            required={false}
            label="password"
          />

          <CustomBtn type="submit">Sign In with Email</CustomBtn>

          <CustomBtn onClick={signInWithGoogle}>Sign In With Google</CustomBtn>
        </form>
      </div>
    );
  }
}

export default SignIn;
