import { Navigate, Route, Routes } from "react-router-dom";
import JournalPaqe from "../pages/JournalPaqe";
const JournalRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<JournalPaqe />}
			/>
			<Route
				path="/*"
				element={<Navigate to="/" />}
			/>
		</Routes>
	);
};

export default JournalRoutes;
