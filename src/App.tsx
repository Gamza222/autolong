import React, { FC } from 'react'
import { ILanguage } from './types/languages';
import Header from './components/Header/Header';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import './index.scss'
import { State } from './state';
import MainSection from './components/MainSection/MainSection';
import Description from './components/Description/Description';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import { Languages } from './types/languages';

const App: FC = () => {

  const langState = useSelector((state: State) => state.language);
  const form = useSelector((state: State) => state.form);
  console.log(form)
  console.log(langState)
  const lang = Languages[langState];

  return (
    <div>
      <Header logo={lang.header.logo} workHours={lang.header.workHours} />
      <MainSection title={lang.main.title} subtitle={lang.main.subtitle} button={lang.main.button} />
      <Description 
        title={lang.description.title} 
        item1={lang.description.item1} 
        item2={lang.description.item2} 
        item3={lang.description.item3} 
        item4={lang.description.item4} 
        info={lang.description.info} 
      />
      <Form 
        title={lang.form.title}
        subtitle={lang.form.subtitle}
        content={lang.form.content}
      />
      <Footer
        logo={lang.footer.logo}
        rights={lang.footer.rights}
      />
    </div>
  )
}

export default App
