import React,{useState} from 'react'
import "./User.css"
import { Link,useNavigate } from 'react-router-dom'
const User = () => {
    const history = useNavigate();
    const [name,setName]=useState('')
    const [dateofbirth,setDob]=useState('')
    const [emailid,setEmailid]=useState('')
    const [password,setPassword]=useState('')
    const [address,setAddress]=useState('')
    const [error,setError]=useState(null)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const users={name,dateofbirth,emailid,password,address}
        const response=await fetch('/api/user',{
            method:'POST',
            body:JSON.stringify(users),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json=await response.json()

        if(!response.ok){
                setError(json.error)
        }
        if(response.ok){
            setName('')
            setDob('')
            setAddress('')
            setPassword('')
            setEmailid('')
            setError(null)
            console.log('new user added',json);
            history('/userlogin');
        }

    }

  return (
<div id='userreg'>
    <form className='create' onSubmit={handleSubmit}>
        <h2>User Registration</h2>
        <div className='toge'>
        <label>Name:</label>
        <input type='text' onChange={(e)=>setName(e.target.value)}
        value={name} required
        />
        </div>
        <div className='toge'>
<label>Password:</label>
        <input type='password' onChange={(e)=>setPassword(e.target.value)}
        value={password} required />
        </div>
<div className='toge'>
<label>Date Of Birth:</label>
        <input type='date' onChange={(e)=>setDob(e.target.value)}
        value={dateofbirth} required
        />
</div>
<div className='toge'>
<label>Email ID:</label>
        <input type='text' onChange={(e)=>setEmailid(e.target.value)}
        value={emailid} required
        />
</div>
<div className='toge'>
<label>Address:</label>
        <input type='text' onChange={(e)=>setAddress(e.target.value)}
        value={address}
        />
</div>
<button>Submit</button>
       {error && <div className='error'>{error}</div>}
    </form>
    </div>

  )
}

export default User