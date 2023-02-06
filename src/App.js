
import './App.css';
import Greeting from './components/Greeting';
import NameTag from './components/NameTag';

const person2 = {
  firstName: "Miguel",
  lastName: "Smith",
  email: "miguel@gmail.com",
  favColor: "pink",
  date: "2023/02/08"
}

function App() {
  return (
    <div className="App">

    <Greeting />
    <NameTag
    firstName ="Idan"
    lastName = "Fisher"
    email = "idan@gmail.com"
    favColor = "blue"
    date = "2023/02/06"
    />
    <h3>We have another name </h3>
    <NameTag
    firstName ={person2.firstName}
    lastName = {person2.lastName}
    email = {person2.email}
    favColor = {person2.favColor}
    date = {person2.date}
     />
    
    </div>
  );
}

export default App;
