import './App.css';
import axios from 'axios';
import { useEffect , useState} from 'react';

function App() {
  const [listOfUSer,setListOFUSer]=useState([])


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(Response => setListOFUSer(Response.listOfUSer))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div className="App">
      <h1>
        {listOfUSer.map((e)=> ( <ul> <li> {e.name} </li>  </ul>  )  )  }
      </h1>
      
    </div>
  );
}

export default App;
  