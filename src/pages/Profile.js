import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const userEmail = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Header titulo="Profile" />
      <p data-testid="profile-email">{ userEmail.email }</p>
      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ localStorage.clear() }
        >
          Logout
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;
