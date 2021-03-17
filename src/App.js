import app, { auth } from './firebase';

function App() {

  const handleLogin = () => {
    console.log(auth.signInWithEmailAndPassword('test@gmail.com', 'testtest'));
  }

  return (
    <div className="App">
      <button onClick={handleLogin}>Test</button>
    </div>
  );
}

export default App;
