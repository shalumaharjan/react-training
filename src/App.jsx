import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [input, setInput] = useState("");

  // async: wait till another task not completed, fetching in bg
  const handleSubmit = async (event) => {
    if (event.key === "Enter") {
      try {
        // template literals `: can use declared variable - making dynamic
        // API call
        const response = await fetch(
          `https://yurippe.vercel.app/api/quotes?character=${characterName}&random=1`
        );
        const request = await response.json();
        // console.log(response);
        setQuotes(request);
        console.log(request);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // console.log(quotes);
  // console.log(input);

  return (
    <>
      {/* <h1>Hi</h1> */}
      <h2>Anime Quotes</h2>
      <input
        value={characterName}
        placeholder="Anime"
        onChange={(event) => setCharacterName(event.target.value)}
        onKeyUp={handleSubmit}
      />
      {/* <button onClick={useEffect}>Character</button> */}
      <ul>
        {quotes.map((item) => (
          <div key={item._id}>
            <li>{item.quote}</li>
            <li>{item.character}</li>
          </div>
          // item.character
        ))}
      </ul>
    </>
  );
}

export default App;
