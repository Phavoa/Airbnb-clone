// import countries from "../utils/counties.json";
import { Link } from "react-router-dom";


const LoginPage = () => {
  return (
    <div className="mt-4 grow items-center flex justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mt-4">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
        </form>
        <div className="text-center py-2 text-gray-500">
            Dont't have an account yet? <Link to={'/register'} className="underline text-black">Register now</Link>
        </div>
      </div>
    </div>
    // <div className="h-screen flex items-center justify-center">
    //   <div className="border bg-white rounded-3xl max-w-3xl w-full overflow-auto h-[820px]">
    //     <div className="flex justify-center items-center mx-3 my-5">
    //       <button>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           className="size-8 bg-white"
    //         >
    //           <path d="M6 18 18 6M6 6l12 12" />
    //         </svg>
    //       </button>
    //       <h5 className="text-2xl font-bold mx-auto">Log in or sign up</h5>
    //     </div>
    //     <div className="border-t p-8">
    //       <h2 className="text-4xl font-medium mb-6 text-gray-800">
    //         Welcome to Airbnb
    //       </h2>
    //       <form className="space-y-4">
    //         <div>
    //           <div className="border-x rounded-3xl flex flex-col justify-center items-center">
    //             <select
    //               name="countries"
    //               id="countries"
    //               className="block w-full border-t border-1 rounded-3xl h-20 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
    //             >
    //               <option value="">
    //                 Select your country
    //               </option>
    //               {countries.map((country, index) => (
    //                 <option key={index} value={country.code}>
    //                   {country.country}
    //                 </option>
    //               ))}
    //             </select>
    //             <div className="block border border w-full"></div>
    //             <input
    //               type="tel"
    //               id="phnoneNumber"
    //               className="block w-full border-b border-1 rounded-3xl h-20 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
    //               placeholder="+234"
    //             />
    //           </div>
    //         </div>
    //         <p>
    //           We’ll call or text you to confirm your number. Standard message
    //           and data rates apply. <br />
    //           <span className="font-bold">Privacy Policy</span>
    //         </p>
    //         <button type="submit" className="primary h-16">
    //           Continue
    //         </button>
    //       </form>

    //       <div className="flex justify-between items-center">
    //         <div className="w-6/12 border"></div>
    //         <div className="m-8">or</div>
    //         <div className="w-6/12 border"></div>
    //       </div>
          
    //       <div className="flex flex-col gap-4">
    //         <button
    //           type="submit"
    //           className="plane bg-white text-black h-16 text-xl font-bold border-2 border-black "
    //         >
    //             Continue with facebook
    //         </button>
    //         <button
    //           type="submit"
    //           className="plane bg-white text-black h-16 text-xl font-bold border-2 border-black "
    //         >
    //          Continue with Google
    //         </button>
    //         <button
    //           type="submit"
    //           className="plane bg-white text-black h-16 text-xl font-bold border-2 border-black "
    //         >
    //           Continue with Apple
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LoginPage;
