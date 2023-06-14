const initialState = {
    array:{
        rock: ['queen','u2','thepolice','eagles','thedoors','oasis','thewho','bonjovi',],
        pop: ['maroon5','coldplay','onerepublic','jamesblunt','katyperry','arianagrande',],
        hiphop: ['eminem','snoopdogg','lilwayne','drake','kanyewest',]
    },
    arrayOfSong: [],
    rockArrayOfNumber: [],
    popArrayOfNumber: [],
    hiphopArrayOfNumber: [],
    artistName: "",
    selectedSong: null,
    arrayOfSavedSong: [],
    arrayOfSavedSongId: [],
    hasError: false,
    isLoading: false,
    searchedArtist: null
    // song: null
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ROCK_RANDOM_NUMBER":
            return{
                    ...state,
                    artistName: state.array.rock[action.payload],
                    rockArrayOfNumber: [...state.rockArrayOfNumber, action.payload]
                }
        case "POP_RANDOM_NUMBER":
            return{
                    ...state,
                    artistName: state.array.pop[action.payload],
                    popArrayOfNumber: [...state.popArrayOfNumber, action.payload]
                }
        case "HIPHOP_RANDOM_NUMBER":
            return{
                    ...state,
                    artistName: state.array.hiphop[action.payload],
                    hiphopArrayOfNumber: [...state.hiphopArrayOfNumber, action.payload]
                }
        case "ADD_SONG":
            return{
                ...state,
                arrayOfSong: [...state.arrayOfSong, action.payload]
            }
        case "ADD_SELECTED":
            return{
                ...state,
                selectedSong: action.payload
            }
        case "LIKED_SONG":
            return{
                ...state,
                arrayOfSavedSong: [...state.arrayOfSavedSong, action.payload],
                arrayOfSavedSongId: [...state.arrayOfSavedSongId, action.payload.id]
            }
        case "DELETE_SONG":
            return{
                ...state,
                arrayOfSavedSong: state.arrayOfSavedSong.filter((song) => song.id !== action.payload.id),
                
                // arrayOfSavedSongId: state.arrayOfSavedSongId.filter((song) => song.id !== action.payload.id)
            }
        case "DELETE_ID":
            return{
                ...state,
                arrayOfSavedSongId: state.arrayOfSavedSongId.filter((id) => id !== action.payload)
            }
        case "GET_SONG_FAILED":
            return{
                ...state,
                hasError: true
            }
        case "GET_SONG_LOAD":
            return{
                ...state,
                isLoading: true
            }
        case "GET_SONG_UNLOAD":
            return{
                ...state,
                isLoading: false
            }
        case "SEARCH_ARTIST":
            return{
                ...state,
                searchedArtist: action.payload
            }
        case "DELETE_SEARCH":
            return{
                ...state,
                searchedArtist: null
            }
            default:
        return state

    }
        
}
    


export default mainReducer