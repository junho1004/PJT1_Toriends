import cv2
import mediapipe as mp
import asyncio
import websockets
import json

mp_drawing = mp.solutions.drawing_utils
mp_face_mesh = mp.solutions.face_mesh

@asyncio.coroutine
def transport_with_backend():
    websocket = yield from websockets.connect('ws://i8c203.p.ssafy.io:8002')

    # For webcam input:
    drawing_spec = mp_drawing.DrawingSpec(thickness=1, circle_radius=1)
    camera_id="/dev/video0"

    cap = cv2.VideoCapture(camera_id, cv2.CAP_V4L2)
    cap.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc(*'YUYV'))
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 120)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 160)
    # cap.set(cv2.CAP_PROP_FPS, 20/1)

    with mp_face_mesh.FaceMesh(
        min_detection_confidence=0.5,
        min_tracking_confidence=0.5) as face_mesh:
    
        while cap.isOpened():
            try:
                success, image = cap.read()
                if not success:
                    print("\033[91m" + "Ignoring empty camera frame." + "\033[0m")
                    # If loading a video, use 'break' instead of 'continue'.
                    break

                # Flip the image horizontally for a later selfie-view display, and convert
                # the BGR image to RGB.
                image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
                # To improve performance, optionally mark the image as not writeable to
                # pass by reference.
                image.flags.writeable = False 
                results = face_mesh.process(image)

                # Draw the face mesh annotations on the image.
                image.flags.writeable = True
                image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
                # image = cv2.flip(image, 0)
                # image = cv2.flip(image, 1)

                if results.multi_face_landmarks:
                    for face_landmark in results.multi_face_landmarks:
                        ih, iw, ic = image.shape
                        landmarks = list(face_landmark.landmark)
                        landmarks_lists = {
                            "Top": str(int(landmarks[10].x * 1920)) + ',' + str(int(landmarks[10].y * 700)),
                            "upperLib": str(int(landmarks[11].x * 1920)) + ',' + str(int(landmarks[11].y * 700)),
                            "leftEye": str(int(landmarks[27].x * 1920)) + ',' + str(int(landmarks[27].y * 700)),
                        }
                    landmarks_lists_json = json.dumps(landmarks_lists)
                    yield from websocket.send(landmarks_lists_json)
                cv2.imshow('MediaPipe FaceMesh', image)
                
                if cv2.waitKey(1) & 0xFF == 27:
                    cap.release()
                    cv2.destroyAllWindows()
                    yield from websocket.close()
                    break

            except KeyboardInterrupt:
                cap.release()
                cv2.destroyAllWindows()
                yield from websocket.close()
              
asyncio.get_event_loop().run_until_complete(transport_with_backend())
