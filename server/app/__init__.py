from flask import Flask
from .extensions import api, db
from .routes import ns as user_namespace
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    db.init_app(app)
    api.init_app(app)
    CORS(app)  

    api.add_namespace(user_namespace, path='/users')

    with app.app_context():
        db.create_all()

    return app


app = create_app()