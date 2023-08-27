import React from "react";
import './Form.scss';


const Form = (props) => {
    return(

        <div className="form">
        <div className="title">WeatherWise</div>
      <div className="subtitle">Discover Your World Through Weather Insights !</div>

<form onSubmit={props.Weather}>
    
<div className="input-container ic1">
        <input id="City" name="city" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="City" className="placeholder"> City</label>
      </div>

      <div className="input-container ic2">
        <input id="Country" name= "country"  className="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="Country" className="placeholder">Country</label>
      </div>

<button className="button-32" > Get Weather </button>
</form>
</div>


    )//return
}

export default Form ; 


/* 
<input type="text" name="city" placeholder="cite ...." />        
<input  type="text" name= "country" placeholder="Country ...."/>        
 */