from flask import Flask
from .extension import api

def create_app():
    app = Flask(__name__)
    
    api.init_app(app)

    return app