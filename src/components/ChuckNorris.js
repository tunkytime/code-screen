import React, { useState } from "react";
import axios from "axios";

const ChuckNorris = () => {
  const [category, setCategory] = useState("");
  const [jokeByCategory, setJokeByCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [jokeByQuery, setJokeByQuery] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [queryError, setQueryError] = useState(null);

  const jokeCategory = category => {
    setCategoryError(null);
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(res => {
        console.log(res);
        setJokeByCategory(res.data.value);
        return res;
      })
      .catch(e => {
        console.log(e);
        setCategoryError(e);
        return null;
      });
  };

  const jokeSearch = query => {
    setQueryError(null);
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
      .then(res => {
        console.log(res);
        setJokeByQuery(res.data.result[0].value);
        return res;
      })
      .catch(e => {
        console.log(e);
        setQueryError(e);
        return null;
      });
  };

  return (
    <section className="question">
      <h3>Problem #2: Chuck Norris API</h3>

      {/* search by category */}
      <div>
        {categoryError ? (
          <p>Hmm... try searching something else</p>
        ) : (
          <p>{jokeByCategory}</p>
        )}
        <input
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Category"
          type="text"
          name="category"
        />
        <br></br>
        <button
          style={{ marginTop: 10 }}
          className="btn"
          onClick={() => jokeCategory(category)}
        >
          Search by Category
        </button>
      </div>

      {/* search by query string */}
      <div style={{ marginTop: 20 }}>
        {queryError ? (
          <p>Hmm... try a different search</p>
        ) : (
          <p>{jokeByQuery}</p>
        )}
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="String"
          type="text"
          name="query"
        />
        <br></br>
        <button
          style={{ marginTop: 10 }}
          className="btn"
          onClick={() => jokeSearch(query)}
        >
          Search by String
        </button>
      </div>
    </section>
  );
};

export default ChuckNorris;
