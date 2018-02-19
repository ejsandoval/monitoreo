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
            print(data)
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
            print(data)
        rownum += 1
    with open('data/contexto-general/politico-institucional/ContextoPolitico-Libertadesciviles.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)