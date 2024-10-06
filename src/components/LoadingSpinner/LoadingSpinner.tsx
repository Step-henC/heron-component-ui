import React from 'react';
import './LoadingSpinner.css';
import { LoadingSpinnerProps } from './LoadingSpinner.types';
const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  return (
    <div className={props.isLoading ? "parent-load": "hidden"}>
    <div className={'loading-state'}>
      <div className="loading"></div>
    </div>
    <p>{props.prompt}</p>
    </div>
  );
};

export default LoadingSpinner;
