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

def toFloatIfPossible(value):
    try:
        return float(value)
    except:
        return value

with open(path+'capacidadestecnologicas.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    data = []
    currentId = ''
    lastId = ''
    rownum = 0
    unit = {}
    instnum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            for col in row:
                if header[colnum] in ['institucion_madre_rec']:
                    unit['mother_institution_id'] = col
                if header[colnum] in ['institucion_madre']:
                    unit['mother_institution'] = col
                if header[colnum] in ['tipo_unidad']:
                    unit['type'] = col
                if header[colnum] in ['tipo_unidad_rec']:
                    unit['type_id'] = toIntIfPossible(col)
                if header[colnum] in ['tipo_unidad_2']:
                    unit['type_2'] = col
                if header[colnum] in ['tipo_unidad_2_rec']:
                    unit['type_2_id'] = toIntIfPossible(col)
                if header[colnum] in ['proposito1']:
                    unit['purpose'] = col
                if header[colnum] in ['proposito1_rec']:
                    unit['purpose_id'] = toIntIfPossible(col)
                colnum += 1
            data.append(unit)
        rownum += 1
    with open(path+'capacidadestecnologicas.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open(path+'capacidadestecnologicas.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    data = []
    currentId = ''
    lastId = ''
    rownum = 0
    institution = {}
    units = []
    unitsnum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            unit = {}
            currentId = row[3]
            colnum = 0
            if currentId != lastId and rownum > 1:
                institution['units'] = units
                data.append(institution)
                print('Institucion ' + institution['id'] + ' agregada')
                institution = {}
                units = []
                unitsnum = 0
            for col in row:
                if unitsnum == 0:
                    if header[colnum] in ['institucion_madre_rec']:
                        institution['id'] = col
                        lastId = col
                    if header[colnum] in ['institucion_madre']:
                        institution['name'] = col
                if header[colnum] in ['tipo_unidad']:
                    unit['type'] = col
                if header[colnum] in ['tipo_unidad_rec']:
                    unit['type_id'] = toIntIfPossible(col)
                if header[colnum] in ['tipo_unidad_2']:
                    unit['type_2'] = col
                if header[colnum] in ['tipo_unidad_2_rec']:
                    unit['type_2_id'] = toIntIfPossible(col)
                if header[colnum] in ['proposito1']:
                    unit['purpose'] = col
                if header[colnum] in ['proposito1_rec']:
                    unit['purpose_id'] = toIntIfPossible(col)
                colnum += 1
            units.append(unit)
            unitsnum += 1
        rownum += 1
    data.append(institution)

    with open(path+'capacidadestecnologicasporinstitucion.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

#
#   Tranformación de CSV de monto de proyectos a JSON
#   Guarda las columnas respectivas a ['Codigo proyecto homologado','institucion_o_persona',
#   'tipo_de_institución', 'Monto homologado']
#   Se disgrega cada fila de monto-institucion por proyecto
#

with open(path+'montosproyectos.csv', newline='', encoding="utf-8") as csvfile:
    data = []
    reader = csv.reader(csvfile)
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            fund = {}
            colnum = 0
            for col in row:
                if header[colnum] in ['Codigo proyecto homologado']:
                    fund['project_id'] = col
                if header[colnum] in ['institucion_o_persona']:
                    fund['institution_name'] = col
                if header[colnum] in ['tipo_de_institución']:
                    fund['institution_type'] = col
                if header[colnum] in ['Monto homologado']:
                    amount = toFloatIfPossible(col)
                    if not isinstance(amount, str):
                        fund['amount'] = amount
                    else:
                        fund['amount'] = 0
                colnum += 1
            data.append(fund)
        rownum += 1
    with open(path+'montosproyectos-institucion.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

#
#   Agrega al json de montos por proyecto-institución el área al cuál está asociado el proyecto
#   para poder generar un futuro monto por área de aplicación. El nuevo archivo tiene el nombre de
#   montosproyectos-institucionconarea.json
#


with open(path+'montosproyectos-institucion.json', newline='', encoding="utf-8") as json_funds:
    with open(path+'../dim-conocimientoinnovacion/proyectosconsolidada.json', newline='', encoding="utf-8") as json_projects:
        funds = json.load(json_funds)
        projects_dict = json.load(json_projects)
        projects = projects_dict['projects']
        for fund in funds:
            for key in projects.keys():
                if key == fund['project_id']:
                    fund['area'] = projects[key]['area']
                    fund['year'] = projects[key]['year']
        with open(path+'montosproyectos-institucion+area-anio.json', 'w', encoding="utf-8") as f:
            json.dump(funds, f, ensure_ascii=False)

#
#   Agrega fondos a su respectiva institución a partir de 'montosproyectos-institucion+area-anio.json'
#   
#

with open(path+'montosproyectos-institucion+area-anio.json', newline='', encoding="utf-8") as json_funds:
    funds = json.load(json_funds)
    institutions_obj = {}
    institutions = []
    for fund in funds:
        if fund['institution_name'] not in institutions:
            institutions.append(fund['institution_name'])
    institutions_dict = {}    
    for institution in institutions:
        institution_dict = {}
        funds_array = []
        sum_amount = 0
        for fund in funds:
            fund_dict = {}
            if fund['institution_name'] == institution:
                for key in fund.keys():
                    if key in ['area','year']:
                        fund_dict[key] = fund[key]
                    elif key in ['amount']:
                        fund_dict[key] = fund[key]
                        sum_amount += toIntIfPossible(fund[key])
                    elif key in ['institution_type']:
                        institution_dict[key] = fund[key]
                funds_array.append(fund_dict)
        institution_dict['funds'] = funds_array
        institution_dict['total_funds'] = sum_amount
        institutions_dict[institution] = institution_dict
        institutions_obj['institutions'] = institutions_dict
    
    with open(path+'montosporinstitucion.json', 'w', encoding="utf-8") as f:
        json.dump(institutions_obj, f, ensure_ascii=False)


with open(path+'ficregional.csv', newline='', encoding="utf-8") as csvfile:
        reader = csv.reader(csvfile)
        data = []
        currentId = ''
        lastId = ''
        rownum = 0
        instnum = 0
        for row in reader:
            if rownum == 0:
                header = row
            else:
                fic = {}
                colnum = 0
                for col in row:
                    if header[colnum] in ['Año']:
                        fic['year'] = col
                    if header[colnum] in ['región']:
                        fic['region'] = col
                    if header[colnum] in ['region_rec']:
                        fic['region_id'] = col
                    if header[colnum] in ['Nombre entidad receptora (ejecutora)']:
                        fic['institution'] = toIntIfPossible(col)
                    if header[colnum] in ['id_instituciones']:
                        fic['institution_id'] = col
                    if header[colnum] in ['Ejecución (miles de $ de cada año)']:
                        fic['execution'] = toIntIfPossible(col)
                    colnum += 1
                data.append(fic)
            rownum += 1
        with open(path+'ficregional.json', 'w', encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False)

with open(path+'ficregional.json', newline='', encoding="utf-8") as jsonfic_file:
    with open('../'+'regiones.json', newline='', encoding="utf-8") as jsonfile:
        json_fic = json.load(jsonfic_file)
        json_regiones = json.load(jsonfile)
        data = []
        currentId = ''
        lastId = ''
        rownum = 0
        instnum = 0
        for region_id in json_regiones['regions'].keys():
            institutions = {}
            json_regiones['regions'][region_id]['institutions'] = institutions
            for fic in json_fic:
                if region_id == fic["region_id"]:
                    if fic['institution_id'] not in json_regiones['regions'][region_id]['institutions'].keys():
                        institution_obj = {}
                        json_regiones['regions'][region_id]['institutions'][fic['institution_id']] = institution_obj
                    if fic['year'] not in json_regiones['regions'][region_id]['institutions'][fic['institution_id']].keys():
                        year_obj = {'execution': 0}
                        json_regiones['regions'][region_id]['institutions'][fic['institution_id']][fic['year']] = year_obj
                    json_regiones['regions'][region_id]['institutions'][fic['institution_id']][fic['year']]['execution'] += fic['execution']
                rownum += 1

        with open(path+'ficporregiones.json', 'w', encoding="utf-8") as f:
            json.dump(json_regiones, f, ensure_ascii=False)
