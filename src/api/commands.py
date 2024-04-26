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
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/mexico_flag", name="Mexico"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/peru_flag", name="Peru"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/uk_flag", name="United Kingdom"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/usa_flag", name="United States"),
                Country(image="https://res.cloudinary.com/dq4dla9gj/image/upload/venezuela_flag", name="Venezuela")
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
                Question(image="https://res.cloudinary.com/dq4dla9gj/image/upload/big_ben", information="Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London. While often used to refer to the clock tower itself, it technically only refers to the bell inside the tower. The tower is officially called the Elizabeth Tower, and it stands as an iconic symbol of London and the United Kingdom.", country_id=countries[12].id)
            ]
            db.session.add_all(questions)
            db.session.commit()
            print("La base de datos ha sido poblada con datos de ejemplo.")
        except Exception as e:
            db.session.rollback()
            print(f"Error al llenar la base de datos: {e}")