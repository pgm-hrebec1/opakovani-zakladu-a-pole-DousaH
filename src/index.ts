import { exit } from 'process';
import promptSync from 'prompt-sync';

const prompt = promptSync();


// ULOHA O1: 
// Napiste program, ktery
// - se zepta uzivatele postupne na 3 cisla; kazde cislo uzivatel potvrdi odeslanim ENTER
// - program vypise:
// 1. Soucet vsech zadanych cisel
// 2. Soucin vsech zadanych cisel
// 3. Aritmeticky prumer vsech zadanych cisel
// 4. Rozdil mezi nejvetsim a nejmensim zadanym cislem
// 5. Pro kazde zadane cislo vetsi nez 100 vypise program hvezdicku. 
// -  BONUS: hvezdicky vypise nakonec a na jeden radek, ne po kazdem cisle zvlast.
// Program potom uzavrete do funkce "cislaO1"

function cisla01() {
let otazka1 : string = ""
let otazka2 : string = ""
let otazka3 : string = ""
//let index : number = 0
for(let index : number = 0; index < 6; index++){
let otazka01 : string = prompt("zadej prvni cislo : ")
let otazka02 : string = prompt("zadej druhe cislo : ")
let otazka03 : string = prompt("zadej treti cislo : ")
otazka1 = otazka01
otazka2 = otazka02
otazka3 = otazka03

if(Number.isNaN(Number(otazka1 + otazka2 + otazka3))){
    if(index === 0){
        console.log("zadej cisla")
    }else{
        if(index === 1){
            console.log("ZADEJ CISLA!!!")
        }else{
            if(index === 2){
                console.log("NECHTEJ ABYCH SE NASTVAL!!!")
            }else{
                if(index === 3){
                    console.log("POSLEDNI SANCE!!!")
                }else{
                    if(index === 4){
                        console.log("DELAS SI SRANDU!!!")
                    }else{
                        console.log(".")
                        console.log("..")
                        console.log("...")
                        console.log("debil detekovan, vypinani")
                        exit(67)
                    }
                }
            }
    }
    }
}else{
break
}
}



let cislo1 : number = Number(otazka1);
let cislo2 : number = Number(otazka2);
let cislo3 : number = Number(otazka3);

let odpoved1 : number = cislo1 + cislo2 + cislo3;
let odpoved2 : number = cislo1 * cislo2 * cislo3;
let odpoved3 : number = odpoved1 / 3;
let nejvetsicislo : number
let nejmensicislo : number
if(cislo1 > cislo2){
    if (cislo1 > cislo3){
        nejvetsicislo = cislo1
    }else{
        nejvetsicislo = cislo3
    }
}else{
    if(cislo2 > cislo3){
        nejvetsicislo = cislo2
    }else{
        nejvetsicislo = cislo3
    }
}
if(cislo1 < cislo2){
    if (cislo1 < cislo3){
        nejmensicislo = cislo1
    }else{
        nejmensicislo = cislo3
    }
}else{
    if(cislo2 < cislo3){
        nejmensicislo = cislo2
    }else{
        nejmensicislo = cislo3
    }
}
let odpoved4 : number = nejvetsicislo - nejmensicislo
let ciselnadsto : string = ""
if(cislo1 > 100){
    ciselnadsto=ciselnadsto + "*"
}
if(cislo2 > 100){
    ciselnadsto=ciselnadsto + "*"
}
if(cislo3 > 100){
    ciselnadsto=ciselnadsto + "*"
}
console.log("soucet vsech cisel je : " + odpoved1)
console.log("soucin vsech cisel je : " + odpoved2)
console.log("aritmeticky prumer vsech cisel je : " + odpoved3)
console.log("rozdil mezi nejvetsim a nejmensim cislem je : " + odpoved4)
console.log(ciselnadsto)
}

//cisla()

// ULOHA O2:
// Napiste program, ktery
// - se zepta uzivatele na 3 texty; kazdy text uzivatel potvrdi odeslanim ENTER
// - program vypise:
// 1. Zadane texty v OPACNEM poradi, nez jak byly zadany, vsechny na jeden radek
// 2. Souhrnnou delku vsech textu, ktere uzivatel zadal. Bonus: nezapocitavejte pripadne uvodni, nebo koncove mezery v zadanych textech.
// 3. Celkovy pocet PISMEN (zakladni US abecedy) je v zadanych textech, a celkovy pocet SAMOHLASEK.
// 4. Urci, kolik PROCENT samohlasek je v zadanych textech. Mezery vubec nepocitame.
// 5. Vypise nejvetsi text v LEXIKOGRAFICKEM usporadani.
// Program potom uzavrete do funkce "textyO2"

