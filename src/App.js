// src/App.jsx
import React, { useState } from "react";
import PromptForm from "./components/PromptForm";
import ResponseCard from "./components/ResponseCard";

function App() {
  const [response, setResponse] = useState("");

  const fetchResponse = async (prompt) => {
    setResponse("Generating...");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:3000/", // required by OpenRouter
          "X-Title": "AI Student Helper", // optional project name
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo", // or try: 'anthropic/claude-3-haiku-20240307'
          messages: [
            {
              role: "user",
              content: `Create a preschool lesson plan on: ${prompt}`,
            },
          ],
        }),
      });

      const data = await res.json();

      if (data.choices && data.choices.length > 0) {
        setResponse(data.choices[0].message.content);
      } else {
        console.error("Unexpected API response:", data);
        setResponse("Unexpected error occurred.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setResponse("Something went wrong while fetching from OpenRouter.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">AI Student Helper</h1>
      <PromptForm onSubmit={fetchResponse} />
      <ResponseCard response={response} />
    </div>
  );
}

export default App;
