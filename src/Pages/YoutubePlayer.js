import React, { useContext, useMemo, useState } from 'react'
import YouTube from 'react-youtube'
import NavBar from '../Components/NavBar/NavBar';
import { VideoIdSetter } from '../Store/Context';
import { useNavigate } from 'react-router-dom';

function YoutubePlayer() {
    const { videoId } = useContext(VideoIdSetter)
    const navigate = useNavigate()
    const opts = {
        height: '595px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <div>
            <NavBar />
            <br></br>
            <YouTube opts={opts} videoId={videoId.key} style={{ aspectRatio: 'auto', accentColor: 'blue' }} onEnd={() => navigate('/')}></YouTube>

        </div>
    )
}

export default YoutubePlayer
