import React from 'react'
import { Map, YMaps, Clusterer, Placemark } from 'react-yandex-maps'
import { IMapObject } from '../../types/models'
import MapObjectList from '../mapObjectList/MapObjectList'
import './Map.scss'

import firstImage from '../../assets/1.png'
import secondImage from '../../assets/2.png'
import thirdImage from '../../assets/3.png'
import fourthImage from '../../assets/4.png'
import fifthImage from '../../assets/5.png'

const MapWithObjects : React.FC = () => {

    const mapObject: IMapObject[] = [
        {
            title: 'Работа в заповеднике',
            city: 'Казань, Россия',
            typeOfWork: 'Заповедники и нац. парки',
            img: firstImage,
            rating: 4.3,
            likes: 10,
            review: 8,
            sent: 22,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices nibh ut nulla luctus varius. Fusce quis efficitur orci. Etiam.',
            geo: [55.78, 49.12],
            color: 'islands#yellowStretchyIcon'
        },
        {
            title: 'Приют Животных в Казани',
            city: 'Казань, Россия',
            typeOfWork: 'Заповедники и нац. парки',
            img: secondImage,
            rating: 4.3,
            likes: 10,
            review: 8,
            sent: 22,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices nibh ut nulla luctus varius. Fusce quis efficitur orci. Etiam.',
            geo: [55.76, 49.2],
            color: 'islands#greenStretchyIcon'
        },
        {
            title: 'помощь бездомным животным',
            city: 'Казань, Россия',
            typeOfWork: 'Заповедники и нац. парки',
            img: thirdImage,
            rating: 4.3,
            likes: 10,
            review: 8,
            sent: 22,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices nibh ut nulla luctus varius. Fusce quis efficitur orci. Etiam.',
            geo: [55.79, 49.18],
            color: 'islands#redStretchyIcon'
        },
        {
            title: 'Зоопарк принимает добровольцев',
            city: 'Казань, Россия',
            typeOfWork: 'Заповедники и нац. парки',
            img: fourthImage,
            rating: 4.3,
            likes: 10,
            review: 8,
            sent: 22,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices nibh ut nulla luctus varius. Fusce quis efficitur orci. Etiam.',
            geo: [55.8, 49.14],
            color: 'islands#orangeStretchyIcon'
        },
        {
            title: 'Волонтёры в питомник',
            city: 'Казань, Россия',
            typeOfWork: 'Заповедники и нац. парки',
            img: fifthImage,
            rating: 4.3,
            likes: 10,
            review: 8,
            sent: 22,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices nibh ut nulla luctus varius. Fusce quis efficitur orci. Etiam.',
            geo: [55.83, 49.14],
            color: 'islands#blueCircleIcon'
        }
    ]
    
    return (
        <div className="map">
            <MapObjectList mapObjects={mapObject} />
            <YMaps query={{ lang: 'en_RU' }}>
                <Map
                    className='map__yamap'
                    defaultState={{
                        center: [55.78, 49.11],
                        zoom: 7
                    }}
                >
                    <Clusterer options={{
                        preset: 'islands#invertedVioletClusterIcons',
                        groupByCoordinates: false
                    }}>
                        {mapObject.map((p, index) => <Placemark key={index} geometry={p.geo} />)}
                    </Clusterer>
                </Map>
            </YMaps>
        </div>
    )
}

export default MapWithObjects