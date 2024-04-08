import { createContext, useState } from 'react'

export const VideoIdSetter = createContext()

export default function YoutubeVideoSetter({ children }) {
    const [videoId, setVideoId] = useState('')

    return (
        <VideoIdSetter.Provider value={{ videoId, setVideoId }}>
            {children}
        </VideoIdSetter.Provider>
    )
}