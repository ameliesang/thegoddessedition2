let title = document.querySelector("#title")
let texte = document.querySelector("#texte");
let darkmode = document.querySelector("#DarkMode");
let lightmode = document.querySelector("#LightMode");

darkmode.addEventListener("click", function() {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
});


lightmode.addEventListener("click", function() {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
});

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les onglets (li)
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    // Ajouter un événement click à chaque onglet
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 1. Retirer la classe 'tab-active' de tous les onglets
            tabs.forEach(t => t.classList.remove('tab-active'));

            // 2. Retirer la classe 'active' de tous les contenus
            const contents=document.querySelectorAll('.content')
            contents.forEach(content => content.classList.remove('active'));

            // 3. Ajouter la classe 'tab-active' à l'onglet cliqué
            this.classList.add('tab-active');

            // 4. Vérifier si l'onglet cliqué contient une classe spécifique et afficher le contenu correspondant
            if (this.classList.contains('tab-home')) {
                document.querySelector('.home').classList.add('active');
            } else if (this.classList.contains('tab-music.collection')) {
                document.querySelector('.music.collection').classList.add('active');
            }else if (this.classList.contains('tab-Linktree')) {
                document.querySelector('.Linktree').classList.add('active');
            }

         });
    });
});

let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envoie du form détécté !')
});

form.addEventListener('submit',function(event) {
    event.preventDefault();

    let email = document.querySelector('#email')

    if (email.value== '') {
        console.log("invalid")
    } else {
        console.log ('valid')
    } 
})

if (email.value == ''){
    console.log("invalid")
    } else {
    email.classList.add ('success')
}

let pseudo = document.querySelector ('#pseudo')

