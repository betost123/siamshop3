import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { Button } from './Button'
import {GiSpotedFlower} from 'react-icons/gi'

const Recipes = ({ heading }) => {
	const data = useStaticQuery(query)

	const getRecipes = (data) => {
		const recipesArray = [];
		data.allRecipesJson.edges.forEach((element, index) => {
			recipesArray.push(
				<RecipeCard key={index}>
					<RecipeImg
						src={element.node.image.childImageSharp.fluid.src}
						alt={element.node.alt}
						fluid={element.node.image.childImageSharp.fluid}
					/>
					<RecipeInfo>
						<TextWrap>
							<GiSpotedFlower />
							<RecipeTitle>
								{element.node.name}
							</RecipeTitle>
						</TextWrap>
						<Button
							primary="true"
							round="true"
							to="/recipes"
							css={`position: absolute; top: 420px; font-size: 14px;`}
						>
							{element.node.button}
						</Button>
					</RecipeInfo>
				</RecipeCard>
			)
		});

		return recipesArray;
	}

	return (
		<RecipesContainer>
			<RecipesHeading>
				{heading}
			</RecipesHeading>
			<RecipesWrapper>
				{getRecipes(data)}
			</RecipesWrapper>
		</RecipesContainer>
	)
}

export default Recipes

const RecipesContainer = styled.div`
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #240417;
	color: #FFC7E2;
`

const RecipesHeading = styled.div`
	font-size: clamp(1.2rem, 5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
	color: #FFC7E2;
`

const RecipesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: '10px';
	justify-items: center;
	padding: 0 2rem;

	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 868px) {
		grid-template-columns: 1fr;
	}
`

const RecipeCard = styled.div`
	line-height: 2;
	width: 100%;
	height: 500px;
	position: relative;
	border-radius: 1rem;
	transition: 0.2s ease;
`

const RecipeImg = styled(Img)`
	height: 100%;
	max-width: 100%;
	position: relative;
	border-radius: 1rem;
	filter: brightness(70%);
	transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

	&:hover {
		filter: brightness(100%);
	}
`

const RecipeInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 2rem;

	@media screen and (max-width: 280px) {
		padding: 0 1rem;
	}
`
const TextWrap = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	color: #FFC7E2;
	top: 375px;
`
const RecipeTitle = styled.div`
	font-weight: 400;
	font-size: 1rem;
	margin-left: 0.5rem;
`

const query = graphql`
query RecipesQuery {
  allRecipesJson {
    edges {
      node {
        alt
        button
        name
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
