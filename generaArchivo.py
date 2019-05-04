
import json

data = {}  
data['mujer'] = []

data['mujer'].append({
    
    'name': 'Maria',
    'apellido': 'Perez',
    'nacimiento': '19/09/1990',
    'descripcion': 'xxxx',
    'foto':'url_foto',
    'contacto': '1143268891',
    'provincia':'Buenos Aires',
    'area':['informatica','biologia']
})

data['mujer'].append({  
    'name': 'Carla',
    'apellido': 'Gomez',
    'nacimiento': '19/07/1999',
    'descripcion': 'zzzxxx',
    'foto':'url_foto',
    'contacto': '1143421891',
    'provincia':'Catamarca',
    'area':['ingenieria industial','biologia']
})

data['mujer'].append({  
    'name': 'Tamara',
    'apellido': 'Lopez',
    'nacimiento': '23/07/1980',
    'descripcion': 'zzzyyyxxx',
    'foto':'url_foto',
    'contacto': 'tam_123@hotmail.com',
    'provincia':'Rio Negro',
    'area':['ingenieria civil']
})

data['mujer'].append({  
    'name': 'Marta',
    'apellido': 'Pomez',
    'nacimiento': '19/11/1989',
    'descripcion': 'xxzxx',
    'foto':'url_foto',
    'contacto': '1132268891',
    'provincia':'Buenos Aires',
    'area':['informatica']
})

data['mujer'].append({  
    'name': 'Joaquina',
    'apellido': 'Navarrez',
    'nacimiento': '19/07/2000',
    'descripcion': 'zzzyyyxxx',
    'foto':'url_foto',
    'contacto': '1143490891',
    'provincia':'Neuquen',
    'area':['medicina']
})

data['mujer'].append({  
    'name': 'Laura',
    'apellido': 'Repec',
    'nacimiento': '23/07/2001',
    'descripcion': 'zzyxxx',
    'foto':'url_foto',
    'contacto': 'lrepec@hotmail.com',
    'provincia':'Salta',
    'area':['ingenieria naval']
})
data['mujer'].append({  
    'name': 'Mia',
    'apellido': 'Porez',
    'nacimiento': '05/09/1999',
    'descripcion': 'xxxxss',
    'foto':'url_foto',
    'contacto': '1100968891',
    'provincia':'Buenos Aires',
    'area':['robotica']
})
data['mujer'].append({  
    'name': 'Flavia',
    'apellido': 'Lopez',
    'nacimiento': '19/04/2000',
    'descripcion': 'zAxxx',
    'foto':'url_foto',
    'contacto': '1143028891',
    'provincia':'Salta',
    'area':['biotecnologia']
})
data['mujer'].append({  
    'name': 'Lara',
    'apellido': 'Martinez',
    'nacimiento': '23/01/1999',
    'descripcion': 'zzzyyyx',
    'foto':'url_foto',
    'contacto': 'martilara@gmail.com',
    'provincia':'Ushuaia',
    'area':['ingenieria naval']
})
data['mujer'].append({  
    'name': 'Sofia',
    'apellido': 'Rodriguez',
    'nacimiento': '19/07/1998',
    'descripcion': 'xxzsefsfaadadxx',
    'foto':'url_foto',
    'contacto': '1133833321',
    'provincia':'Buenos Aires',
    'area':['informatica']
})
data['mujer'].append({  
    'name': 'Justina',
    'apellido': 'Perez',
    'nacimiento': '05/07/2000',
    'descripcion': 'zzzyxx',
    'foto':'url_foto',
    'contacto': '1143488891',
    'provincia':'Neuquen',
    'area':['medicina', 'biotecnologia']
})
data['mujer'].append({  
    'name': 'Laura',
    'apellido': 'Lansinec',
    'nacimiento': '23/10/2001',
    'descripcion': 'zzyxwfjwekjfssfxx',
    'foto':'url_foto',
    'contacto': 'lalansi@hotmail.com',
    'provincia':'Salta',
    'area':['ingenieria naval']
})

with open('postulantes.json', 'w') as outfile:  
    json.dump(data, outfile)
