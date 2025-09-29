import React from "react";

export const VideoModal = () => {
  const videoSrc = "https://www.youtube.com/embed/BShN5EAhQ10";

  return (
    <div>
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header video-modal">
              <a
                role="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></a>
            </div>
            <div
              className="modal-body"
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
              }}
            >
              <iframe
                src={videoSrc}
                title="Video Player"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
