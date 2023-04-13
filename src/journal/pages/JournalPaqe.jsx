import { useDispatch, useSelector } from "react-redux";
import JournalLayout from "../layout/JournalLayout";

import NoteView from "../views/NoteView";
import NothingSelectectView from "../views/NothingSelectectView";
import { startNewNote } from "../../store/journal/thunks";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

const JournalPaqe = () => {
	const dispatch = useDispatch();
	const { isSaving, active } = useSelector(
		(state) => state.journal
	);

	const onClickNewNote = () => {
		dispatch(startNewNote());
	};
	return (
		<JournalLayout>
			{!!active ? <NoteView /> : <NothingSelectectView />}

			<IconButton
				size="large"
				sx={{
					position: "fixed",
					right: 40,
					bottom: 80,
					color: "white",
					backgroundColor: "error.main",
					"&:hover": {
						backgroundColor: "error.main",
						opacity: 0.7,
					},
				}}
				onClick={onClickNewNote}
				/* 	disabled={isSaving} */
			>
				<AddOutlined sx={{ fonrtSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};

export default JournalPaqe;
