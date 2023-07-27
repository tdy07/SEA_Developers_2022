import React from 'react'
import Logo from './images/qalogo.svg'

function HeaderComponent() {
  return (
    <header>
        <nav className='navbar'>
            <a href='https://www.qa.com'>
            <img src={Logo} alt='QA Ltd' width='100'></img>
            </a>
            <a href='/' className='mr-auto'>
            <h1>Todo App</h1>
            </a>
        </nav>
    </header>
  )
}

export default HeaderComponent