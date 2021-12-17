import xmltodict
import dict2xml

class XmlHelper:
    @staticmethod
    def parse(path):
        with open(path) as xmlFile:
            return xmltodict.parse(xmlFile.read())

    @staticmethod
    def save(dict, path):
        fileContent = dict2xml.dict2xml(dict)

        with open(path, 'w') as xmlFile:
            xmlFile.write("""<?xml version="1.0" encoding="UTF-8"?>""" + "\n" + fileContent)
