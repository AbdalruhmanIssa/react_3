import { useState } from "react";

export default function Player() {
  const [score, setScore] = useState(10);
  function handlePlusClick() {
   setScore(score+1);
  }
  const [name,setName] = useState({
    Firstname:"Abood",
    lastname:"Issa",
   
  });

  const NameChange = (e) => {
    const { name, value } = e.target;
    setName({
      ...setName,
      [name]: value,
    });
  };


  return (
    <>
      <label>
        Score: <b>{score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>First Name</label>
        <input type="text" value={name.Firstname} onChange={NameChange} />
  
        <label>Last Name</label>
        <input type="text" value={name.lastname} onChange={NameChange} />
    
    </>
  );
  }