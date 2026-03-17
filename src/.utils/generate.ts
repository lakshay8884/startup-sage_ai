export const handleImageGeneration = async (userPrompt: string) => {
  try {
    const response = await fetch("https://rq6jpy.buildship.run/executeWorkflow/w8CaxmIqjZF9TcVDLwlr/4003e69e-9a17-4e82-9348-cfbdaed3a0e8", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: userPrompt }),
    });
    
    const data = await response.json();
    return data.image_url; // This is the URL from your BuildShip flow
  } catch (error) {
    console.error("Generation failed:", error);
  }
};
