import {
	Box,
	Typography,
} from '@mui/material';
import React from 'react';
import styles from  './Navbaritem.css'

const NavbarItem = (props) => {
	return (
		<Box className={styles.box}>
			<Typography>{props.title}</Typography>
		</Box>
	);
};

export default NavbarItem;