function texty02(){
    let otazka01 : string = prompt("zadej prvni text : ")
    let otazka02 : string = prompt("zadej druhy text : ")
    let otazka03 : string = prompt("zadej treti text : ")
    let obtext01 : string = ""
    let obtext02 : string = ""
    let obtext03 : string = ""
    
    for(let index = otazka01.length; index > 0; index++) {
        let pomcona : string = otazka01.charAt(index)
        obtext01 = obtext01 + pomcona
    }
    for(let index = otazka02.length; index > 0; index++) {
        let pomcona : string = otazka02.charAt(index)
        obtext02 = obtext02 + pomcona
    }
    for(let index = otazka03.length; index > 0; index++) {
        let pomcona : string = otazka03.charAt(index)
        obtext03 = obtext03 + pomcona
    }
    let tdohromady : string = otazka01 + obtext02 + obtext03
    tdohromady = tdohromady.trim()
    let delkat : number = tdohromady.length
    
    let abeceda : number = 0
    let samohlasky : number = 0
        
    for(let index = 0; index < delkat; index++) {
        let pomocna : string = tdohromady.charAt(index)
        pomocna = pomocna.toLocaleLowerCase()
        if(pomocna >= "a" && pomocna <= "z"){
            abeceda++
            if(pomocna === "a" || pomocna === "e" || pomocna === "i" || pomocna === "o" || pomocna === "u"){
                samohlasky++
            }
        }

    }

    let procenta = (samohlasky / abeceda) * 100

    let nejvetsitext : string = ""


    if(otazka01 > otazka02){
        if (otazka01 > otazka03){
            nejvetsitext = otazka01
        }else{
            nejvetsitext = obtext03
        }
    }else{
        if(otazka02 > otazka03){
            nejvetsitext = obtext02
        }else{
            nejvetsitext = otazka03
        }
    }
    

    for(let index : number = 1; index <= 3; index++){ 
    let ptext : string = ". text obracene je : "
    if(index === 1){
        console.log(index + ptext + obtext01)
    }else{
        if(index === 2){
            console.log(index + ptext + obtext02)
        }else{
            console.log(index + ptext + obtext03)
        }
    }
    }
    
    let ptext : string = "v textu je :"
    console.log(ptext + delkat + " znaku")
    console.log(ptext + abeceda + " pismenek us abecedy") 
    console.log(ptext + samohlasky + " samohlasek")
    console.log(ptext + procenta + " procent samohlasek")
    console.log("nejvetsi text podle lexikografickeho usporadani je : " + nejvetsitext)
}

texty02()

// ULOHA O3:
// Zadani je totozne, jako u ulohy O1, ALE
// - program se nepta na 3 cisla, ale nechava uzivatele zapisovat cisla, kazde potvrdi ENTERem
// - zadavani cisel se ukonci zadanim cisla 0, nebo zaporneho cisla
// - BONUS: pri zadani neciselneho udaje se vypise zprava o chybnem vstupu a vyzva k opetovnemu zadani cisla
// - PO zadani vsech cisel (tzn. po zadani 0 nebo zaporneho cisla) program vypocita a vypise vsechny udaje O1-1 .. O1-5.
// Pro reseni teto ulohy NEPOUZIVEJTE pole.
// Program potom uzavrete do funkce "cislaO3"
// ULOHA O1: 
// Napiste program, ktery
// - se zepta uzivatele postupne na 3 cisla; kazde cislo uzivatel potvrdi odeslanim ENTER
// - program vypise:
// 1. Soucet vsech zadanych cisel
// 2. Soucin vsech zadanych cisel
// 3. Aritmeticky prumer vsech zadanych cisel
// 4. Rozdil mezi nejvetsim a nejmensim zadanym cislem
// 5. Pro kazde zadane cislo vetsi nez 100 vypise program hvezdicku. 
// -  BONUS: hvezdicky vypise nakonec a na jeden radek, ne po kazdem cisle zvlast.
// Program potom uzavrete do funkce "cislaO1"

