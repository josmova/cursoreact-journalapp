import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import LoginPage from "../../../auth/pages/LoginPage";
import { authSlice } from "../../../store/auth/authSlice";
import { startGoogleSignIn } from "../../../store/auth/thunks.js";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../store/auth/thunks.js", () => ({
	startGoogleSignIn: () => mockStartGoogleSignIn,
	startLoginWithEmailPassword: ({ email, password }) => {
		return () =>
			mockStartLoginWithEmailPassword({ email, password });
	},
}));

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
	preloadedState: {
		auth: notAuthenticatedState,
	},
});

describe("Pruebas en <LoginPage />", () => {
	beforeEach(() => jest.clearAllMocks());

	test("Debe de mostrar el componente correctamente", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		// screen.debug()
		expect(
			screen.getAllByText("Login").length
		).toBeGreaterThanOrEqual(1);
	});

	test("Boton de google debe de llamar a startGoogleSignIn", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const googleBtn = screen.getByLabelText("google-btn");
		fireEvent.click(googleBtn);
		expect(mockStartGoogleSignIn).toHaveBeenCalled();
	});

	test("El submit debe de llamar startLoginWithEmailPassword", () => {
		const email = "joseMontiel@gmail.com";
		const password = "123456";

		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const emailField = screen.getByRole("textbox", {
			name: "Correo",
		});
		fireEvent.change(emailField, {
			target: { name: "email", value: email },
		});

		const passwordField = screen.getByTestId("password");
		fireEvent.change(passwordField, {
			target: { name: "password", value: password },
		});

		const loginForm = screen.getByLabelText("submit-form");
		fireEvent.submit(loginForm);

		expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
			email: email,
			password: password,
		});
	});
});
