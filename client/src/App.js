import './App.css';
// import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NamePromptModal from './components/modals/NamePromptModal'
import AdminModal from './components/modals/AdminModal'
import CoreCode from './CoreCode'
import EndGameModal from './components/modals/EndGameModal'
import InfoPage from './components/InfoPage'
import GameLeaderboard from './components/Game-LeaderBoard'
import GameQuestion from './components/Game-Question'
import { Container } from 'react-bootstrap'

function App(props) {
  const modals = props.data;  
  
  return (
    <BrowserRouter>
      <div className="App" style={{marginTop: "30px"}}>        
        <Container>
          <Routes>
            {modals.adminVisible === true &&
              <Route path="/" element={<AdminModal />} />
            }

            {modals.namePromptVisible === true &&
              <Route path="/" element={<NamePromptModal />} />
            }

            {modals.endGameVisible === true &&
              <Route path="/" element={<EndGameModal />} />                        
            }        
            <Route path="/players" element={<InfoPage />} />                        
            <Route path="/rankings" element={<GameLeaderboard />} />                                                                                          
            <Route path="/question" element={<GameQuestion />} />                                                                                          
          </Routes>
        </Container>
      </div>      
    </BrowserRouter>    
  );
}

export default App;
