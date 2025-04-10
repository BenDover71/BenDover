import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Makepayment = () => {

    const{product}=useLocation().state || {}

    const[phone,setPhone]=useState("")
    const[message,setMessage]=useState("")

    const submit=async(e)=>{
        e.preventDefault()
        setMessage("Please Wait")

        const data=new FormData()
        data.append("phone",phone)
        data.append("amount",product.product_cost)

// using trycatch here isn't a must.It's just recommended 
        const response=await axios.post(
            "https://nickson25.pythonanywhere.com/api/mpesa_payment",
            data
        )
    setMessage("An MPESA Prompt has been sent to Your Phone,Please Check & Complete Payment")


    }


  return (
    <div className='nye'>
        <nav className='text-start'>
        <Link to='/' className="btn btn-primary mx-2" >Get Product</Link>
        </nav>
        <div>
        <h1>Make Payment - Lipa Na Mpesa</h1>
        <p>
            Product Name:{product.product_name}
        </p>
        <p>Product Cost:{product.product_cost}</p>
        
        <form onSubmit={submit}>
            {message} <br />
            <input type="text"
            placeholder='Enter Your Phone Number'
            value={phone} 
            onChange={(e)=>setPhone(e.target.value)}/>
            <br /><br />
            <button className='btn btn-primary' >Make payment</button>
        </form>
        </div>
    </div>
  )
}

export default Makepayment