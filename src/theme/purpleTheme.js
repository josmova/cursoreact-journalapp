import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
const purpleTheme = createTheme({
	palette: {
		primary: {
			main: "#262254",
		},
		secondary: {
			main: "#543884",
		},
		terceary: {
			main: "#5047AE",
		},
		error: {
			main: red.A400,
		},
	},
});

export default purpleTheme;
