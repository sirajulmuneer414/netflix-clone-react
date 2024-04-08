import React, { useContext, useEffect, useState } from 'react'
import axios from '../../axios'
import './Banner.css'
import { API_KEY, imageUrl } from '../../Constants/constants'
import { VideoIdSetter } from '../../Store/Context'
import { useNavigate } from 'react-router-dom'



function Banner() {

    const [movie, setMovie] = useState({})
    const { setVideoId } = useContext(VideoIdSetter)
    const navigate = useNavigate()

    const redirectToYoutube = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {


                setVideoId(response.data.results[response.data.results.length - 1])
                navigate('/watch')

            }
            else {
                console.log('array empty')
            }

        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((respose) => {

            let x = Math.floor(Math.random() * 20);
            console.log(respose.data.results[x])
            setMovie(respose.data.results[x])


        })
    }, [])

    return (
        <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}>
            <div className='content'>
                <h1 className='title'>{movie.title}</h1>
                <div className='banner-buttons'>
                    <button className='button' onClick={() => redirectToYoutube(movie.id)}>Play</button>
                    <button className='button'>My List</button>

                </div>
                <h2 className='description'>{movie.overview}</h2>

            </div>
            <div className='fade_bottom'></div>
        </div>

    )
}

export default Banner
