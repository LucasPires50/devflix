/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';

function ButtonLink(props) {
  // props => {ClassNma: "o que alguém passar", href: "/"}
  console.log(props);
  return (
    <a href="props.href" className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
