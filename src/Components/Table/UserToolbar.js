import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {},
	row: {
		height: '42px',
		display: 'flex',
		alignItems: 'center'
		//marginTop: theme.spacing(1)
	},
	spacer: {
		flexGrow: 1
	},
	importButton: {
		//marginRight: theme.spacing(1)
	},
	exportButton: {
		//marginRight: theme.spacing(1)
	}
}));

const UsersToolbar = () => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.row}>
				<span className={classes.spacer} />

				<Button className={classes.exportButton}>Download CSV</Button>
			</div>
		</div>
	);
};

UsersToolbar.propTypes = {
	className: PropTypes.string
};

export default UsersToolbar;
