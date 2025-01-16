import React from "react";
import { Link } from "react-scroll";
import img1 from "../images/img-1.jpg";
import img3 from "../images/img-2.jpg";
import img2 from "../images/img-3.png";
import img4 from "../images/img-4.jpg";

const Description = () => {
  return (
    <div id="ctda" className="max-w-3xl text-centre md:my-0 my-10 p-4 px-6 bg-[#EBE7D9] rounded-md shadow-lg">
      <h2 className="text-3xl text-grey-800 my-6 font-serif">What is CTDA?</h2>
      <p className="text-grey-600 text-xl mb-8 font-serif">
        "The Conversational Time-Coded Data Analyser (CTDA) is a project focused
        on analysing chat data, particularly from chat-based applications like
        WhatsApp, to extract valuable insights from professional conversations.
        CTDA processes unstructured data from exported chat conversations and
        applies quantitative conversation text analysing techniques for topic
        modelling and interaction analysis."
      </p>
      <p className="text-grey-600 text-xl mb-8 font-serif">
        [We take your conversation and analyse it for you and present you with
        the output in a visualised format you'll understand.]
      </p>

      <p className="text-lg text-grey-700 mt-4 font-serif font-bold">
        Analyse your Convo
      </p>
      <Link
        to="file-upload"
        smooth={true}
        duration={500}
        className="inline-block cursor-pointer my-2 bg-[#0F222D] text-white px-4 py-2 rounded-md shadow-xl hover:bg-cyan-500 transition duration-200 font-sans"
      >
        Analyse
      </Link>
      <div className="grid grid-cols-2 gap-4 mb-14 mt-10">
        <img
          src={img1}
          alt="Image 1"
          className="w-full h-[100%] rounded-md shadow-md"
        />
        <img
          src={img2}
          alt="Image 2"
          className="w-full h-[100%] rounded-md shadow-md"
        />
        <img
          src={img3}
          alt="Image 3"
          className="w-full h-[100%] rounded-md shadow-md"
        />
        <img
          src={img4}
          alt="Image 4"
          className="w-full h-[100%] rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default Description;
