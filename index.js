const Notification = (props) => {
const {iconUrl,message,className}=props
    const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  )
};

const element = (
  <div class="bg-container">
    <h1 class="heading">Notifications</h1>
    <div className="bg-container2">
        <Notification className="info" message="Information Message" iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
        <Notification className="Success" message="Success Message" iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
        <Notification className="Warning" message="Warning Message" iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
        <Notification className="Error" message="Error message" iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
