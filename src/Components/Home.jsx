import { useEffect } from "react"
import { Alert, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getSongAction } from "../redux/actions"
import SingleSong from "./singleSong"

const Home = () => {

    const rockArray = useSelector(state => state.array.rock)
    const popArray = useSelector(state => state.array.pop)
    const hiphopArray = useSelector(state => state.array.hiphop)
    const artistName = useSelector(state => state.artistName)
    const dispatch = useDispatch()
    const arrayOfSong = useSelector(state => state.arrayOfSong)
    const rockArrayOfNumber = useSelector(state => state.rockArrayOfNumber)
    const popArrayOfNumber = useSelector(state => state.popArrayOfNumber)
    const hiphopArrayOfNumber = useSelector(state => state.hiphopArrayOfNumber)
    const error = useSelector(state => state.hasError)
    const loader = useSelector(state => state.isLoading)
    const searchedSong = useSelector(state => state.searchedArtist)


    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })

      const changeQuery = () =>{
        if(rockArrayOfNumber.length < 4){
          let randomN = Math.floor(Math.random() * rockArray.length)
        console.log(randomN)
        if(!rockArrayOfNumber.includes(randomN)){
          dispatch({
            type: "ROCK_RANDOM_NUMBER",
            payload: randomN
        })
          // handleArtist()
          
        }
        } else if(rockArrayOfNumber.length === 4 && popArrayOfNumber.length < 4){
          let randomN = Math.floor(Math.random() * popArray.length)
        console.log(randomN)
        if(!popArrayOfNumber.includes(randomN)){
          dispatch({
            type: "POP_RANDOM_NUMBER",
            payload: randomN
        })
          
          
        }
      } else if(popArrayOfNumber.length === 4 && hiphopArrayOfNumber.length < 4){
        let randomN = Math.floor(Math.random() * hiphopArray.length)
      console.log(randomN)
      if(!hiphopArrayOfNumber.includes(randomN)){
        dispatch({
          type: "HIPHOP_RANDOM_NUMBER",
          payload: randomN
      })
        
        
      }
    }
  }
      changeQuery()


      useEffect(() => {
        
        dispatch(getSongAction(artistName, headers, arrayOfSong))
      }, [artistName])

      
            
        
        
        
      
      // useEffect(() => {
        
      //   changeQuery()
      // }, [])

      // const changeQuery = () =>{
      //   if(arrayOfNumber.length < 5){
      //     let randomN = Math.floor(Math.random() * array.length)
      //   console.log(randomN)
      //   if(!arrayOfNumber.includes(randomN)){
      //     dispatch({
      //       type: "RANDOM_NUMBER",
      //       payload: randomN
      //   })
      //     // handleArtist()
      //     dispatch(getSongAction(artistName, headers, arrayOfSong, artistName))
      //   }
      //   }
            
        
        
        
      // }
      // const handleArtist = async () => {
        
      //   // artistName = "eminem", "metallica", etc...
      //   // domQuerySelector = "#rockSection" etc...
      //   try {
      //     let response = await fetch(
      //       'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
      //         artistName,
      //       {
      //         method: 'GET',
      //         headers,
      //       }
      //     ) // gets the information
      //     if (response.ok) {
      //       let result = await response.json() // transforms the response to json
      //       let songInfo = result.data
      //       dispatch({
      //           type: "ADD_SONG",
      //           payload: songInfo[0]

      //       })
      //       console.log(arrayOfSong)
            
      //       // let div = document.querySelector(domQuerySelector)
      //       // div.innerHTML += albumCard(songInfo[0]) // create a new album tyle
      //       console.log(artistName)
      //     } else {
      //       console.log('error')
      //     }
      //   } catch (err) {
      //     console.log(err)
      //   }
      // }
      
      

    
    //   const changeQuery = () =>{
    //     if(arrayOfNumber.length < 3){
    //       let randomN = Math.floor(Math.random() * array.length)
    //     console.log(randomN)
    //     if(!arrayOfNumber.includes(randomN)){
    //       dispatch({
    //         type: "RANDOM_NUMBER",
    //         payload: randomN
    //     })
    //     }
    //     }
            
        
        
        
    //   }
    //   useEffect(() => {
        
    //     handleArtist()
    //   }, [artistName])

    // const handleArtist = async () => {
        
    //     // artistName = "eminem", "metallica", etc...
    //     // domQuerySelector = "#rockSection" etc...
    //     try {
    //       let response = await fetch(
    //         'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
    //           artistName,
    //         {
    //           method: 'GET',
    //           headers,
    //         }
    //       ) // gets the information
    //       if (response.ok) {
    //         let result = await response.json() // transforms the response to json
    //         let songInfo = result.data
    //         dispatch({
    //             type: "ADD_SONG",
    //             payload: songInfo[0]

    //         })
    //         console.log(arrayOfSong)
    //         changeQuery()
    //         // let div = document.querySelector(domQuerySelector)
    //         // div.innerHTML += albumCard(songInfo[0]) // create a new album tyle
    //         console.log(artistName)
    //       } else {
    //         console.log('error')
    //       }
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   }

      

    //   useEffect(() => {
    //     handleArtist()
    //   }, [searchQuery])

    return(
        <>
        {/* {error && <Alert variant="danger">Qualcosa è andato storto</Alert>} */}
        {loader && <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>}

        {searchedSong && <div className="row">
            <div className="col-10">
              <div id="searchResults">
                <h2>Search Results</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                >
                    {searchedSong.map((song, i) => (
                      <div key={i}>
                      <SingleSong song = {song} />
                  </div>
                    ))}
                    
                   
                </div>
              </div>
            </div>
          </div>}

          {!searchedSong && 
           <>
           <div className="row">
            <div className="col-10">
              <div id="rock">
                <h2>Rock</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >
                   {arrayOfSong && arrayOfSong.filter((song, i) => i < 4).map((song, i) => (
                  //     // <div key={song.id}>
                  //     // <img src={song.album.cover} alt="" />
                  //     // <p>{song.album.title}</p>
                  // </div>
                  <div key={i}><SingleSong song={song}/></div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                >
                   {arrayOfSong && arrayOfSong.filter((song, i) => i > 3 && i < 8).map((song, i) => (
                       <div key={i+5}><SingleSong song={song}/></div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
                   {arrayOfSong && arrayOfSong.filter((song, i) => i > 7 && i < 12).map((song, i) => (
                       <div key={i+10}><SingleSong song={song}/></div>
                    ))}
                </div>
              </div>
            </div>
          </div></>
          }
          </>
    )
}


export default Home