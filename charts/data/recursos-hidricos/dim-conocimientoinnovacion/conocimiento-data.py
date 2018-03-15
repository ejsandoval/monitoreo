import json
import csv
import os

fileNames = []
path = ''

def toIntIfPossible(value):
    try:
        return int(value)
    except:
        return value

with open(path+'proyectosconsolidada.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    currentId = ''
    lastId = ''
    rownum = 0
    project = {}
    project_obj = {}
    projects = {}
    institutions = []
    instnum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            institution = {}
            currentId = row[0]
            colnum = 0
            if currentId != lastId and rownum > 1:
                project['institutions'] = institutions
                project_obj[lastId] = project
                projects['projects'] = project_obj
                print('Proyecto ' + lastId + ' agregado')
                project = {}
                institutions = []
                instnum = 0
            for col in row:
                if instnum == 0:
                    if header[colnum] in ['codigo_proyecto']:
                        lastId = col
                    if header[colnum] in ['anio']:
                        project['year'] = toIntIfPossible(col)
                    if header[colnum] in ['Taxonomia Sector Aplicacion (propia)']:
                        project['area'] = toIntIfPossible(col)
                    if header[colnum] in ['nombre_proyecto']:
                        project['name'] = col
                if header[colnum] in ['institucion ejecutora']:
                    institution['institution'] = col
                if header[colnum] in ['tipo_participacion']:
                    institution['participation'] = col
                if header[colnum] in ['id institucion']:
                    institution['institution_id'] = toIntIfPossible(col)
                colnum += 1
            institutions.append(institution)
            instnum += 1
        rownum += 1
        project['institutions'] = institutions
        project_obj[lastId] = project
        projects['projects'] = project_obj
        print('Proyecto ' + lastId + ' agregado')
    with open(path+'proyectosconsolidada.json', 'w', encoding="utf-8") as f:
        json.dump(projects, f, ensure_ascii=False)