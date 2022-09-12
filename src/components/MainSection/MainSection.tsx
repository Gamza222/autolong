import React, { FC, useState } from 'react'
import mainPic from "../../images/main/main-pic.svg"
import mainsmPic from "../../images/main/mainsm-pic.svg"
import './MainSection.scss'

interface MainSectionProps {
    title: string,
    subtitle: string,
    button: string
}

const MainSection: FC<MainSectionProps> = ({title, subtitle, button}) => {

  let subFirstPart = "";
  let subSecondPart = "";
  let align = false;
  if(subtitle.split(" ").indexOf("повысить") > 0) {
    const subArr = subtitle.split(" ");
    const index = subArr.indexOf("повысить");
    subFirstPart = subArr.splice(0, index).join(" ");
    subSecondPart = subArr.splice(1).join(" ");
    align = true;
  }

  return (
    <div className='main-container'>
      <div className="main-container__content">
        <h1 className="main-container__content__title">{title}</h1>
        
          {
            align ? <p className="main-container__content__subtitle special-subtitle">
                      {subFirstPart} <br/> <span className="main-container__content__subtitle__span">повысить</span> {subSecondPart}
                    </p>
                    : <p className="main-container__content__subtitle">
                          {subtitle}
                      </p>
          }
        <button className="main-container__content__button button">{button}</button>
      </div>
      <img className='main-container__img' style={{}} src={mainPic} alt="" />
      <img className='main-container__img-sm' style={{}} src={mainsmPic} alt="" />
    </div>
  )
}

export default MainSection
