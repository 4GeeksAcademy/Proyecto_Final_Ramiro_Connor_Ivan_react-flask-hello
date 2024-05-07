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
                        part4: "Next",
                        part5: "Return",
                        part6: "Score"
                    },
                    ranking: {
                        part1: "Sign in or Register to participate in the Global Ranking",
                        part2: "Position",
                        part3: "Username",
                        part4: "Score",
                        part5: "Let's ",
                        part6: "Play again"
                    },
                    information: {
                        part1: "The Obelisco de Buenos Aires is a prominent monument located in the heart of Buenos Aires, Argentina. It stands as a symbol of the city's identity and history, soaring approximately 67 meters (220 feet) tall. Built in 1936, it serves as a landmark and a focal point for various cultural events and gatherings.",
                        part2: "The Colosseum in Rome, Italy, is an ancient amphitheater renowned for its architectural grandeur and historical significance. Constructed over 2,000 years ago, it was a venue for gladiatorial contests, animal hunts, and other public spectacles. Today, it stands as a UNESCO World Heritage Site and a symbol of the Roman Empire's power and cultural legacy.",
                        part3: "The Trevi Fountain in Rome, Italy, is a famous Baroque fountain featuring a statue of Neptune surrounded by sea creatures. Visitors toss coins into the fountain, hoping to return to Rome. It's known for its beauty and romance.",
                        part4: "The Taj Mahal in Agra, India, is an iconic white marble mausoleum. Built in the 17th century by Mughal Emperor Shah Jahan in memory of his wife, Mumtaz Mahal, it's renowned for its stunning architecture and intricate details. It's considered one of the world's most beautiful buildings and a symbol of eternal love.",
                        part5: "The Statue of Liberty in New York Harbor is a colossal copper sculpture gifted by France to the United States. Standing over 300 feet tall, it symbolizes freedom and democracy. It's an iconic landmark and a symbol of hope and opportunity for immigrants arriving in America.",
                        part6: "Christ the Redeemer in Rio de Janeiro, Brazil, is a massive Art Deco statue standing atop the Corcovado mountain. Completed in 1931, it depicts Jesus Christ with outstretched arms, symbolizing peace and welcoming visitors to the city. It's an iconic symbol of Rio and one of the New Seven Wonders of the World.",
                        part7: "The Sydney Opera House in Australia is an iconic performing arts venue featuring distinctive sail-shaped shells. Completed in 1973, it's renowned for its architectural brilliance and hosts a wide range of artistic performances. It's a symbol of Sydney's cultural significance and a UNESCO World Heritage Site.",
                        part8: "The Pyramids in Egypt are ancient monumental tombs built for pharaohs over 4,500 years ago. They are massive stone structures with geometrically precise shapes, located near Cairo. They stand as enduring symbols of ancient Egyptian civilization and are among the world's most famous and mysterious landmarks.",
                        part9: "Chichen Itza is an ancient Mayan archaeological site located in Mexico's Yucatán Peninsula. It features a stunning pyramid called El Castillo, or the Temple of Kukulcan, along with other temples, ball courts, and sacred cenotes. Chichen Itza was a major Mayan city and is now a UNESCO World Heritage Site and one of Mexico's most visited tourist destinations.",
                        part10: "Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London. While often used to refer to the clock tower itself, it technically only refers to the bell inside the tower. The tower is officially called the Elizabeth Tower, and it stands as an iconic symbol of London and the United Kingdom.",
                        part11: "The Golden Gate Bridge in San Francisco, USA, is an iconic suspension bridge spanning the Golden Gate Strait. Completed in 1937, it's famous for its majestic beauty and engineering brilliance. It's a symbol of San Francisco and one of the most photographed landmarks in the world.",
                        part12: "Petra, located in Jordan, is an ancient city carved into the rock face by the Nabataeans over 2,000 years ago. Known as the 'Rose City' due to the color of the stone, it features elaborate temples, tombs, and a complex water system. Petra is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
                        part13: "Stonehenge, located in Wiltshire, England, is a prehistoric monument consisting of large standing stones arranged in a circular pattern. Built over 4,000 years ago, its purpose remains a subject of debate, ranging from a burial ground to an astronomical observatory. Stonehenge is a UNESCO World Heritage Site and one of the most famous landmarks in the world.",
                        part14: "The Louvre Museum in Paris, France, is one of the world's largest and most visited art museums. Housed in a historic palace, it showcases thousands of artworks, including the Mona Lisa and the Venus de Milo. The Louvre is a symbol of art and culture and a must-visit destination for art enthusiasts.",
                        part15: "The Sagrada Familia in Barcelona, Spain, is a renowned basilica designed by architect Antoni Gaudí. Construction began in 1882 and continues to this day, with completion projected for 2026. It's famous for its intricate facades and towering spires, blending Gothic and Art Nouveau styles. The Sagrada Familia is a UNESCO World Heritage Site and a symbol of Barcelona's artistic heritage.",
                        part16: "The Forbidden City in Beijing, China, is a vast imperial palace complex dating back to the Ming and Qing dynasties. With over 980 buildings, it served as the residence of Chinese emperors and their households for nearly 500 years. The Forbidden City is a UNESCO World Heritage Site and one of China's most important historical and cultural landmarks.",
                        part17: "Mount Fuji, located on Honshu Island, Japan, is the country's tallest peak and an iconic symbol. With its perfectly symmetrical cone shape, it's revered as a sacred mountain and a source of inspiration for artists and poets. Mount Fuji is a UNESCO World Heritage Site and a popular destination for hiking and sightseeing.",
                        part18: "The Eiffel Tower in Paris, France, is an iconic iron lattice tower and a symbol of the city. Completed in 1889 as a centerpiece for the 1889 World's Fair, it's one of the most recognizable structures in the world. The Eiffel Tower offers panoramic views of Paris and attracts millions of visitors annually.",
                        part19: "The Leaning Tower of Pisa in Italy is a freestanding bell tower known for its unintended tilt. Completed in 1372, it began to lean during construction due to soft ground. Despite efforts to stabilize it, the lean has increased over the years, making it a famous landmark and a symbol of architectural mishaps.",
                        part20: "The Blue Mosque in Istanbul, Turkey, is a stunning example of Ottoman architecture. Completed in 1616, it features intricate tile work and cascading domes. The mosque is still used for worship today and is open to visitors, attracting millions each year. It's a symbol of Istanbul's cultural richness and religious heritage."
                    },
                    notFound: {
                        part1: "Oops!",
                        part2: "You've left Earth! No famous sights or monuments here!",
                        part3: "Back to Earth"
                    },
                    password: {
                        part1: "Recover Password",
                        part2: "Recover",
                        part3: "Back to Home"
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
                        part4: "Siguiente",
                        part5: "Volver",
                        part6: "Puntos"
                    },
                    ranking: {
                        part1: "Inicia Sesión o Registrate para participar del Ranking Global",
                        part2: "Posicion",
                        part3: "Nombre de usuario",
                        part4: "Puntuacion",
                        part5: "Vamos a ",
                        part6: "Jugar de nuevo"
                    },
                    information: {
                        part1: "El Obelisco de Buenos Aires es un prominente monumento ubicado en el corazón de Buenos Aires, Argentina. Se erige como símbolo de la identidad e historia de la ciudad, alcanzando aproximadamente 67 metros (220 pies) de altura. Construido en 1936, sirve como hito y punto focal para diversos eventos culturales y reuniones.",
                        part2: "El Coliseo en Roma, Italia, es un antiguo anfiteatro famoso por su grandeza arquitectónica e importancia histórica. Construido hace más de 2,000 años, fue escenario de combates de gladiadores, cacerías de animales y otros espectáculos públicos. Hoy en día, es un Patrimonio de la Humanidad de la UNESCO y un símbolo del poder y legado cultural del Imperio Romano.",
                        part3: "La Fuente de Trevi en Roma, Italia, es una famosa fuente barroca con una estatua de Neptuno rodeada de criaturas marinas. Los visitantes lanzan monedas a la fuente, esperando regresar a Roma. Es conocida por su belleza y romanticismo.",
                        part4: "El Taj Mahal en Agra, India, es un icónico mausoleo de mármol blanco. Construido en el siglo XVII por el emperador mogol Shah Jahan en memoria de su esposa, Mumtaz Mahal, es famoso por su impresionante arquitectura y detalles intrincados. Es considerado uno de los edificios más hermosos del mundo y un símbolo de amor eterno.",
                        part5: "La Estatua de la Libertad en el puerto de Nueva York es una colosal escultura de cobre regalada por Francia a los Estados Unidos. Con más de 300 pies de altura, simboliza la libertad y la democracia. Es un hito icónico y un símbolo de esperanza y oportunidad para los inmigrantes que llegan a América.",
                        part6: "Cristo Redentor en Río de Janeiro, Brasil, es una masiva estatua de Art Deco ubicada en la cima del monte Corcovado. Terminada en 1931, representa a Jesucristo con los brazos extendidos, simbolizando la paz y dando la bienvenida a los visitantes a la ciudad. Es un símbolo icónico de Río y una de las Nuevas Siete Maravillas del Mundo.",
                        part7: "La Ópera de Sídney en Australia es un emblemático lugar de artes escénicas con conchas distintivas en forma de velas. Terminada en 1973, es famosa por su brillantez arquitectónica y acoge una amplia gama de actuaciones artísticas. Es un símbolo de la importancia cultural de Sídney y un Patrimonio de la Humanidad de la UNESCO.",
                        part8: "Las Pirámides en Egipto son antiguas tumbas monumentales construidas para faraones hace más de 4,500 años. Son enormes estructuras de piedra con formas geométricamente precisas, ubicadas cerca de El Cairo. Son símbolos perdurables de la civilización del antiguo Egipto y están entre los monumentos más famosos y misteriosos del mundo.",
                        part9: "Chichén Itzá es un antiguo sitio arqueológico maya ubicado en la península de Yucatán, México. Presenta una impresionante pirámide llamada El Castillo, o el Templo de Kukulcán, junto con otros templos, canchas de pelota y cenotes sagrados. Chichén Itzá fue una importante ciudad maya y ahora es un Patrimonio de la Humanidad de la UNESCO y uno de los destinos turísticos más visitados de México.",
                        part10: "Big Ben es el apodo para la Gran Campana del reloj en el extremo norte del Palacio de Westminster en Londres. Aunque a menudo se usa para referirse a la torre del reloj en sí, técnicamente solo se refiere a la campana dentro de la torre. La torre se llama oficialmente Torre Isabel y es un símbolo icónico de Londres y el Reino Unido.",
                        part11: "El Puente Golden Gate en San Francisco, EE. UU., es un icónico puente colgante que atraviesa el Estrecho de Golden Gate. Terminado en 1937, es famoso por su majestuosa belleza y brillantez ingenieril. Es un símbolo de San Francisco y uno de los hitos más fotografiados del mundo.",
                        part12: "Petra, ubicada en Jordania, es una antigua ciudad tallada en la roca por los nabateos hace más de 2,000 años. Conocida como la 'Ciudad Rosa' debido al color de la piedra, presenta templos elaborados, tumbas y un sistema de agua complejo. Petra es un Patrimonio de la Humanidad de la UNESCO y una de las Nuevas Siete Maravillas del Mundo.",
                        part13: "Stonehenge, ubicado en Wiltshire, Inglaterra, es un monumento prehistórico compuesto por grandes piedras verticales dispuestas en un patrón circular. Construido hace más de 4,000 años, su propósito sigue siendo objeto de debate, que va desde un lugar de entierro hasta un observatorio astronómico. Stonehenge es un Sitio de Patrimonio Mundial de la UNESCO y uno de los lugares más famosos del mundo.",
                        part14: "El Museo del Louvre en París, Francia, es uno de los museos de arte más grandes y visitados del mundo. Ubicado en un palacio histórico, exhibe miles de obras de arte, incluyendo la Mona Lisa y la Venus de Milo. El Louvre es un símbolo del arte y la cultura y un destino imperdible para los amantes del arte.",
                        part15: "La Sagrada Familia en Barcelona, España, es una basílica de renombre diseñada por el arquitecto Antoni Gaudí. La construcción comenzó en 1882 y continúa hasta el día de hoy, con una finalización proyectada para 2026. Es famosa por sus fachadas intrincadas y torres imponentes, que combinan estilos góticos y modernistas. La Sagrada Familia es un Sitio de Patrimonio Mundial de la UNESCO y un símbolo del patrimonio artístico de Barcelona.",
                        part16: "La Ciudad Prohibida en Beijing, China, es un vasto complejo de palacios imperiales que se remonta a las dinastías Ming y Qing. Con más de 980 edificios, sirvió como residencia de los emperadores chinos y sus familias durante casi 500 años. La Ciudad Prohibida es un Sitio de Patrimonio Mundial de la UNESCO y uno de los lugares históricos y culturales más importantes de China.",
                        part17: "El Monte Fuji, ubicado en la isla de Honshu, Japón, es el pico más alto del país y un símbolo icónico. Con su forma de cono perfectamente simétrica, es venerado como una montaña sagrada y una fuente de inspiración para artistas y poetas. El Monte Fuji es un Sitio de Patrimonio Mundial de la UNESCO y un destino popular para hacer senderismo y turismo.",
                        part18: "La Torre Eiffel en París, Francia, es una torre de hierro icónica y un símbolo de la ciudad. Terminada en 1889 como pieza central de la Feria Mundial de 1889, es una de las estructuras más reconocibles del mundo. La Torre Eiffel ofrece vistas panorámicas de París y atrae a millones de visitantes anualmente.",
                        part19: "La Torre Inclinada de Pisa en Italia es una torre campanario independiente conocida por su inclinación no intencional. Terminada en 1372, comenzó a inclinarse durante su construcción debido al terreno blando. A pesar de los esfuerzos por estabilizarla, la inclinación ha aumentado con los años, convirtiéndola en un famoso hito y un símbolo de errores arquitectónicos.",
                        part20: "La Mezquita Azul en Estambul, Turquía, es un impresionante ejemplo de arquitectura otomana. Terminada en 1616, presenta intrincados trabajos en cerámica y cúpulas en cascada. La mezquita todavía se usa para el culto hoy en día y está abierta a los visitantes, atrayendo a millones cada año. Es un símbolo de la riqueza cultural e religiosa de Estambul."
                    },
                    notFound: {
                        part1: "¡Ups!",
                        part2: "¡Has dejado la Tierra! ¡Aquí no hay lugares famosos ni monumentos!",
                        part3: "Volver a la Tierra"
                    },
                    password: {
                        part1: "Recuperar Contraseña",
                        part2: "Recuperar",
                        part3: "Volver al inicio"
                    }
                    
                }
            }
        }
    });

export default i18n;