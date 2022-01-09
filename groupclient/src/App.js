
import './App.css';

function App() {
  return (
    <div className="App">
       <div className='auth__form-container_fields-content_button'>
        <a href={`http://${window.location.hostname}:3000/`}>
        <button>Home</button>
        </a>
        </div>
    </div>
  );
}

export default App;
