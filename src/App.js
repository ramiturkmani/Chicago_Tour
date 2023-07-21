import './App.css';
import Title from './Title';
import PLACESList from './PLACESList';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <div className="App">
        <Title />
        <PLACESList />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;