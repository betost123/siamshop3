import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import ThaiVideo from '../assets/videos/cuttingVideo.mp4'

const Hero = () => {
	return (
		<SiamShopContainer>
			<SiamShopBackground>
				<SiamShopVideo src={ThaiVideo} type="video/mp4" autoPlay loop muted playsInline />
			</SiamShopBackground>
			<SiamShopContent>
				<SiamShopItems>
					<SiamShopH1>Asiatiskt Livsmedel</SiamShopH1>
					<SiamShopP>Ett brett sortiment med färska, direktimporterade, asiatiska grönsaker</SiamShopP>
					<Button primary="true" big="true" round="true" to="/about">Läs mer</Button>
				</SiamShopItems>
			</SiamShopContent>
		</SiamShopContainer>
	)
}

export default Hero

const SiamShopContainer = styled.div`
	background-color: #E9E8E8;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #240417;
	height: 100vh;
	padding: 0 1rem;
	position: relative;
	margin-top: -80px;
`
const SiamShopBackground = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	filter: brightness(60%);
`
const SiamShopVideo = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;

`

const SiamShopContent = styled.div`
	z-index: 3;
	height: calc(100vh - 80px);
	max-height: 100%;
	padding: 0rem calc((100vw - 1300px) / 2);
`

const SiamShopItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100vh;
	max-height: 100%;
	padding: 0;
	color: #FFC7E2;
	line-height: 1.1;
	font-weight: bold;

`

const SiamShopH1 = styled.h1`
	font-size: clamp(1.5rem, 6vw, 4rem);
	margin-bottom: 1.5rem;
	letter-spacing: 3px;
	font-weight: bold;
	padding: 0 1rem;
`

const SiamShopP = styled.p`
	font-size: clamp(1rem, 3vw, 3rem);
	margin-bottom: 2rem;
	font-weight: 400;
`