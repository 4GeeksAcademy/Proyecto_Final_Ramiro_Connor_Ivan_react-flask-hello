"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Question, Country
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

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
    # query_result = Characters.query.filter_by(id=characters_id).first()
    data = request.json
    print(data)
    user = User.query.filter_by(email=data['email']).first()
    if user: 
        return jsonify({
            "msg": "email already in use" 
        }), 418
    new_user = User(password=data["password"], email=data["email"], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    token = create_access_token(identity = new_user.id)
    response_body = {
        "msg": "All working",
        "token": token,
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
    token = create_access_token(identity = user.id)
    response_body = {
        "msg": "All working",
        "token": token,
        "user": user.serialize()
        # "query result": query_result
    }    

    return jsonify(response_body), 200
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