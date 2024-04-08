
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

function App() {
  return (
    <div>
      <h1>Color Code</h1>
      <ul>
        {COLORS.map((color, index) => (
          <li key={index}>{color}: {colorCode(color)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
