import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faLaptopHouse,
  faEye,
  faUniversalAccess,
  faHandPaper,
} from '@fortawesome/free-solid-svg-icons';
import './Property.css';

function Property(props) {
  return (
    <div className='propertyContainer'>
      <div className='propertySquare'>
        <div className='propertyIcon'>
          {props.property.icon === 'faLaptopHouse' && (
            <FontAwesomeIcon
              style={{
                width: 50,
                height: 50,
              }}
              icon={faLaptopHouse}
            />
          )}
          {props.property.icon === 'faEye' && (
            <FontAwesomeIcon
              style={{
                width: 50,
                height: 50,
              }}
              icon={faEye}
            />
          )}

          {props.property.icon === 'faUniversalAccess' && (
            <FontAwesomeIcon
              style={{
                width: 50,
                height: 50,
              }}
              icon={faUniversalAccess}
            />
          )}

          {props.property.icon === 'faHandPaper' && (
            <FontAwesomeIcon
              style={{
                width: 50,
                height: 50,
              }}
              icon={faHandPaper}
            />
          )}
        </div>
      </div>
      <div>
        <div className='propertyText'>{props.property.name}</div>
        <p className='propertyDescription'>{props.property.description}</p>
      </div>
    </div>
  );
}
export default Property;
