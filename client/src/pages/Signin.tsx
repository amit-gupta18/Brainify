import { Button } from '../components/Button'
import '../App.css'

const Signin = () => {
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <div className="flex justify-between items-center mb-4">
                    <label htmlFor="username">Username :</label>
                    <input className="border border-purple-500 rounded-md p-2" type="text" id="username" placeholder="Username" />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <label htmlFor="password">Password :</label>
                    <input className="border-purple-500 border rounded-md p-2 active:border-purple-500" type="password" id="password" placeholder="Password" />
                </div>
                <div className="w-full flex justify-center items-center">
                    <Button variant="primary" text="Signup" />
                </div>
            </div>
        </div>
    )
}

export default Signin