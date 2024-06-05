import {Routes,Route, BrowserRouter } from 'react-router-dom';
import './styles.css';
import  VotingIndex  from "./component/voting/votingIndex";


function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route exact path='/' element={<VotingIndex/>} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

