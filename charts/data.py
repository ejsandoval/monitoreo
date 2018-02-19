import json
import csv
import os

# with open('data/contexto-general/ambiental/ContextoAmbiental-HuellaEcologica.csv', newline='') as csvfile:
#     reader = csv.reader(csvfile)
#     data = []
#     rownum = 0
#     for row in reader:
#         if rownum == 0:
#             header = row
#         else:
#             colnum = 0
#             datum1 = {}
#             datum2 = {}
#             for col in row:
#                 if header[colnum] in ['Year']:
#                     datum1[header[colnum]] = int(col)
#                     datum1["type"]=header[colnum+1]
#                     datum1["value"]=float(row[colnum+1])
#                     datum2[header[colnum]] = int(col)
#                     datum2["type"]=header[colnum+2]
#                     datum2["value"]=float(row[colnum+2])
#                 colnum += 1
#             data.append(datum1)
#             data.append(datum2)
#         rownum += 1
#     with open('data/contexto-general/ambiental/ContextoAmbiental-HuellaEcologica.json', 'w') as f:
#         json.dump(data, f, ensure_ascii=False)

# with open('data/contexto-general/cti/CTI-Actividademprendedora.csv', newline='') as csvfile:
#     reader = csv.reader(csvfile)
#     data = []
#     rownum = 0
#     for row in reader:
#         if rownum == 0:
#             header = row
#         else:
#             colnum = 0
#             category = ""
#             for col in row:
#                 datum = {}
#                 if header[colnum] in ['Evolucion actividad emprendedora']:
#                     category = col
#                 else:
#                     print(category)
#                     datum["type"] = category
#                     print(header[colnum])
#                     datum["year"] = header[colnum]
#                     datum["value"]= float(col.replace("%",""))
#                     print(datum)
#                     data.append(datum)
#                 colnum += 1
#             print(data)
#         rownum += 1
#     with open('data/contexto-general/cti/CTI-Actividademprendedora.json', 'w') as f:
#         json.dump(data, f, ensure_ascii=False)

# with open('data/contexto-general/cti/CTI-AportedelaCTenInnovacion.csv', newline='') as csvfile:
#     reader = csv.reader(csvfile)
#     data = []
#     rownum = 0
#     for row in reader:
#         if rownum == 0:
#             header = row
#         else:
#             colnum = 0
#             category = ""
#             datum1 = {}
#             datum2 = {}
#             for col in row:
#                 if header[colnum] in ['Areas']:
#                     datum1["area"] = col
#                     datum1["type"] = header[colnum+1]
#                     datum1["value"] = float(row[colnum+1].replace("%",""))
#                     datum2["area"] = col
#                     datum2["type"] = header[colnum+2]
#                     datum2["value"] = float(row[colnum+2].replace("%",""))
#                     data.append(datum1)
#                     data.append(datum2)
#                 colnum += 1
#         rownum += 1
#     with open('data/contexto-general/cti/CTI-AportedelaCTenInnovacion.json', 'w') as f:
#         json.dump(data, f, ensure_ascii=False)

# with open('data/contexto-general/cti/CTI-BeneficiosdelaCTI.csv', newline='') as csvfile:
#     reader = csv.reader(csvfile)
#     data = []
#     rownum = 0
#     for row in reader:
#         if rownum == 0:
#             header = row
#         else:
#             category = ""
#             datum = {}
#             datum["opinion"] = row[0]
#             datum["value"] = float(row[1].replace("%",""))
#             data.append(datum)
#         rownum += 1
#     with open('data/contexto-general/cti/CTI-BeneficiosdelaCTI.json', 'w') as f:
#         json.dump(data, f, ensure_ascii=False)

# with open('data/contexto-general/cti/CTI-ContribuciondelaCTI.csv', newline='') as csvfile:
#     reader = csv.reader(csvfile)
#     data = []
#     rownum = 0
#     for row in reader:
#         if rownum == 0:
#             header = row
#         else:
#             colnum = 0
#             category = ""
#             for col in row:
#                 datum = {}
#                 if header[colnum] in ['Idea']:
#                     idea = col
#                 else:
#                     datum["idea"] = idea
#                     datum["opinion"] = header[colnum]
#                     datum["value"] = float(col.replace("%",""))
#                     data.append(datum)
#                 colnum += 1
#         rownum += 1
#     with open('data/contexto-general/cti/CTI-ContribuciondelaCTI.json', 'w') as f:
#         json.dump(data, f, ensure_ascii=False)

# with open('data/contexto-general/cti/CTI-Prestigioprofesionescientific.csv', newline='') as csvfile:
#     reader = csv.reader(csvfile)
#     data = []
#     rownum = 0
#     for row in reader:
#         if rownum == 0:
#             header = row
#         else:
#             colnum = 0
#             profesion = ""
#             for col in row:
#                 datum = {}
#                 if header[colnum] in ['Profesion']:
#                     profesion = col
#                 else:
#                     datum["profesion"] = profesion
#                     datum["opinion"] = header[colnum]
#                     datum["value"] = float(col.replace("%",""))
#                     data.append(datum)
#                 colnum += 1
#         rownum += 1
#     with open('data/contexto-general/cti/CTI-Prestigioprofesionescientific.json', 'w') as f:
#         json.dump(data, f, ensure_ascii=False)

# with open('data/contexto-general/cti/CTI-RazonesparatrabajarenCTI.csv', newline='') as csvfile:
#     reader = csv.reader(csvfile)
#     data = []
#     rownum = 0
#     for row in reader:
#         if rownum == 0:
#             header = row
#         else:
#             colnum = 0
#             razon = ""
#             for col in row:
#                 datum = {}
#                 if header[colnum] in ['% Si']:
#                     razon = col
#                 else:
#                     datum["razon"] = razon
#                     datum["area"] = header[colnum]
#                     datum["value"] = float(col.replace("%",""))
#                     data.append(datum)
#                 colnum += 1
#         rownum += 1
#     with open('data/contexto-general/cti/CTI-RazonesparatrabajarenCTI.json', 'w') as f:
#         json.dump(data, f, ensure_ascii=False)

with open('data/contexto-general/cti/CTI-RiesgosdelaCTI.csv', newline='') as csvfile:
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
    with open('data/contexto-general/cti/CTI-RiesgosdelaCTI.json', 'w') as f:
        json.dump(data, f, ensure_ascii=False)