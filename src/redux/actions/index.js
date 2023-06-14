export const getArtistAction = (query, headers) => {

    return async (dispatch) => {

            try {
              dispatch({
                type: "GET_SONG_LOAD"
              })
              let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                  query,
                {
                  method: 'GET',
                  headers,
                }
              ) // gets the information
              if (response.ok) {
                let result = await response.json() // transforms the response to json
                let songInfo = result.data
                dispatch({
                    type: "SEARCH_ARTIST",
                    payload: songInfo
    
                })
               
                
              } else {
                console.log("il response non è ok")
                dispatch({
                  type: "GET_SONG_FAILED"
                })
              }
            } catch (err) {
              console.log(err)
              dispatch({
                type: "GET_SONG_FAILED"
              })
            } finally {
              dispatch({
                type: "GET_SONG_UNLOAD"
              })
            }
          }
    
}


export const getSongAction = (query, headers, arrayOfSong) => {

    return async (dispatch) => {
        
        
            // artistName = "eminem", "metallica", etc...
            // domQuerySelector = "#rockSection" etc...
            try {
              dispatch({
                type: "GET_SONG_LOAD"
              })
              let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                  query,
                {
                  method: 'GET',
                  headers,
                }
              ) // gets the information
              if (response.ok) {
                let result = await response.json() // transforms the response to json
                let songInfo = result.data
                dispatch({
                    type: "ADD_SONG",
                    payload: songInfo[0]
    
                })
                console.log(arrayOfSong)
                
                // let div = document.querySelector(domQuerySelector)
                // div.innerHTML += albumCard(songInfo[0]) // create a new album tyle
                console.log(query)
              } else {
                console.log("il response non è ok")
                dispatch({
                  type: "GET_SONG_FAILED"
                })
              }
            } catch (err) {
              console.log(err)
              dispatch({
                type: "GET_SONG_FAILED"
              })
            } finally {
              dispatch({
                type: "GET_SONG_UNLOAD"
              })
            }
          }
    
}