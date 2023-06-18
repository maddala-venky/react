import React from "react";

function NameList() {
  const names = ["venky", "madhuri", "sampath", "lakshmi", "suryanarayana"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

export default NameList;

