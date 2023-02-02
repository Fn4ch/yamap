import React from 'react'
import { IMapObject } from '../../types/models';
import MapObject from '../mapObject/MapObject';
import './MapObjectList.scss'

interface MapObjectListProps{
    mapObjects: IMapObject[]
}

const MapObjectList: React.FC<MapObjectListProps> = ({mapObjects}) => {
    return (
        <div className='map-object-list'>
            <div className="map-object-list__header">5 вариантов</div>
            <div className="map-object-list__list">
                {mapObjects.map(mObj => <MapObject {...mObj} key={mObj.title} />)}
            </div>
        </div>
    )
}

export default MapObjectList;