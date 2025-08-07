// src/components/PromptForm.jsx
import React, { useState } from "react";

const PromptForm = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt);
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a topic like 'Colors for preschool'"
        className="w-full px-4 py-2 border rounded-lg shadow"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Generate
      </button>
    </form>
  );
};

export default PromptForm;
