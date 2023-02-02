import React from 'react'
import './Header.scss'

interface HeaderProps{
    func: Function
}

const Header: React.FC<HeaderProps> = ({func}) => {
    return (
        <div className="header">
            <div className="header__page" onClick={() => { func(true) }}>Первое задание</div>
            <div className="header__page" onClick={() => { func(false) }}>Второе задание</div>
        </div>
    );
}

export default Header