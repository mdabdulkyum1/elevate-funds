import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import GoogleLogin from "../../components/shared/GoogleLogin/GoogleLogin";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const { user,loginUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErr("");
    const email = formData.email;
    const password = formData.password;

    loginUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        if (user) navigate(location?.state ? location.state : "/");
        Swal.fire({ title: "Login success!" });
        // ...
      })
      .catch((error) => {
        Swal.fire({title:"Please Provide valid data.",   icon: "error",
        });
        setErr(error?.code);
        throw error;
      });
  };

  
  useEffect(()=>{
    if(user?.email){
      navigate(location?.state ? location.state : "/");
    }
  } ,[user,navigate,location])

  if(loading){
    return <h1>Loading..........</h1>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-bold rounded-md hover:bg-opacity-90 transition"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center my-4">
          <span className="h-px bg-gray-300 w-full"></span>
          <span className="px-4 text-gray-500">or</span>
          <span className="h-px bg-gray-300 w-full"></span>
        </div>

        <GoogleLogin></GoogleLogin>

        {/* Redirect to Register */}
        <p className="text-center mt-4 text-gray-600">
          Don{`'`}t have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-bold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
