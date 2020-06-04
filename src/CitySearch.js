import React from 'react'

const CitySearch = (props) => {
    return (
        <div className="city-search">
            <form className="form" onSubmit={props.getWeather}>
                <input
                type='text'
                placeholder='city'
                name='city'
                />
                <input
                type='text'
                placeholder='country'
                name='country'
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CitySearch;