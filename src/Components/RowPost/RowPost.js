import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl } from '../../constant/Const'
import axios from '../../axioss'
import { API_KEY } from '../../constant/Const'
function RowPost(props) {
    const [Movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(function(response){
            console.log(response.data)
            setMovies(response.data.results)
        })
     
    }, [])
    
    return (
        <div className='row'>
            <h2 className='netflixorginals'>{props.title}</h2>
            <div className='posters'>
                {Movies.map((obj)=>
                    <img className={props.isSmall? "smallposter":'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

                )}
                
            </div>
        </div>
    )
}

export default RowPost