import React from "react";
import { Container } from "react-bootstrap";
import './GoogleMapComponent.css'; // Eğer özel stil vermek isterseniz

const GoogleMapComponent = () => {
  return (
    <Container fluid className="google-map-container">
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9126679389287!2d-74.00594168471616!3d40.71277527933092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0KHQvtCx0LsuINCh0LXRgNC10LLRgdC60L7QstC-0LvRjNC90LA!5e0!3m2!1str!2str!4v1616589030123!5m2!1str!2str"
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
