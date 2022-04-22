
/*
import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [people, setPeople]=useState([]);

useEffect(() =>{
  async function fetchPeople() {
    let res = await fetch ('https://swapi.dev/api/people/?format=json')
    let data = await res.json();
    setPeople(data.results);
  }

  fetchPeople();
}, []);
  return 
  <div className='App'> </div> 
}

export default App;
*/


import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [posts,setPosts]=useState([])
useEffect(()=>{
  //const url='https://jsonplaceholder.typicode.com/posts';//api url
  const url='https://swapi.dev/api/people/?format=json';//api url

  fetch(url).then(resp=>resp.json())//calling url by method GET
  .then(resp=>setPosts(resp.results))//setting response to state posts
},[])
  return (
    <div className="App">
      <h1 align="center">Star War's Combatants</h1>
      <div id="canvas">
      <table id="tbl">
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth Year</th>
        </tr>
      {/* lopping through each object and dispaying id and title of posts */}
      {
            posts.map(post=><tr><td>{`${post.name}`}</td><td>{`${post.gender}`}</td><td>{`${post.birth_year}`}</td></tr>)
      }
      </table>
      </div>
    </div>
  );
}

export default App;

