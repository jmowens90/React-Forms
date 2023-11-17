import { useState } from "react";



const SignUpForm = ({setToken}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: userName,
                    password: password
                })


            });
            const result = await response.json();
            console.log(result);
            setToken(result.token);
            console.log(result.token);
            
        } catch (error) {
            setError(error.message);
        }
    }
    
    return (
    <>
        <h2> Sign Up </h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label> User Name </label><input value={userName} onChange={(event) => setUserName(event.target.value)} />
            <label> Password </label><input value={password} onChange={(event) => setPassword(event.target.value)} />
            <button> Submit </button>
        </form>
    </>
)}

export default SignUpForm