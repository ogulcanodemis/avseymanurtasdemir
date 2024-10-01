import React from "react";
import { Container } from "react-bootstrap";
import './GoogleMapComponent.css'; // Eğer özel stil vermek isterseniz

const GoogleMapComponent = () => {
  return (
    <Container fluid className="google-map-container">
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.98529901095708!2d28.98161944459883!3d41.07413391058563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab70cfd5faff9%3A0x6215ea555b606d68!2sMaripark%20Ofis!5e0!3m2!1str!2str!4v1727819140757!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Container>
  );
};

export default GoogleMapComponent;
