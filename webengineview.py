from PySide6.QtWebEngineWidgets import QWebEngineView
from PySide6.QtWebChannel import QWebChannel
from PySide6.QtCore import QFile, QIODevice, QDir
from PySide6.QtWidgets import QFileDialog 

from backend import Backend
from xmlhelper import XmlHelper

class WebEngineView(QWebEngineView):
    def __init__(self, parent=None):
        super().__init__(parent)

        self._backend = Backend()
        self._xmlHelper = XmlHelper()

        self.page().loadFinished.connect(self.handleLoadFinished)

        self._backend.openFileClicked.connect(self.handleOpenFileClicked)

    def handleOpenFileClicked(self):
        fileName = QFileDialog.getOpenFileName(self, "Open File", QDir().currentPath(), "XML files (*.xml)")

        if fileName[0] == '':
            return

        xmlDict = self._xmlHelper.parse(fileName[0])
        self._backend.setGraphData(xmlDict)

    def handleLoadFinished(self, ok):
        if ok:
            self.loadQWebChannel()
            self.loadObject()

    def loadQWebChannel(self):
            file = QFile(":/qtwebchannel/qwebchannel.js")
            if file.open(QIODevice.ReadOnly):
                content = file.readAll()
                file.close()
                self.page().runJavaScript(content.data().decode())
            if self.page().webChannel() is None:
                channel = QWebChannel(self.page())
                self.page().setWebChannel(channel)

    def loadObject(self):
        if self.page().webChannel() is not None:
            self.page().webChannel().registerObject("backend", self._backend)
            script = r"""
            new QWebChannel(qt.webChannelTransport, function (channel) {
                window.backend = channel.objects.backend;
            });"""
            self.page().runJavaScript(script)
