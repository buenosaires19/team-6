import json

class posteo:
    def __init__(self, j):
        self.id = j["id"]
        self.votos = int(j["votos"])
        self.nombre = j["nombre"]
        self.apellido = j["apellido"]
        self.nacimiento = j["nacimiento"]
        self.descripcion = j["descripcion"]
        self.foto = j["foto"]
        self.contacto = j["contacto"]
        self.provincia = j["provincia"]
        self.area = []
        self.area.extend(j["area"])

    def getJSON(self):
        atributos = [self.id,self.votos,self.nombre,self.apellido,self.nacimiento,self.descripcion,self.foto,self.contacto,self.provincia,self.area]
        return json.dumps({self.id: atributos})


def verificarIDExiste(id,dic):
    if id in dic:
        return True
    else:
        return False

def levantarInfoDB():
    personasDic = {}
    with open("postulaciones.txt") as json_file:
        data = json.load(json_file)
        for i in data:
            persona = posteo(data[i])
            personasDic.update({persona.id: persona})
    return personasDic

def buscarPorIP(id):
    personasDic = levantarInfoDB()
    if verificarIDExiste(id, personasDic):
        return personasDic[id]
    else:
        return None


def sortearVotos():
    personas = levantarInfoDB()
    personasObj = []
    for i in personas:
        personasObj.append(personas[i])
    personasObj.sort(key=lambda x: x.votos, reverse=True)
    return personasObj

def getJSONByID(id):
    x = buscarPorIP(id)
    return x.getJSON()

def getJSONRank():
    personas = levantarInfoDB()
    personasJSON = []
    for i in personas:
        personasJSON.append(personas[i].getJSON())
    return personasJSON
