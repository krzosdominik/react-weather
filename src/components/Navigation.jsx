import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Navigation = () => {
  const { city, code } = useParams();

  return (
    <ul className="nav nav-tabs my-3">
      <li className="nav-item">
        <NavLink
          exact
          to={`/${city}/${code}/weather`}
          activeClassName="active"
          className="nav-link"
        >
          Aktualna pogoda
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to={`/${city}/${code}/forecast`}
          activeClassName="active"
          className="nav-link"
        >
          Prognoza pogody
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
