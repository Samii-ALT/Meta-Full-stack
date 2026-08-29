import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  return(
    <ReactPlayer
    width={800}
    height={400}
    src='https://www.youtube.com/watch?v=q8arPR8CPfQ&list=RD8LVxb-VxozY&index=5' />
  )
}

export default App;
