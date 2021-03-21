import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {GiSpotedFlower} from 'react-icons/gi'
import { RecipeDialog } from './RecipeDialog'

const Recipes = ({ heading }) => {
	const data = useStaticQuery(query)
	const recipes = data.allRecipesJson.edges
	const [recipeOneOpen, setRecipeOneOpen] = React.useState(false);
	const [recipeTwoOpen, setRecipeTwoOpen] = React.useState(false);
	const [recipeThreeOpen, setRecipeThreeOpen] = React.useState(false);
	const [recipeFourOpen, setRecipeFourOpen] = React.useState(false);

	const getRecipes = (data) => {
		const recipeOne = recipes[0]
		const recipeTwo = recipes[1]
		const recipeThree = recipes[2]
		const recipeFour = recipes[3]

		return (
			<>
				<RecipeCardComponent
					recipeName={recipeOne.node.name}
					open={recipeOneOpen}
					ingredients={["180g kycklingfilé", "1 salladslök", "3st tunt skivade galanga", "3 limeblad", "1st cintrongräs", "6 dl kokosmjölk", "0.7 dl fisksås", "0.7 dl pressad citron", "3 msk socker", "1 dl koriander", "1 msk chiliolja"]}
					onClick={() => setRecipeOneOpen(true)}
					onClose={() => setRecipeOneOpen(false)}
					alt={recipeOne.node.alt}
					fluid={recipeOne.node.image.childImageSharp.fluid}
					src={recipeOne.node.image.childImageSharp.fluid.src}
					instructions={recipeOne.node.instructions}
				/>
				<RecipeCardComponent
					recipeName={recipeTwo.node.name}
					open={recipeTwoOpen}
					ingredients={["2 dl mjölk", "0.5 dl vatten", "1 tsk matchapulver", "1 msk honung"]}
					onClick={() => setRecipeTwoOpen(true)}
					onClose={() => setRecipeTwoOpen(false)}
					alt={recipeTwo.node.alt}
					fluid={recipeTwo.node.image.childImageSharp.fluid}
					src={recipeTwo.node.image.childImageSharp.fluid.src}
					instructions={recipeTwo.node.instructions}
				/>
				<RecipeCardComponent
					recipeName={recipeThree.node.name}
					open={recipeThreeOpen}
					ingredients={["250g äggnudlar", "1 tsk seasmolja", "300g biff", "2 msk majsmjöl", "salt & peppar", "olja", "1 msk ingefära", "3 vitlöksklyftor", "90 ml soja", "6 msk socker", "1 chili", "4 salladslökar"]}
					onClick={() => setRecipeThreeOpen(true)}
					onClose={() => setRecipeThreeOpen(false)}
					alt={recipeThree.node.alt}
					fluid={recipeThree.node.image.childImageSharp.fluid}
					src={recipeThree.node.image.childImageSharp.fluid.src}
					instructions={recipeThree.node.instructions}
				/>
				<RecipeCardComponent
					recipeName={recipeFour.node.name}
					open={recipeFourOpen}
					ingredients={["250g edamamebönor", "2 vitlöksklyftor", "1 msk ingefära", "2 tsk chili", "1 msk sesamolja", "2 tsk flingsalt"]}
					onClick={() => setRecipeFourOpen(true)}
					onClose={() => setRecipeFourOpen(false)}
					alt={recipeFour.node.alt}
					fluid={recipeFour.node.image.childImageSharp.fluid}
					src={recipeFour.node.image.childImageSharp.fluid.src}
					instructions={recipeFour.node.instructions}
				/>
			</>
		);
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

const RecipeCardComponent = ({recipeName, open, ingredients, onClick, onClose, alt, fluid, instructions, src}) => {
	return (
		<>
			<RecipeCard>
				<RecipeImg
					src={src}
					alt={alt}
					fluid={fluid}
				/>
				<RecipeInfo>
					<TextWrap>
						<GiSpotedFlower />
						<RecipeTitle>
							{recipeName}
						</RecipeTitle>
					</TextWrap>
					<div
						onKeyDown={onClick}
						role="button"
						tabIndex={0}
						onClick={onClick}
						css={`position: absolute; top: 420px; font-size: 14px; background: #AB2C69; border-radius: 50px; padding: 10px 32px; &:hover {transform: translateY(-2px); background: rgba(171, 44, 105, 0.85);}`}
					>
						Visa recept
					</div>
				</RecipeInfo>
			</RecipeCard>
			<RecipeDialog
				open={open}
				handleClose={onClose}
				title={recipeName}
				ingredients={ingredients}
				instructions={instructions}
			/>
	</>
	)
}

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
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        instructions
        ingredients
        name
      }
    }
  }
}
`
