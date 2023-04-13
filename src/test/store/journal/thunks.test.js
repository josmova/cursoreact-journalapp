/* import { collection, deleteDoc, getDocs } from "firebase/firestore"; */
import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../../../firebase/config";
import {
	savingNewNote,
	addNewEmptyNote,
	setActiveNote,
} from "../../../store/journal/journalSlice";
import { startNewNote } from "../../../store/journal/thunks";

describe("Pruebas en Journal Thunks", () => {
	const dispatch = jest.fn();
	const getState = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("startNewNote debe de crear una nueva nota en blanco", async () => {
		const uid = "fJSC1kCAfsfwqlPCIq9Wi0rgqZJ2";
		getState.mockReturnValue({ auth: { uid: uid } });
		await startNewNote()(dispatch, getState);
		await startNewNote()(dispatch, getState);

		expect(dispatch).toHaveBeenCalledWith(savingNewNote());
		expect(dispatch).toHaveBeenCalledWith(
			addNewEmptyNote({
				body: "",
				title: "",
				id: expect.any(String),
				date: expect.any(Number),
			})
		);
		expect(dispatch).toHaveBeenCalledWith(
			setActiveNote({
				body: "",
				title: "",
				id: expect.any(String),
				date: expect.any(Number),
			})
		);

		const collectionRef = collection(
			FirebaseDB,
			`${uid}/journal/notes`
		);
		const docs = await getDocs(collectionRef);

		const deletePromises = [];
		docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));
		await Promise.all(deletePromises);
	});
});
