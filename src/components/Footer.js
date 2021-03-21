import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import {BsGeoAlt} from 'react-icons/bs'

const Footer = () => {
	return (
		<FooterContainer>
			<FooterLinksWrapper>
				<FooterDescription>
					<h1>Siam Shop</h1>
					<p>Välkommen in till oss! Ett asiatiskt hjärta mitt i Linköping.</p>
				</FooterDescription>
				<FooterLinkItems>
					<FooterLinkTitle>
						Kontakt
					</FooterLinkTitle>
					<FooterLink>013 - 12 12 13</FooterLink>
					<Mail href="mailto:info@siamshop.biz">info@siamshop.biz</Mail>
					<FacebookLink to="https://sv-se.facebook.com/SiamShopLinkoping/">Facebook</FacebookLink>
				</FooterLinkItems>
			</FooterLinksWrapper>
			<FooterLinksWrapper>
			<FooterLinkItems>
					<FooterLinkTitle>
						Adress
					</FooterLinkTitle>
					<FacebookLink to="https://www.google.com/maps/place/Siam+Shop/@58.4114631,15.6300109,15z/data=!4m5!3m4!1s0x0:0xe6437c176f75da94!8m2!3d58.4114631!4d15.6300109"><BsGeoAlt /></FacebookLink>
					<FooterLink to="/about">Storgatan 6</FooterLink>
					<FooterLink to="/about">582 23 Linköping</FooterLink>
				</FooterLinkItems>
				<FooterLinkItems>
					<FooterLinkTitle>
						Öppettider
					</FooterLinkTitle>
					<FooterLink to="/about">mån-fre: 10.00 - 18.00</FooterLink>
					<FooterLink to="/about">lör: 10.00 - 15.00</FooterLink>
					<FooterLink to="/about">sön: 11.00 - 15.00</FooterLink>
				</FooterLinkItems>
			</FooterLinksWrapper>
		</FooterContainer>
	)
}

export default Footer

const FooterContainer = styled.div`
	padding: 5rem calc((100vw - 1100px)/2);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	color: #E9E8E8;
	background: #240417;
`
const FooterDescription = styled.div`
	padding: 0 2rem;

	h1 {
		margin-bottom: 2rem;
		color: #FFC7E2;

		@media screen and (max-width: 400px) {
			padding: 1rem;
		}
	}
`
const FooterLinksWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media screen and (max-width: 820px) {
		grid-template-columns: 1fr;
	}
`
const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1rem 2rem;

	@media screen and (max-width: 400px) {
		padding: 1rem;
	}
`
const FooterLinkTitle = styled.h2`
	font-size: 14px;
	margin-bottom: 1rem;
`
const FooterLink = styled.p`
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;

`
const FacebookLink = styled(Link)`
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;
	color: #E9E8E8;

	&:hover {
		color: #FFC7E2;
	}
`
const Mail = styled.a`
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;
	color: #E9E8E8;

	&:hover {
		color: #FFC7E2;
	}
`
