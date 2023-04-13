import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as Routerlink } from "react-router-dom";

import { Google } from "@mui/icons-material";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import {
	startGoogleSignIn,
	startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";

const formData = {
	email: "",
	password: "",
};

const LoginPage = () => {
	const { status, errorMessage } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();
	const { email, password, onInputChange } = useForm(formData);

	const isAuthenticating = useMemo(
		() => status === "checking",
		[status]
	);

	const onSubmit = (event) => {
		event.preventDefault();
		// console.log({ email, password });
		dispatch(startLoginWithEmailPassword({ email, password }));
	};

	const onGoogleSingIn = () => {
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title="Login">
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
							type="email"
							name="email"
							label="Correo"
							placeholder="correo@gmail.com"
							value={email}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid
						item
						xs={12}
					>
						<TextField
							fullWidth
							type="password"
							name="password"
							label="Contraseña"
							placeholder="Contraseña"
							value={password}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid container>
						<Grid
							item
							xs={12}
							display={!!errorMessage ? "" : "none"}
						>
							<Alert severity="error">{errorMessage}</Alert>
						</Grid>
					</Grid>

					<Grid
						container
						spacing={1.5}
					>
						<Grid
							item
							xs={12}
							sm={6}
						>
							<Button
								fullWidth
								type="submit"
								variant="contained"
								sx={{ paddingY: 1.5 }}
								disabled={isAuthenticating}
							>
								Iniciar Sesión
							</Button>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
						>
							<Button
								variant="contained"
								fullWidth
								sx={{ paddingY: 1.5 }}
								onClick={onGoogleSingIn}
								disabled={isAuthenticating}
							>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						justifyContent="end"
					>
						<Grid>
							<Link
								component={Routerlink}
								color="inherit"
								to="/auth/register"
							>
								Crear una cuenta
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};

export default LoginPage;
