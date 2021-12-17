from PySide6.QtCore import Signal, QObject, Slot

import json

class Backend(QObject):
    openFileClicked = Signal()

    graphData = None

    def __init__(self, parent=None):
        super().__init__(parent)

    def setGraphData(self, data):
        self.graphData = data

    @Slot(result=str)
    def getGraphData(self):
        return json.dumps(self.graphData)

    @Slot()
    def openFile(self):
        self.openFileClicked.emit()