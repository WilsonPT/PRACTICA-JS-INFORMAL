const d = document,
  n = navigator;
export default function webCam(id) {
  const $video = d.getElementById(id);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((error) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p>Ha ocurrido un error: <mark>${error.message}</mark></p>`
        );
        //console.log(error.message);
      });
  }
}
