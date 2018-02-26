import json
import csv
import os

fileNames = []
path = 'data/contexto-general/politico-institucional/ContextoPolitico'

with open(path+'-Meta.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            datum = {}
            for col in row:
                s = col.encode('utf8')
                print(s)
                if header[colnum] in ['nombre']:
                    fileNames.append(col)
                datum[header[colnum]]=col
                colnum += 1
            data.append(datum)
        rownum += 1
    with open(path+'-Meta.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

for fileName in fileNames:
    if fileName == "Consumodepolitica":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
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
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Funcionamientodelademocracia":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
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
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Libertadesciviles":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
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
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Votanteselecciones2017":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
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
            with open(path+"-"+fileName+'1eravuelta'+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Votanteselecciones2017":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
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
            with open(path+"-"+fileName+'2davuelta'+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Corrupcionorgpubli2":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            print("ENTERED")
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
                        if header[colnum] in ['Percepción']:
                            category = col
                        else:
                            datum["category"] = category
                            datum["year"] = header[colnum]
                            datum["value"]= float(col.replace("%","").replace(",","."))
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Transparenciaensectorpublico":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
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
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Participacionenactcomunitarias":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
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
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)
