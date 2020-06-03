import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},

	pos: {
		marginBottom: 12
	}
});

export default function MeterInfromation(props) {
	const classes = useStyles();
	const [ meterData, setMeterdata ] = useState(null);
	useEffect(() => {
		console.log('We are using effect');
		async function fetchData() {
			var resquestType = {
				key: 'StartGRID2020',
				SQLQuery: `SELECT * FROM  UserDetails where MeterNumber='20206KPI41103T7k'`
			};
			const request = new Request(`https://stargridx.net/GetUserProfile.php`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(resquestType)
			});
			const api_call = await fetch(request);
			const data = await api_call.json();
			setMeterdata(data);
		}
		fetchData();
	}, []);

	if (meterData != null) {
		console.log('MeterInfromation: data.Server_response');
		console.log(meterData.Server_response[0].Surname);
		return (
			<Card className={classes.root}>
				<Typography variant='h5' component='h4'>
					Meter Information
				</Typography>
				<Divider />
				<CardContent>
					<Grid container spacing={1}>
						<Grid lg={3} sm={6} xl={3} xs={12}>
							<Typography variant='h8' component='h8'>
								User Name
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].Surname} {meterData.Server_response[0].Name}
							</Typography>
							<Typography variant='h8' component='h8'>
								Meter Number
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
									20206KPI41103T7k
							</Typography>
						</Grid>

						<Grid lg={2} sm={6} xl={2} xs={12}>
							<Typography variant='h8' component='h8'>
								Region
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].Region}
							</Typography>
							<Typography variant='h8' component='h8'>
								City
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].City}
							</Typography>
							<Typography variant='h8' component='h8'>
								Constituency
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].Constituency}
							</Typography>
						</Grid>
						<Grid lg={2} sm={6} xl={2} xs={12}>
							<Typography variant='h8' component='h8'>
								Street Name
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].StreetName}
							</Typography>

							<Typography variant='h8' component='h8'>
								Erf Number
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].ErfNumber}
							</Typography>
						</Grid>
						<Grid lg={3} sm={6} xl={3} xs={12}>
							<Typography variant='h8' component='h8'>
								Meter Phone Number
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].MeterNumber}
							</Typography>
							<Typography variant='h8' component='h8'>
								Cell Phone Number
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].PhoneNumber}
							</Typography>
						</Grid>
						<Grid lg={2} sm={6} xl={2} xs={12}>
							<Typography variant='h8' component='h8'>
								User Category
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].UserCategory}
							</Typography>

							<Typography variant='h8' component='h8'>
								Install Date
							</Typography>
							<Typography className={classes.title} color='textSecondary' gutterBottom>
								{meterData.Server_response[0].RegistrationDate}
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
				<Divider className={classes.pos} />
				<CardActions>
					<Button size='small'>Edit Meter Information</Button>
				</CardActions>
			</Card>
		);
	} else {
		return <div>No Meter Data</div>;
	}
}
