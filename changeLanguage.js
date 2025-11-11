let language = "Russian"

function changeLanguage() {
    switch (language) {
        case "Russian": {
            language = "English"
            document.querySelector('#pas p:nth-child(1)').textContent = 'UMVD OF RUSSIA'
            document.querySelector('#pas p:nth-child(2)').textContent = 'FOR REGION AREA'
            document.querySelector('#pas p:nth-child(4)').textContent = 'OGANISIAN'
            document.querySelector('#pas p:nth-child(5)').textContent = 'GRIZELDA'
            document.querySelector('#pas p:nth-child(6)').textContent = 'SURENOVNA'
            document.querySelector('#pas p:nth-child(8)').textContent = 'CITY LAST'
            break
        } case "English": {
            language = "Russian"
            document.querySelector('#pas p:nth-child(1)').textContent = 'УМВД РОССИИ'
            document.querySelector('#pas p:nth-child(2)').textContent = 'ПО ОБЛАСТНОМУ КРАЮ'
            document.querySelector('#pas p:nth-child(4)').textContent = 'ОГАНИСЯН'
            document.querySelector('#pas p:nth-child(5)').textContent = 'ГРИЗЕЛЬДА'
            document.querySelector('#pas p:nth-child(6)').textContent = 'СУРЕНОВНА'
            document.querySelector('#pas p:nth-child(8)').textContent = 'Г.КРАЙНИЙ'
            break
        }
    }
}

