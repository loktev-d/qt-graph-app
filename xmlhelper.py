import xmltodict
import dict2xml

class XmlHelper:
    @staticmethod
    def parse(path):
        with open(path) as xmlFile:
            return xmltodict.parse(xmlFile.read())