function cisla03(){
    
    let pocitadlo : number = 0
    let soucet : number = 0
    let soucin : number = 1
    let prumer : number = 0
    let nmcislo : number = 1
    let nvcislo : number = 1
    let rozdilnmanvcisel : number = 0
    let hvezdy : string = ""
    
    for (;;){
        let otazka : string = prompt("zadej cislo : ")
        let cislo : number = Number(otazka)
        if(cislo <= 0){
            break
        }
        if(Number.isNaN(Number(cislo))){
            console.log("nauc se cist!!!")
            break
        }
        pocitadlo++
        soucet = soucet + cislo
        soucin = soucin * cislo

            if(nmcislo > cislo){
                nmcislo = cislo
            }
        

            if(nvcislo < cislo){
                nvcislo = cislo
            }
        
        
        if(cislo < 100){
            hvezdy = hvezdy + "*"
        }
    }
    prumer = soucet / pocitadlo
    rozdilnmanvcisel = nvcislo - nmcislo
    console.log("soucet vsech cisel je : " + soucet)
    console.log("soucin vsech cisel je : " + soucin)
    console.log("aritmeticky prumer vsech cisel je : " + prumer)
    console.log("rozdil mezi nejvetsim a nejmensim cislem je : " + rozdilnmanvcisel)
    console.log(hvezdy)
}

// ULOHA O4:
// Zadani je totozne, jako u ulohy O2, ALE
// - program se nepta na 3 texty, ale nechava uzivatele zapisovat texty, kazdy potvrdi ENTERem
// - zadavani se ukonci zadanim PRAZDNEHO textu
// PO zadani vsech textu program vypocita a vypise vsechny udaje O2-1 .. O2-5
// Pro reseni teto ulohy NEPOUZIVEJTE pole.
// Program potom uzavrete do funkce "cislaO4"
// ULOHA O2:
// Napiste program, ktery
// - se zepta uzivatele na 3 texty; kazdy text uzivatel potvrdi odeslanim ENTER
// - program vypise:
// 1. Zadane texty v OPACNEM poradi, nez jak byly zadany, vsechny na jeden radek
// 2. Souhrnnou delku vsech textu, ktere uzivatel zadal. Bonus: nezapocitavejte pripadne uvodni, nebo koncove mezery v zadanych textech.
// 3. Celkovy pocet PISMEN (zakladni US abecedy) je v zadanych textech, a celkovy pocet SAMOHLASEK.
// 4. Urci, kolik PROCENT samohlasek je v zadanych textech. Mezery vubec nepocitame.
// 5. Vypise nejvetsi text v LEXIKOGRAFICKEM usporadani.
// Program potom uzavrete do funkce "textyO2"

function texty04(){
    
    let obracenytext : string = ""
    let delkatextu : number = 0
    let abeceda : number = 0
    let samohlasky : number = 0
    let nvtext : string = "a"
    for(;;){
        let text : string = prompt("zadej text : ")
        for(let index = text.length; index > 0; index++) {
            let pomcona : string = text.charAt(index)
            obracenytext = obracenytext + pomcona
        }
        delkatextu = delkatextu + text.length
        
        for(let index = 0; index < delkatextu; index++) {
            let pomocna : string = text.charAt(index)
            pomocna = pomocna.toLocaleLowerCase()
            if(pomocna >= "a" && pomocna <= "z"){
                abeceda++
                if(pomocna === "a" || pomocna === "e" || pomocna === "i" || pomocna === "o" || pomocna === "u"){
                    samohlasky++
                }
            }
        }
        if(text > nvtext){
            nvtext = text
        }

        console.log("obraceny text : " + obracenytext)

    }
    let procenta : number = (samohlasky / abeceda) * 100
    console.log("delka vsech textu je : " + delkatextu)
    console.log("pocet pismen zakladni us abecedy v textech je : " + abeceda)
    console.log("v textech je " + procenta + "% samohlasek")
    console.log("nejvetsi text podle lexikografickeho usporadani je : " + nvtext)
}





// ULOHA O5 - bonusova:
// V predchozich ulohach se MOHLY vyskytnout opakujici se kusy kodu. Pokuste se tato opakovani nahradit funkcemi, a v puvodnich
// mistech tyto funkce jen vyvolat. Teziste ukolu je najit duplikovana mista, vymyslet, jake bude funkce dostavat parametry, a jaky
// bude vydavat vysledek (a samozrejme spravne napsat implementaci)
