import React, { useState } from "react";

const Palindrome = () => {
  const [number, setNumber] = useState("");

  const isPalindrome = n => {
    return (
      n
        .toString()
        .split("")
        .reverse()
        .join("") === n.toString()
    );
  };

  return (
    <section className="question">
      <h3>Problem #1: Integer Palindrome</h3>
      {number ? (
        <>{isPalindrome(number) ? <p>True</p> : <p>False</p>}</>
      ) : (
        <p>
          Enter a number, I will check to see if the string of that number is a
          palindrome...
        </p>
      )}
      <input
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Number"
        type="number"
        name="number"
      />
    </section>
  );
};

export default Palindrome;
