from PySide6.QtCore import Signal, QObject, Slot

import json

class Backend(QObject):
    openFileClicked = Signal()
    saveFileClicked = Signal()

    def __init__(self, parent=None):
        super().__init__(parent)
        self._tableData = None

    def setTableData(self, data):
        self._tableData = data

    @Slot(result=str)
    def getTableData(self):
        return json.dumps(self._tableData)

    @Slot()
    def openFile(self):
        self.openFileClicked.emit()

    @Slot()
    def saveFile(self):
        self.saveFileClicked.emit()

    @Slot(result=str)
    def deleteItem(self, index):
        del self._tableData[index]
        return json.dumps(self._tableData)

    @Slot(result=str)
    def addItem(self, item):
        self._tableData.append(item)
        return json.dumps(self._tableData)

    @Slot(result=str)
    def editItem(self, index, item):
        del self._tableData[index]
        self._tableData.insert(index, item)
        return json.dumps(self._tableData)
