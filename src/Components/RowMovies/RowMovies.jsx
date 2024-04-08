import React, { useContext, useEffect, useState } from 'react'
import './RowMovies.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants'
import { VideoIdSetter } from '../../Store/Context'
import { useNavigate } from 'react-router-dom'


function RowMovies(props) {

    const [movies, setMovies] = useState([])
    const { setVideoId } = useContext(VideoIdSetter)
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${props.url}`).then((response) => {

            setMovies(response.data.results)


        }).catch(err => {
            console.log(err);
        })

    }, [])

    const handleMovieTrailer = (id) => {
        console.log(id);
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


    return (
        <div className='row'>

            <h3>{props.title}</h3>
            <div className='posters'>
                {movies.map((movie) =>
                    <img onClick={() => { handleMovieTrailer(movie.id) }} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + movie.poster_path}`} alt="movie poster" />
                )}
            </div>

        </div>
    )
}

export default RowMovies
