from bluetooth import *
import asyncio
import websockets

addr = "98:D3:51:F9:58:EF"
socket = BluetoothSocket(RFCOMM)
socket.connect((addr, 1))
print("bluetooth connected!")

@asyncio.coroutine
def BtnReact():
    websocket = yield from websockets.connect('ws://i8c203.p.ssafy.io:8003/command')
    yield from websocket.send("Btn-pressed")
    receive = yield from websocket.recv()
    print(f"receive : {receive}")
    yield from websocket.close()
    return

while True:
    data = socket.recv(1024)  #type == byte
    if (data == b'1'):
       asyncio.get_event_loop().run_until_complete(BtnReact())

socket.close()
