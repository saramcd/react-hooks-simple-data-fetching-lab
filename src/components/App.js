import { useState, useEffect } from "react";

// create your App component here

function App() {
  const [pic, setPic] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random").then((resp) =>
      resp.json().then((data) => setPic(data.message))
    );
  }, []);

  if (!pic) {
    return <p>Loading...</p>;
  }
  return <img src={pic} alt="A Random Dog" />;
}

export default App;
