import React, { FC, useEffect, useState } from 'react'
import './SelectLanguage.scss'
import { useSelector, useDispatch } from "react-redux";
import { State } from '../../../state';
import { switchChina, switchEn, switchRu } from '../../../state/action-creators/lang';
import arrowPic from '../../../images/header/arrow.svg'

const SelectLanguage:FC = () => {
  const langState = useSelector((state: State) => state.language);
  const [lang, setLang] = useState(langState);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLang(langState)
  }, [langState])
  console.log(switchChina)

  return (
    <div className='selectLang-container'>
      <button onClick={() => setOpen(!open)} className="selectLang-container__button">{lang}<img src={arrowPic} alt="arrow-pic" /></button>
      <div className="selectLang-container__switch" style={{display: open ? "flex" : "none"}}>
        <button onClick={() => {dispatch(switchRu()); setOpen(false);}} className="selectLang-container__switch__button">RU</button>
        <button onClick={() => {dispatch(switchEn()); setOpen(false);}} className="selectLang-container__switch__button">EN</button>
        <button onClick={() => {dispatch(switchChina()); setOpen(false);}} className="selectLang-container__switch__button">中文</button>
      </div>
    </div>
  )
}

export default SelectLanguage