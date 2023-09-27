import './App.css';

import Countdown from 'react-countdown';

// Random component
const Completionist = () => <h1 className='heading'>See you soon!<br/> I love you!</h1>;

const HappyDate = new Date("November 23, 2023 17:30 UTC-4");
// const HappyDate = Date.now() + 3000;

// Credit: https://github.com/x1-Il/Birth-chrono
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (<div>
        <h1 className='heading'>
          Countdown to Kat's Visit
        </h1>
        <div className='countdown-wrapper'>
          <div className='countdown-box'>
            {days}
            <span className='legend'>Days</span>
          </div>
          <div className='countdown-box'>
            {hours}
            <span className='legend'>Hours</span>
          </div>
          <div className='countdown-box'>
            {minutes}
            <span className='legend'>Minutes</span>
          </div>
          <div className='countdown-box'>
            {seconds}
            <span className='legend'>Seconds</span>
          </div>
        </div>
      </div>);
  }
};

function App() {
  return (
    <div className="page">
      <Countdown date={HappyDate} renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  );
}

export default App;
