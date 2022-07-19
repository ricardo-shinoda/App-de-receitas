import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <Link to="/drinks">
        <img
          src="../images/drinkIcon.svg"
          alt="drink icon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/foods">
        <img
          src="../images/mealIcon.svg"
          alt="food icon"
          data-testid="food-bottom-btn"
        />
      </Link>
    </div>
  );
}

export default Footer;
