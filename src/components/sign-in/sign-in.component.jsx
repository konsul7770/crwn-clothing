import React from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '',password: ''})
    }

    handleChange = event => {
        event.preventDefault();
        const {name,value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I have already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onScroll={this.handleSubmit}>
                    <FormInput
                        name="email"
                        label="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        label="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick = {signInWithGoogle}>{''}SIGN IN WITH GOOGLE{''}</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignIn;