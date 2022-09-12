import React, { FC } from 'react'
import './Description.scss'
import boxCheckPic from '../../images/description/box-check.svg'
import boxesCheckPic from '../../images/description/boxes.svg'
import boxListPic from '../../images/description/box-list.svg'
import containersPic from '../../images/description/containers.svg'
import truckPic from '../../images/description/truck.svg'

interface DescriptionProps {
    title: string,
    item1: {
        title: string,
        subtitle: string,
    },
    item2: {
        title: string,
        subtitle: string,
    }
    item3: {
        title: string,
        subtitle: string,
    },
    item4: {
        title: string,
        subtitle: string,
    },
    info: {
        title: string,
        subtitle: string
    }
}

const Description: FC<DescriptionProps> = ({title, item1, item2, item3, item4, info}) => {
  return (
    <div className='description-container'>
        <div className="description-container__title">
            <h2 className="description-container__title__text">{title}</h2>
        </div>
        <div className="description-container__content">
            <div className="description-container__content__item-type1">
                <div className="description-container__content__item-type1__text">
                    <p className="description-container__content__item-type1__text__title">{item1.title}</p>
                    <p className="description-container__content__item-type1__text__subtitle">{item1.subtitle}</p>
                </div>
                <img src={boxCheckPic} alt="box-check-pic" className="description-container__content__item-type1__img" />
            </div>
            <div className="description-container__content__item-type1">
                <div className="description-container__content__item-type1__text">
                    <p className="description-container__content__item-type1__text__title">{item2.title}</p>
                    <p className="description-container__content__item-type1__text__subtitle">{item2.subtitle}</p>
                </div>
                <img src={truckPic} alt="box-check-pic" className="description-container__content__item-type1__img" />
            </div>
            <div className="description-container__content__item-type1">
                <div className="description-container__content__item-type1__text">
                    <p className="description-container__content__item-type1__text__title">{item3.title}</p>
                    <p className="description-container__content__item-type1__text__subtitle">{item3.subtitle}</p>
                </div>
                <img src={containersPic} alt="box-check-pic" className="description-container__content__item-type1__img" />
            </div>
            <div className="description-container__content__item-type1">
                <div className="description-container__content__item-type1__text">
                    <p className="description-container__content__item-type1__text__title">{item4.title}</p>
                    <p className="description-container__content__item-type1__text__subtitle">{item4.subtitle}</p>
                </div>
                <img src={boxListPic} alt="box-check-pic" className="description-container__content__item-type1__img" />
            </div>
            <div className="description-container__content__item-type2">
                <div className="description-container__content__item-type2__text">
                    <p className="description-container__content__item-type2__text__title">{info.title}</p>
                    <p className="description-container__content__item-type2__text__subtitle">{info.subtitle}</p>
                </div>
                <img src={boxesCheckPic} alt="box-check-pic" className="description-container__content__item-typeh2__img" />
            </div>
        </div>
    </div>
  )
}

export default Description
