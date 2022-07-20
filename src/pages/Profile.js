import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const userEmail = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Header titulo="Profile" />
      <p data-testid="profile-email">{ userEmail.email }</p>
      <button type="button" data-testid="profile-done-btn">Done Recipes</button>
      <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
      <button type="button" data-testid="profile-logout-btn">Logout</button>
      <Footer />
    </div>
  );
}

export default Profile;
