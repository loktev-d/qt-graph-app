import xmltodict

class XmlHelper:
    @staticmethod
    def parse(path):
        with open(path) as xmlFile:
            return xmltodict.parse(xmlFile.read())

    @staticmethod
    def save(file, path):
        pass
