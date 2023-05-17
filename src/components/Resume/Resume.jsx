import React from "react";

const ResumeButton = () => {
  const handleDownload = () => {
    const pdfLink =
      "https://drive.google.com/file/d/1PzbjhTs0nFTEA4lS1hEmnHNqxp0UpCMk/view?usp=sharing";
    window.open(pdfLink, "_blank");
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="bg-red-600 text-white pl-5 pr-5 pt-1 pb-2 rounded mt-3 font-semibold"
      >
        Resume
      </button>
    </div>
  );
};

export default ResumeButton;
