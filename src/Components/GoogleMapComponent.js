import React from "react";
import { Container } from "react-bootstrap";
import './GoogleMapComponent.css'; // Eğer özel stil vermek isterseniz

const GoogleMapComponent = () => {
  return (
    <Container fluid className="google-map-container">
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.9048712838053!2d28.9823971!3d41.07107200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6e3e691a1fd%3A0xe6a467d59249cffd!2zTWluYXMgxLDFnyBNZXJrZXpp!5e0!3m2!1str!2str!4v1739790198087!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};

export default GoogleMapComponent;
