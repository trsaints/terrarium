import "./App.css";

function App() {
  return (
    <div id="page">
      <h1>My Terrarium</h1>

      <div id="left-container" className="container">
        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant1" src="/plant1.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant2" src="/plant2.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant3" src="/plant3.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant4" src="/plant4.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant5" src="/plant5.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant6" src="/plant6.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant7" src="/plant7.png" />
        </div>
      </div>

      <div id="right-container" className="container">
        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant8" src="/plant8.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant9" src="/plant9.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant10" src="/plant10.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant11" src="/plant11.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant12" src="/plant12.png" />
        </div>
        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant13" src="/plant13.png" />
        </div>

        <div className="plant-holder">
          <img className="plant" alt="plant" id="plant14" src="/plant14.png" />
        </div>
      </div>

      <div id="terrarium">
        <div className="jar-top"></div>
        <div className="jar-walls">
          <div className="jar-glossy-long"></div>
          <div className="jar-glossy-short"></div>
        </div>
        <div className="dirt"></div>
        <div className="jar-bottom"></div>
      </div>
    </div>
  );
}

export default App;
