import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
	  minWidth: 275,
	},
	title: {
	  fontSize: 20,
	},
});

const Header = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					Header
				</Typography>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					Time
				</Typography>
			</CardContent>
		</Card>
	)
}

export default Header;