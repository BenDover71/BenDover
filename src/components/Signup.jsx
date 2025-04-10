import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "../Signup.css";
const Signup=()=>{
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")


    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    const[loading,setLoading]=useState("")

    const submit=async(e)=>{
        e.preventDefault()

        // set loading hok variable to show loading message 
        setLoading("Please wait as we upload your data")

        try{
            // collecting the data 
            const data = new FormData()
            data.append("username",username)
            data.append("email",email)
            data.append("phone",phone)
            data.append("password",password)

            // posting the data to the database and awaiting for the response

            const response = await axios.post(
                "https://nickson25.pythonanywhere.com/api/signup",
                data
            )
            setLoading("")
            setSuccess(response.data.Success)

        }catch(error){
            setLoading("")
            setError(error.message)

        }

    }

    
    return(
        <div className="row justify-content-center  nye">
            <div className="col-md-6  p-4">
                <h2 className="text-dark">Sign up</h2>
                {loading}
                {error}
                {success}
                <form onSubmit={submit} className="">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Enter Username" 
                    value={username} 
                    onChange={(e)=>setUsername(e.target.value)}
                    required /> 
                    <br />

                    
                    <input type="email"  
                    className="form-control" 
                    placeholder="Enter Email"
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    required /> <br />
                    <input type="password"  
                    className="form-control" 
                    placeholder="Enter Password"
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    required /> <br />
                    <input type="text"  
                    className="form-control" 
                    placeholder="Enter Phone Number" 
                    value={phone} 
                    onChange={(e)=>setPhone(e.target.value)}
                    required /> <br />
                    <button type="submit" className="btn btn-danger">Sign up</button>
                </form>
                <p className="swe">Already have an account?
                <Link to={"/Signin"}>Sign In</Link>
                </p>
                                
            </div>            
        </div>
    )
}
export default  Signup