import json
import csv
import os

with open('data/contexto-general/politico-institucional/ContextoPolitico-Consumodepolitica.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            category = ""
            for col in row:
                datum = {}
                if header[colnum] in ['Actividad']:
                    activity = col
                else:
                    datum["activity"] = activity
                    datum["opinion"] = header[colnum]
                    datum["value"] = float(col.replace("%",""))
                    data.append(datum)
                colnum += 1
        rownum += 1
    with open('data/contexto-general/politico-institucional/ContextoPolitico-Consumodepolitica.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/politico-institucional/ContextoPolitico-Funcionamientodelademocracia.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            category = ""
            for col in row:
                datum = {}
                if header[colnum] in ['tipo']:
                    category = col
                else:
                    datum["category"] = category
                    datum["date"] = header[colnum]
                    datum["value"]= float(col.replace("%","").replace(",","."))
                    data.append(datum)
                colnum += 1
        rownum += 1
    with open('data/contexto-general/politico-institucional/ContextoPolitico-Funcionamientodelademocracia.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/politico-institucional/ContextoPolitico-Libertadesciviles.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            category = ""
            for col in row:
                datum = {}
                if header[colnum] in ['libertades']:
                    category = col
                else:
                    datum["category"] = category
                    datum["opinion"] = header[colnum]
                    datum["value"]= float(col.replace("%","").replace(",","."))
                    data.append(datum)
                colnum += 1
        rownum += 1
    with open('data/contexto-general/politico-institucional/ContextoPolitico-Libertadesciviles.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/politico-institucional/ContextoPolitico-Votanteselecciones2017.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            category = ""
            for col in row:
                datum = {}
                if header[colnum] in ['tipo']:
                    category = col
                elif header[colnum] in ['número de votos_1eravuelta'] and category in ['Votos válidamente emitidos','Votos nulos','Votos en blanco','Total de abstención']:
                    datum["category"] = category
                    datum["value"]= float(col.replace("%","").replace(",",""))
                    data.append(datum)
                elif header[colnum] in ['número de votos_1eravuelta'] and category in ['Total Electores']:
                    datum["total"] = int(col.replace(",",""));
                    data.append(datum)
                else:
                    pass
                colnum += 1
        rownum += 1
    for datum in data:
        if "value" in datum:
            #datum["value"] = datum["value"]/data[3]["Total Electores"]
            datum["value"] = float("{0:.3f}".format(datum["value"]/data[4]["total"]))
    with open('data/contexto-general/politico-institucional/ContextoPolitico-Votanteselecciones20171eravuelta.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/politico-institucional/ContextoPolitico-Votanteselecciones2017.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            category = ""
            for col in row:
                datum_sum = 0
                datum = {}
                if header[colnum] in ['tipo']:
                    category = col
                elif header[colnum] in ['número de votos_2davuelta'] and category in ['Votos válidamente emitidos','Votos nulos','Votos en blanco','Total de abstención']:
                    datum["category"] = category
                    datum["value"] = float(col.replace("%","").replace(",",""))
                    data.append(datum)
                elif header[colnum] in ['número de votos_2davuelta'] and category in ['Total Electores']:
                    datum["total"] = int(col.replace(",",""));
                    data.append(datum)
                else:
                    pass
                colnum += 1
        rownum += 1
    for datum in data:
        if "value" in datum:
            #datum["value"] = datum["value"]/data[3]["Total Electores"]
            datum["value"] = float("{0:.3f}".format(datum["value"]/data[4]["total"]))
    with open('data/contexto-general/politico-institucional/ContextoPolitico-Votanteselecciones20172davuelta.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/politico-institucional/Corrupcion-Corrupcionorgpubli2.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            category = ""
            for col in row:
                datum = {}
                if header[colnum] in ['percepcion']:
                    category = col
                else:
                    datum["category"] = category
                    datum["year"] = header[colnum]
                    datum["value"]= float(col.replace("%","").replace(",","."))
                    data.append(datum)
                colnum += 1
        rownum += 1
    with open('data/contexto-general/politico-institucional/Corrupcion-Corrupcionorgpubli2.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/politico-institucional/Corrupcion-Transparenciaensectorpublico.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            category = ""
            for col in row:
                datum = {}
                if header[colnum] in ['tipo']:
                    category = col
                else:
                    datum["category"] = category
                    datum["year"] = header[colnum]
                    datum["value"]= float(col.replace("%","").replace(",","."))
                    data.append(datum)
                colnum += 1
        rownum += 1
    with open('data/contexto-general/politico-institucional/Corrupcion-Transparenciaensectorpublico.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/politico-institucional/ParticipacionSocial-Participacionenactcomunitarias.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            category = ""
            for col in row:
                datum = {}
                if header[colnum] in ['categoría']:
                    activity = col
                else:
                    datum["activity"] = activity
                    datum["answer"] = header[colnum]
                    datum["value"] = float(col.replace("%",""))
                    data.append(datum)
                colnum += 1
        rownum += 1
    with open('data/contexto-general/politico-institucional/ParticipacionSocial-Participacionenactcomunitarias.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)
