# app/routes.py

from flask import request
from flask_restx import Namespace, Resource, fields
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User
from .extensions import db

ns = Namespace('users', description='User operations')

user_model = ns.model('User', {
    'id': fields.Integer(readOnly=True),
    'email': fields.String(required=True, description='The user email address'),
    'password': fields.String(required=True, description='The user password')
})

@ns.route('/')
class UserList(Resource):
    @ns.marshal_list_with(user_model)
    def get(self):
        """List all users"""
        return User.query.all()

@ns.route('/register')
class UserRegister(Resource):
    @ns.expect(user_model)
    def post(self):
        data = request.json
        hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
        new_user = User(email=data['email'], password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return {'message': 'User registered successfully'}, 201

@ns.route('/login')
class UserLogin(Resource):
    @ns.expect(user_model)
    def post(self):
        data = request.json
        user = User.query.filter_by(email=data['email']).first()
        if user and check_password_hash(user.password, data['password']):
            return {'message': 'Login successful'}, 200
        else:
            return {'message': 'Invalid email or password'}, 401
