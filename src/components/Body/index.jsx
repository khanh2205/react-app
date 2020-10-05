import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
	root: {
	  	flexGrow: 1,
	},
	paper: {
	  	padding: theme.spacing(2),
	  	textAlign: 'center',
	  	color: theme.palette.text.secondary,
	},
	table: {
		minWidth: 650,
	},
}));

const Body = (user) => {
	const classes = useStyles();
	console.log(user);
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<h2>List</h2>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center">Name</TableCell>
									<TableCell align="center">Email</TableCell>
									<TableCell align="center">Edit</TableCell>
									<TableCell align="center">Delete</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
							{user.map((row) => (
								<TableRow key={row.name}>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="right">{row.email}</TableCell>
									<TableCell align="right">
										<Button size="small" variant="contained" color="primary">
											<EditIcon />
										</Button>
									</TableCell>
									<TableCell align="right">
										<Button size="small" variant="contained" color="secondary">
											<DeleteIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
				<Grid item xs={6}>
					<h2>Detail</h2>
					<Paper className={classes.paper}>
						<form className={classes.root} noValidate autoComplete="off">
							<div>
								<TextField
									id="name"
									style={{ margin: 8, marginBottom: 60 }}
									placeholder="Name"
									fullWidth
									margin="normal"
									InputLabelProps={{
										shrink: true,
									}}
								/>
								
								<TextField
									id="email"
									style={{ margin: 8 }}
									placeholder="Email"
									fullWidth
									margin="normal"
									InputLabelProps={{
										shrink: true,
									}}
								/>
								<Button size="small" variant="contained" color="secondary">
									<CancelIcon />
								</Button>

								<Button size="small" variant="contained" color="primary" style={{ marginLeft: 20 }}>
									<SaveIcon />
								</Button>
							</div>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

export default Body;