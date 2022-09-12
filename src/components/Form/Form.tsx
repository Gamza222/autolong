import React, { FC, useEffect, useState, useRef } from 'react'
import "./Form.scss"
import containerPic from "../../images/form-section/flying-container.svg"
import filePic from "../../images/form-section/file.svg"
import crossPic from "../../images/form-section/cross.svg"
import arrowPic from "../../images/form-section/arrow.svg"
import attachPic from "../../images/form-section/attach-pic.svg"
import containerCroppedPic from "../../images/form-section/flying-container-cropped.svg"
import { keyboard } from '@testing-library/user-event/dist/keyboard'
import { useDispatch } from 'react-redux'
import { submitForm } from '../../state/action-creators/lang'
import { IFormState } from '../../state/reducers/FormReducer'

interface FormProps {
    title: string,
        subtitle: string,
        content: {
            step1: {
                title: string,
                name: string,
                mail: string,
                phone: string | number,
                account: string,
                button: string
            },
            step2: {
                title: string,
                country: string,
                company: string,
                productType: string,
                attach: string,
                button: string,
                description: {
                    text: string,
                    rights: string
                }
            }
        },
}

interface Step {
    title: string,
    name?: string,
    mail?: string,
    phone?: string | number,
    account?: string,
    country?: string,
    company?: string,
    productType?: string,
    attach?: string,
    button: string,
    description?: {
        text: string,
        rights: string
    }
}


