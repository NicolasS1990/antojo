import './Button.css'; // importo el css de mi componente


function Button(props){
    return(
        <button className='button-primary'>{props.title}</button>
        
    )
}

export default Button; // esto sirve para exportar mi componente y que pueda ser reutilizado en otros archivos