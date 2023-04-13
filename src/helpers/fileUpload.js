export const fileUpload = async (file) => {
	if (!file) throw new Error("No tenemos ningúna archivo a subir");

	const cloudUrl =
		"https://api.cloudinary.com/v1_1/dzb5mwwc0/upload";

	const formData = new FormData();
	formData.append("upload_preset", "react-journal");
	formData.append("file", file);

	try {
		const resp = await fetch(cloudUrl, {
			method: "POST",
			body: formData,
		});

		if (!resp.ok) throw new Error("No se pudo subir imagen");
		const cloudResp = await resp.json();

		return cloudResp.secure_url;
	} catch (error) {
		//return null; code solo para testing
		return null;
		/* throw new Error(error.message); */
	}
};
