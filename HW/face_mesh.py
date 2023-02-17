import cv2
import mediapipe as mp
    mp_drawing = mp.solutions.drawing_utils
    mp_face_mesh = mp.solutions.face_mesh
    
    # For static images:
    file_list = ['test.png']
    drawing_spec = mp_drawing.DrawingSpec(thickness=1, circle_radius=1)
    with mp_face_mesh.FaceMesh(
        static_image_mode=True,
        max_num_faces=1,
        min_detection_confidence=0.5) as face_mesh:
      for idx, file in enumerate(file_list):
        image = cv2.imread(file)
        # Convert the BGR image to RGB before processing.
        results = face_mesh.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
    
        # Print and draw face mesh landmarks on the image.
        if not results.multi_face_landmarks:
          continue
        annotated_image = image.copy()
        for face_landmarks in results.multi_face_landmarks:
          print('face_landmarks:', face_landmarks)