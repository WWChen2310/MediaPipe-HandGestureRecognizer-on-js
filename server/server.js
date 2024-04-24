import {
    GestureRecognizer,
    FilesetResolver,
    DrawingUtils
  } from "@mediapipe/tasks-vision";

//   const demosSection = document.getElementById("demos");
  let gestureRecognizer;
  let runningMode = "LIVE_STREAM";
  let enableWebcamButton;
  let webcamRunning = false;
  const videoHeight = "360px";
  const videoWidth = "480px";

  const createGestureRecognizer = async () => {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
    );
    gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
        delegate: "GPU"
      },
      numHands: 2,
      runningMode: runningMode
    });
    // demosSection.classList.remove("invisible");
  };
  createGestureRecognizer();

  // Check if webcam access is supported.
//   function hasGetUserMedia() {
//     // return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
//     console.log('dd');
//     return true;
//   }
  
//   // If webcam supported, add event listener to button for when user
//   // wants to activate it.
//   if (hasGetUserMedia()) {
//     console.log('has user media');
//     // enableWebcamButton = document.getElementById("webcamButton");
//     // enableWebcamButton.addEventListener("click", enableCam);
//   } else {
//     console.warn("getUserMedia() is not supported by your browser");
//   }
  
  // Enable the live webcam view and start detection.
//   function enableCam(event) {
//     if (!gestureRecognizer) {
//       alert("Please wait for gestureRecognizer to load");
//       return;
//     }
  
//     if (webcamRunning === true) {
//       webcamRunning = false;
//       enableWebcamButton.innerText = "ENABLE PREDICTIONS";
//     } else {
//       webcamRunning = true;
//       enableWebcamButton.innerText = "DISABLE PREDICTIONS";
//     }
  
//     // getUsermedia parameters.
//     const constraints = {
//       video: true
//     };
  
//     // Activate the webcam stream.
//     navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
//       video.srcObject = stream;
//       video.addEventListener("loadeddata", predictWebcam);
//     });
//   }
  
//   let lastVideoTime = -1;
//   let results = undefined;
//   async function predictWebcam() {
//     const webcamElement = document.getElementById("webcam");
//     // Now let's start detecting the stream.
//     if (runningMode === "IMAGE") {
//       runningMode = "VIDEO";
//       await gestureRecognizer.setOptions({ runningMode: "VIDEO" });
//     }
//     let nowInMs = Date.now();
//     if (video.currentTime !== lastVideoTime) {
//       lastVideoTime = video.currentTime;
//       results = gestureRecognizer.recognizeForVideo(video, nowInMs);
//     }
  
//     canvasCtx.save();
//     canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//     const drawingUtils = new DrawingUtils(canvasCtx);
  
//     canvasElement.style.height = videoHeight;
//     webcamElement.style.height = videoHeight;
//     canvasElement.style.width = videoWidth;
//     webcamElement.style.width = videoWidth;
  
//     if (results.landmarks) {
//       for (const landmarks of results.landmarks) {
//         drawingUtils.drawConnectors(
//           landmarks,
//           GestureRecognizer.HAND_CONNECTIONS,
//           {
//             color: "#00FF00",
//             lineWidth: 5
//           }
//         );
//         drawingUtils.drawLandmarks(landmarks, {
//           color: "#FF0000",
//           lineWidth: 2
//         });
//       }
//     }
//     canvasCtx.restore();
//     if (results.gestures.length > 0) {
//       gestureOutput.style.display = "block";
//       gestureOutput.style.width = videoWidth;
//       const categoryName = results.gestures[0][0].categoryName;
//       const categoryScore = parseFloat(
//         results.gestures[0][0].score * 100
//       ).toFixed(2);
//       const handedness = results.handednesses[0][0].displayName;
//       gestureOutput.innerText = `GestureRecognizer: ${categoryName}\n Confidence: ${categoryScore} %\n Handedness: ${handedness}`;
//     } else {
//       gestureOutput.style.display = "none";
//     }
//     // Call this function again to keep predicting when the browser is ready.
//     if (webcamRunning === true) {
//       window.requestAnimationFrame(predictWebcam);
//     }
//   }
// console.log(555)