import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // async: wait till another task not completed, fetching in bg
  const handleSubmit = async (event) => {
    event.preventDefault(); // form submitted, prevent reloading
    console.log("Form Submitted");

    // if (event.key === "Enter") {
    try {
      setLoading(true); //show loading while fetching
      setError("");
      setQuotes([]);

      // template literals `: can use declared variable - making dynamic
      // API call
      const response = await fetch(
        `https://yurippe.vercel.app/api/quotes?character=${characterName}&random=1`
      );
      const request = await response.json();
      // console.log(response);

      if (response.status === 404) {
        throw new Error("Character not found");
      }
      setQuotes(request);
      // console.log(request);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    // }
  };

  // console.log(quotes);
  // console.log(input);

  return (
    <>
      <h1>Anime Quotes</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={characterName}
          placeholder="Anime Character"
          onChange={(event) => setCharacterName(event.target.value)}
          // onKeyUp={handleSubmit}
        />
        <button type="Submit">Search</button>
      </form>
      {loading && <p>Loading.......</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* <button onClick={useEffect}>Character</button> */}
      <ul>
        {quotes.map((item) => (
          <div key={item._id}>
            <p style={{ fontWeight: "bold" }}>{item.show}</p>
            <p>{item.quote}</p>
            <p style={{ fontWeight: "bold" }}>- {item.character}</p>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
