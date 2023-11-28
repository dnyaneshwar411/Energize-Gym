import { useRef, useState } from 'react'
import './index.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Pages/Home';
import logo from '/assets/img/icon.png'

function App() {
  const nav = useRef();
  const links = [{ id: 1, title: 'HOME', link: '/' }, { id: 2, title: 'ABOUT', link: '/about' }, { id: 3, title: 'CONTACT', link: '/contact' }, { id: 4, title: 'FACILITIES', link: '/facilities' }]
  const socials = ['logo-instagram', 'logo-facebook', 'logo-twitter'];
  const navItemClick = function (e) {
    nav.current.classList.remove('nav-toggle');
  }
  return (
    <>
      <nav className='flex gap-8 py-6 secondary-font items-center container-css'>
        <div className='secondary-font text-4xl mr-auto'><NavLink to="/">ENERGIZE</NavLink></div>
        <ul ref={nav} className='list-none gap-8 flex items-center'>
          {links.map(item => (<li onClick={e => navItemClick(e)} key={item.id} className={'font-medium text-slate-400 hover:text-white'} > <NavLink to={item.link}>{item.title}</NavLink></li>))}
        </ul>
        <button className="btn-primary">Join</button>
        <ion-icon name="menu-outline" onClick={() => nav.current.classList.toggle('nav-toggle')}></ion-icon>
      </nav >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element="about" />
        <Route path="/contact" element="contact" />
        <Route path="/facilities" element="facilities" />
      </Routes >
      <footer className='container-css'>
        <div className="news-letter">
          <span className="text-highlighter">Your commitment, our passion </span>
          <h3 className='mb-4 mt-2'>NEWSLETTER</h3>
          <div className='relative'>
            <input type="text" placeholder='Email' />
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-y-[2rem] md:gap-[2rem] my-[80px]">
          <div className="w-full md:w-1/2">
            <img src={logo} alt="Energize website logo" className='float-left w-[80px] mr-5' />
            <p className="inline">Embark on a transformative journey with Energize. Every workout here is a step toward a healthier, happier you.</p>
          </div>
          <ul className='w-full sm:w-1/2 md:w-1/4 '>
            {links.map(link => (<li key={link.id} className='secondary-font text-slate-500 text-[20px] hover:text-white'><NavLink to={link.link}>{link.title}</NavLink></li>))}
          </ul>
          <div className='w-full sm:w-1/2 md:w-1/4 '>
            <span className="secondary-font block text-[20px]">LET'S CHAT</span>
            <a href="mailto: dnyaneshwarpk20@gmail.com" className='text-slate-400'>energize.gym@gmail.com</a>
            <div className="socials mt-4">
              {socials.map((icon, index) => (<ion-icon key={index} name={icon} className='text-slate-400 text-[2px]'></ion-icon>))}
            </div>
          </div>
        </div>
        {/* <hr className='bg-slate-400 opacity-25 mb-[60px]' /> */}
        <p className='mx-auto'>© 2023 | Made with passion by <a href="tel: +919067183889" className='text-[#D80032]'>@Dnyaneshwar</a></p>
      </footer>
    </>
  )
}

export default App
