function User(props) {
    const { name, lastname } = props;

    return(
        <div className="user">
            <ul>
                <li><span style={{color:"#f1f1f1", fontSize:50}}>{name}</span> </li>
                <li><span style={{color:"#f1f1f1", fontSize:50}}>{lastname}</span></li>
                
            </ul>
        </div>
    );
}

export default User;