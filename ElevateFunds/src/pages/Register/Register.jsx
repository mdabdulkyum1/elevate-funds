import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import GoogleLogin from "../../components/shared/GoogleLogin/GoogleLogin";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;
    const photo = formData.photoURL;

    if (password.length < 6) {
      setErr("Password must be at least 6 characters!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErr("Password must have an Uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErr("Password must have a Lowercase letter!");
      return;
    }


    createUser(email, password)
    .then((result) => {
      // Signed up 
      const user = result.user;
      if(user){
        Swal.fire({title:"Register Successfully!"});
        navigate('/');
      }
      updateUserProfile(name, photo).then(() => {})
    })
    .catch((error) => {
      throw(error);
    });


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label htmlFor="photoURL" className="block font-medium mb-2">
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your photo URL"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          {err && <p className="text-red-500 mt-1">{err}</p>}
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-bold rounded-md hover:bg-opacity-90 transition"
            >
              Register
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center my-4">
          <span className="h-px bg-gray-300 w-full"></span>
          <span className="px-4 text-gray-500">or</span>
          <span className="h-px bg-gray-300 w-full"></span>
        </div>

        <GoogleLogin></GoogleLogin>


        {/* Redirect to Login */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
