import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating,setMovieRating]=useState(0);
  return <div>
    <StarRating setMovieRating={setMovieRating} color='blue' size={24} maxRating={5} className="test" defaultRating={4} />
    <p> this movie was rated {movieRating} stars </p>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} messages={['Terrible', 'bad', 'okey', 'good', 'amazing']} />
    <StarRating size={24} maxRating={5} className="test" defaultRating={3} /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals