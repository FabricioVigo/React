import "../stylesheets/Button.css"

function Button(props) {
const { label } = props; 
return (
    <button className="mi-boton">
        { label }
    </button>
)
}

export default Button;