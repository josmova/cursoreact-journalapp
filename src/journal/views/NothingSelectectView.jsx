import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const NothingSelectectView = () => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{
				minHeight: "calc(100vh - 110px)",
				backgroundColor: "primary.main",
				borderRadius: 3,
			}}
			className="animate__animated animate__fadeIn animate__faster"
		>
			<Grid
				item
				xs={12}
			>
				<StarOutline
					sx={{
						fontSize: 100,
						color: "white",
					}}
				/>
			</Grid>
			<Grid
				variant="h5"
				color="white"
			>
				<Typography>Selecciona o crea una entrada</Typography>
			</Grid>
		</Grid>
	);
};

export default NothingSelectectView;
