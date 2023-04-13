import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const drawerWith = 240;

const JournalLayout = ({ children }) => {
	return (
		<Box
			sx={{ display: "flex" }}
			className="animate__animated animate__fadeIn animate__faster"
		>
			{/* Navbar */}
			<NavBar drawerWith={drawerWith} />
			{/* Sidebar */}
			<SideBar drawerWith={drawerWith} />
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 3 }}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

export default JournalLayout;
