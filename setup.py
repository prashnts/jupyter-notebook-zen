from nbsetuptools import setup
from os.path import abspath, dirname, join


setup(
    name="jupyter-notebook-zen",
    version="0.1.0",
    static=join(abspath(dirname(__file__)), 'static')
)
