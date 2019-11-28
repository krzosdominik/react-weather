import { capitalize } from 'lodash';
import React from 'react';

const WidgetTable = ({ data }) => {
  return (
    <>
      <h2 className="alert alert-light text-center">
        {data.weather.map(el => capitalize(el.description)).join(' / ')}
      </h2>
      <table className="table table-striped text-center">
        <tbody>
          <tr>
            <th scope="row">Temperetura</th>
            <td className="font-weight-bold">{data.main.temp} ℃</td>
          </tr>
          <tr>
            <th scope="row">Wilgotność</th>
            <td className="font-weight-bold">{data.main.humidity} %</td>
          </tr>
          <tr>
            <th scope="row">Ciśnienie</th>
            <td className="font-weight-bold">{data.main.pressure} hPa</td>
          </tr>
          <tr>
            <th scope="row">Zachmurzenie</th>
            <td className="font-weight-bold">{data.clouds.all} %</td>
          </tr>
          <tr>
            <th scope="row">Siła wiatru</th>
            <td className="font-weight-bold">
              {(data.wind.speed * 0.36).toFixed(2)} km/h
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WidgetTable;
