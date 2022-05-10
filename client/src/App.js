import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import NamePromptModal from './components/modals/NamePromptModal'
// import AdminModal from './components/modals/AdminModal'
import EndGameModal from './components/modals/EndGameModal'
// import InfoPage from './components/InfoPage'
// import GameLeaderboard from './components/Game-LeaderBoard'
import GameQuestion from './components/Game-Question'
// import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{marginTop: "30px"}}>        
        <Container>
          <Routes>
            <Route path="/" element={<GameQuestion />} />
            <Route path="gameover" element={<EndGameModal />} />            
          </Routes>
        </Container>
      </div>      
    </BrowserRouter>    
  );
}

export default App;
