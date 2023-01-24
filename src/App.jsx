import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="pageContainer">
        <div className="leftColumn">
          <img src='assets/img/image-product-desktop.jpg' alt="" />
        </div>
        <div className="rightColumn">
          <div className="content">
            <h2>Perfume</h2>
            <h1>Gabrielle Essence Eau de Parfum</h1>
            <p>A floral, solar and voluptuous inerpretation composed by Olivier Polge, Perfumer-Creator for the House of Chanel</p>
            <div className="price">
              <h1 className="price">$149.99</h1>
              <h3 className="oldPrice">$169.99</h3>
            </div>
            <button className='buyBtn'>
              <img src="assets/img/icon-cart.svg" alt="" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
