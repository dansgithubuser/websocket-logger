import SimpleWebSocketServer as swss

class Socket(swss.WebSocket):
    def handleMessage(self):
        print(self.data)

    def handleConnected(self):
        print(self.address, 'connected')

    def handleClose(self):
        print(self.address, 'closed')

server = swss.SimpleWebSocketServer('0.0.0.0', 9111, Socket)
server.serveforever()
