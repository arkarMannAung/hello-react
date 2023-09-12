import logo from './logo.svg';
import './App.css';
import CardComponent from "./components/CardComponent";

const users = [
  {id: 1,name: "mg mg",age: 22},
  {id: 2,name: "ma ma",age: 27},
  {id: 3,name: "aung aung",age: 26},
  {id: 4,name: "hla hla",age: 24},
]

function App() {
  const onClickAction = ({name,age})=>{
    alert(`${name+" "+age}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          users.map( ({id,name,age})=>{
            return <CardComponent 
              key={id} 
              onClickAction={onClickAction} 
              name={name} 
              age={age} 
              style={{width: 300}}
            />
          } )
        }
      </header>
    </div>
  );
}

export default App;
