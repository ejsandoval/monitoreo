import json
import csv
import os

with open('data/contexto-general/socio-cultural/ClimaSocial-Percepciondeconflictos.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/ClimaSocial-Percepciondeconflictos.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/ClimaSocial-Resoluciondeconflictos.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/ClimaSocial-Resoluciondeconflictos.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/ClimaSocial-Respetoytolerancia.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/ClimaSocial-Respetoytolerancia.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/ClimaSocial-Satisfaccionconlavida.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/ClimaSocial-Satisfaccionconlavida.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/ClimaSocial-Satisfaccionpropiavsotros.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/ClimaSocial-Satisfaccionpropiavsotros.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/Confianzaenlasinstituciones-Confianzaenlasinstituciones2.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/Confianzaenlasinstituciones-Confianzaenlasinstituciones2.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/Confianzaenlasinstituciones-Percepciondecorrupcioneninstituciones.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/Confianzaenlasinstituciones-Percepciondecorrupcioneninstituciones.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)


with open('data/contexto-general/socio-cultural/ConfianzaInterpersonal-Confianzaenlosdemas.csv', newline='', encoding="utf-8") as csvfile:
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
                    title = 'data/contexto-general/socio-cultural/ConfianzaInterpersonal-Confianzaenlosdemas'+header[0]+'.json'
                    with open(title, 'w', encoding="utf-8") as f:
                            json.dump(data, f, ensure_ascii=False)
                colnum += 1
        rownum += 1

with open('data/contexto-general/socio-cultural/ConfianzaInterpersonal-Confianzaenlosdemas2.csv', newline='', encoding="utf-8") as csvfile:
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
                    title = 'data/contexto-general/socio-cultural/ConfianzaInterpersonal-Confianzaenlosdemas2.json'
                colnum += 1
        rownum += 1
    with open(title, 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/ConfianzaInterpersonal-Evoluciondelaconfianzasocial.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/ConfianzaInterpersonal-Evoluciondelaconfianzasocial.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/ConfianzaInterpersonal-Evoluciondelaconfianzasocial2.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/ConfianzaInterpersonal-Evoluciondelaconfianzasocial2.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/DimensionHumana-IndicedeDesarrolloHumano-IDH.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/DimensionHumana-IndicedeDesarrolloHumano-IDH.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)


with open('data/contexto-general/socio-cultural/DimensionHumana-TheGlobalGenderGapIndex 17-Evolucion.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/DimensionHumana-TheGlobalGenderGapIndex 17-Evolucion.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/socio-cultural/DimensionHumana-TheGlobalGenderGapIndex17-Ranking.csv', newline='', encoding="utf-8") as csvfile:
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
    with open('data/contexto-general/socio-cultural/DimensionHumana-TheGlobalGenderGapIndex17-Ranking.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)