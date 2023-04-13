import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as Routerlink } from "react-router-dom";
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm.js";
import { startCreatingUserWithEmail } from "../../store/auth/thunks";

const formData = {
	email: "",
	password: "",
	displayName: "",
};

const formValidations = {
	email: [
		(value) => value.includes("@"),
		"El correo debe ser valido",
	],
	password: [
		(value) => value.length >= 6,
		"La contraseña debe tener al menos 6 caracteres",
	],
	displayName: [
		(value) => value.length >= 3,
		"El nombre es obligatorio",
	],
};

const RegisterPage = () => {
	const dispatch = useDispatch();
	const [formSubmitted, setformSubmitted] = useState(false);
	const { status, errorMessge } = useSelector(
		(state) => state.auth
	);
	const isCheckingAuthentication = useMemo(
		() => status === "checking",
		[status]
	);

	const {
		displayName,
		email,
		password,
		onInputChange,
		formState,
		displayNameValid,
		emailValid,
		passwordValid,
		isFormValid,
	} = useForm(formData, formValidations);

	const onSubmit = (event) => {
		event.preventDefault();
		setformSubmitted(true);
		if (!isFormValid) return;
		dispatch(startCreatingUserWithEmail(formState));
	};

	return (
		<AuthLayout title="Crear Cuenta">
			<form
				onSubmit={onSubmit}
				className="animate__animated animate__fadeIn animate__faster"
			>
				<Grid
					container
					gap={2}
				>
					<Grid
						item
						xs={12}
					>
						<TextField
							fullWidth
							type="text"
							label="Nombre"
							placeholder="Nombre Completo"
							name="displayName"
							onChange={onInputChange}
							value={displayName}
							error={!!displayNameValid && formSubmitted}
							helperText={displayNameValid}
						/>
					</Grid>
					<Grid
						item
						xs={12}
					>
						<TextField
							fullWidth
							type="email"
							label="Correo"
							placeholder="correo@gmail.com"
							name="email"
							onChange={onInputChange}
							value={email}
							error={!!emailValid && formSubmitted}
							helperText={emailValid}
						/>
					</Grid>
					<Grid
						item
						xs={12}
					>
						<TextField
							fullWidth
							type="password"
							label="Contraseña"
							placeholder="Contraseña"
							name="password"
							onChange={onInputChange}
							value={password}
							error={!!passwordValid && formSubmitted}
							helperText={passwordValid}
						/>
					</Grid>
					<Grid
						container
						spacing={1.5}
					>
						<Grid
							item
							xs={12}
							display={!!errorMessge ? "" : "none"}
						>
							<Alert severity="error">{errorMessge}</Alert>
						</Grid>

						<Grid
							item
							xs={12}
						>
							<Button
								disabled={isCheckingAuthentication}
								type="submit"
								variant="contained"
								fullWidth
								sx={{ paddingY: 1.5 }}
							>
								Crear Cuenta
							</Button>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
						></Grid>
					</Grid>
					<Grid
						container
						direction="row"
						justifyContent="end"
					>
						<Grid>
							<Typography sx={{ mr: 1 }}>
								¿Ya tienes cuenta?{" "}
							</Typography>
							<Link
								component={Routerlink}
								color="inherit"
								to="/auth/login"
							>
								Ingresar
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};

export default RegisterPage;
