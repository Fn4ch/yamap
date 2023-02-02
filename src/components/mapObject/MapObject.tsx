import React from "react"
import { IMapObject } from "../../types/models"
import './MapObject.scss'
import starIcon from '../../assets/starIcon.svg'
import likeIcon from '../../assets/likeIcon.svg'

const MapObject: React.FC<IMapObject> = (mapObject) => {
    return (
        <div className="map-object">
            <img src={mapObject.img} className='map-object__image' alt="map Object Icon"/>
            <div className="map-object__info">
                <div className="map-object__title">{mapObject.title}</div>
                <div className="map-object__location">
                    <div>{mapObject.city}</div>
                    <div>{ mapObject.typeOfWork }</div>
                </div>
                <div className="map-object__status">
                    <div className="map-object__status_stars">
                        <img src={starIcon} alt='rating Icon' />
                        <span>{mapObject.rating}</span>
                    </div>
                    <div className="map-object__status_likes">
                        <img src={likeIcon} alt='like Icon' />
                        <span>{mapObject.likes}</span>
                    </div>
                    <div className="map-object__status_reviews">Отзывов: {mapObject.review}</div>
                    <div className="map-object__status_sent">Отправлено: {mapObject.sent}</div>
                </div>
                <div className="map-object__description">{mapObject.description}</div>
            </div>
        </div>
    )
}

export default MapObject;