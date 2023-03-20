console.log('funguju!');
/*Využijte funkci setTimeout ke splnění následujících úkolů.

Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.
Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. 
Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.*/

/*puvodni spatne const alarm = () => {
document.querySelector('.alarm')
return alarm.classList.add("alarm--ring")
}*/

const zvuk = document.querySelector('#zvuk')

const spustRing = () => {
    zvuk.play()
}

const alarm = document.querySelector('.alarm')
const ring = () => {
    alarm.classList.add('alarm--ring')
    spustRing()

}

const pocetVterinMinutka = prompt('Zadej počet vteřin: ')

const zvoneni = setTimeout(ring, pocetVterinMinutka)

const button = document.querySelector('.button')

const cancel = () => {
    clearTimeout(zvoneni)
}
button.addEventListener('click', cancel)



/*původní nefungovalo const dismissTimer = () => {
    clearTimeout(zvoneni)
}
const button = document.querySelector('.button')


const tlacitkoNezvon = () => {
button.addEventListener('click', dismissTimer)
}*/