const Notification = ({ message, errorMessage }) => {
  if (errorMessage !== null) {
    return <div className="errorNotification">{errorMessage}</div>;
  } else if (message) {
    return <div className="Notification">{message}</div>;
  }
};

export default Notification;
