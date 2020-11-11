import React from "react";
import {connect} from "react-redux";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signUpStart} from "../../redux/user/user.actions";

class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        const {signUpStart} = this.props;

        if (password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        signUpStart({email,displayName,password});
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange = {this.handleChange}
                        required
                        label="Display name"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange = {this.handleChange}
                        required
                        label="Email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange = {this.handleChange}
                        required
                        label="Password"
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange = {this.handleChange}
                        required
                        label="Confirm password"
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);