import React from "react";
import FileUpload from './FileUpload';
import Description from './Description';
import logo from "../images/Preview.png";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App h-auto pb-20 flex flex-col justify-center items-center text-center bg-[#FFF5D0] p-4">
      <h1 className="text-5xl mt-8 mb-4 text-white font-serif">
        <Link
          to="ctda"
          smooth={true}
          duration={500}
          className="inline-block cursor-pointer"
        >
          <img className="rounded-xl" src={logo} alt="Preview Logo" />
        </Link>
      </h1>

        <Description />
        <FileUpload />
    </div>
  );
}

export default App;
