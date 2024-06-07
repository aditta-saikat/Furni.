from flask import request
from flask_restx import Namespace, Resource, fields
from .db import get_db_connection

ns = Namespace('users', description='User related operations')

user_model = ns.model('User', {
    'email': fields.String(required=True, description='The user email address'),
    'password': fields.String(required=True, description='The user password')
})

@ns.route('/')
class UserList(Resource):
    @ns.marshal_with(user_model, as_list=True)
    def get(self):
        """Fetch all users"""
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT email, password FROM users')
        users = cursor.fetchall()
        cursor.close()
        conn.close()
        return [{'email': user[0], 'password': user[1]} for user in users]

    @ns.expect(user_model)
    def post(self):
        """Create a new user"""
        data = request.json
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO users (email, password) VALUES (%s, %s)",
            (data['email'], data['password'])
        )
        conn.commit()
        cursor.close()
        conn.close()
        return {'message': 'User created successfully'}, 201

@ns.route('/<int:id>')
class User(Resource):
    @ns.marshal_with(user_model)
    def get(self, id):
        """Fetch a single user by ID"""
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT email, password FROM users WHERE id = %s', (id,))
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        if user:
            return {'email': user[0], 'password': user[1]}
        else:
            ns.abort(404, "User not found")

    def delete(self, id):
        """Delete a user by ID"""
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('DELETE FROM users WHERE id = %s', (id,))
        conn.commit()
        cursor.close()
        conn.close()
        return {'message': 'User deleted successfully'}, 204
