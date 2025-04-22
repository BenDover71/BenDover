import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Signin = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")

    const navigate=useNavigate()

    const submit= async(e)=>{
        e.preventDefault()

        setLoading("Please wait as we log you in")

        try {
            const data= new FormData()
            data.append("email",email)
            data.append("password",password)
            
            const response=await axios.post(
                "https://nickson25.pythonanywhere.com/api/signin",
                data
            )

            setLoading("")
            if(response.data.user){
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/")
            }
            else{
                setError(response.data.Message)
            }
            


        } catch (error) {
            setLoading("")
            setError(error.message)            
        }
    
    }



    return (
        <div className="row justify-content-center nye">
            <div className="col-md-6 p-4 ">
                <h2 className="text-primary">Sign In</h2>
                {loading}
                {error}
                <form onSubmit={submit}>
                    <input type="email"
                        className="form-control"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter Email"
                        required />
                    <br />
                    <input type="password"
                        className="form-control"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required />
                    <br />
                    <button type="submit" className="btn btn-danger">Sign in</button>
                </form>
                <br />
                <p className="swe">Don't have an account?
                <Link to={"/Signup"}>Sign up</Link>
                </p>
            </div>
        </div>
    )
}
export default Signin
