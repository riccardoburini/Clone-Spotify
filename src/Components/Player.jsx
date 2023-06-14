import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"


const Player = () => {
  const song = useSelector(state => state.selectedSong)
    return(
        <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            {song && <div>
              <img src={song.album.cover} alt="" />
            </div>}
            <div
              className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <div className="row">
                <div className="shuffle"></div>
                <div className="previous"></div>
                <div className="play"></div>
                <div className="next"></div>
                <div className="repeat"></div>
                {/* <a className="shuffle" href="fdew">
                  <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="fdew">
                  <img src="/playerbuttons/Previous.png" alt="shuffle" />
                </a>
                <a href="fdew">
                  <img src="/playerbuttons/Play.png" alt="shuffle" />
                </a>
                <a href="fdew">
                  <img src="/playerbuttons/Next.png" alt="shuffle" />
                </a>
                <a href="fdew">
                  <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
    //     <Container fluid  className=" fixed-bottom bg-container pt-1">
    //   <Row>
    //     <Col lg={10} offset-lg={2}>
    //       <Row>
    //         <Col col={6} md={4} lg={2} offset={3} offset-md={4} offset-lg={5}
    //           className = " playerControls mt-1"
    //         >
    //           <Row>
    //             <a href="msd">
    //               <img src="playerbuttons/Shuffle.png" alt="shuffle" />
    //             </a>
    //             <a href="msd">
    //               <img src="playerbuttons/Previous.png" alt="shuffle" />
    //             </a>
    //             <a href="msd">
                    
    //               <img src="playerbuttons/Play.png" alt="shuffle" />
    //             </a>
    //             <a href="msd">
    //               <img src="playerbuttons/Next.png" alt="shuffle" />
    //             </a>
    //             <a href="msd">
    //               <img src="./playerbuttons/Repeat.png" alt="shuffle" />
    //             </a>
    //           </Row>
    //         </Col>
    //       </Row>
    //       <Row className=" justify-content-center playBar py-3">
    //         <Col col={8} md={6}>
    //           <div className="progress">
    //             <div
    //               className="progress-bar"
    //               role="progressbar"
    //               aria-valuenow="0"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //             </div>
    //             </Col>
    //         </Row>
    //         </Col>
    //       </Row>
        
    // </Container>
    // )
}

export default Player