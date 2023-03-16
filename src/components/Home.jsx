import React from 'react'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <section id='welcome' className='grid home' name='welcome'>
      <div className="welcome-text">
        <h2>Space Enthuasist <br /> & JavaScript Developer</h2>
        <p className='leading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sit asperiores dolores nulla deserunt. Maiores dolorem optio nisi tempora enim.</p>
        <Link to='portfolio' smooth><button>View My Works</button></Link>
      </div>
      <div className="welcome-img">
        <img src="https://cdn.jsdelivr.net/gh/jashezan/cosmo-junkie/public/images/banner_image.png" alt="picture of planet" />
      </div>
    </section>
  )
}

export default Home