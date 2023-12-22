import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { loginsuccesfully} from '../redux/Userslice'
function Sigup() {
  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
  });
  const[data,setdata]=useState();
  const[error,seterror]=useState("");
  const[loading,setloading]=useState(false);
  const dispatch = useDispatch();


  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlelogin =async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/admin/login", formdata);
      if (response.data.success) {
        navigate("/Home");
console.log(response.data.rest);
        dispatch(loginsuccesfully( response.data.rest));

      } 
    } catch (error) {
      seterror(error.response.data.message);
      console.log(error.response.data.message);
    }

  };

  return (
    <form onSubmit={handlelogin} className='container' style={{ maxWidth: '400px' }}>
      <p className='text-center fw-semibold fs-3'>Sign In</p>
      
      <div className="mb-3">
        <label htmlFor="Email1" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          value={formdata.Username}
          onChange={handleInputChange}
        />
          <p style={{ color: 'red' }}>
        {error==="User not found" ?"User not found":""}
        </p>
      </div>
      <div className="mb-3">
        <label htmlFor="Password1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={formdata.password}
          onChange={handleInputChange}
        />
          <p style={{ color: 'red' }}>
        {error==="Incorrect password" ?"Incorrect password":""}
        </p>
      </div>
<div className="row my-6">
<button type="submit" className="btn btn-primary my-2">
        SIGN IN
      </button>
</div>
<p>Don't Have an account?  

    <Link to="/Signup">
    <span className='text-primary'>Sign up</span>
    </Link>
   
    </p>
    </form>
    
  );
}

export default Sigup;


