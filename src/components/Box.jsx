function Box(props) {
    const { children } = props;

    return (
        <div className="mi-box" style={{color:"#fff"}}>
            { children }
            </div>

    );
}

export default Box;