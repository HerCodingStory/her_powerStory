import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="ContactHer">Contact</Link>
        </li>
        <li>
          <Link to="Community">Community</Link>
        </li>
        <li>
          <Link to="AboutHer">About HPS</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default FooterNav;