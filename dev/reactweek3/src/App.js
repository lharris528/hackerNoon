import { useState, useEffect } from "react";
import './App.css';
import jwt from "jsonwebtoken";

const getToken = () => jwt.sign({
  exp: (() => Math.floor(Date.now() / 1000) + 60)(),
  "iss": "learn-web-dev-camper-key"
}, "web-dev-camper-secret");


function App() {
  const [skills, setSkills] = useState();
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [seek, setSeek] = useState(false);
  const [inDemandSkills, setInDemandSkills] = useState(false);
  const [listOfSkills, setListOfSkills] = useState([]);

  const FetchingComponent = (text) => {
    https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/skills?q=metal&limit=50
    useEffect(() => {
      fetch(`https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/skills?q=${text}&limit=100`, {
        headers: {
          "Content-Type": "application/json",      
          authorization: `Bearer ${getToken()}`,
        },
      }).then(res => res.json()).then(res => {
        console.log(res)
        setSkills(res)
      })
    }, [])
  }

  FetchingComponent("metal");

useEffect(() => {
  console.log("Seek changed")
}, [seek])

useEffect(() => {
  setSeek(selectedTitles)
}, [selectedTitles])

useEffect(() => {
  let sameSkills = listOfSkills;
  let someVar = <div>Safety Minded</div>
  sameSkills.push(someVar)
  setListOfSkills(sameSkills)
}, [inDemandSkills])

const removeListItem = (id, tempSelectedTitles) => {
  let tempSelectedTitles2 = tempSelectedTitles;
  console.log(tempSelectedTitles2)
  let tempSelectedTitles3 = tempSelectedTitles2.filter(result => result.id !== id);
  setSelectedTitles(tempSelectedTitles3);
}

  return (
    <div className="App">
      <header className="App-header">
        <div className="parentBox">
          <div>
            <h1>Job Titles</h1>
            <ol className="joblist">
              {skills ? skills.data.map(res => 
                <li key={res.id} className="joblistitem">
                  <div>{res.name}</div>
                  <div>Score: {res.score}</div>
                  <button onClick = {() => {
                    let tempSelectedTitles = [selectedTitles];
                    const listItem = skills.data.filter(result => result.id === res.id)
                    const listItem2 = <li key={listItem[0].id}>
                      <h3>{listItem[0].name}</h3>
                      <p>{listItem[0].score}</p>
                      <button onClick = {() => {
                        removeListItem(listItem[0].id, tempSelectedTitles)
                      }}>Remove Listing</button>
                    </li>
                    console.log(listItem.id);
                    console.log(listItem[0].id);
                    tempSelectedTitles.push(listItem2);
                    console.log(listItem2);
                    console.log(tempSelectedTitles);
                    setSelectedTitles(tempSelectedTitles);
                    setInDemandSkills(true);
                    console.log(selectedTitles);
                  }}>Add to List</button>
                  </li> )
                : "Loading..."}
              </ol>
          </div>
          <div>
            <h1>Seeking to Hire</h1>
            <ol>
              {seek}
            </ol>
          </div>
          <div className="padded">
            <h1>Skills</h1>
            <ol>
              {listOfSkills}
            </ol>
          </div>
        </div>

      </header>
    </div>
  );
}


// useEffect((id) => {
//   let tempSelectedTitles2 = selectedTitles
//   tempSelectedTitles2.filter(result => result.id !== id);
//   setSelectedTitles(tempSelectedTitles2);
// }, [deselectedTitles])

// let AddToSeek = (props) => {
//   const [selectedTitles, setSelectedTitles] = useState([]);
//   const listItem = skills.data.filter(result => result.id === props.id)
//   const listItem2 = <li key={listItem[0].id}>
//       <h3>{listItem[0].name}</h3>
//       <p>{listItem[0].score}</p>
//     </li>
//   const tempSelectedTitles = selectedTitles;
//   tempSelectedTitles.push(listItem2);
//   setSelectedTitles(tempSelectedTitles);

//   return (
//   selectedTitles
//   )        
// }

export default App;