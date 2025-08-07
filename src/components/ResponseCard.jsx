// src/components/ResponseCard.jsx
import React from "react";

const ResponseCard = ({ response }) => {
  if (!response) return null;

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow mt-4">
      <h2 className="font-bold text-lg mb-2">Lesson Plan:</h2>
      <p className="whitespace-pre-wrap">{response}</p>
    </div>
  );
};

export default ResponseCard;
