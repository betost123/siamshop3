import * as React from "react"
import {Link} from 'gatsby'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {menuData} from '../data/MenuData'
import { Button } from "./Button"

const Header = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <OrchidLogoIcon />
          <h2 style={{marginLeft: '1rem'}}>Siam Shop</h2>
        </NavLink>
        <Bars />
        <NavMenu>
            {menuData.map((data, index) => (
              <NavLink key={index} to={data.link}>{data.title}</NavLink>
            ))}
          <NavButton>
            <Button round="true" to="/news">Läs mer</Button>
          </NavButton>
        </NavMenu>
      </Nav>
    </div>
  )
}
export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  padding: 1rem;
  z-index: 100;
  position: relative;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  color: #FFC7E2;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  margin-left: 1rem;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  //margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const OrchidLogoIcon = () => {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.1496 48.2219C65.9988 48.0139 65.7854 47.859 65.5402 47.7805L35.3678 38.1254C35.3374 38.1157 35.3058 38.1257 35.2751 38.1186C35.1835 38.0966 35.0945 38.0985 35 38.0983C34.9055 38.0985 34.8165 38.0966 34.7249 38.1186C34.6942 38.1257 34.6626 38.1157 34.6322 38.1254L4.46003 47.7805C4.2149 47.859 4.00161 48.0139 3.85068 48.2219C3.79763 48.2944 -1.34997 55.5848 5.12531 62.9999C7.40769 65.6128 10.389 66.9318 13.9253 66.9318C15.9944 66.9318 18.2526 66.4803 20.6717 65.5728C26.5675 63.3611 32.5211 58.6781 35.0001 55.2502C37.4791 58.6783 43.4328 63.3612 49.3285 65.5728C51.7476 66.4803 54.0058 66.9318 56.0749 66.9318C59.6113 66.9318 62.5926 65.613 64.875 62.9999C71.3501 55.5847 66.2025 48.2944 66.1496 48.2219Z" fill="#D266CA"/>
      <path d="M35 52.5509C41.7393 52.5509 47.54 48.5956 50.2524 42.8883L35.3678 38.1254C35.3375 38.1157 35.3059 38.1257 35.2753 38.1186C35.1837 38.0966 35.0946 38.0985 35.0002 38.0983C34.9057 38.0985 34.8167 38.0966 34.7251 38.1186C34.6943 38.1257 34.6628 38.1157 34.6324 38.1254L19.7478 42.8884C22.4601 48.5956 28.2608 52.5509 35 52.5509Z" fill="#E68CDC"/>
      <path d="M48.1144 10.9136C44.7028 4.9994 37.201 3.06812 35 3.06812C32.7989 3.06812 25.2972 4.99927 21.8855 10.9136C21.71 11.2178 21.6756 11.5835 21.7919 11.9155L30.2401 36.0534C30.4092 36.5373 30.8666 36.8613 31.3793 36.8613H38.6207C39.1334 36.8613 39.5907 36.5373 39.7598 36.0534L48.2081 11.9155C48.3242 11.5836 48.29 11.2176 48.1144 10.9136Z" fill="#F087E6"/>
      <path d="M35 23.5853C31.9061 23.5853 29.0934 24.7595 26.9573 26.6737L30.2402 36.0533C30.4093 36.5371 30.8666 36.8611 31.3793 36.8611H38.6208C39.1334 36.8611 39.5908 36.5371 39.7599 36.0533L43.0428 26.6737C40.9067 24.7596 38.094 23.5853 35 23.5853Z" fill="#FFAAF0"/>
      <path d="M50.8964 10.3272C47.7189 9.77689 44.7788 10.474 42.6132 12.2955C40.9213 13.7188 39.8275 15.7818 39.8275 17.551C39.8275 26.9847 38.2014 32.6114 35 34.3128C31.7986 32.6112 30.1725 26.9847 30.1725 17.551C30.1725 15.7818 29.0787 13.7188 27.3868 12.2955C25.2212 10.474 22.2811 9.77689 19.1036 10.3272C11.4986 11.6502 0 21.4632 0 33.2406C0 44.0668 6.11229 59.7923 15.6897 59.7923C22.4473 59.7923 27.4445 51.749 31.0935 45.8758C32.4171 43.7449 34.2111 40.8644 35.0001 40.5147C35.789 40.8644 37.583 43.7449 38.9067 45.8758C42.5558 51.7489 47.5531 59.7923 54.3106 59.7923C63.8877 59.7923 70 44.0668 70 33.2406C70 21.4632 58.5014 11.6502 50.8964 10.3272Z" fill="#E673D2"/>
      <path d="M39.6867 21.9618C39.2343 28.7503 37.6651 32.8963 35 34.3128C32.3351 32.8964 30.7657 28.7503 30.3133 21.9618C24.618 23.9114 20.5172 29.2983 20.5172 35.6543C20.5172 41.5794 24.0797 46.6661 29.1759 48.9089C29.8516 47.87 30.4928 46.8427 31.0935 45.8758C32.4171 43.7449 34.2111 40.8644 35.0001 40.5147C35.789 40.8644 37.583 43.7449 38.9067 45.8758C39.5075 46.8427 40.1487 47.8699 40.8244 48.9089C45.9203 46.6661 49.4828 41.5794 49.4828 35.6543C49.4828 29.2983 45.382 23.9114 39.6867 21.9618Z" fill="#F59BEB"/>
      <path d="M39.8276 49.5238C39.8191 49.5313 39.8106 49.5388 39.8021 49.5463C38.6439 50.5676 36.8105 49.6642 36.8105 48.1198V35.6543H33.1897V48.1198C33.1897 49.6642 31.3563 50.5677 30.1981 49.5463L30.1726 49.5238V52.8705C31.3885 53.3483 32.6888 53.6583 34.0508 53.7551C34.0796 53.7568 34.1086 53.7581 34.1373 53.7581C34.1384 53.7581 34.1393 53.7575 34.1404 53.7575C34.1414 53.7575 34.1421 53.7581 34.1432 53.7581H35.8569C35.8579 53.7581 35.8586 53.7575 35.8597 53.7575C35.8608 53.7575 35.8616 53.7581 35.8627 53.7581C35.8916 53.7581 35.9206 53.7568 35.9493 53.7551C37.3113 53.6584 38.6117 53.3483 39.8274 52.8705V49.5238H39.8276Z" fill="#D266CA"/>
      <path d="M46.1591 33.3484C45.961 33.0414 45.6352 32.8405 45.2728 32.8021C44.9062 32.7579 44.5485 32.8906 44.291 33.1487L40.1204 37.3193C39.649 37.7907 39.649 38.5545 40.1204 39.026C41.4881 40.3937 42.2413 42.2123 42.2413 44.1463C42.2413 47.8669 39.462 50.9541 35.7718 51.3442H34.2282C30.5381 50.954 27.7587 47.8669 27.7587 44.1462C27.7587 42.2122 28.5118 40.3936 29.8796 39.0258C30.351 38.5544 30.351 37.7906 29.8796 37.3192L25.709 33.1486C25.4514 32.8904 25.0913 32.759 24.7272 32.802C24.3649 32.8403 24.039 33.0412 23.8409 33.3483C22.4561 35.4977 21.7242 37.9798 21.7242 40.5256C21.7242 47.4536 27.1388 53.264 34.0506 53.7548C34.0795 53.7566 34.1085 53.7578 34.1372 53.7578C34.1383 53.7578 34.1391 53.7573 34.1402 53.7573C34.1413 53.7573 34.142 53.7578 34.1431 53.7578H35.8567C35.8578 53.7578 35.8585 53.7573 35.8596 53.7573C35.8607 53.7573 35.8615 53.7578 35.8626 53.7578C35.8914 53.7578 35.9204 53.7566 35.9491 53.7548C42.8611 53.2638 48.2755 47.4533 48.2755 40.5256C48.2758 37.9798 47.544 35.4977 46.1591 33.3484Z" fill="#BE5AC3"/>
      <path d="M35 39.2753C36.9997 39.2753 38.6207 37.6543 38.6207 35.6546C38.6207 33.6549 36.9997 32.0339 35 32.0339C33.0003 32.0339 31.3793 33.6549 31.3793 35.6546C31.3793 37.6543 33.0003 39.2753 35 39.2753Z" fill="#E673D2"/>
    </svg>

  )
}