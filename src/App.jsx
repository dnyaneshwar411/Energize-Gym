import { useRef, useState } from 'react'
import './index.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  const nav = useRef();
  const navLinks = [
    { id: 1, name: 'About', link: '/about', status: true },
    { id: 2, name: 'Contact', link: '/contact', status: false },
    { id: 3, name: 'Facilities', link: '/facilities', status: false },
  ]
  const navItemClick = function (e) {
    nav.current.classList.remove('nav-toggle');
  }
  return (
    <>
      <nav className='flex gap-8 py-6 secondary-font items-center container-css'>
        <div className='secondary-font text-4xl mr-auto'><NavLink to="/">ENERGIZE</NavLink></div>
        <ul ref={nav} className='list-none gap-8 flex items-center'>
          {navLinks.map(item => (<li onClick={e => navItemClick(e)} key={item.id} className={`font-medium ${item.status ? 'text-white' : 'text-slate-400'}`} > <NavLink to={item.link}>{item.name}</NavLink></li>))}
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
    </>
  )
}

export default App
