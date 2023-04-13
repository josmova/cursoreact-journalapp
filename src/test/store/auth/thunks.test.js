/* import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from '../../../src/firebase/providers'; */
import {
	loginWithEmailPassword,
	logoutFirebase,
	singInWithGoogle,
} from "../../../firebase/providers";
/* import { chekingCredentials, login, logout } from '../../../src/store/auth'; */
/* chekingCredentials */
import {
	chekingCredentials,
	login,
	logout,
} from "../../../store/auth/authSlice";

/* import {
	checkingAuthentication,
	startGoogleSignIn,
	startLoginWithEmailPassword,
	startLogout,
} from "../../../src/store/auth/thunks"; */
import {
	checkingAuthentication,
	startGoogleSignIn,
	startLoginWithEmailPassword,
	startLogout,
} from "../../../store/auth/thunks";
/* import { clearNotesLogout } from "../../../src/store/journal/journalSlice"; */
import { clearNotesLogout } from "../../../store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";
// import { demoUser } from "../../fixtures/authFixtures";
jest.mock("../../../firebase/providers.js");

describe("Pruebas en AuthThunks", () => {
	const dispatch = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("debe de invocar el chekingCredentials", async () => {
		await checkingAuthentication()(dispatch);
		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
	});

	test("startGoogleSignIn debe de llamar chekingCredentials y login - Exito", async () => {
		const loginData = { ok: true, ...demoUser };
		await singInWithGoogle.mockResolvedValue(loginData);

		// thunk
		await startGoogleSignIn()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test("startGoogleSignIn debe de llamar chekingCredentials y logout - Error", async () => {
		const loginData = {
			ok: false,
			errorMessage: "Un error en Google",
		};
		await singInWithGoogle.mockResolvedValue(loginData);

		// thunk
		await startGoogleSignIn()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
		expect(dispatch).toHaveBeenCalledWith(
			logout(loginData.errorMessage)
		);
	});

	test("startLoginWithEmailPassword debe de llamar chekingCredentials y login - Exito", async () => {
		const loginData = { ok: true, ...demoUser };
		const formData = { email: demoUser.email, password: "123456" };

		await loginWithEmailPassword.mockResolvedValue(loginData);

		await startLoginWithEmailPassword(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test("startLogout debe de llamar logoutFirebase, clearNotes y logout", async () => {
		await startLogout()(dispatch);

		expect(logoutFirebase).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
		expect(dispatch).toHaveBeenCalledWith(logout());
	});
});
