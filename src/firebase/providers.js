import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { FirebaseAppAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(
			FirebaseAppAuth,
			googleProvider
		);
		// const credentials =
		// 	GoogleAuthProvider.credentialFromResult(result);
		const { displayName, email, photoURL, uid } = result.user;
		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,

			errorMessage,
		};
	}
};

export const registerUserWithEmailAndPassword = async ({
	email,
	password,
	displayName,
}) => {
	try {
		const resp = await createUserWithEmailAndPassword(
			FirebaseAppAuth,
			email,
			password
		);
		const { uid } = resp.user;
		await updateProfile(FirebaseAppAuth.currentUser, {
			displayName,
		});

		return {
			uid,
			displayName,
			email,
			ok: true,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,

			errorMessage,
		};
	}
};

export const loginWithEmailPassword = async ({
	email,
	password,
}) => {
	try {
		const resp = await signInWithEmailAndPassword(
			FirebaseAppAuth,
			email,
			password
		);
		const { uid, photoURL, displayName } = resp.user;

		return {
			ok: true,
			uid,
			photoURL,
			displayName,
		};
	} catch (error) {
		return { ok: false, errorMessage: error.message };
	}
};

export const logoutFirebase = async () => {
	try {
		await FirebaseAppAuth.signOut();
		return { ok: true };
	} catch (error) {
		return { ok: false, errorMessage: error.message };
	}
};
