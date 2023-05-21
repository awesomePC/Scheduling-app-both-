import React, { useState } from "react";
import { useNavigate, Link, useResolvedPath } from "react-router-dom";
import { handleRegister } from "../utils/resource";

const Signup = () => {
    const [username, setUsename] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        if (username.trim() && password.trim() && password.trim()) {
            e.preventDefault();
            handleRegister(email, username, password, navigate);
            console.log({ email, username, password });
            setPassword("");
            setUsename("");
            setEmail("");
        }
    };

    return (
        <main className="signup">
            <form className="signup_form" onSubmit={handleSubmit}>
                <h2 className="signup_title">Create an account</h2>
                <label htmlFor="email">Email Address</label>
                <input 
                    id="email"
                    name="email"
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    type="text"
                    required
                    name="username"
                    value={username}
                    onChange={(e) => setUsename(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="signupButton">REGISTER</button>
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                   Already have an ccount?{" "}
                    <Link className="link" to="/">
                        Sign in
                    </Link>
                </p>
            </form>
        </main>
    );
};

export default Signup;