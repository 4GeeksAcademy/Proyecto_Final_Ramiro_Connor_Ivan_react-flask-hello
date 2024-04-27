from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(60), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    country = db.Column(db.String(60), unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "country": self.country
            # do not serialize the password, its a security breach
        }

# class User(db.Model):
#     __tablename__ = 'user'
#     id = db.Column(db.Integer, primary_key=True)
#     user_name = db.Column(db.String(250), nullable=False)
#     email = db.Column(db.String(411), nullable=False)
#     password = db.Column(db.String(16), nullable=False)
#     country = db.Column(db.String(60), nullable=False)
#     onlinestatus = db.Column(db.Boolean()) 

#     def __repr__(self):
#         return f'<User {self.user_name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user name": self.user_name,
#             "email": self.email,
#             "country": self.country,
#             "online status": self.onlinestatus
#         }

class Results(db.Model):
    __tablename__ = 'results'
    id = db.Column(db.Integer, primary_key=True)
    points = db.Column(db.Integer)
    # wins = db.Column(db.Integer)
    # losses = db.Column(db.Integer)
    user_name = db.Column(db.String, db.ForeignKey('user.username'), nullable=False)
    user = db.relationship('User', backref='results')

    def __repr__(self):
        return f'<Results {self.id}>'
    
    def serialize(self):
        user_name = self.user.username if self.user else None  # Access the username if user is not None
        return {
            "id": self.id,
            "points": self.points,
            "user_name": user_name,
        }
    


class Country(db.Model):
    __tablename__ = 'country'
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(250), nullable=False)
    name = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return f'<Country {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "image": self.image,
            "name": self.name,
            # do not serialize the password, its a security breach
        }

class Question(db.Model):
    __tablename__ = 'questions'
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(250), nullable=False)
    information = db.Column(db.String(450), nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    country = db.relationship(Country)

    def __repr__(self):
        return f'<Question {self.id}>'

    def serialize(self):
        result = Country.query.filter_by(id=self.country_id).first()
        return {
            "id": self.id,
            "image": self.image,
            "information": self.information,
            "country_info": None if result is None else result.serialize() 
            # do not serialize the password, its a security breach
        }
    

