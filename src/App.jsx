import Card from './components/Card';
import Header from './components/Header'
import fontawesome from '@fortawesome/fontawesome'
import { faEarthAmericas, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import data from './data'
fontawesome.library.add(faEarthAmericas, faLocationDot);


function App() {
  return (
    <>
      <Header />
      <section className='cards-section'>
        { data.map(card=><Card key={card.id} {...card} /> )}
      </section>
      
    </>
  )
}

export default App
