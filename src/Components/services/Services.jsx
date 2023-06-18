import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>SEervices</h2>
    {/* UI/Ux Design */}
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* web development */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* Content Creation  */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>learn, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services