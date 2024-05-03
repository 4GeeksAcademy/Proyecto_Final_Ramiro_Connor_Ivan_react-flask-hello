import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    description: {
                        part1: 'Edit <1>src/App.js</1> and save to reload.',
                        part2: 'Learn React',
                        part3: 'Hello, World'
                    },
                    navbar: {
                        part1: "What is GuessNation?",
                        part2: "How to play",
                        part3: "Log in / Sign up"
                    },
                    footer: {
                        part1: "Made by ",
                        part2: "Thanks to"
                    },
                    home: {
                        part1: "Play",
                        part2: "What is GuessNation?",
                        part3: "It's a big guessing game about places all over the world! You see pictures of famous places, like cool buildings, awesome nature spots, and places everyone wants to visit. Then, you try to guess where they are. It's super fun!",
                        part4: "How to Play",
                        part5: "In GuessNation you'll see photos of interesting places from all over the world, like the Eiffel Tower or the Statue of Liberty. Your job is to select the country where the image is located. If you guess correctly, you'll earn points and become a geography expert!",
                        part6: "In GuessNations, every time you guess where a famous place is, and you're right, you get a point! Keep getting them right to show how good you are at geography! Play with kids from all over the world and see if you can be at the top of the list. Are you ready for the fun? Join GuessNations and start your journey around the world today!"
                    },
                    login: {
                        part1: "Password",
                        part2: "Log In",
                        part3: "Don't have an Account?",
                        part4: "Sign Up",
                        part5: "Forgot Password?",
                        part6: "Or",
                        part7: "Wrong email or Password"
                    },
                    register: {
                        part1: "Sign Up",
                        part2: "example@gmail.com",
                        part3: "Username",
                        part4: "Password",
                        part5: "Sign Up",
                        part6: "Already have an account?",
                        part7: "Log In",
                        part8: "Or",
                        part9: "Invalid email address",
                        part10: "Required",
                        part11: "The Email is already associated with an account",
                        part12: "The username is already in use",
                        part13: "Cannot exceed 20 characters",
                        part14: "Minimum of 5 characters",
                        part15: "Must contain at least one uppercase letter"
                    },
                    session: {
                        part1: "Which country does this place belong to?",
                        part2: "Nice one!",
                        part3: "Close one! Try again",
                        part4: "Understood!"
                    },
                    ranking: {
                        part1: "Sign in or Register to participate in the Global Ranking",
                        part2: "Position",
                        part3: "Username",
                        part4: "Score"
                    }
                    
                }
            },
            es: {
                translation: {
                    description: {
                        part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
                        part2: 'Lerne React',
                        part3: 'Hallo Welt'
                    },
                    navbar: {
                        part1: "¿Que es GuessNation?",
                        part2: "¿Como Jugar?",
                        part3: "Iniciar Sesión / Registrarse"
                    },
                    footer: {
                        part1: "Creado por",
                        part2: "Agradecimientos"
                    },
                    home: {
                        part1: "Jugar",
                        part2: "¿Que es GuessNation?",
                        part3: "Es un juego de trivia geográfica en el que los jugadores deben adivinar la ubicación de lugares icónicos del mundo. El juego presenta a los jugadores una serie de imágenes de lugares famosos, como monumentos, edificios históricos, paisajes naturales y sitios turísticos de renombre mundial.",
                        part4: "¿Como Jugar?",
                        part5: "En GuessNation verás fotos de lugares interesantes de todo el mundo, como la Torre Eiffel o el Monumento a la Libertad. Tu trabajo es seleccionar en qué país esta ubicada la imagen. Si adivinas correctamente, ¡ganarás puntos y te convertirás en un experto en geografía!",
                        part6: "En GuessNations, cada vez que adivinas correctamente la ubicación de un lugar famoso, ganas un punto. ¡Podrás mantener una racha de victorias para mostrar tu habilidad y conocimiento geográfico! Compite contra jugadores de todo el mundo y sube en el ranking global. ¿Estás listo para aceptar el desafío? ¡Únete a GuessNations y comienza tu viaje por el mundo hoy mismo!"
                    },
                    login: {
                        part1: "Contraseña",
                        part2: "Iniciar Sesión",
                        part3: "¿No tienes Cuenta?",
                        part4: "Registrarse",
                        part5: "¿Olvidaste la contraseña?",
                        part6: "O",
                        part7: "Email o Contraseña incorrectos"
                    },
                    register: {
                        part1: "Registrarse",
                        part2: "ejemplo@gmail.com",
                        part3: "Nombre de Usuario",
                        part4: "Contraseña",
                        part5: "Regístrate",
                        part6: "¿Ya tienes una cuenta?",
                        part7: "Iniciar Sesión",
                        part8: "O",
                        part9: "Dirección de correo electrónico no válida",
                        part10: "Obligatorio",
                        part11: "El Email ya tiene una cuenta asignada",
                        part12: "El Nombre de usuario ya esta en uso",
                        part13: "No puede superar los 20 caracteres",
                        part14: "Minimo de 5 caracteres",
                        part15: "Debe contener al menos una letra mayúscula"
                    },
                    session: {
                        part1: "¿A qué país pertenece esta imagen?",
                        part2: "Bien hecho!",
                        part3: "¡Casi! Inténtalo de nuevo",
                        part4: "¡Entendido!"
                    },
                    ranking: {
                        part1: "Inicia Sesión o Registrate para participar del Ranking Global",
                        part2: "Posicion",
                        part3: "Nombre de usuario",
                        part4: "Puntuacion"
                    }
                }
            }
        }
    });

export default i18n;