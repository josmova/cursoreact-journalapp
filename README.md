# 🔖 Journal-App

Journal-App es una aplicación del Curso React: De cero a experto ( Hooks y MERN ) con [Fernando Herrera](https://www.udemy.com/course/react-cero-experto/). En ella puedes agregar notas con título, descripción y algunas imágenes, te puedes registrar de forma normal o con Google Sings. Se puede editar o eliminar la nota, se consideraron algunas validaciones, pero ahí tiene un error lógico, cuando agregas la nota se agrega de forma sincrónica y se recuerda cuando das guardar.

## 📃 Tecnologías Utilizadas

| Tecnología          | Versión |
| :------------------ | :------ |
| `react`             | 18.2.0  |
| `firebase`          | 9.18.0  |
| `reduxjs toolkit`   | 1.9.3   |
| @emotion/react      | 11.10.6 |
| @emotion/styled     | 11.10.6 |
| @mui/icons-material | 5.11.14 |
| @mui/material       | 1.9.3   |
| sweetalert2         | 11.7.3  |
| `jest`              | 29.5.0  |
| `cloudinary`        | 1.35.0  |

## 📖 Características

- **Google Sings:** Te puedees registrar con Google Sings
- **Cloudinary:** Se almacenan las imágenes
- **Firestore:** Se esta usando como **Base de Datos**
- **Redux** aplicado en nuestro proyecto y usuamos **Thunk** y **Slices**
- **Redux Toolkit**
- **Redux Devtools**
- Acciones Asíncronas
- Mantiene el estado de la autenticación

📇 Se puede ver algunas imagenes de ejemplo
![JournalApp-Login](/public/img/Curso%20React%20JournalApp%20Login.png)

![JournalApp-Login](/public/img/CursoReactJournalAppHome.png)
![JournalApp-Login](/public/img/CursoReactJournalAppAgregandopart1.png)
![JournalApp-Login](/public/img/CursoReactJournalAppAgregandopart2.png)
![JournalApp-Login](/public/img/CursoReactJournalAppGuardado.png)

## 🚀 Comenzando

La configuración de la DB de Firestore estará dispoble por algunas semans solamente. Ya luego puede crear su propio proyecto. y agregar su configuación.

```JavaScript
const firebaseConfig = {
	apiKey: "API KEY",
	authDomain: "AUTH DOMAIN",
	projectId: "PROJECT ID",
	storageBucket: "STORAGE BUCKET",
	messagingSenderId: "MESSAING SENDER ID",
	appId: "APP ID",
	measurementId: "MEASUREMENT ID",
};
```

> **Nota:** Se requiere una cuenta en [**Cloudinary**](https://cloudinary.com/)

Aquí en el siguiente archivo **fileUpload** en la siguiente línea:

> const cloudUrl = "https://api.cloudinary.com/v1_1/"NAMEBUCKET/upload";

## 👩‍💻 Instalación

Instalacións Journal-App con npm:

```bash
  cd Journal-App
  npm install
```

Luego ejecutar el siguiente comando:

```bash
  npm run dev
```

## 📋 Ejecución de pruebas

Las pruebas se realizaron con [Jest.js](https://jestjs.io/). Son las siguientes:

- Pruebas en Firebase y Firestore
- Pruebas con reducers
- Variables de entorno de desarrollo, test y producción
- Pruebas en tareas asíncronas
- Para ejecutar pruebas, ejecute el siguiente comando:

```bash
  npm test
```

📇 Se pueden visualzia un ejemplo de las pruebas:
![JournalApp-Login](/public/img/CursoReact-JournalApp-TesJest.png)

## 👽 Autor

[![portfolio](https://img.shields.io/badge/Mi_portafolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://josemontiel.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/josemontielmv/)

> @Josmova ( Jose Montiel )
