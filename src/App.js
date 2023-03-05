import logo from './logo.svg';
import './App.css';
import Speakers from './components/Speakers';
import SpeakerItem from './components/SpeakerItem';

function App() {
  return (
    <div className="App"> 
    <h1>Engineering <br></br>for<br></br> Good Research Symposium</h1>
    <h2>Overview
      <p>Info</p>
      <a href="https://google.com/">Registration Link!</a>
    </h2>
    <h3>Meet the Speakers</h3>
     <body>
     <figure className='speaker__item__pic-wrap' data-category="Speaker Name" >
                    <img 
                    src='images/blank-profile.webp'
                    alt="Speaker 1"
                    />
                </figure>
    {/* <img src="images/blank-profile.webp" alt="speaker 1" height="200" width="200" /> */}
    <p>Some layout models such as table and ruby have a complex internal structure, with several different roles that their children and descendants can fill. This section defines those "internal" display values, which only have meaning within that particular layout mode.
.</p>
<figure className='speaker__item__pic-wrap' data-category="Speaker Name" >
                    <img 
                    src='images/blank-profile.webp'
                    alt="Speaker 2"
                    />
                </figure>
    {/* <img src="images/blank-profile.webp" alt="speaker 2" height="200" width="200" /> */}
    <p>Some layout models such as table and ruby have a complex internal structure, with several different roles that their children and descendants can fill. This section defines those "internal" display values, which only have meaning within that particular layout mode.
.</p>
<figure className='speaker__item__pic-wrap' data-category="Speaker Name" >
                    <img 
                    src='images/blank-profile.webp'
                    alt="Speaker 3"
                    />
                </figure>
    {/* <img src="images/blank-profile.webp" alt="speaker 3" height="200" width="200" /> */}
    <p>Some layout models such as table and ruby have a complex internal structure, with several different roles that their children and descendants can fill. This section defines those "internal" display values, which only have meaning within that particular layout mode.
.</p>
  </body>
      
      
      
      
      
      {/* <h1 className="App-header">
      Engineering for <br></br>
      Good Research Symposium
      </h1>
      <article className="overview">
          <h2>Overview</h2>
          <p>overview </p>
      </article> */}
   
{/* 
      <article className="Speaker-1">
          <h2>Speaker 1</h2>
          <p> info</p>
      </article> */}

      {/* <article className="Speaker-article">
          <Speakers/>
      </article> */}
     {/* <Speakers/> */}

        
        {/* <article className="speaker-1">
          <h3>Speaker 1</h3>
          <p>Info about Speaker 1</p>
        </article>
        <article className="speaker-2">
          <h3>Speaker 2</h3>
          <p>Info about Speaker 2</p>
        </article>
        <article className="speaker-3">
          <h3>Speaker 3</h3>
          <p>Info about Speaker 3</p>
        </article> */}

    </div>
  );
}

export default App;
