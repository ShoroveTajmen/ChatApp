import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };

  const handleChange = (event) => {};

  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-[16px] bg-[#131324]">
        <form
          className="flex flex-col gap-[32px] bg-[#00000076] rounded-3xl p-[32px] pr-[80px] pl-[80px]"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="flex items-center justify-center gap-[16px]">
            <img className="h-[80px]" src={Logo} alt="Logo" />
            <h1 className="text-white uppercase text-3xl font-bold">snappy</h1>
          </div>
          <input
            className="bg-transparent p-[16px] border-2 border-[#4e0eff] rounded-lg text-white w-full font-bold outline-none"
            type="text"
            placeholder="UserName"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            className="bg-transparent p-[16px] border-2 border-[#4e0eff] rounded-lg text-white w-full font-bold outline-none"
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            className="bg-transparent p-[16px] border-2 border-[#4e0eff] rounded-lg text-white w-full font-bold outline-none"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            className="bg-transparent p-[16px] border-2 border-[#4e0eff] rounded-lg text-white w-full font-bold outline-none"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button className="bg-[#997af0] text-white p-[7px] border-none font-bold cursor-pointer rounded-lg text-[15px] uppercase hover:bg-indigo-700 transition-all duration-700 ease-in-out" type="submit">Create User</button>
          <span className="text-white uppercase ">
            Already have an account ? <Link to="/login"><span className="text-[#4e0eff] font-bold underline">Login</span></Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
