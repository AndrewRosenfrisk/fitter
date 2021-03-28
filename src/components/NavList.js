import React from 'react';
import {
  Link
} from 'react-router-dom';



export default function NavList(props) {
  return (
    <li>
      <Link id={props.id} to={props.path} key={props.id}>{props.title}</Link>
    </li>
  );
}

