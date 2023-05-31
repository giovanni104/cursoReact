import { response } from "./dataSubMenuResponse";
import "./CustomMessageStyle.css";
const CustomMessageP = (props) => {
  let title = "";
  let category = "";
  let options = [];
  let opcionSubmenu = response.filter(function (response) {
    return response.id == props.opcion;
  });

  if (opcionSubmenu.length !== 0) {
    options = opcionSubmenu[0].response;
    title = opcionSubmenu[0].title;
    category=opcionSubmenu[0].opcion;
  }
  return (
    <>
     <div className="botonChat"> {category}</div>
      <div className="react-chatbot-kit-chat-bot-message-container">
        <div className="react-chatbot-kit-chat-bot-message">
          <span>{title}</span>
        </div>
      </div>
      <div className="react-chatbot-kit-chat-bot-message-container">
        <div className="react-chatbot-kit-chat-bot-message">
          <ol style={{marginLeft:"-15px"}} >
            {options.map((option) => {
              return <li key={option}>{option}</li>;
            })}
          </ol>
        </div>{" "}
      </div>
    </>
  );
};
 
export default CustomMessageP;
