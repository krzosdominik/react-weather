import moment from 'moment';
import { capitalize } from 'lodash';
import React from 'react';

const CityInfo = ({ weather, city }) => {
  return (
    <>
      <h1>
        <i className="fa fa-building-o" aria-hidden="true" /> {capitalize(city)}
      </h1>
      <h2>
        <i className="fa fa-clock-o" aria-hidden="true" />{' '}
        {moment(weather.dt_txt)
          .locale('pl')
          .format('LT')}
      </h2>
    </>
  );
};

export default CityInfo;
