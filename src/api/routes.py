"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Question, Country, Results
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from sqlalchemy import desc, func
from flask_mail import Message #importamos Message() de flask_mail
import random #importamos ramdom y string para generar una clave aleatoria nueva
import string

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def get_all_users():
    query_results = User.query.all()
    results = list(map(lambda item: item.serialize(), query_results))

    if results == []:
        return jsonify("no users in the database"), 404
    
    response_body = {
        "msg": "ok",
        "results": results
    }
    
    return jsonify(response_body), 200

@api.route('/user/<int:user_id>', methods=['GET'])
def get_one_user(user_id):
    query_results = User.query.filter_by(id=user_id).first()
   

    if query_results is None:
        return jsonify({"msg": "there is no user matching the ID provided"}), 404
    
    response_body = {
        "msg": "ok",
        "results": query_results.serialize()
    }
    return jsonify(response_body), 200

@api.route('/user', methods=['POST'])
def create_user():
    data = request.json
    print(data)
    user_email = User.query.filter_by(email=data['email']).first()
    user_name = User.query.filter_by(username=data['username']).first()
    if user_email : 
        return jsonify({
            "msg": "Email already in use" 
        }), 418
    if user_name : 
        return jsonify({
            "msg": "Username already in use" 
        }), 420
    
    first_available_id = db.session.query(func.max(User.id)).scalar()
    new_user_id = (first_available_id or 0) + 1
    
    new_user = User(id=new_user_id, username=data["username"],password=data["password"], email=data["email"], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    # token = create_access_token(identity = new_user.id)
    response_body = {
        "msg": "All working",
        # "token": token,
        "user": new_user.serialize()
        # "query result": query_result
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def login():
    # query_result = Characters.query.filter_by(id=characters_id).first()
    data = request.json
    print(data)
    user = User.query.filter_by(email=data["email"]).first()
    if not user: 
        return jsonify({
            "msg": "email not found, sorry"
        }), 404
    if user.password != data["password"]: 
        return jsonify({
            "msg": "wrong email and password, too bad"
        }), 401
    token = create_access_token(identity = user.username)
    response_body = {
        "msg": "All working",
        "token": token,
        "user": user.serialize()
        # "query result": query_result
    }    

    return jsonify(response_body), 200

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()
    print("current user is this:", current_user)
    if user is None:
        raise APIException("User not found", status_code=404)
    return jsonify({
        "msg": "User authenticated",
        "user": user.serialize()
    }), 200

@api.route("/results", methods=["GET"])
def get_top_10_results():
    query_results = Results.query.order_by(desc(Results.points)).limit(10).all()
    results = list(map(lambda item: item.serialize(), query_results))
    
    if results == []:
        return jsonify("no results in the database"), 404
    
    response_body = {
        "msg": "ok",
        "results": results
    }
    
    return jsonify(response_body), 200

@api.route('/results/<string:username>', methods=['GET'])
def get_one_users_results(username):
    user_points = Results.query.filter_by(user_name=username).with_entities(func.max(Results.points)).scalar()
    # results_ordered = Results.query.order_by(desc(Results.points)).all()

    if user_points is None:
        return jsonify({"msg": "there are no points to show for this user: " +username}), 404
    
    user_position = Results.query.filter(Results.points >= user_points).count()

    response_body = {
        "msg": "all ok",
        "results": user_points,
        "user_position": user_position
    }
    return jsonify(response_body), 200

@api.route('/results', methods=['POST'])
def save_result():
    data = request.json
    print(data)
    new_result = Results(user_name=data["username"], points=data["points"])
    print(new_result)
    db.session.add(new_result)
    db.session.commit()
    response_body = {
        "msg": "User's result has been successfully added to the database",
        "new result": new_result.serialize()
    }

    return jsonify(response_body), 200

# @api.route("/results", methods=["POST"])
# def create_results():
#     # Create the results after players first game
#     data = request.json
#     print(data)
    

# @api.route('/question', methods=['GET'])
# def get_all_questions():
#     query_results = Question.query.all()
#     results = list(map(lambda item: item.serialize(), query_results))

#     if results == []:
#         return jsonify("no users in the database"), 404
    
#     response_body = {
#         "msg": "ok",
#         "results": results
#     }
    
#     return jsonify(response_body), 200

@api.route('/country', methods=['GET'])
def get_country():
    countries = Country.query.all()
    serialized_countries = [country.serialize() for country in countries]
    return jsonify(serialized_countries)

@api.route('/country/<int:country_id>', methods=['GET'])
def get_one_country(country_id):
    query_results = Country.query.filter_by(id=country_id).first()
   

    if query_results is None:
        return jsonify({"msg": "there is no country matching the ID provided"}), 404
    
    response_body = {
        "msg": "ok",
        "results": query_results.serialize()
    }
    return jsonify(response_body), 200

@api.route('/question', methods=['GET'])
def get_question():
    question = Question.query.all()
    serialized_question = [question.serialize() for question in question]
    return jsonify(serialized_question)

@api.route('/question/<int:question_id>', methods=['GET'])
def get_one_question(question_id):
    query_results = Question.query.filter_by(id=question_id).first()
   

    if query_results is None:
        return jsonify({"msg": "there is no question matching the ID provided"}), 404
    
    response_body = {
        "msg": "ok",
        "results": query_results.serialize()
    }
    return jsonify(response_body), 200

@api.route("/forgotpassword", methods=["POST"])
def forgotpassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) #clave aleatoria nueva
   
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
    #busco si el correo existe en mi base de datos
    user = User.query.filter_by(email=recover_email).first()
    if recover_email != user.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    #si existe guardo la nueva contraseña aleatoria
    user.password = recover_password
    db.session.commit()
    #luego se la envio al usuario por correo para que pueda ingresar
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200