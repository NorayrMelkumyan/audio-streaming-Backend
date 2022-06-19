import React from "react";
import InputField from "../../Shared/Input";
import H4 from "../../Shared/H4";



function IndexGuest () {


   return (
       <>
           <div className={'d-flex-column'}>
               <h1> All in one tool for better YouTube Learning</h1>
               <H4 text = "Video learning with 1 click"/>
               <form className={"setUrl"}>
                   <InputField
                       type="url"
                       name="URL"
                       className = "urlInput"
                       placeholder = "Put your YouTube link here and get refreshed screen with transcribes of new video"
                   />
                   <button className={"getLink"}>Get transcripts</button>
               </form>
           </div>
       </>
   )
}


export default IndexGuest
