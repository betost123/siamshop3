import styled from 'styled-components'
import {Link} from 'gatsby'
import {primaryColor, secondaryColor, backgroundColor, textColor, primaryOnHover, secondaryOnHover} from './styles/colors'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? primaryColor : secondaryColor)};
    white-space: nowrap;
    padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
    color: ${({primary}) => (primary ? backgroundColor : textColor)};
    font-size: ${({big}) => (big ? '20px'  : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({round}) => (round ? '50px' : '4px')};

    &:hover {
      background: ${({primary}) => (primary ? primaryOnHover : secondaryOnHover)};
			transform: translateY(-2px);
    }
`