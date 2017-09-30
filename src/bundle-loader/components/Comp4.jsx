import React from 'react';


export default function Comp4(props) {
  return (
    <div className="alert alert-danger">
      {props.message || 'props.message'}
    </div>
  );
}
