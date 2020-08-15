import React from 'react'
import './layout.css'

const Layout = ({getDetails}) =>{
    return(
        <div>
        <header className="header header--purple">
         
          <h1 className="header__title font-display">
            ALL ABOUT IP 
          </h1>
        </header>
        <div className="info">
          <p className="info__text font-body">This is where I share all of my great creative work! Here are some links that will direct you toward my awesome channels.</p>
          <ul className="info__link-list">
            <li className="info__link-list-item">
              <a className="button font-display" href="#">link 1</a>
            </li>
            <li className="info__link-list-item">
            <button className="button font-display" onClick={() => getDetails}>Get Details</button>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Layout