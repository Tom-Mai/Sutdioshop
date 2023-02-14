import logo from './logo.svg';
import './App.css';
import {TestComponent, ListArticles, Counter, UserList} from './Components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const fakeData = [
  { name : 'marguarita', price: 25},
  { name : '4 saison', price: 22.5},
  { name : 'fromagi', price: 17},
  { name : 'BBQ', price: 35}
]
let point = 0;

const addSomePoint = () => {
  point += 1;
  console.log(point);
}

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Routes>
            <Route path='/List' element={<ListArticles articles={fakeData}/>}></Route>
            <Route path='/Test' element={<TestComponent functionClick={addSomePoint} points={point} />}></Route>
            <Route path='/Pomme' element={<h1>Quel idée, des pommes sur une pizza ?!</h1>}></Route>
            <Route path='/Counter' element={<Counter />} ></Route>
            <Route path='/UserList' element={<UserList/>} ></Route>

            
          </Routes>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Router>
  );
}

export default App;
