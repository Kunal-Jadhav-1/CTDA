import React, { useState } from "react";

const FileUpload = () => {
  const [fileContent, setFileContent] = useState("");
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleRemoveFile = () => {
    setFileContent("");
    setFileInputKey(Date.now());
  };

  return (
    <div
      id="file-upload" 
      className="flex flex-col justify-center font-serif font-semibold items-center h-[70%] bg-white rounded-md p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-3xl"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl mb-4">Upload Your Convo Here</h2>
      <label className="cursor-pointer bg-cyan-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-cyan-500 transition duration-200 font-sans">
        Upload
        <input
          key={fileInputKey}
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
      <div className="mt-4 w-full">
        {fileContent && (
          <>
            <pre className="h-60 sm:h-72 md:h-80 max-h-80 bg-slate-200 text-sky-950 p-4 rounded-md shadow-md overflow-y-auto text-left">
              {fileContent}
            </pre>
            <button
              onClick={handleRemoveFile}
              className="mt-4 bg-red-400 text-white px-4 py-2 rounded-md shadow-lg hover:bg-red-700 transition duration-200"
            >
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
