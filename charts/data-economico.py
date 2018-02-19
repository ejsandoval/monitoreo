import json
import csv
import os

# with open('data/contexto-general/economico/ContextoEconomico-EvoluciondelindicedeGini.csv', newline='') as csvfile:
#     reader = csv.reader(csvfile)
#     data = []
#     rownum = 0
#     for row in reader:
#         if rownum == 0:
#             header = row
#         else:
#             category = ""
#             datum = {}
#             datum["year"] = int(row[0])
#             datum["value"] = float(row[1].replace("%",""))
#             data.append(datum)
#         rownum += 1
#     with open('data/contexto-general/economico/ContextoEconomico-EvoluciondelindicedeGini.json', 'w') as f:
#         json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/economico/ContextoEconomico-EvolucionPIBpercapitaChile-PPP.csv', newline='') as csvfile:
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
    with open('data/contexto-general/economico/ContextoEconomico-EvolucionPIBpercapitaChile-PPP.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/economico/ContextoEconomico-EvolucionPIBpercapitaChile.csv', newline='') as csvfile:
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
    with open('data/contexto-general/economico/ContextoEconomico-EvolucionPIBpercapitaChile.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/economico/ContextoEconomico-Exportaciondealtatecnologia.csv', newline='') as csvfile:
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
    with open('data/contexto-general/economico/ContextoEconomico-Exportaciondealtatecnologia.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/economico/ContextoEconomico-PobrezaExtremaCasen2015.csv', newline='') as csvfile:
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
    with open('data/contexto-general/economico/ContextoEconomico-PobrezaExtremaCasen2015.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/economico/ContextoEconomico-PobrezaMultidimensionalCasen2015.csv', newline='') as csvfile:
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
                if header[colnum] in ['year']:
                    title = col
                else:
                    datum["year"] = header[colnum]
                    datum["value"]= float(col.replace("%","").replace(",","."))
                    data.append(datum)
                colnum += 1
            print(data)
        rownum += 1
    with open('data/contexto-general/economico/ContextoEconomico-PobrezaMultidimensionalCasen2015.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)