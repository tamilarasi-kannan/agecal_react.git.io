function Agecalc(){
    const tamilarasi = () =>{
    let subtraction = parseInt(document.getElementById("tam").value);
        let diffage = 2024 - subtraction;
        document.getElementById("sol").value = diffage;
    };
    return(
        <form>
            <div>
            <label className="namebox"> Enter your Date of Birth : (Year) <input id="tam" type="textbox"/> </label><br/>
            <button className="butt" type="button" onClick={tamilarasi}> Calculate Age </button><br/>
            <label className="namebox"> Your Age is <input id="sol" type="textbox"/></label>
            </div>
        </form>
    );
}
export default Agecalc;