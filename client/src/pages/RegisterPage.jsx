import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser =  async(e) => {
    e.preventDefault();
    const test = await axios.get('/register', {
        name,
        email,
        password
    });
    console.log(test.data);
  }

  console.log(name, email, password);
  return (
    <div className="mt-4 grow items-center flex justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mt-4">Register</h1>
        <form action="" className="max-w-md mx-auto" onSubmit={registerUser} >
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary" >Login</button>
        </form>
        <div className="text-center py-2 text-gray-500">
          Already a member?{" "}
          <Link to={"/login"} className="underline text-black">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
