import { Button } from "../components/Button"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;
    console.log("BASE_URL", BASE_URL);

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }
        await axios.post(`${BASE_URL}/api/v1/signup`, {
            username,
            password
        })
        navigate('/signin')
        alert("you have signed up !");
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <div className="flex justify-between items-center mb-4">
                    <label htmlFor="username">Username :</label>
                    <input ref={usernameRef} className="border border-purple-500 rounded-md p-2" type="text" id="username" placeholder="Username" />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <label htmlFor="password">Password :</label>
                    <input ref={passwordRef} className="border-purple-500 border rounded-md p-2 active:border-purple-500" type="password" id="password" placeholder="Password" />
                </div>
                <div className="w-full flex justify-center items-center">
                    <Button click={signup} variant="primary" text="Signup" />
                </div>
            </div>
        </div>
    )
}

export default Signup