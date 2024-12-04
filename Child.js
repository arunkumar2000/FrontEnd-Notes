const ChildComp=(props)=>{
    const{name,sal}=props;
    return (
        
        <div>
            <h2>This is Child Component</h2>
            <p>Name:<strong>{name}</strong> Salary:<strong></strong>{sal}</p>
            <h2 onMouseOver={managestate}>Change Data</h2>

        </div>
    );
}

export default ChildComp;
