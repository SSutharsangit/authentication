import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
function Sigin() {
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: '',
  });
  const[data,setdata]=useState();
  const[error,seterror]=useState("");
  const[loading,setloading]=useState(false);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
setloading(true);
if (!formdata.username || !formdata.email || !formdata.password) {
  seterror({ message: "Please fill in all the fields" });
  setloading(false)
  return;
}
try {
  const response = await axios.post("http://localhost:5000/signup", formdata);
  setdata(response.data);
  setFormdata({
    username: '',
    email: '',
    password: '',
  })
  navigate("/Signin");


} catch (error) {
  if (error.response && error.response.status === 400) {
    seterror({ message: "Username or email already in use" });
  } else {
    seterror(error);
  }
} finally {
  setloading(false);

  setTimeout(() => {
    seterror('');
  }, 1000);

    
}
  };
  const handlegoogleLogin =  () => {

      window.location.href = 'http://localhost:5000/auth/google/callback',
      "self"
   
  };

  return (
    <form onSubmit={handleSubmit} className='container' style={{ maxWidth: '400px' }}>
      <p className='text-center fw-semibold fs-3'>Sign Up</p>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={formdata.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Email1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={formdata.email}
          onChange={handleInputChange}
        />
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
      </div>

      <div className="row my-6">
        <button type="submit" className="btn btn-primary my-2" disabled={loading}>
          {loading ? 'Signing Up...' : 'SIGN UP'}
        </button>
        <button type="button" className="btn btn-danger my-2" onClick={handlegoogleLogin}>
          CONTINUE WITH GOOGLE
        </button>
      </div>
      <p>
        Have an account?
        <Link to="/signin">
          <span className='text-primary'>Sign in</span>
        </Link>
      </p>
      {data && <p className='fs-2' style={{ color: 'green' }}>{data.success}</p>}
{error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </form>
  );
}

export default Sigin;