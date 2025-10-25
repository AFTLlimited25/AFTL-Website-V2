"use client";
import React, { useState } from "react";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    if (!validTypes.includes(selectedFile.type)) {
      setMessage("Only PDF or Word files are allowed!");
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch("/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setMessage("Resume uploaded successfully!");
        setFile(null);
      } else {
        setMessage("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Upload failed. Please try again.");
    }
  };

  return (
    <div className="mt-16 p-8 rounded-lg shadow-lg bg-white max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Upload Your Resume</h2>
      <p className="mb-4 text-aftl-body">Submit your resume and we will get back to you.</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Upload
        </button>
      </form>
      {message && (
        <p className={`mt-2 ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default UploadResume;
