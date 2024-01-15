import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBar from './components/navbar';
import GoogleMapReact from 'google-map-react';
import LocationPin from './components/LocationPin';

function App() {

  // Set default map location object. The API will auto centalize the map pin
  const defaultAddress = {
    center: {
      lat: 9.07628345489502,
      lng: 7.464147090911865
    },
    zoom: 15,
    address: "Gomycode Abuja Hackerspace",
  };

  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      <Container>
        <Row>
          <Col xs={12} md={12}>

            <h4> GOMYCODE ABUJA HACKERSPACE </h4>

            {/* Google Map */}
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyD2wfjUxelV79i-PPFd_t3slbUUpDzX_-w" }}
                defaultCenter={defaultAddress.center}
                defaultZoom={defaultAddress.zoom}
              >
                <LocationPin
                  lat={defaultAddress.center.lat}
                  lng={defaultAddress.center.lng}
                  text={defaultAddress.address} />

              </GoogleMapReact>
            </div>

          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
