
const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    let valideer1 = valideerVoornaam();
    let valideer2 = valideerNaam();
    let valideer3 = valideerDatum();
    let valideer4 = valideerMail();
    let valideer5 = valideerAantal();
    let proficiat = valideer1 + valideer2 + valideer3 + valideer4 + valideer5;
    if (proficiat === 0){
        console.log("Proficiat!");
    }
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let proficiat = 0;
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className="invalid"; // invalid class instellen
        errVoornaam.innerHTML = "max. 30 karakters";
        proficiat++;
    } else {
        txtVoornaam.className=""; // alle classes verwijderen
        errVoornaam.innerHTML = "";
    }
    return proficiat;
};

const valideerNaam = () => {
    let txtNaam = document.getElementById("txtNaam");
    let errNaam = document.getElementById("errNaam");
    let proficiat = 0;
    let naam = txtNaam.value.trim();
    if (naam.length === 0) {
        txtNaam.className="invalid"; // invalid class instellen
        errNaam.innerHTML = "Verplicht waarde mee te geven!";
        proficiat++;
    } else {
        if (naam.length > 50){
            txtNaam.className="invalid";
            errNaam.innerHTML = "max. 50 karakters";
            proficiat++;
        } else {
            txtNaam.className=""; // alle classes verwijderen
            errNaam.innerHTML = "";
        }
    }
    return proficiat;
};

const valideerDatum = () => {
    let txtDatum = document.getElementById("txtDatum");
    let errDatum = document.getElementById("errDatum");
    let proficiat = 0;
    let datum = txtDatum.value.trim();
    txtDatum.className=""; // alle classes verwijderen
    errDatum.innerHTML = "";
    if (datum.length === 0){
        txtDatum.className="invalid";
        errDatum.innerHTML = "Verplicht veld";
        proficiat++;
    } else {
        if (datum.charAt(4) !== "-" || datum.charAt(7) !== "-" || datum.length !== 10){
            txtDatum.className="invalid";
            errDatum.innerHTML = "Formaat is niet jjjj-mm-dd";
            proficiat++;
        } else {
            let getallen = datum.split('');
            let error = false;
            for (let i = 0; i < getallen.length; i++){
                if (!(getallen[i] >= '0' && getallen[i] <= '9' || getallen[i] === '-')){
                    error = true
                }
            }
            if (error === true){
                txtDatum.className="invalid";
                errDatum.innerHTML = "Geen geldige datum!";
                proficiat++;
            }
        }
    }
    return proficiat;
};

const valideerMail = () => {
    let txtMail = document.getElementById("txtMail");
    let errMail = document.getElementById("errMail");
    let proficiat = 0;
    let mail = txtMail.value.trim();
    txtMail.className=""; // alle classes verwijderen
    errMail.innerHTML = "";
    if (mail.length === 0){
        txtMail.className="invalid"; // invalid class instellen
        errMail.innerHTML = "Verplicht veld";
        proficiat++;
    } else {
        let letters = mail.split('');
        let geldig = 0;
        for (let i = 0; i < letters.length; i++){
            if(letters[i] === '@'){
                geldig++;
            }
        }
        if(geldig !== 1){
            txtMail.className="invalid"; // invalid class instellen
            errMail.innerHTML = "Geen geldig email adres";
            proficiat++;
        } else {
            if(mail.indexOf('@') < 1 || mail.length < 3){
                txtMail.className="invalid"; // invalid class instellen
                errMail.innerHTML = "Geen geldig email adres";
                proficiat++;
            } else {
                let index = mail.indexOf("@") + 1;
                if (mail.charAt(index) === ''){
                    txtMail.className="invalid"; // invalid class instellen
                    errMail.innerHTML = "Geen geldig email adres";
                    proficiat++;
                }
            }
        }
    }
    return proficiat;
};
const valideerAantal = () => {
    let txtAantal = document.getElementById("txtAantal");
    let errAantal = document.getElementById("errAantal");
    let proficiat = 0;
    let aantalKinderen = txtAantal.value.trim();
    txtAantal.className=""; // alle classes verwijderen
    errAantal.innerHTML = "";
    if(aantalKinderen.length > 2){
        txtAantal.className="invalid"; // invalid class instellen
        errAantal.innerHTML = "Is te vruchtbaar";
        proficiat++;
    } else {
        let getallen = aantalKinderen.split('');
        let error = false;
        for (let i = 0; i < getallen.length; i++){
            if (!(getallen[i] >= '0' && getallen[i] <= '9')){
                error = true
            }
        }
        if (error === true){
            txtAantal.className="invalid"; // invalid class instellen
            errAantal.innerHTML = "Is geen positief getal";
            proficiat++;
        }
    }
    return proficiat;
};

window.addEventListener("load", setup);
