import React from 'react';
import classes from './BuildControl.css';

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={props.label}>{props.label}</div>
    <button className={classes.Less} onClick={props.remove}>Less</button>
    <button className={classes.More} onClick={props.add}>More</button>
  </div>
);

export default BuildControl;