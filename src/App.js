
import './App.css';
import Profile from './profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile fullname = "khaled" bio = "futur devlopper" profession = "student" age = {24}> 
      <img src='https://media.licdn.com/dms/image/C4D03AQFkwgbXHSvqfA/profile-displayphoto-shrink_800_800/0/1644313952041?e=2147483647&v=beta&t=01mqeTrEa2LTssErNcTIbmxr-LMt3xx8T0lq2NMu9x0' alt='me'/>
      </Profile>
    </div>
  );
}

export default App;
