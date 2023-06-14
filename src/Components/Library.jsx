import { useSelector } from "react-redux"
import SingleSong from "./singleSong"

const Library = () => {
    const array = useSelector(state => state.arrayOfSavedSong)

    return(
        array.map((song, i) => (
            <div key={i}><SingleSong song={song}/></div>
        ))
    )
}

export default Library