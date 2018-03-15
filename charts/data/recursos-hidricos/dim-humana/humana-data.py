import json
import csv
import os

path = ''

def toIntIfPossible(value):
    try:
        return int(value)
    except:
        return value

def toFloatIfPossible(value):
    try:
        return float(value)
    except:
        return value

def evalYesOrNo(value):
    if value == 'si':
        return True
    else:
        return False

#
#   Tranformación de CSV de investigadores de Cameron a JSON
#   Guarda las columnas respectivas a ['ID_investigadores','institucion_trabaja','institucion_trabaja_rec',
#   'region_trabaja']
#

with open(path+'cameroninvestigadores.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    currentId = ''
    lastId = ''
    rownum = 0
    researchers = {}
    researcher_obj = {}  
    researcher_id = 0
    instnum = 0
    for row in reader:
        researcher = {}
        if rownum == 0:
            header = row
        else:
            colnum = 0
            for col in row:
                if header[colnum] in ['ID_investigadores']:
                    researcher_id = toIntIfPossible(col)
                if header[colnum] in ['institucion_trabaja']:
                    researcher['institution'] = col
                if header[colnum] in ['institucion_trabaja_rec']:
                    researcher['institution_id'] = col
                if header[colnum] in ['region_trabaja']:
                    researcher['region'] = toIntIfPossible(col)
                colnum += 1
            researcher_obj[researcher_id] = researcher
            researchers['researchers'] = researcher_obj
        rownum += 1
    with open(path+'cameroninvestigadores.json', 'w', encoding="utf-8") as f:
        json.dump(researchers, f, ensure_ascii=False)


#
#   Tranformación de CSV de investigadores a JSON
#   Guarda las columnas respectivas a ['ID_investigadores','N_pub_autor_principal','N_pub_total',
#   'género', 'fos_rec', 'tipo_inv']
#

with open(path+'investigadorespreprocesada.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    currentId = ''
    lastId = ''
    rownum = 0
    researchers = {}
    researcher_obj = {}  
    researcher_id = 0
    instnum = 0
    for row in reader:
        researcher = {}
        if rownum == 0:
            header = row
        else:
            colnum = 0
            for col in row:
                if header[colnum] in ['ID_investigadores']:
                    researcher_id = toIntIfPossible(col)
                if header[colnum] in ['N_pub_autor_principal']:
                    researcher['first_autor_publication'] = toIntIfPossible(col)
                if header[colnum] in ['N_pub_total']:
                    researcher['total_publications'] = toIntIfPossible(col)
                if header[colnum] in ['género']:
                    researcher['sex'] = col
                if header[colnum] in ['fos_rec']:
                    researcher['fos'] = toIntIfPossible(col)
                if header[colnum] in ['tipo_inv']:
                    researcher['type'] = col
                colnum += 1
            researcher_obj[researcher_id] = researcher
            researchers['researchers'] = researcher_obj
        rownum += 1
    with open(path+'investigadorespreprocesada.json', 'w', encoding="utf-8") as f:
        json.dump(researchers, f, ensure_ascii=False)


#
# Cruce de ambas bases de investigadores según llave en común
# Agrega todo en un sólo objeto cuya llave es el id asignado
#

with open(path+'investigadorespreprocesada.json', newline='', encoding="utf-8") as json_researchers:
    with open(path+'cameroninvestigadores.json', newline='', encoding="utf-8") as json_cameron:
        researchers_json = {}
        d = json.load(json_researchers)
        d_cameron = json.load(json_cameron)
        researchers = d['researchers']
        new_array = []
        cameron_researchers = d_cameron['researchers']
        for key in researchers.keys():
            for cameron_key in cameron_researchers.keys():
                if key == cameron_key:
                    aux = researchers[key]
                    cameron_researcher = cameron_researchers[key]
                    for element in cameron_researcher.keys():
                        aux[element] = cameron_researcher[element]
                    researcher = {}
                    researcher[key] = aux
                    new_array.append(researcher)
        researchers_json['researchers'] = new_array
        with open(path+'investigadores.json', 'w', encoding="utf-8") as f:
            json.dump(researchers_json, f, ensure_ascii=False)

#
#   
#
#

with open(path+'actores.csv', newline='', encoding="utf-8") as actors:
    reader = csv.reader(actors)
    currentId = ''
    lastId = ''
    rownum = 0
    institution_obj = {}
    institutions = {}   
    instnum = 0
    institution_id = 0
    for row in reader:
        institution = {}
        if rownum == 0:
            header = row
        else:
            colnum = 0
            for col in row:
                print(col.encode('utf8'))
                if header[colnum] in ['tipo_entidad']: # privada o pública
                    institution['category'] = toIntIfPossible(col)
                if header[colnum] in ['institucion_madre']:
                    institution['name'] = col
                if header[colnum] in ['institucion_madre_rec']:
                    institution_id = col
                if header[colnum] in ['tipo_de_institucion']:
                    institution['type'] = col
                if header[colnum] in ['tipo_de_institucion_rec']:
                    institution['type_id'] = toIntIfPossible(col)
                if header[colnum] in ['region_entidad']:
                    institution['region'] = col
                if header[colnum] in ['region_entidad_rec']:
                    institution['region_id'] = toIntIfPossible(col)
                if header[colnum] in ['Estan en Red de Agua']:
                    institution['water network'] = evalYesOrNo(col)
                #print(institution)
                colnum += 1
            institution_obj[institution_id] = institution
            institutions['institutions'] = institution_obj
        rownum += 1
    with open(path+'actores.json', 'w', encoding="utf-8") as f:
        json.dump(institutions, f, ensure_ascii=False)