export default () => {
  return (
    <div className="post-item">
      <div
        className="content"
        style={{
          padding: 0
        }}
      >
        <div
          className="title loading"
          style={{ height: 25, marginBottom: 15, width: "50%" }}
        />
        <div className="excerpt">
          {Array(7)
            .fill()
            .map((item, index) => (
              <div
                key={index}
                className="loading"
                style={{ height: 20, marginBottom: 10, width: "100%" }}
              />
            ))}
          <div className="loading" style={{ height: 20, width: "50%" }} />
        </div>
      </div>
    </div>
  );
};
