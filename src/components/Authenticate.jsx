import { useState } from "react";



// eslint-disable-next-line react/prop-types
const Authenticate = ({token}) => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    

    const handleClick = async () => {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            console.log(token);
            const result = await response.json();
            console.log(result.message);
            setSuccess(result.message);
        } catch (error) {
            setError(error.message);
        }
    }
    return (
    <div>
        <h2> Authenticate </h2>
        {success && <p>{success}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
    </div>
)}

export default Authenticate;