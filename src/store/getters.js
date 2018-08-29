export const singer = state => state.singer

export const playing = state => state.playing

const fullScreen = state => state.fullScreen

const playList= state => state.playList

const sequenceList= state => state.sequenceList

const mode= state => state.mode

const currentIndex= state => state.currentIndex

const currentSong= (state) => {
    return state.playlist[state.currentIndex] || {}
}