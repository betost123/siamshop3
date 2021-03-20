import React from 'react'
import styled from 'styled-components'
import {FiClock} from 'react-icons/fi'

const OpeningHours = () => {
	return (
		<OpeningHoursContainer>
			<Heading>Öppettider</Heading>
			<Wrapper>
				<OpeningHoursBox>
					<Icon />
					<Title>Öppettider</Title>
					<Description>
						text
					</Description>
				</OpeningHoursBox>
			</Wrapper>
		</OpeningHoursContainer>
	)
}

export default OpeningHours

const OpeningHoursContainer = styled.div`
	width: 100%;
	background: #AB2C69;
	color: #E9E8E8;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 4rem calc((100vw - 1300px)/2);
`
const Heading = styled.h1`
	text-align: start;
	font-size: clamp(1.5rem, 5vw, 2rem);
	margin-bottom: 3rem;
	padding: 0 2rem;
`
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 500) {
		grid-template-columns: 1fr;
	}
`
const Icon = styled(FiClock)`
	font-size: 3rem;
	margin-bottom: 1rem;
`

const OpeningHoursBox = styled.div`
	height: 100%;
	width: 100%;
	padding: 2rem;
`
const Title = styled.div``
const Description = styled.div``