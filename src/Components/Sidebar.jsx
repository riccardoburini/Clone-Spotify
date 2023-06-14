import { useState } from "react"
import { Col, Container, Nav, Navbar, Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getArtistAction } from "../redux/actions"

const Sidebar = () => {

  let headers = new Headers({
    // sets the headers
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
  })


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchBarValue, setSearchBarValue] = useState("")

  const searchArtist = (e) => {
    e.preventDefault()
    // dispatch({
    //   type: "SEARCH_ARTIST",
    //   payload: searchBarValue
    // })
    dispatch(getArtistAction(searchBarValue, headers))
    navigate("/")
  }
    return(
        <>

    <Col>
    <Navbar bg="dark" expand="md" 
      className="bg-navbar  justify-content-between fixed-left"
      id="sidebar"
    >
      <Container className="container">
        <a className="navbar-brand" href="index.html">
          <img
            src="/logo/Spotify_Logo.png"
            alt="Spotify_Logo"
            width="131"
            height="40"
          />
        </a>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Nav className="navbar-nav">
            <ul>
              <li>
                <Link onClick={dispatch({type: "DELETE_SEARCH"})} to="/">
                    
                      <p><i className="fas fa-home fa-lg"></i>&nbsp; Home</p>
                    
                </Link >
              </li>
              <li>
                <Link to="/library">
                  <p>
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                      Library
                  </p>
                </Link>
              </li>
              <li>
              <Form className="d-flex input-group" onSubmit={searchArtist}>
                    <Form.Control
                    type="search"
                    placeholder="Inserisci il nome di un artista"
                    className="me-2"
                    aria-label="Search"
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e.target.value)}
                    />
                    <Button
                      className="btn btn-outline-secondary btn-sm"
                      type="submit"
                      id="button-addon1"
                    //   onClick="search()"
                    >
                      GO
                    </Button>
                </Form>
                {/* <div className="input-group mt-3">
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div
                    class="input-group-append"
                    style="margin-bottom: 4%"
                  > */}
                    
                  
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <div className="nav-btn">
        <button className="btn signup-btn" type="button">Sign Up</button>
        <button className="btn login-btn" type="button">Login</button>
        <a href="few">Cookie Policy</a> |
        <a href="fwd"> Privacy</a>
      </div>
    </Navbar>
  </Col>
  </>
  )
    
}

export default Sidebar