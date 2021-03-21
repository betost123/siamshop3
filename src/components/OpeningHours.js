import React from 'react'
import styled from 'styled-components'
import {FiClock} from 'react-icons/fi'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const OpeningHours = () => {
const data = useStaticQuery(query)

	return (
		<OpeningHoursContainer>
			<Heading>Öppettider</Heading>
			<Wrapper>
				<OpeningHoursBox>
					<Icon />
					<Description>
						mån-fre: 10.00-18.00
					</Description>
					<Description>
						lör: 10.00-15.00
					</Description>
					<Description>
						sön: 11.00-15.00
					</Description>
				</OpeningHoursBox>
				{
					data.allFile.edges.map((image, index) => (
						<OpenImage key={index} fluid={image.node.childImageSharp.fluid} src={image.node.childImageSharp.fluid.src} />
					))
				}
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
const Description = styled.div`
	font-size: clamp(1rem, 2.5vw, 1.5rem);
	margin-bottom: 0.5rem;
`

const OpenImage = styled(Img)`
	height: 100%;
	max-width: 100%;
	position: relative;
	border-radius: 1rem;
	filter: brightness(70%);
`

const query = graphql`
query OpenQuery {
  allFile(filter: {ext: {regex: "/(jpg)|(png)/"}, name: {in: ["open-bananas", "open-salad", "open-buddah"]}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`