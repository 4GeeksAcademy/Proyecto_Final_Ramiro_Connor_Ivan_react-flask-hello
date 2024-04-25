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
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
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
			registrarUsuario: async function (email, contraseña) {
				console.log(email, contraseña);
				try{
					const response = await fetch(`https://congenial-fishstick-v66qpqvx5wj9hw995-3001.app.github.dev/api/user`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"email": email,
							"password": contraseña,
							"is_active": true,
						})
					})
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					if (response.status == 200){
						localStorage.setItem("token",data.token)
						setStore({tokenOK : true})
						setStore({navigate : true})
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
				try{
					const response = await fetch(`https://congenial-fishstick-v66qpqvx5wj9hw995-3001.app.github.dev/api/login`, {
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
					if (response.status == 200){
						localStorage.setItem("token",data.token)
						setStore({tokenOK : true})
						setStore({navigate : true})
					}
					return true
				} catch (error) {
					console.error(err)

				}
			},
			tokenOK: function(){
				if (localStorage.getItem("token")!= null) {
					setStore({tokenOK : true})
				}
			},
			questionRandom: function(numberRandom){
				fetch('https://refactored-telegram-4jv976pw4xrf7gxg-3001.app.github.dev/api/question/'+numberRandom)
				    .then((response)=>response.json())
				    .then((data)=>setStore({question:data.results}))
				    .catch((error)=>console.log(error))
					
			},
			wrongChoice: function(numberRandom){
				fetch('https://refactored-telegram-4jv976pw4xrf7gxg-3001.app.github.dev/api/country/'+numberRandom)
				    .then((response)=>response.json())
				    .then((data)=>setStore({option1:data.results}))
				    .catch((error)=>console.log(error))
			},
			wrongChoice1: function(numberRandom){
				fetch('https://refactored-telegram-4jv976pw4xrf7gxg-3001.app.github.dev/api/country/'+numberRandom)
				    .then((response)=>response.json())
				    .then((data)=>setStore({option2:data.results}))
				    .catch((error)=>console.log(error))
			}


		}
	};
};

export default getState;
