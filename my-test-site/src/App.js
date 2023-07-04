import './App.css';
import img1 from "./foto/photo_2023-06-26_17-53-38 (2).jpg"
import img2 from "./foto/photo_2023-06-26_17-56-42.jpg"
import img3 from "./foto/photo_2023-06-26_20-18-09 (7).jpg"
import img4 from "./foto/photo_2023-06-27_12-34-07.jpg"
import img5 from "./foto/photo_2023-06-27_13-06-20 (2).jpg"
import img6 from "./foto/photo_2023-06-27_13-10-19.jpg"
import svg1 from "./svg/infographic_finance_statistics_business_graph_chart_pie_icon_254048.svg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
    <ul className="header-display">
      <li className="header-desp-item" > <img className="imgtitle" src="https://s1.iconbird.com/ico/0912/CrystalBW/w256h2561348673504budymsnnoir.png" alt="" /></li>
      <li className="header-desp-item">
      <ul className="header-list">
          <li className="header-item"> <button className="buttons">ПРО МЕНЕ</button></li>
          <li className="header-item"> <button className="buttons">НАПРЯМКИ ДІЯЛЬНОСТІ</button></li>
          <li className="header-item"> <button className="buttons">НОВИНИ</button></li>
          <li className="header-item"> <button className="buttons">МОЇ ПОДОРОЖІ</button></li>
        </ul>
      </li>
      <li className="header-desp-item">
      <ul  className="contact-head" >
          <li className="contact mail" ><a href="mailto:romarislm@gmail.com">romarislm@gmail.com</a></li>
          <li className="contact tel" ><a href="tel:+380953664254">+380953664254</a></li>
        </ul>
      </li>
    </ul>
        </div>
      </header>
      <main>
        <div className="fotocard">
        <ul className="main-list">
        <li className="main-item"><img className="fotomain" src={img1} alt="" /></li>
        <li className="main-item"><img className="fotomain" src={img2} alt="" /></li>
        <li className="main-item"><img className="fotomain" src={img3} alt="" /></li>
        <li className="main-item"><img className="fotomain" src={img4} alt="" /></li>
        <li className="main-item"><img className="fotomain" src={img5} alt="" /></li>
        <li className="main-item"><img className="fotomain" src={img6} alt="" /></li>
        </ul>
        </div>
      
      </main>
      <footer className="App-footer">
        <ul className="foo-list">
          <li className="foo-item"><img className="svg" src={svg1} alt="" /></li>
          <li className="foo-item"><img className="svg" src={svg1} alt="" /></li>
          <li className="foo-item"><img className="svg" src={svg1} alt="" /></li>
          <li className="foo-item"><img className="svg" src={svg1} alt="" /></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
