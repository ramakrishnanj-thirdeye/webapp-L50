import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loginimg from "../assets/login_image.svg";

const Login = () => {
    const [username, setUsername] = useState("april@boulderinnovations.com");
    const [password, setPassword] = useState("password");
    const [error, setError] = useState(false);

    const handleLogin = () => {
        if (username === "april@boulderinnovations.com" && password === "password") {
            sessionStorage.setItem("login", "true");
            setError(false);
            window.location.reload(); // Navigate to the home page
        } else {
            setError(true);
        }
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <div className="row w-100 justify-content-center">
                <div className="col-md-8 col-sm-10">
                    <div className="card shadow-lg border-0 rounded-3">
                        <div className="row g-0">
                            {/* Left side with image */}
                            <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light">
                                <img
                                    src={loginimg}
                                    alt="Login"
                                    className="img-fluid p-4"
                                />
                            </div>

                            {/* Right side with form */}
                            <div className="col-md-6 bg-white">
                                <div className="p-5">
                                    <div className="text-center mb-4">
                                        <h1 className="h4 text-primary fw-bold">Welcome!</h1>
                                        <p className="text-muted">Please login to your account</p>
                                    </div>

                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>

                                        {error && (
                                            <div className="alert alert-danger" role="alert">
                                                Invalid username or password!
                                            </div>
                                        )}

                                        <button
                                            type="button"
                                            className="btn btn-primary w-100"
                                            onClick={handleLogin}
                                        >
                                            Login
                                        </button>
                                    </form>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
