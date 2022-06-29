import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Navigation() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Link href="/" underline="none" color="inherit">
					<Typography mr={2}>All Collections</Typography>
				</Link>
				<Link href="/collections/women" underline="none" color="inherit">
					<Typography mr={2}>Women</Typography>
				</Link>
				<Link href="/collections/men" underline="none" color="inherit">
					<Typography mr={2}>Men</Typography>
				</Link>
				<Link href="/collections/cats" underline="none" color="inherit">
					<Typography mr={2}>Cats</Typography>
				</Link>
				<Link href="/collections/dogs" underline="none" color="inherit">
					<Typography mr={2}>Dogs</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
}
