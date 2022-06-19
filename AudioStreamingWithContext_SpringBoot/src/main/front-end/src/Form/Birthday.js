import React, { useState } from 'react';


function Birthday ( {dispatch, birthday} ){
    const [birthDay, setBirthDay] = useState("");
    const [age, setAge] = useState(0);
   
    const calculateAge = (birthDay) => {
        let today = new Date();
        let birthDate = new Date(birthDay);
        let ageNow = today.getFullYear() - birthDate.getFullYear();
        // var month = today.getMonth() - birthDate.getMonth();
        //     if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
        //     {
        //         ageNow--;
        //     }
        setAge(today);
        return age;
    }

    return (
        <div>
            <label>Date of birth: </label>
            <input className="date" type="date" onChange={(e)=>{
            setBirthDay(e.target.value);}} onBlur = {calculateAge} />
            {/* <p>{age}</p> */}
        </div>
    )
}

export default Birthday