const Form: FC<FormProps> = ({title, subtitle, content}) => {

    const [data1, setData1] = useState<IFormState>({
        name: "",
        mail: "",
        phone: "",
        account: "",
        country: "",
        company: "",
        productType: "",
        attach: '',
    });
    const [files, setFiles] = useState<File[]>([]);
    console.log(data1)
    const [step, setStep] = useState(1);
    const [activeInput, setActiveInput] = useState<string[]>([]);
    const dispatch = useDispatch();
    console.log(activeInput);

    function parseObject(object: Step) {
        let newObject = JSON.parse(JSON.stringify(object));
        let arr:any[]= [];
        delete newObject.title
        delete newObject.button
        delete newObject.description
        delete newObject.attach
        Object.keys(newObject).forEach((key) => arr.push(newObject[key as keyof Step]))
        return arr;
    }
       
    function configureInput(adding : boolean, item : string | number, e?: React.ChangeEvent<HTMLInputElement>) {
        const newItem = item.toString();
        const arr = activeInput;
        console.log(newItem)
        if(e) {
            if (e.target.value) {
                setActiveInput([...arr]);
                return
            }
                arr.splice(activeInput.indexOf(newItem), 1);
                setActiveInput([...arr]);
                return  
        }
        if (adding) {
            console.log('adding')
            activeInput.indexOf(newItem) !== -1 ? setActiveInput([...activeInput]) : setActiveInput([...activeInput, newItem]);
            return
        } else {
            arr.splice(activeInput.indexOf(newItem), 1);
            setActiveInput([...arr]);
            return
        }
    }

    function handleSubmit1(e: React.SyntheticEvent) {
        e.preventDefault();
        setStep(2);
    }
    function handleSubmit2(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setData1({...data1, attach: files});
        dispatch(submitForm(data1));
    }

  return (
    <div className='form-container container'>
      <div className="form-container__content">
        <div className="form-container__content__interaction">
            <img src={containerPic} alt="flying-container" className="form-container__content__interaction__img" />
            <img src={containerCroppedPic} alt="flying-container" className="form-container__content__interaction__img2" />
            <div className="form-container__content__interaction__text">
                <h3 className="form-container__content__interaction__text__title">{title}</h3>
                <p className="form-container__content__interaction__text__subtitle">{subtitle}</p>
                <p className="form-container__content__interaction__text__form-title">{step == 1 ? content.step1.title : content.step2.title}</p>
            </div>
            {/*FORM STEP 1*/}
            <form 
                onSubmit={(e) => handleSubmit1(e)} 
                className="form-container__content__interaction__form1"
                style={{display: step == 1 ? "block" : "none"}}
            >
                <div className="form-container__content__interaction__form1__fields">
                {
                    parseObject(content.step1).map((item, key) => {
                        return (<div key={key} className={`form-container__content__interaction__form1__fields__field ${activeInput.find(value => value == item) ? "activeInput" : ""}`}>
                                    {
                                        activeInput.find(value => value == item) ? 
                                            <p className="form-container__content__interaction__form1__fields__field__text">{item}</p>
                                            : ''
                                    }
                                    <input 
                                        type={
                                            item === content.step1.phone ? 
                                            "tel" 
                                            : item === content.step1.mail ? "email" 
                                            : "text"
                                        }
                                        id={Object.keys(content.step1).find(key => 
                                            content.step1[key as keyof object] == item)} 
                                        name={item}
                                        onClick={() => configureInput(true, item)} 
                                        onChange={(e) => {
                                            configureInput(true, item);
                                            const key = Object.keys(content.step1).find(key => 
                                                content.step1[key as keyof object] == item)
                                            key ? setData1({...data1, [key]: e.target.value })
                                            : setData1({...data1})
                                        }}
                                        onBlur={(e) => {configureInput(false, item, e)}}
                                        placeholder={activeInput.find(value => value == item) ? "" : item}
                                        required
                                    />
                                </div>)
                    })
                }
                </div>
                <button 
                    className="form-container__content__interaction__form1__submit button" 
                    type="submit"
                >
                {content.step1.button}
                </button>
            </form>
            {/*FORM STEP 1*/}
            {/*FORM STEP 2*/}
            <form 
                onSubmit={(e) => handleSubmit2(e)} 
                style={{display: step == 2 ? "block" : "none"}}
                className="form-container__content__interaction__form1"
            >
                <div className="form-container__content__interaction__form1__fields">
                {
                    parseObject(content.step2).map((item, key) => {
                        return (<div key={key} className={`form-container__content__interaction__form2__fields__field ${activeInput.find(value => value == item) ? "activeInput" : ""}`}>
                                    {
                                        activeInput.find(value => value == item) ? 
                                            <p className="form-container__content__interaction__form2__fields__field__text">{item}</p>
                                            : ''
                                    }
                                    <input 
                                        type={
                                            item === content.step1.phone ? 
                                            "tel" 
                                            : item === content.step1.mail ? "email" 
                                            : "text"
                                        } 
                                        onClick={() => configureInput(true, item)} 
                                        onChange={(e) => {
                                            configureInput(true, item);
                                            const key = Object.keys(content.step1).find(key => 
                                                content.step1[key as keyof object] == item)
                                            key ? setData1({...data1, [key]: e.target.value })
                                            : setData1({...data1})
                                        }}
                                        onBlur={(e) => {configureInput(false, item, e)}}
                                        placeholder={activeInput.find(value => value == item) ? "" : item}
                                    />
                                </div>)
                    })
                }   
                    <div className='form-container__content__interaction__form2__fields__files'>
                        {
                            files ? files.map((file, key) => {
                                return(
                                    <div className="attached-file" key={key}>
                                        <div className="attached-file__content">
                                            <img src={filePic} alt="file-pic" />
                                            <p className="attached-file__content__name">{file.name}</p>
                                            <p className="attached-file__content__size">{Math.round(file.size / 1000)} KB</p>
                                        </div>

                                        {/*delete file button*/}
                                        <button onClick={() => {
                                            const newArr = files;
                                            newArr.splice(newArr.indexOf(file), 1);
                                            console.log(newArr, files)
                                            setFiles([...newArr])
                                        }}>
                                        {/*delete file button*/}

                                            <img src={crossPic} alt="" />
                                        </button>
                                    </div>
                                ) 
                            })
                            : ""
                        }
                    </div>
                    <button className='form-container__content__interaction__form2__fields__attach'>
                        <img src={attachPic} alt="attach-pic" />
                        <p>{content.step2.attach}</p>

                        {/*attach file input*/}
                        <input 
                            type="file" 
                            multiple 
                            onChange={(e) => setFiles(e.target.files ? [...files , ...Array.from(e.target.files)] : [...files])}
                        />
                        {/*attach file input*/}

                    </button>
                </div>
                <div className='form-container__content__interaction__form2__buttons'>

                    {/*back to 1 from button*/}
                    <button 
                        className="form-container__content__interaction__form2__buttons__back"
                        onClick={() => setStep(1)}
                    >
                    {/*submit both forms button*/}

                        <img src={arrowPic} alt="arrow-left" />
                    </button>

                    {/*submit both forms button*/}
                    <button 
                        className="form-container__content__interaction__form2__buttons__submit button" 
                        type="submit"
                    >
                    {content.step2.button}
                    </button>
                    {/*submit both forms button*/}

                </div>

                <p className='form-container__content__interaction__form2__rights'>
                    {content.step2.description.text} <a href="#">{content.step2.description.rights}</a>
                </p>
            </form>
            {/*FORM STEP 2*/}
        </div>
      </div>
    </div>
  )
}

export default Form
