import click
from api.models import db, User, Results, Country, Question
import cloudinary
import cloudinary.uploader
   
cloudinary.config( 
  cloud_name = "dq4dla9gj", 
  api_key = "548525156956564", 
  api_secret = "abMUUOfX7EQEKERu9O_xeWQ25nU" 
)
flag1 = cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
                             public_id="olympic_flag")

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.country = "Spain"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        pass

    @app.cli.command("fill-db-with-example-data")
    def fill_db_with_example_data():
        """ Este comando rellenará la base de datos con datos de ejemplo. """
        db.drop_all()
        db.create_all()
        try:
            # User info
            users = [
                User(username="messi", email="messi@yahoo.com", password="111111", country="Argentina", is_active=True, id=1),
                User(username="gandhi", email="gandhi@yahoo.com", password="222222", country="India", is_active=True, id=2),
                User(username="ronaldinho", email="ronaldinho@yahoo.com", password="333333", country="Brazil", is_active=True, id=3)
            ]
            db.session.add_all(users)
            db.session.commit()
            # Each User's results of all games played
            results = [
                Results(points=25000, user_name=users[0].username),
                Results(points=1000, user_name=users[1].username),
                Results(points=5000, user_name=users[0].username),
                Results(points=345000, user_name=users[0].username),
                Results(points=210000, user_name=users[1].username),
                Results(points=8000, user_name=users[0].username),
                Results(points=8000, user_name=users[0].username),
                Results(points=8000, user_name=users[2].username),
                Results(points=878000, user_name=users[1].username),
                Results(points=811000, user_name=users[2].username),
                Results(points=128000, user_name=users[0].username),
                Results(points=15000, user_name=users[2].username)
            ]
            db.session.add_all(results)
            db.session.commit()
            # The Countries to be selected aka the answers
            countries = [
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/argentina_flag", name="Argentina"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/australia_flag", name="Australia"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/belgium_flag", name="Belgium"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/brazil_flag", name="Brazil"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/china_flag", name="China"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/egypt_flag", name="Egypt"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/france_flag", name="France"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/greece_flag", name="Greece"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/india_flag", name="India"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/italy_flag", name="Italy"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/mexico_flag_fixed", name="Mexico"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/peru_flag", name="Peru"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/united_kingdom_flag", name="United Kingdom"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/united_states_flag", name="United States"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/venezuela_flag", name="Venezuela"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/jordan_flag", name="Jordan"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/spain_flag", name="Spain"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/japan_flag", name="Japan"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/turkey_flag", name="Turkey"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/canada_flag", name="Canada"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/germany_flag", name="Germany"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/south_korea_flag", name="South Korea"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/indonesia_flag", name="Indonesia"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/jamaica_flag", name="Jamaica"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/pakistan_flag", name="Pakistan"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/senegal_flag", name="Senegal"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/thailand_flag", name="Thailand"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/uruguay_flag", name="Uruguay"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/ukraine_flag", name="Ukraine"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/south_africa_flag", name="South Africa")

            ]
            db.session.add_all(countries)
            db.session.commit()
            # Acciones relacionadas con las categorías de estados de ánimo
            questions = [
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/obelisco", information="The Obelisco de Buenos Aires is a prominent monument located in the heart of Buenos Aires, Argentina. It stands as a symbol of the city's identity and history, soaring approximately 67 meters (220 feet) tall. Built in 1936, it serves as a landmark and a focal point for various cultural events and gatherings.", country_id=countries[0].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/colisseum", information="The Colosseum in Rome, Italy, is an ancient amphitheater renowned for its architectural grandeur and historical significance. Constructed over 2,000 years ago, it was a venue for gladiatorial contests, animal hunts, and other public spectacles. Today, it stands as a UNESCO World Heritage Site and a symbol of the Roman Empire's power and cultural legacy.", country_id=countries[9].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/trevi_fountain", information="The Trevi Fountain in Rome, Italy, is a famous Baroque fountain featuring a statue of Neptune surrounded by sea creatures. Visitors toss coins into the fountain, hoping to return to Rome. It's known for its beauty and romance.", country_id=countries[9].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/taj_mahal", information="The Taj Mahal in Agra, India, is an iconic white marble mausoleum. Built in the 17th century by Mughal Emperor Shah Jahan in memory of his wife, Mumtaz Mahal, it's renowned for its stunning architecture and intricate details. It's considered one of the world's most beautiful buildings and a symbol of eternal love.", country_id=countries[8].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/statue_of_liberty", information="The Statue of Liberty in New York Harbor is a colossal copper sculpture gifted by France to the United States. Standing over 300 feet tall, it symbolizes freedom and democracy. It's an iconic landmark and a symbol of hope and opportunity for immigrants arriving in America.", country_id=countries[13].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/christ_the_redeemer", information="Christ the Redeemer in Rio de Janeiro, Brazil, is a massive Art Deco statue standing atop the Corcovado mountain. Completed in 1931, it depicts Jesus Christ with outstretched arms, symbolizing peace and welcoming visitors to the city. It's an iconic symbol of Rio and one of the New Seven Wonders of the World.", country_id=countries[3].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/sydney_opera_house", information="The Sydney Opera House in Australia is an iconic performing arts venue featuring distinctive sail-shaped shells. Completed in 1973, it's renowned for its architectural brilliance and hosts a wide range of artistic performances. It's a symbol of Sydney's cultural significance and a UNESCO World Heritage Site.", country_id=countries[1].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/pyramids", information="The Pyramids in Egypt are ancient monumental tombs built for pharaohs over 4,500 years ago. They are massive stone structures with geometrically precise shapes, located near Cairo. They stand as enduring symbols of ancient Egyptian civilization and are among the world's most famous and mysterious landmarks.", country_id=countries[5].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/chichen_itza", information="Chichen Itza is an ancient Mayan archaeological site located in Mexico's Yucatán Peninsula. It features a stunning pyramid called El Castillo, or the Temple of Kukulcan, along with other temples, ball courts, and sacred cenotes. Chichen Itza was a major Mayan city and is now a UNESCO World Heritage Site and one of Mexico's most visited tourist destinations.", country_id=countries[10].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/big_ben", information="Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London. While often used to refer to the clock tower itself, it technically only refers to the bell inside the tower. The tower is officially called the Elizabeth Tower, and it stands as an iconic symbol of London and the United Kingdom.", country_id=countries[12].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/san_fran_bridge", information="The Golden Gate Bridge in San Francisco, USA, is an iconic suspension bridge spanning the Golden Gate Strait. Completed in 1937, it's famous for its majestic beauty and engineering brilliance. It's a symbol of San Francisco and one of the most photographed landmarks in the world.", country_id=countries[13].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/petra", information="Petra, located in Jordan, is an ancient city carved into the rock face by the Nabataeans over 2,000 years ago. Known as the 'Rose City' due to the color of the stone, it features elaborate temples, tombs, and a complex water system. Petra is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.", country_id=countries[15].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/stonehenge", information="Stonehenge, located in Wiltshire, England, is a prehistoric monument consisting of large standing stones arranged in a circular pattern. Built over 4,000 years ago, its purpose remains a subject of debate, ranging from a burial ground to an astronomical observatory. Stonehenge is a UNESCO World Heritage Site and one of the most famous landmarks in the world.", country_id=countries[12].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/louvre", information="The Louvre Museum in Paris, France, is one of the world's largest and most visited art museums. Housed in a historic palace, it showcases thousands of artworks, including the Mona Lisa and the Venus de Milo. The Louvre is a symbol of art and culture and a must-visit destination for art enthusiasts.", country_id=countries[6].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/sagrada_familia", information="The Sagrada Familia in Barcelona, Spain, is a renowned basilica designed by architect Antoni Gaudí. Construction began in 1882 and continues to this day, with completion projected for 2026. It's famous for its intricate facades and towering spires, blending Gothic and Art Nouveau styles. The Sagrada Familia is a UNESCO World Heritage Site and a symbol of Barcelona's artistic heritage.", country_id=countries[16].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/forbidden_city", information="The Forbidden City in Beijing, China, is a vast imperial palace complex dating back to the Ming and Qing dynasties. With over 980 buildings, it served as the residence of Chinese emperors and their households for nearly 500 years. The Forbidden City is a UNESCO World Heritage Site and one of China's most important historical and cultural landmarks.", country_id=countries[4].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/mount_fuji", information="Mount Fuji, located on Honshu Island, Japan, is the country's tallest peak and an iconic symbol. With its perfectly symmetrical cone shape, it's revered as a sacred mountain and a source of inspiration for artists and poets. Mount Fuji is a UNESCO World Heritage Site and a popular destination for hiking and sightseeing.", country_id=countries[17].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/eiffel_tower", information="The Eiffel Tower in Paris, France, is an iconic iron lattice tower and a symbol of the city. Completed in 1889 as a centerpiece for the 1889 World's Fair, it's one of the most recognizable structures in the world. The Eiffel Tower offers panoramic views of Paris and attracts millions of visitors annually.", country_id=countries[6].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/leaning_pisa", information="The Leaning Tower of Pisa in Italy is a freestanding bell tower known for its unintended tilt. Completed in 1372, it began to lean during construction due to soft ground. Despite efforts to stabilize it, the lean has increased over the years, making it a famous landmark and a symbol of architectural mishaps.", country_id=countries[9].id),
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/blue_mosque", information="The Blue Mosque in Istanbul, Turkey, is a stunning example of Ottoman architecture. Completed in 1616, it features intricate tile work and cascading domes. The mosque is still used for worship today and is open to visitors, attracting millions each year. It's a symbol of Istanbul's cultural richness and religious heritage.", country_id=countries[18].id)

            ]
            db.session.add_all(questions)
            db.session.commit()
            print("La base de datos ha sido poblada con datos de ejemplo.")
        except Exception as e:
            db.session.rollback()
            print(f"Error al llenar la base de datos: {e}")