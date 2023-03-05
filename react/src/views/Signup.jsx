import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { setUser, setToken } = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault;
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmRef.current.value,
        };

        axiosClient
            .post("/signup", payload)
            .then(({ data }) => {
                setToken(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Create an Account</h1>
                    <input
                        ref={nameRef}
                        type="text"
                        name="name"
                        placeholder="Full Name"
                    />
                    <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        ref={passwordConfirmRef}
                        type="password"
                        name="password"
                        placeholder="Confirm Password"
                    />
                    <button className="btn btn-block">Register</button>
                    <p className="message">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
