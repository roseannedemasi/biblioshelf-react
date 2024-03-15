import './Home.css';
import Header from '../components/header';
import Banner from '../components/banner'; 

function Home() {
  return (
    <div>
        <Header />
        <div className='container'>
            <Banner />
            <img src='/img/image_books1.avif' alt='Foto de livros antigos' style={{ width: '100%', height: 'auto' }} />
        </div>
    </div>
  )
}

export default Home;