import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from "react-spring";

import Menu from "./Menu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
         
          <NavLinks style={linkAnimation}>
            <Link to="/">Map</Link>
            <Link to="/profile">Account</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/">link </Link>
          </NavLinks>
          <BurgerWrapper>
            <Menu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
 
  display: flex;
  margin-right: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0; 
  z-index: 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;


    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #998DA0;
    }

    @media (max-width: 768px) {
      display: none;
  
    }
  }
`;
const BurgerWrapper = styled.div`
  margin-right: auto 0;
  align-content: right;

  @media (min-width: 769px) {
    display: flex;
  }
`;
