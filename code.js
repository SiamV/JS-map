const users = [{
    "id": 1,
    "first_name": "Nobe",
    "last_name": "Sagar",
    "email": "nsagar0@spiegel.de",
    "gender": "Male",
    "car": "Nitro"
}, {
    "id": 2,
    "first_name": "Lilli",
    "last_name": "Browne",
    "email": "lbrowne1@toplist.cz",
    "gender": "Female",
    "car": "E-Class"
}, {
    "id": 3,
    "first_name": "Burnaby",
    "last_name": "Crosson",
    "email": "bcrosson2@army.mil",
    "gender": "Male",
    "car": "W201"
}, {
    "id": 4,
    "first_name": "Page",
    "last_name": "Puckring",
    "email": "ppuckring3@seattletimes.com",
    "gender": "Male",
    "car": "Ram 1500 Club"
}, {
    "id": 5,
    "first_name": "Mattias",
    "last_name": "Noddles",
    "email": "mnoddles4@wunderground.com",
    "gender": "Male",
    "car": "F450"
}, {
    "id": 6,
    "first_name": "Honoria",
    "last_name": "Jackson",
    "email": "hjackson5@w3.org",
    "gender": "Female",
    "car": "Cabriolet"
}, {
    "id": 7,
    "first_name": "Wendy",
    "last_name": "Gilstoun",
    "email": "wgilstoun6@businesswire.com",
    "gender": "Female",
    "car": "MX-6"
}, {
    "id": 8,
    "first_name": "Shanon",
    "last_name": "Bellwood",
    "email": "sbellwood7@desdev.cn",
    "gender": "Female",
    "car": "Sephia"
}, {
    "id": 9,
    "first_name": "Carlin",
    "last_name": "Molyneux",
    "email": "cmolyneux8@sciencedirect.com",
    "gender": "Male",
    "car": "Safari"
}, {
    "id": 10,
    "first_name": "Elonore",
    "last_name": "Ding",
    "email": "eding9@about.me",
    "gender": "Female",
    "car": "Impreza WRX"
}, {
    "id": 11,
    "first_name": "Daryl",
    "last_name": "Ebbins",
    "email": "debbinsa@dagondesign.com",
    "gender": "Female",
    "car": "Grand Vitara"
}, {
    "id": 12,
    "first_name": "Gale",
    "last_name": "Westall",
    "email": "gwestallb@globo.com",
    "gender": "Female",
    "car": "Rendezvous"
}, {
    "id": 13,
    "first_name": "Rainer",
    "last_name": "McKintosh",
    "email": "rmckintoshc@wikipedia.org",
    "gender": "Male",
    "car": "Fiesta"
}, {
    "id": 14,
    "first_name": "Rriocard",
    "last_name": "Margaritelli",
    "email": "rmargaritellid@cargocollective.com",
    "gender": "Male",
    "car": "G-Series G30"
}, {
    "id": 15,
    "first_name": "Carey",
    "last_name": "Tamsett",
    "email": "ctamsette@miibeian.gov.cn",
    "gender": "Male",
    "car": "Sportvan G30"
}, {
    "id": 16,
    "first_name": "Vivyanne",
    "last_name": "Heggadon",
    "email": "vheggadonf@time.com",
    "gender": "Female",
    "car": "NX"
}, {
    "id": 17,
    "first_name": "Ramsay",
    "last_name": "Saffon",
    "email": "rsaffong@auda.org.au",
    "gender": "Male",
    "car": "Xterra"
}, {
    "id": 18,
    "first_name": "Aviva",
    "last_name": "Mc Gaughey",
    "email": "amcgaugheyh@comcast.net",
    "gender": "Female",
    "car": "Montero"
}, {
    "id": 19,
    "first_name": "Orran",
    "last_name": "Ossenna",
    "email": "oossennai@macromedia.com",
    "gender": "Male",
    "car": "Brat"
}, {
    "id": 20,
    "first_name": "Town",
    "last_name": "Bellis",
    "email": "tbellisj@123-reg.co.uk",
    "gender": "Male",
    "car": "Galant"
}]

let ShowUsers = document.getElementById('users')
ShowUsers.innerHTML = JSON.stringify(users);

//Create users array by id and firstName
let buttonIdFirstName = document.getElementById('buttonIdFirstName')
let div1 = document.getElementById("div1")
addNewArrayDiv1 = () => {
    div1.innerHTML = users.map((item,index,array) => ` ${item.id}:${item.first_name}`)
}
buttonIdFirstName.addEventListener('click', addNewArrayDiv1)

//Create users array by email
let buttonEmail = document.getElementById('buttonEmail')
let div2 = document.getElementById("div2")
addNewArrayDiv2 = () => {
    div2.innerHTML = users.map((item) => ` ${item.email}`)
}
buttonEmail.addEventListener('click', addNewArrayDiv2)