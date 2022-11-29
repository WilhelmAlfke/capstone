import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState();

  return (
    <form
      on
      Submit={(event) => {
        event.preventDefaultDefault();
        onSearch(input);
      }}
    >
      <section>
        <input
          type="text"
          placeholder="search"
          input={input}
          onChange={() => setInput(target.value)}
        />
        <button type="submit"></button>
      </section>
    </form>
  );
}
