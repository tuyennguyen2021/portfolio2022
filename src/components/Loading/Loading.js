import "./loading.css";

function Loading() {
  return (
    <div>
      <div className="load-wrapp" style={{ backgroundColor: "#000" }}>
        <div className="load-height">
          <div className="load-5">
            <div className="ring-2">
              <div className="ball-holder">
                <div className="ball" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
