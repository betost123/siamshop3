import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {GiSpotedFlower} from 'react-icons/gi'
import { graphql, useStaticQuery } from 'gatsby'

function About() {
	const data = useStaticQuery(query)

	return (
		<AboutContainer>
			<TopLine>
				Om oss
			</TopLine>
			<Description>
				Vår verksamhet
			</Description>
			<ContentWrapper>
				<ColumnOne>
					<AboutContent>
						<GiSpotedFlower css={`color: #AB2C69; font-size: 2rem; margin-bottom: 1rem;`} />
						<h3>Affärsidé</h3>
						<p>
							Vår affärsidé innebär att vi vill erbjuda ett brett sortiment samt ge tips och råd om matlagning
							Vi har specialiserat oss på thaimat. Färska grönsaker kommer direkt från Thailand med flyg varje onsdag.
							Ni får välja bland färsk koriander (Pak chee), salladslök, basilika, chilifrukter (Prik che pha), citrongräs
							(Ta krai), kaffirlimeblad (Ma krut), galanga (Kha) och många andra exotiska kryddor, frukter och grönsaker.
							Vi ger gärna råd om vilka kryddor som bör kombineras för att ge den rätta smaken, ett exempel är koriander
							som skall användas ihop med salladslök i det thailändska köket.
						</p>
					</AboutContent>
					<AboutContent>
						 <GiSpotedFlower css={`color: #AB2C69; font-size: 2rem; margin-bottom: 1rem;`} />
						<h3>Varor</h3>
						<p>
							Vi säljer varor främst från östasien. Ni hittar allt från godis, till soja, kryddor och fisk.
							Vi har även allt du behöver för att göra sushi, inklusive rullmattor och riskokare. Vi erbjuder
							ett mindre sortiment av dekorationer och tillbehör från asien, som ätpinnar, porslin och tavlor.
							Under säsong finns även frön om du vill så dina råvaror själv. Färsk mango från Pakistam köps in
							under sommaren, och brukar vara väldigt populärt. Ibland lyckas vi även få in Durian, den så kallade
							"stinky fruit", och denna behöver man i regel förboka om man är intresserad.

							Kom gärna in i butiken och kolla vad vi har. Om det är något du saknar så tveka inte att höra av dig
							till oss.
						</p>
					</AboutContent>
				</ColumnOne>
				<ColumnTwo>
					{
						data.allFile.edges.map((image, index) => (
							<Images key={index} fluid={image.node.childImageSharp.fluid} src={image.node.childImageSharp.fluid.src} />
						))
					}
					<Images />
				</ColumnTwo>
			</ContentWrapper>
		</AboutContainer>
	)
}

export default About

const query = graphql`
query AboutQuery {
  allFile(filter: {ext: {regex: "/(jpg)|(png)/"}, name: {in: ["thai-boats", "thai-buddah"]}}) {
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

const AboutContainer = styled.div`
	width: 100%;
	background: #E9E8E8;
	color: #240417;
	padding: 5rem calc((100vw - 1300px) / 2);
	height: 100%;
`
const TopLine = styled.p`
	font-size: 1rem;
	padding-left: 2rem;
	margin-bottom: 0.75rem;
`
const Description = styled.p`
	text-align: start;
	padding-left: 2rem;
	margin-bottom: 4rem;
	font-size: clamp(1.5rem, 5vw, 2rem);
	font-weight: bold;
	color: #AB2C69;
`
const ContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 0 2rem;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`
const ColumnOne = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
`
const AboutContent = styled.div`
	padding-top: 1rem;
	padding-right: 2rem;

	h3 {
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	p {
		color: #AB2C69;
	}
`
const ColumnTwo = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 2rem;
	grid-gap: 10px;

	@media screen and (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`

const Images = styled(Img)`
	border-radius: 1rem;
	height: 100%;
`