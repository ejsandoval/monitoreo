import json
import csv
import os

def openMeta(path, array): 
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
                    if header[colnum] in ['nombre']:
                        array.append(col)
                    datum[header[colnum]]=col
                    colnum += 1
                data.append(datum)
            rownum += 1
        with open(path+'-Meta.json', 'w', encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False)
    return array

subdimensions = ["ClimaSocial","Confianzaenlasinstituciones","ConfianzaInterpersonal","DimensionHumana"]
fileNames = []
for subdimension in subdimensions:   
    path = 'data/contexto-general/socio-cultural/' + subdimension
    openMeta(path,fileNames)
    if subdimension == "ClimaSocial":
        for fileName in fileNames:
            if fileName == "Percepciondeconflictos":
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
                                if header[colnum] in ['conflicto']:
                                    category = col
                                else:
                                    datum["conflict"] = category
                                    datum["year"] = header[colnum]
                                    datum["value"]= float(col.replace("%","").replace(",","."))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

            if fileName == "Resoluciondeconflictos":
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
                                if header[colnum] in ['conflicto']:
                                    category = col
                                else:
                                    datum["conflict"] = category
                                    datum["year"] = header[colnum]
                                    datum["value"]= float(col.replace("%","").replace(",","."))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

            if fileName == "Respetoytolerancia":
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
                                if header[colnum] in ['frase']:
                                    phrase = col
                                else:
                                    datum["phrase"] = phrase
                                    datum["opinion"] = header[colnum]
                                    datum["value"]= float(col.replace("%","").replace(",","."))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

            if fileName == "Satisfaccionconlavida":
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
                                if header[colnum] in ['opinion']:
                                    category = col
                                else:
                                    datum["opinion"] = category
                                    datum["date"] = header[colnum]
                                    datum["value"]= float(col.replace("%","").replace(",","."))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

            if fileName == "Satisfaccionpropiavsotros":
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
                                if header[colnum] in ['satisfacción']:
                                    category = col
                                else:
                                    datum["opinion"] = category
                                    datum["answer"] = header[colnum]
                                    datum["value"]= float(col.replace("%","").replace(",","."))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

    if subdimension == "Confianzaenlasinstituciones":
        for fileName in fileNames:
            if fileName == "Confianzaenlasinstituciones2":
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
                                if header[colnum] in ['institucion']:
                                    institution = col
                                else:
                                    datum["institution"] = institution
                                    datum["date"] = header[colnum]
                                    datum["value"]= float(col.replace("%",""))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

            if fileName == "Percepciondecorrupcioneninstituciones":
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
                                if header[colnum] in ['institución']:
                                    institution = col
                                else:
                                    datum["institution"] = institution
                                    datum["date"] = header[colnum]
                                    datum["value"]= float(col.replace("%",""))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

    if subdimension == "ConfianzaInterpersonal":
        for fileName in fileNames:
            if fileName == "Confianzaenlosdemas":
                with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
                    reader = csv.reader(csvfile)
                    rownum = 0
                    for row in reader:
                        data = []
                        if rownum == 0 or rownum == 2 or rownum == 4:
                            header = row
                        else:
                            colnum = 0
                            question = ""
                            for col in row:
                                datum = {}
                                if colnum == 0:
                                		question = col
                                else:
                                    datum["question"] = question
                                    datum["opinion"] = header[colnum]
                                    datum["value"]= float(col.replace("%",""))
                                    data.append(datum)
                                    title = path+"-"+fileName+header[0]+'.json'
                                    with open(title, 'w', encoding="utf-8") as f:
                                            json.dump(data, f, ensure_ascii=False)
                                colnum += 1
                        rownum += 1

            if fileName == "Confianzaenlosdemas2":
                with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
                    reader = csv.reader(csvfile)
                    rownum = 0
                    for row in reader:
                        data = []
                        if rownum == 0:
                            header = row
                        else:
                            colnum = 0
                            question = ""
                            for col in row:
                                datum = {}
                                if colnum == 0:
                                        question = col
                                else:
                                    datum["question"] = question
                                    datum["opinion"] = header[colnum]
                                    datum["value"]= float(col.replace("%",""))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

            if fileName == "Evoluciondelaconfianzasocial":
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
                                if header[colnum] in ['percepción']:
                                    perception = col
                                else:
                                    datum["perception"] = perception
                                    datum["date"] = header[colnum]
                                    datum["value"]= float(col.replace("%",""))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

            if fileName == "Evoluciondelaconfianzasocial2":
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
                                if header[colnum] in ['percepción']:
                                    perception = col
                                else:
                                    datum["perception"] = perception
                                    datum["date"] = header[colnum]
                                    datum["value"]= float(col.replace("%",""))
                                    data.append(datum)
                                colnum += 1
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

    if subdimension == "DimensionHumana":
        for fileName in fileNames:
            if fileName == "IndicedeDesarrolloHumano-IDH":
                with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
                    reader = csv.reader(csvfile)
                    data = []
                    rownum = 0
                    for row in reader:
                        datum = {}
                        if rownum == 0:
                            header = row
                        else:
                            colnum = 0
                            category = ""
                            for col in row:
                                if header[colnum] in ['País']:
                                    datum["country"] = col
                                else:
                                    datum[header[colnum].lower()] = col
                                colnum += 1
                            data.append(datum)
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

            if fileName == "TheGlobalGenderGapIndex-Evolucion":
                with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
                    reader = csv.reader(csvfile)
                    data = []
                    rownum = 0
                    for row in reader:
                        datum1 = {}
                        datum2 = {}
                        if rownum == 0:
                            header = row
                        else:
                            datum1["category"] = row[0]
                            datum1["year"] = 2006
                            datum1["ranking"] = row[1]
                            datum1["score"] = row[2]
                            datum2["category"] = row[0]
                            datum2["year"] = 2007
                            datum2["ranking"] = row[3]
                            datum2["score"] = row[4]
                            data.append(datum1)
                            data.append(datum2)
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)

            if fileName == "TheGlobalGenderGapIndex17-Ranking":
                with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
                    reader = csv.reader(csvfile)
                    data = []
                    rownum = 0
                    for row in reader:
                        datum = {}
                        if rownum == 0:
                            header = row
                        else:
                            colnum = 0
                            category = ""
                            for col in row:
                                if header[colnum] in ['País']:
                                    datum["country"] = col
                                else:
                                    datum[header[colnum].lower()] = col
                                colnum += 1
                            data.append(datum)
                        rownum += 1
                    with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False)