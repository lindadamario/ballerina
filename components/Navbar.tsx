import React from 'react';
import styled from 'styled-components';

const MenuListItems = styled.ul`
  display: flex;
  justify-content: center;

  li {
    padding: 0px 30px;
    list-style: none;
    font-size: 1.125rem;
    font-weight: 400;
    text-transform: uppercase;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const navbarListItems = ['Home', 'About Me', 'Ballets',  'Contact'];
  const listItems = navbarListItems.map((item, i) => <li key={i}>{item}</li>);
  return (
    <>
      <MenuListItems>{listItems}</MenuListItems>
    </>
  );
};

export default Navbar;
