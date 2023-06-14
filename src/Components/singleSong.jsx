import { useDispatch, useSelector } from "react-redux"


const SingleSong = ({song}) => {

    const dispatch = useDispatch()
    const array = useSelector(state => state.arrayOfSavedSong)
    const arrayId = useSelector(state => state.arrayOfSavedSongId)

    const saveSong = () => {
        if(!array.includes(song)){
            dispatch({
                type: "LIKED_SONG",
                payload: song
            })
            console.log(arrayId.includes(song.id))
        }
    }

    const deleteSong = () => {
        dispatch({type: "DELETE_SONG", payload: song})
        dispatch({type: "DELETE_ID", payload: song.id})
        console.log(song.id)
        console.log(arrayId.includes(song.id))
    }

    


    return(
         <>
                       <img onClick={() => {dispatch({type: "ADD_SELECTED", payload: song})}} src={song.album.cover} alt="" />
                       <div><p>{song.album.title}</p>
                        {!arrayId.includes(song.id) && <button onClick={saveSong}>salva</button>}
                        {arrayId.includes(song.id) && <button onClick={deleteSong}>rimuovi</button>}
                        </div>
         </>
        
    )
    // return(
    //      <div key={song.id} >
    //                    <img onClick={() => {dispatch({type: "ADD_SELECTED", payload: song})}} src={song.album.cover} alt="" />
    //                    <div><p>{song.album.title}</p>
    //                     {windowLocation.pathname !== "/library" && <button onClick={saveSong}>salva</button>}
    //                     {windowLocation.pathname === "/library" && <button onClick={() => {dispatch({type: "DELETE_SONG", payload: song})}}>rimuovi</button>}
    //                     </div>
    //      </div>
        
    // )
}

export default SingleSong