import mymodule from './mycssmodule.css';
import './external.css';
const Css=()=>{
    let circle={
        width:true?"100px":"200px",
        height:true?"100px":"200px",
        borderRadius:"50%",
        border:false?"2px solid red":"5px solid green",
        margin:"auto"
    }
    return (
          <div>
            {/* use of internal css */}
            <h2 style={{color:'blue',backgroundColor:"aqua"}}>This is Css component</h2>
            <p style={circle}>Hi</p>
            {/* use of external css */}
            <div className="txtPrimary">Hello Vinay</div>
            <div className="txtDanger">Hello Rupesh</div>
            <div className={mymodule.special}>HIIIIII</div>
          </div>
    );
}
export default Css;