function modoEscuro(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema","escuro");
    }else{
        localStorage.setItem("tema","claro");
    }

}

window.onload = function(){

    if(localStorage.getItem("tema") == "escuro"){
        document.body.classList.add("dark");
    }

}
// Estado inicial das contagens e da escolha do usuário
let likes = 0;
let dislikes = 0;
let userChoice = null; // Pode ser 'like', 'dislike' ou null

// Seleção dos elementos do DOM
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const likeCount = document.getElementById('likeCount');
const dislikeCount = document.getElementById('dislikeCount');

// Ação do botão Like
likeBtn.addEventListener('click', () => {
    if (userChoice === 'like') {
        // Se já deu like, cancela a ação
        likes--;
        userChoice = null;
        likeBtn.classList.remove('active-like');
    } else {
        if (userChoice === 'dislike') {
            // Se já tinha dado dislike, remove o dislike primeiro
            dislikes--;
            dislikeBtn.classList.remove('active-dislike');
        }
        // Aplica o novo like
        likes++;
        userChoice = 'like';
        likeBtn.classList.add('active-like');
    }
    updateUI();
});

// Ação do botão Dislike
dislikeBtn.addEventListener('click', () => {
    if (userChoice === 'dislike') {
        // Se já deu dislike, cancela a ação
        dislikes--;
        userChoice = null;
        dislikeBtn.classList.remove('active-dislike');
    } else {
        if (userChoice === 'like') {
            // Se já tinha dado like, remove o like primeiro
            likes--;
            likeBtn.classList.remove('active-like');
        }
        // Aplica o novo dislike
        dislikes++;
        userChoice = 'dislike';
        dislikeBtn.classList.add('active-dislike');
    }
    updateUI();
});

// Função para atualizar os valores exibidos na tela
function updateUI() {
    likeCount.textContent = likes;
    dislikeCount.textContent = dislikes;
};