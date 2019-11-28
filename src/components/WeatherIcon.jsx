import React from 'react';

const WidgetIcon = ({ weather }) => {
  const icons = weather.map(
    el => `http://openweathermap.org/img/wn/${el.icon}@2x.png`
  );
  return (
    <figure className="d-flex justify-content-center">
      {icons.map(icon => (
        <img key={icon} src={icon} alt="weather icon" />
      ))}
    </figure>
  );
};

export default WidgetIcon;
