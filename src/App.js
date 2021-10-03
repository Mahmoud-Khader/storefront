import './App.css';
import Header from './components/header';
import ActiveCat from './components/activeCat';
import Product from './components/products';
import Footer from './components/footer';
import Categories from './components/categories';

function App() {
  return (
    <>
    <Header/>
       <Categories/>
        <ActiveCat/>
        <Product/>
    <Footer/>
    </>
  );
}

export default App;