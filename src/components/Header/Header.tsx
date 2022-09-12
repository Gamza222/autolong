import React, { FC } from 'react'
import "./Header.scss"
import dogPic from "../../images/header/dog.svg"
import SelectLanguage from '../UI/SelectLanguage/SelectLanguage'

interface HeaderProps {
    logo: string,
    workHours: string
}

const Header: FC<HeaderProps> = ({logo, workHours}) => {
  return (
    <div className='header-container'>
        <div className="logo">
            <img src={dogPic} alt="dog-pic" className="logo__img" />
            <a className="logo__text">{logo}</a>
        </div>
        <div className="header-container__interaction">
            <SelectLanguage />
            
            <div className="header-container__interaction__telephone">
              <a className="tel" href="tel:8-800-551-74-73">8 (800) 551-74-73</a>
              <p className="header-container__interaction__telephone__text">{workHours}</p>
            </div>
        </div>
    </div>
  )
}

export default Header