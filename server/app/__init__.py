from flask import Flask
from .extension import api
from .routes import ns as user_namespace

def create_app():
    app = Flask(__name__)
    
    api.init_app(app)

    api.add_namespace(user_namespace, path='/users')

    return app