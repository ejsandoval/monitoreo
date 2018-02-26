import json
import csv
import os

fileNames = []
path = 'data/contexto-general/economico/ContextoEconomico'

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
    if fileName == "EvoluciondelindicedeGini":
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
                    datum["year"] = int(row[0])
                    datum["value"] = float(row[1].replace("%",""))
                    data.append(datum)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "EvolucionPIBpercapitaChile-PPP":
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
                    datum["year"] = int(row[0])
                    datum["value"] = int(row[1].replace("%",""))
                    datum["ppp"] = int(row[2].replace('"',"").replace(',',""))
                    data.append(datum)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "EvolucionPIBpercapitaChile":
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
                    datum["year"] = int(row[0])
                    datum["value"] = int(row[1].replace("%",""))
                    datum["pibpc"] = int(row[2].replace('"',"").replace(',',""))
                    data.append(datum)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Exportaciondealtatecnologia":
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
                    datum["year"] = int(row[0])
                    datum["value"] = int(row[1].replace("%",""))
                    datum["percentage"] = float(row[2].replace('"',"").replace(',',"").replace("%",""))
                    data.append(datum)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "PobrezaExtremaCasen2015":
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
                    print(data)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "PobrezaMultidimensionalCasen2015":
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
                        if header[colnum] in ['año']:
                            title = col
                        else:
                            datum["year"] = header[colnum]
                            datum["value"]= float(col.replace("%","").replace(",","."))
                            data.append(datum)
                        colnum += 1
                    print(data)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)