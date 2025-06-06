
import './App.css';

function App() {
  return (
    <>
    <div className='main'>
    <div className='result'>
<h1>Your Result</h1>
<div className='circle'><p className='average-marks'><span className='score'>76</span> <br/> <span className='of100'>0f 100</span></p></div>

<p className='conclusion'><span className='highlight'>Great</span><br/>you scored higher than  65% of the people who have taken these tests</p>
    </div>
    <div className='summary'>
<h1 className='summary-heading'>Summary</h1>
<p className='reaction'>Reaction 80/100</p>
<p className='memory'>Memory 92/100</p>
<p className='verbal'>Verbal 61/100</p>
<p className='visual'>Visual 72/100</p>
<button className='btn'>Continue</button>
    </div>

      </div>
      <footer className='footer'>
        Challenge by <a href='https://www.crio.do/'>Crio</a> Coded by <a href="https://github.com/Aryan8121998">Aryan</a>
      </footer>
    </>
      
    
  );
}

export default App;
