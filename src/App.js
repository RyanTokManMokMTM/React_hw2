import GetJSON from './Components/getJSON'

const user = "RyanTokManMokMTM"
const url = `https://api.github.com/users/${user}`

function App() {
  return (
    <div className='profile'>
      <GetJSON source = {url}/>
    </div>
  );
}

export default App;
