import React from "react";

import CustomBtn from "../custom-btn/customBtn.component";
import FormInput from "../form-input/formInput.component";
import "./signIn.styles.scss";

import { myAuth, signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  state = { email: "", password: "" };

  onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const user = await myAuth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      // clear the fields only if succeeded
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
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
          <div className="buttons">
            <CustomBtn type="submit">Sign In with Email</CustomBtn>

            <CustomBtn onClick={signInWithGoogle} isSignWithGoogle={true}>
              Sign In With Google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
