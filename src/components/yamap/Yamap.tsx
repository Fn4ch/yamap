import React, { useEffect, useState } from 'react'
import { YMaps, Map, Placemark, PlacemarkGeometry } from 'react-yandex-maps'
import useDebounce from '../../hooks/Debounce'
import './Yamap.scss'

const Yamap: React.FC = () => {

    const [city, setCity] = useState(String)
    const [placemark, setPlacemark] = useState<PlacemarkGeometry>()

    const getMarkerAddress = async () => {
        const res = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=46a42ba1-1f8b-4334-ac1e-b0b3124561e0&geocode=${value}&format=json`)
        let geo = await res.json()
        const city = geo.response.GeoObjectCollection.featureMember[0].GeoObject.description.split(',').shift()
        setCity(city)
        const mark = geo.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')
        setPlacemark([mark.pop(), mark.pop()])
        console.log(geo.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
    }

    const [debouncedValue, value, setValue] = useDebounce<string>('', 1500)

    useEffect(() => {
        getMarkerAddress()
    }, [debouncedValue])

    return (
    <div className='yandex-map'>
        <h1>Где вы находитесь или будете принимать волонтёров</h1>
        <div className='yandex-map__input-block'>
            <div className="yandex-map__input_title">Адрес</div>
            <input className='yandex-map__input' value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className='yandex-map__input-block'>
            <div className="yandex-map__input_title">Ближайший к месту город</div>
            <input className='yandex-map__input' value={city} />
        </div>
        <YMaps query={{ lang: 'en_RU' }}>
            <Map
                className='yandex-map__yamap'
                defaultState={{
                    center: [55.78, 49.11],
                    zoom: 10
                }}
            >
                <Placemark geometry={placemark} />
            </Map>
            <button className='yandex-map__button' onClick={() => { }}>Дальше</button>
        </YMaps>
    </div>
    )
}

export default Yamap