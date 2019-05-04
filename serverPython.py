import http.server
import socketserver

port = 8080
handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("",port), handler) as httpd:
    print("el serzazaa435   vidor esta andando!",port)
    httpd.serve_forever()