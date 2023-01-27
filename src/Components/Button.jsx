const Button = (props) =>{
    const {text} = props;
    return(
        <button type="submit" className="my-3 btn btn-primary">{text}</button>
    )
}
export default Button