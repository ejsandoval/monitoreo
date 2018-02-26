Los script de Python realizan una conversión de los archivos .csv de datos a un formato .json que se ajusta al requerimiento de la librería de D3plus. Los archivos de entrada para los script de Python (llamados “data-nombredelcontexto.py”) deben tener de nombre:

“contexto-nombredelavariable.csv”

Sin espacios y el nombre de la variable debe corresponder al enunciado en la tabla Meta del contexto en específico. Por esto, la tabla de meta datos debe seguir la misma estructura:

“contexto-Meta.csv”

Y siempre debe tener las cabeceras de columnas en el siguiente orden:

nombre,titulo,comentario,fuente,link

Cada lectura de variable tiene su propio método de ejecución debido a las diferentes variables en juego.