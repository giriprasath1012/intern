import logo from './logo.svg';
import lg from './img2.png'
import './App.css';

function App() {
  
  return (
   
    <div className="App">
      <div className='Head'>
        <img src={lg} className="img2" />
        <div className='option'>
          <button className='home'  onClick={function hm()
          {
            const a=document.getElementById('topic');
            a.textContent="Home";
           
          }}>Home</button>
          <button className='contact'  onClick={function hm()
          {
            
            const a=document.getElementById('topic');
            a.textContent="Contact";
            
          }}>Contact</button>
          <button className='about'  onClick={function hm()
          {
            
            const a=document.getElementById('topic');
            a.textContent="About";
            
          }}>About</button>
        </div>
       
      </div>
      <header className="App-header">
        <h1 className='topic' id='topic'></h1>
        <img src={lg} className="App-logo" id="logo" />
        <p>
          Welcome to Website....
        </p>
        <button className="b1" onClick={
          function fun()
        {
            const a=document.getElementById('txt');
            a.textContent="Hai User...";
        }} >
          Click
        </button>
        
        <p className='t2' id='txt'>
         
        </p>
        
        <a
          className="App-link"
          href="https://github.com/giriprasath1012"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Profile
        </a>
        
        
      </header>
    </div>
  );
}

export default App;
