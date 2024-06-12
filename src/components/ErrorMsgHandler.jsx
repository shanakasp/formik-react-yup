const ErrorMessageHandler = ({ errors }) => {
  return (
    <div>
      {errors &&
        Object.keys(errors).map((key) => (
          <div
            key={key}
            style={{ color: "red", marginBottom: "10px", marginTop: "-5px" }}
          >
            {errors[key]}
          </div>
        ))}
    </div>
  );
};

export default ErrorMessageHandler;
