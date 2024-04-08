import TwoFer from './TwoFer'; 

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <TwoFer /> {"One for you, one for me." }
      <TwoFer name="Alice" /> {  "One for Alice, one for me"}
      <TwoFer name="Bob" /> { "One for Bob, one for me." }
    </div>
  );
}

export default App;
