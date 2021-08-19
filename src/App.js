import './App.css';
import './components/MobileMedia.css'
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

function App() {
  return (
    <div className="App">
      <Mobile/>
      <Desktop/>
      <style>
         @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300&display=swap');
         @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&display=swap');
      </style> 
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="blank">Frontend Mentor</a>. 
        <br></br>
        Coded by <a href="https://github.com/Nytezerak/faq_challenge">Chrystian Ribeiro (Nytezerak)</a>.
      </div>
    </div>
  );
}


export default App; 
