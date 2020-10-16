import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImage from '../../assets/images/map-marker.svg';

import { Container, Sidebar } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <header>
          <img src={mapMarkerImage} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>
            Alvorada
          </strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </Sidebar>

      <Map
        center={[-29.9935808,-51.0645078]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
}

export default OrphanagesMap;
