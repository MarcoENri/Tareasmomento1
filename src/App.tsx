<<<<<<< HEAD

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
=======
import TwoFer from './TwoFer'; 
>>>>>>> a9299191c66601bebc48ea3a74b98dd8b55d05b2

function App() {
  return (
    <div>
<<<<<<< HEAD
      <h1>Color Code</h1>
      <ul>
        {COLORS.map((color, index) => (
          <li key={index}>{color}: {colorCode(color)}</li>
        ))}
      </ul>
=======
      <h1>Welcome to My App</h1>
      <TwoFer /> {"One for you, one for me." }
      <TwoFer name="Alice" /> {  "One for Alice, one for me"}
      <TwoFer name="Bob" /> { "One for Bob, one for me." }
>>>>>>> a9299191c66601bebc48ea3a74b98dd8b55d05b2
    </div>
  );
}

export default App;
