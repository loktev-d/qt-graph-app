from PySide6.QtCore import Qt
from PySide6.QtWidgets import QApplication, QMainWindow
from PySide6.QtWebEngineWidgets import QWebEngineView

import sys
import json

from webengineview import WebEngineView

def bootstrapApp(config):
    app = QApplication(sys.argv) 

    window = QMainWindow()
    window.setWindowTitle("Qt List")
    window.setFixedSize(config["windowSize"]["width"], config["windowSize"]["height"])
    window.move(app.screens()[0].availableGeometry().center() - window.frameGeometry().center())
    
    view = WebEngineView(window)
    view.setContextMenuPolicy(Qt.NoContextMenu)
    view.load(config["clientUrl"])

    window.setCentralWidget(view)
    window.show()

    sys.exit(app.exec())

if __name__ == "__main__":
    with open("config.json", "r") as configFile:
        config = json.load(configFile)
        bootstrapApp(config)