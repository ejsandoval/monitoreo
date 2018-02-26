import json
import csv
import os

fileNames = []
path = 'data/contexto-general/cti/cti'

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
                #s = col.encode('utf8')
                #print(s)
                if header[colnum] in ['nombre']:
                    fileNames.append(col)
                datum[header[colnum]]=col
                colnum += 1
            data.append(datum)
        rownum += 1
    with open(path+'-Meta.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

for fileName in fileNames:
    if fileName == "Actividademprendedora":
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
                        if header[colnum] in ['Evolucion actividad emprendedora']:
                            category = col
                        else:
                            print(category)
                            datum["type"] = category
                            print(header[colnum])
                            datum["year"] = header[colnum]
                            datum["value"]= float(col.replace("%",""))
                            print(datum)
                            data.append(datum)
                        colnum += 1
                    print(data)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "AportedelaCTenInnovacion":
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
                    datum1 = {}
                    datum2 = {}
                    for col in row:
                        if header[colnum] in ['Areas']:
                            datum1["area"] = col
                            datum1["type"] = header[colnum+1]
                            datum1["value"] = float(row[colnum+1].replace("%",""))
                            datum2["area"] = col
                            datum2["type"] = header[colnum+2]
                            datum2["value"] = float(row[colnum+2].replace("%",""))
                            data.append(datum1)
                            data.append(datum2)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "BeneficiosdelaCTI":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    category = ""
                    datum = {}
                    datum["opinion"] = row[0]
                    datum["value"] = float(row[1].replace("%",""))
                    data.append(datum)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "ContribuciondelaCTI":
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
                        if header[colnum] in ['Idea']:
                            idea = col
                        else:
                            datum["idea"] = idea
                            datum["opinion"] = header[colnum]
                            datum["value"] = float(col.replace("%",""))
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Prestigioprofesionescientific":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    profesion = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in ['Profesion']:
                            profesion = col
                        else:
                            datum["profesion"] = profesion
                            datum["opinion"] = header[colnum]
                            datum["value"] = float(col.replace("%",""))
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "RazonesparatrabajarenCTI":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    razon = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in ['% Si']:
                            razon = col
                        else:
                            datum["razon"] = razon
                            datum["area"] = header[colnum]
                            datum["value"] = float(col.replace("%",""))
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "RiesgosdelaCTI":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    category = ""
                    datum = {}
                    datum["opinion"] = row[0]
                    datum["value"] = float(row[1].replace("%",""))
                    data.append(datum)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)
    
    if fileName == "atributospersonales":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    idea = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in header[0]:
                            idea = col
                        else:
                            datum["idea"] = idea
                            datum["year"] = header[colnum]
                            s = col.encode('utf8')
                            print(s)
                            if col == "" or col == "--":
                                datum["value"]= None
                            else:
                                datum["value"]= float(col.strip().replace("%",""))
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)
    
    if fileName == "motivacionparaemprender":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    idea = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in header[0]:
                            idea = col
                        else:
                            datum["idea"] = idea
                            datum["year"] = header[colnum]
                            s = col.encode('utf8')
                            print(s)
                            if col == "" or col == "--":
                                datum["value"]= None
                            else:
                                datum["value"]= float(col.strip().replace("%",""))
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)