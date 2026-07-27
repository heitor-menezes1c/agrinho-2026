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
const stars = document.querySelectorAll('.star');
const form = document.getElementById('feedbackForm');
const thankYouMessage = document.getElementById('thankYouMessage');
let selectedRating = 0;

// Gerencia as interações de clique e hover nas estrelas
stars.forEach((star) => {
    // Seleciona a nota ao clicar
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value'));
        updateStars(selectedRating);
    });

    // Destaque visual ao passar o mouse
    star.addEventListener('mouseover', () => {
        const hoverValue = parseInt(star.getAttribute('data-value'));
        updateStars(hoverValue);
    });

    // Restaura a seleção quando o mouse sai
    star.addEventListener('mouseout', () => {
        updateStars(selectedRating);
    });
});

// Atualiza a classe visual das estrelas
function updateStars(rating) {
    stars.forEach((star) => {
        const value = parseInt(star.getAttribute('data-value'));
        if (value <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Manipulação do envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validação: exige ao menos uma estrela
    if (selectedRating === 0) {
        alert('Por favor, selecione uma quantidade de estrelas para avaliar.');
        return;
    }

    const comment = document.getElementById('comment').value;

    // Objeto contendo os dados prontos para serem enviados ao backend
    const feedbackData = {
        rating: selectedRating,
        comment: comment
    };

    console.log('Dados da Avaliação:', feedbackData);

    // Oculta o formulário e mostra a mensagem de agradecimento
    form.style.display = 'none';
    thankYouMessage.classList.remove('hidden');
});