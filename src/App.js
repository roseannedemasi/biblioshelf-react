import './App.css';
import Header from './components/header';
import Banner from './components/banner';

function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <Banner />
        <img src='/img/image_books1.avif' alt='Foto de livros antigos' style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  )
}

export default App;
