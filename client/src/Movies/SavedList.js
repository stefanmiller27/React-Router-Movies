import React from 'react';
import { Link } from 'react-router-document';

export default function SavedList(props) {

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
       <Link to = '/' className = 'home-button'>Home</Link>
        </div>
    );
} 

//react router intro