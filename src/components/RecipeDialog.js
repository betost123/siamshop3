import * as React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export const RecipeDialog = ({open, handleClose, title, ingredients, instructions}) => {
	console.log(ingredients)

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="alert-dialog-slide-title"
			aria-describedby="alert-dialog-slide-description"
			style={{borderRadius: '2rem'}}
		>
			<DialogTitle id="alert-dialog-slide-title"><h2>{title}</h2></DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					<h4>Ingredients</h4>
					{
						ingredients && ingredients.map((ingredient, index) => (
							<p key={index}>{ingredient}</p>
						))
					}
					<br /><br />

					<p>
						{instructions}
					</p>
				</DialogContentText>
				<DialogActions>
					<div
						onKeyDown={handleClose}
						role="button"
						tabIndex={0}
						onClick={handleClose}
						css={`font-size: 14px; background: #E5D4DF; border-radius: 50px; padding: 10px 32px; &:hover {transform: translateY(-2px); background: #DECCD7;}`}
					>
						Stäng
					</div>
				</DialogActions>
			</DialogContent>
		</Dialog>
	)
}