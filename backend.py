from PySide6.QtCore import Signal, QObject, Slot

import json

class Backend(QObject):
    openFileClicked = Signal()
    saveFileClicked = Signal()

    tableData = None

    def __init__(self, parent=None):
        super().__init__(parent)

    def setTableData(self, data):
        self.tableData = data

    @Slot(result=str)
    def getTableData(self):
        return json.dumps(self.tableData)

    @Slot()
    def openFile(self):
        self.openFileClicked.emit()

    @Slot()
    def saveFile(self):
        self.saveFileClicked.emit()

    @Slot(str, result=str)
    def deleteItems(self, jsonIds):
        ids = json.loads(jsonIds)

        for id in ids:
            for elem in self.tableData["Items"]["Item"]:
                if (elem["Id"] == id):
                    self.tableData["Items"]["Item"].remove(elem)
                    break

        return json.dumps(self.tableData)

    @Slot(str, result=str)
    def addItem(self, jsonItem):
        self.tableData["Items"]["Item"].append(json.loads(jsonItem))
        return json.dumps(self.tableData)

    @Slot(str, result=str)
    def editItem(self, jsonItem):
        item = json.loads(jsonItem)
        id = item["Id"]

        index = 0

        for elem in self.tableData["Items"]["Item"]:
            if (elem["Id"] == id):
                index = self.tableData["Items"]["Item"].index(elem)
                self.tableData["Items"]["Item"].remove(elem)
                break

        self.tableData["Items"]["Item"].insert(index, item)
        return json.dumps(self.tableData)
