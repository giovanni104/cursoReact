import icon from "../../../assets/iconlist.svg";

const Options = (props) => {
  return (
    <div className="options">
      <h1 className="options-header">{props.mensaje}</h1>
      <div className="options-container">
        {props.options.map((option) => {
          return (<div key={option.id}    className="options-contenedor-flexbox">
            <div
              className="option-item"
              onClick={option.handler}
              key={option.id}
            >
              {option.name}
             
            </div>
            <img className="options-icon" src={icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
