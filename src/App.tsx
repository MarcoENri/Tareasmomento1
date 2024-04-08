<<<<<<< HEAD
import TwoFer from './TwoFer'; 
=======

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;

type Colors = typeof COLORS[number];

export const colorCode = (color: Colors) => COLORS.indexOf(color);
>>>>>>> 5bc305c762ac253468c7088682a3fa3b5f408bf8

function App() {
  return (
    <div>
<<<<<<< HEAD
      <h1>Welcome to My App</h1>
      <TwoFer /> {"One for you, one for me." }
      <TwoFer name="Alice" /> {  "One for Alice, one for me"}
      <TwoFer name="Bob" /> { "One for Bob, one for me." }
=======
      <h1>Color Code</h1>
      <ul>
        {COLORS.map((color, index) => (
          <li key={index}>{color}: {colorCode(color)}</li>
        ))}
      </ul>
>>>>>>> 5bc305c762ac253468c7088682a3fa3b5f408bf8
    </div>
  );
}

export default App;
