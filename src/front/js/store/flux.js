import { RecuperarContraseña } from "../pages/recuperarContraseña";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			tokenOK: false,
			navigate: false,
			question: null,
			option1: null,
			option2: null,
			posicion1:null,
			posicion2:null,
			posicion3:null,
			posicion4:null,
			posicion5:null,
			posicion6:null,
			posicion7:null,
			posicion8:null,
			posicion9:null,
			posicion10:null,
			nombreDeUsuario:null,
			misPuntos:null,
			errorEmail:false,
			errorContraseña:false,
			errorUsuarioUso:false,
			errorEmailUso:false,
			contadorTermine:false,
			contadorReinicio:false,
			contadorPausa:false,
			idPais:0,
			recuperando:null,
			recuperado:false,
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			// Iniciar sesion
			// {
			// 	"email": "messi@miami.com",
			// 	"password": "leo"
			// }
			// Registrarse
			// {
			// 	"email": "messi@miami.com",
			// 	"password": "leo",
			// 	"is_active": true
			// }
			registrarUsuario: async function (email, contraseña, nombreDeUsuario) {
				console.log(email, contraseña, nombreDeUsuario);
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/user', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"email": email,
							"password": contraseña,
							"username": nombreDeUsuario,
							"is_active": true
						})
					})
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					if (response.status == 200) {
						// localStorage.setItem("token",data.token)
						// setStore({tokenOK : true})
						getActions().loginUsuario(email,contraseña)
						setStore({navigate : true})
						setStore({nombreDeUsuario : data.user.username})
					}  else if (response.status == 420) {
						setStore({errorUsuarioUso : true})
					} else if (response.status == 418) {
						setStore({errorEmailUso : true})
					}
					return true
				} catch (error) {
					console.error(err)

				}
				// fetch(`https://fantastic-space-zebra-v6r7vrg469pfxx9q-3001.app.github.dev/api/user`, {
				// 	method: 'POST',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({
				// 		"email": email,
				// 		"password": contraseña,
				// 		"is_active": true,
				// 	})
				// })
				// 	.then(res =>{ 
				// 		res.json()
				// 		if (res.status == 200){
				// 			setStore({tokenOK : true})
				// 		}
				// 	})
				// 	.then(data => {
				// 		console.log(data);
				// 		localStorage.setItem("token",data.token)
				// 	})
				// 	.catch(err => console.error(err))
			},




			loginUsuario: async function (email, contraseña) {
				console.log(email, contraseña);
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/login', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"email": email,
							"password": contraseña,
						})
					})
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					if (response.status == 200) {
						localStorage.setItem("token", data.token)
						setStore({ tokenOK: true })
						setStore({ navigate: true })
						setStore({ nombreDeUsuario: data.user.username })
						getActions().verificacionToken()
					} else if (response.status == 401) {
						setStore({errorContraseña : true})
					} else if (response.status == 404) {
						setStore({errorEmail : true})
					}
					return true
				} catch (error) {
					console.error(err)

				}
			},
			tokenOK: function () {
				if (localStorage.getItem("token") != null) {
					setStore({ tokenOK: true })
				}
			},
			questionRandom: function (numberRandom) {
				fetch(process.env.BACKEND_URL + "/api/question/" + numberRandom)
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ question: data.results })
						setStore({ idPais: data.results.country_info?.id })
						console.log(data.results.country_info.id)
					})
					.catch((error) => {
						console.log(error);
					})

			},
			wrongChoice: function (numberRandom) {
				fetch(process.env.BACKEND_URL + "/api/country/" + numberRandom)
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ option1: data.results })
					})
					.catch((error) => console.log(error))
			},
			wrongChoice1: function (numberRandom) {
				fetch(process.env.BACKEND_URL + "/api/country/" + numberRandom)
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ option2: data.results })
					})
					.catch((error) => console.log(error))
			},
			topTenRanking: async function () {
				console.log();
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/results')
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					if (response.status == 200) {
						setStore({ posicion1: data.results[0] })
						setStore({ posicion2: data.results[1] })
						setStore({ posicion3: data.results[2] })
						setStore({ posicion4: data.results[3] })
						setStore({ posicion5: data.results[4] })
						setStore({ posicion6: data.results[5] })
						setStore({ posicion7: data.results[6] })
						setStore({ posicion8: data.results[7] })
						setStore({ posicion9: data.results[8] })
						setStore({ posicion10: data.results[9] })
						return true
					}
					return true
				} catch (error) {
					console.error(err)

				}
			},
			verificacionToken: async function () {
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/protected', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + localStorage.getItem("token")
						}
					})
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					if (response.status == 200) {
						setStore({ nombreDeUsuario: data.user.username })
						return true
					} else if (response.status == 422) {
						localStorage.removeItem("token");
					}else if (response.status == 401) {
						localStorage.removeItem("token");
						window.location.reload()
					}
					return true
				} catch (error) {
					console.error(err)

				}
			},
			miMejorPosicion: async function () {
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/results/' + getStore().nombreDeUsuario)
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					if (response.status == 200) {
						setStore({ misPuntos: data.results })
						setStore({ miPosicion: data.user_position })
						console.log(data.results);
						return true
					}
					return true
				} catch (error) {
					console.error(err)

				}
			},
			postPuntos: async function (username, puntos) {
				console.log(username, puntos);
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/results', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"username": username,
							"points": puntos,
						})
					})
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					if (response.status == 200) {
						
					} else {
						
					} 
					return true
				} catch (error) {
					console.error(err)

				}
			},
			contador :  function () {
				setStore({ contadorTermine: true }); 
			},
			recuperarContraseña: async function (email) {
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/forgotpassword', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body:JSON.stringify({
							"email":email
						})
					})
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					if (response.status == 200) {
						setStore({ recuperando: data.msg })
						setStore({ recuperado: true })
						return true
					}else if (response.status == 400) {
						setStore({ recuperando: data.msg })
						console.log(data.msg)
					} else if (response.status == 401) {
						setStore({ recuperando: data.msg })
						console.log(data.msg)
					}
					return true
				} catch (error) {
					setStore({ recuperando: null })
					console.error(error)

				}
			},

			// fetch function from Connor to get info in both languages
			// fetchCountryInfo: async function () {
			// 	try {
			// 		const response = await fetch(process.env.BACKEND_URL + 'api/question/2');
			// 		const jsonData = await response.json();
			// 		setStore({ fetchedData: jsonData.results }); 
			// 	} catch (error) {
			// 		console.error("Error fetching data:", error);
			// 	}
			// }			

		}
	};
};

export default getState;
