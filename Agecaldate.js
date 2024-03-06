import React , {useState} from "react";
function Agecaldate(){
    const [birthDate, setbirthDate] = useState('');
    const [Age, setAge] = useState(null);

    const calage=()=>{
        const BirthYear = new Date(birthDate).getFullYear();
        const Currentyear = new Date().getFullYear();
        let calculatedage = Currentyear - BirthYear;
        setAge(calculatedage);
    }
    return(
        <form>
            <div>
            <label className="namebox"> Enter your Date of Birth : (Year) <input id="birthDate" value={birthDate} type="date" onChange={(e) => setbirthDate(e.target.value)}/> </label><br/>
            <button className="butt" type="button" onClick={calage}> Calculate Age </button><br/>
            { Age!==null && <p id="sol"> Your Age is {Age} </p>}
            </div>
        </form>
    );
}
export default Agecaldate;