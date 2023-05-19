 
import Options from "./Options";

const CustomMessage = (props) => {
  const options = [
    {
      name: "Cambio de contraseña",
      handler: props.actionProvider.handleDog,
      id: 1
    },
    {
      name: "Actualización de correo",
      handler: props.actionProvider.handleDog,
      id: 2
    },
    {
      name: "Preguntas de seguridad",
      handler: props.actionProvider.handleDog,
      id: 3
    },
    {
      name: "Actualizacion de Clavemóvil",
      handler: props.actionProvider.handleDog,
      id: 4
    }
    ,
    {
      name: "Ami Ven",
      handler: props.actionProvider.handleDog,
      id:5
    }
  ];
  return <>
  <div className="boton">  Seguridad</div>
  <div className="react-chatbot-kit-chat-bot-message-container">
    <div className="react-chatbot-kit-chat-bot-message">
      <span>Selecciona la opción que deseas restablecer</span>
      </div>
      </div>
  <Options options={options}  {...props} />
  </>;
  
  
  
  
 
};

export default CustomMessage;
