import React, { FC } from 'react';
import dogPic from "../../images/header/dog.svg";
import './Footer.scss';

interface IFooterProps {
    logo: string,
    rights: string,
}

const Footer: FC<IFooterProps> = ({logo, rights}) => {
  return (
    <div className='footer-container container'>
        <div className="footer-container__line" />
        <div className="footer-container__content">
            <div className="footer-container__content__logo logo">
                <img src={dogPic} alt="dog-pic" className="logo__img" />
                <a className="logo__text">{logo}</a>
            </div>
            <div className="footer-container__content__interaction">
                    <a className="footer-container__content__interaction__tel tel" href="tel:8-800-551-74-73">8 (800) 551-74-73</a>
                    <a href="mailto:info@autolong.ru" className="mail">info@autolong.ru</a>
            </div>
            <p className='footer-container__content__rights'>{rights}</p>
        </div>
    </div>
  )
}

export default Footer
