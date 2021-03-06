import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useHistory();

    useEffect(() => {
        if (loading) return;
        if (user) navigate.push("/Dashboard");
    }, [user, loading]);

    return (
        <div className="reset reveal-from-bottom">
            <div className="reset__container cta-inner section-inner">
                <input
                    type="text"
                    className="reset__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <button
                    className="reset__btn"
                    onClick={() => sendPasswordReset(email)}
                >
                    Send password reset email
                </button>
                <div className="reset__text">
                    Don't have an account? <Link to="/Register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Reset;