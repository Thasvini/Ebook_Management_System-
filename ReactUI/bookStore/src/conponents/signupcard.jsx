import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import Book from "./BOOKSTORE/book.png"
const SignUp = () => {
    const [Name, setName] = useState("");
    const [Ph_no, setPh] = useState("");
    const [Email, setEmail] = useState("");
    const [PassWord, setPass] = useState("");
    const [Passr, setPassr] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchLatestUserID();
    }, []);

    const [latestUserID, setLatestUserID] = useState(0);

    const fetchLatestUserID = async () => {
        try {
            const response = await axios.get("http://localhost:5000/latestUserID");
            setLatestUserID(response.data.latestUserID + 1);
        } catch (error) {
            console.log("Error fetching latest user ID:", error);
        }
    };

    const Sub = async (e) => {
        e.preventDefault();
        try {
            if (PassWord !== Passr) {
                alert("Password Not Matched!");
            } else {
                await axios.post("http://localhost:5000/addUser", {
                    userid: latestUserID,
                    Name,
                    Ph_no,
                    Email,
                    PassWord,
                });
                console.log("Successfully Added");
                navigate('/');
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <>
            <div id="head">
                <h1><span><img src={Book} alt="" width="50px"/></span>BookWorms</h1>
            </div>
            
            <div className="SignUpContainer">
                <div className="SignUp">
                    <h2>Sign Up</h2>
                    <form>
                        <div className="Form">
                            <label>Username:</label>
                            <input
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="username"
                                name="username"
                                required
                            />
                            <label>Phone_no:</label>
                            <input
                                value={Ph_no}
                                onChange={(e) => setPh(e.target.value)}
                                type="number"
                                id="ph"
                                name="username"
                                required
                            />
                            <label>Email:</label>
                            <input
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                            <label>Password:</label>
                            <input
                                value={PassWord}
                                onChange={(e) => setPass(e.target.value)}
                                type="password"
                                id="password"
                                name="password"
                                required
                            />
                            <label>Confirm Password:</label>
                            <input
                                value={Passr}
                                onChange={(e) => setPassr(e.target.value)}
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                            />
                            <button id="submit" onClick={Sub}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
