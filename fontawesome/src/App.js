import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

// First, install these:
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon size="6x" icon={faBookmark} />
    </div>
  );
}

export default App;
