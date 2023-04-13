import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm.js";
import ImageGallery from "../views/ImageGallery";
import { setActiveNote } from "../../store/journal/journalSlice.js";
import { formatearFecha } from "../../helpers/formatedDate.js";
import {
	startDeletingNote,
	startSaveNote,
	startUploadingFiles,
} from "../../store/journal/thunks.js";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import {
	DeleteOutline,
	SaveOutlined,
	UploadOutlined,
} from "@mui/icons-material";
import {
	Button,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";

const NoteView = () => {
	const dispatch = useDispatch();
	const fileInputRef = useRef();
	const {
		active: note,
		messageSaved,
		isSaving,
	} = useSelector((state) => state.journal);

	const { body, title, date, onInputChange, formState } =
		useForm(note);

	const dateString = useMemo(() => {
		return formatearFecha(date);
	}, [date]);

	/* 	const dateString2 = useMemo(() => {
		const newDate = new Date(date);
		return newDate.toUTCString();
	}, [date]);
 */

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSaved.length > 0) {
			Swal.fire("Nota actualizada", messageSaved, "success");
		}
	}, [messageSaved]);

	const onSaveNote = () => {
		dispatch(startSaveNote());
	};

	const onFileInputChange = ({ target }) => {
		if (target.files === 0) return;
		dispatch(startUploadingFiles(target.files));
	};

	const onDelete = () => {
		dispatch(startDeletingNote());
	};

	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			sx={{ mb: 1 }}
			className="animate__animated animate__fadeIn animate__faster"
		>
			<Grid item>
				<Typography
					fontSize={39}
					fontWeight="light"
				>
					{dateString}
				</Typography>
				{/* 		<Typography
					fontSize={39}
					fontWeight="light"
				>
					{dateString2}
				</Typography> */}
			</Grid>
			<div>
				<Typography
					className="font-aviso"
					sx={{
						padding: "7px",
						background: "#d90429",
						color: "white",
					}}
				>
					Falta validacíon para agregar, porqué esa como asycn
				</Typography>
			</div>
			<Grid item>
				<input
					type="file"
					multiple
					ref={fileInputRef}
					onChange={onFileInputChange}
					style={{ display: "none" }}
				/>

				<IconButton
					color="primary"
					/* disabled={isSaving} */
					onClick={() => fileInputRef.current.click()}
				>
					<UploadOutlined />
				</IconButton>

				<Button
					color="primary"
					sx={{ padding: 2 }}
					onClick={onSaveNote}
					/* disabled={isSaving} */
				>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>
			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Ingrese un título"
					label="Título"
					sx={{
						border: "none",
						mb: 1,
					}}
					name="title"
					value={title}
					onChange={onInputChange}
				/>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="¿Qué sucedió hoy?"
					label="Descripción"
					minRows={5}
					name="body"
					value={body}
					onChange={onInputChange}
				/>
			</Grid>

			<Grid
				container
				justifyContent="end"
			>
				<Button
					onClick={onDelete}
					sx={{ mt: 2 }}
					color="error"
				>
					<DeleteOutline />
					Borrar
				</Button>
			</Grid>

			<ImageGallery images={note.imageUrls} />
		</Grid>
	);
};

export default NoteView;
