import './App.css'
import Calendar from './Calendar'
import dayjs from 'dayjs'

function App() {
  return <div>
    <Calendar locale='en-US' value={dayjs(Date.now())} onChange={(date) => {
      alert(date.format('YYYY-MM-DD'));
    }} />
  </div>
}

export default App
