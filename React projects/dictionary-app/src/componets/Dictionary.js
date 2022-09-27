import React, {useEffect, useState} from 'react'
import './Dictionary.css'

// website  https://dictionaryapi.dev/

export default function Dictionary() {
  const [data, setData] = useState([]);
  const [currentWord, newWord] = useState("hello");
    //this fetches the api and uses our word to find the definition 
    const apiGet = (currentWord) =>{
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        setData([]);
      })
    }
    
    {JSON.stringify(data, null, 2)}

  function onClick(e) {
      e.preventDefault();
      lookUp();
  }

  function lookUp(){
    let passTheWord = currentWord;
    apiGet(passTheWord);
  }

  useEffect(() => {
    apiGet(currentWord);
  }, [])

  return (
    <div>
      <div id='container'>
      <div id='top'>
      <label id='label'>Dictionary App</label>
      <input type="text" placeholder="Enter a word" 
      onChange={(e) => newWord(e.target.value)}></input>
      </div>
      <button type='submit' onClick={onClick}>Search</button>
      <div>
      {data?.[0]?.word}
        <ul >
          {console.log(typeof data)}
          {console.log( data)}
        {data?.length ? data?.map((item,index) => (
          <li key={index}>
            <p>
            </p>
            <p>
            {item?.meanings[0]?.definitions[0]?.definition}
            </p>
          </li>
          
        )) :
            <li>
            No definitions found!
            </li>
        }
      </ul>
      </div>
      </div></div>
  )
}
