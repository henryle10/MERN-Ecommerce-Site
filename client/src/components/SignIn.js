import React, { useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const SignIn = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = event => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/login",
                { email, password },
                {
                    withCredentials: true
                }
            )
            .then(res => {
                console.log(res);
                navigate("/users");
            })
            .catch(err => {
                console.log(err);
                setErrorMessage(err.response.data.msg);
            });
    };

    return (
        <form onSubmit={login}>
            <fieldset class="border p-3">
                <legend class="w-auto">Sign In</legend>
                <div>
                    <label>Email:</label>
                    <input
                        className="form-control w-25 m-auto"
                        type="text"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <label>Password:</label>
                    <input
                        className="form-control w-25 m-auto"
                        type="password"
                        name="email"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <br />
                    <input type="submit" value="Sign In" className="btn btn-primary" />
                    <p className="error-message">{errorMessage ? errorMessage : ""}</p>
                </div>
            </fieldset>
        </form>
    );
};

export default SignIn;