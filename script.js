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
const ratingText = document.getElementById('ratingText');
const submitBtn = document.getElementById('submitBtn');
const commentBox = document.getElementById('commentBox');
const confirmationMsg = document.getElementById('confirmationMsg');

let currentRating = 0;

// Descrição visual de cada nota
const labels = {
    1: 'Péssimo 😞',
    2: 'Ruim 🙁',
    3: 'Razoável 😐',
    4: 'Muito Bom 🙂',
    5: 'Excelente! 😄'
};

// Eventos nas Estrelas
stars.forEach((star) => {
    // Clique para fixar a nota
    star.addEventListener('click', () => {
        currentRating = parseInt(star.getAttribute('data-value'));
        highlightStars(currentRating);
        ratingText.textContent = labels[currentRating];
    });

    // Hover (passar o mouse por cima)
    star.addEventListener('mouseover', () => {
        const hoverValue = parseInt(star.getAttribute('data-value'));
        highlightStars(hoverValue);
        ratingText.textContent = labels[hoverValue];
    });

    // Ao tirar o mouse, volta para a nota selecionada
    star.addEventListener('mouseout', () => {
        highlightStars(currentRating);
        ratingText.textContent = currentRating ? labels[currentRating] : 'Selecione uma nota';
    });
});

// Altera o estado visual das estrelas
function highlightStars(value) {
    stars.forEach((star) => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Envio da avaliação
submitBtn.addEventListener('click', () => {
    if (currentRating === 0) {
        alert('Por favor, selecione ao menos uma estrela antes de enviar.');
        return;
    }

    const payload = {
        rating: currentRating,
        comment: commentBox.value.trim(),
        date: new Date().toISOString()
    };

    console.log('Dados prontos para envio:', payload);

    // Oculta os campos e exibe a mensagem de confirmação
    commentBox.style.display = 'none';
    submitBtn.style.display = 'none';
    ratingText.style.display = 'none';
    confirmationMsg.classList.remove('hidden');
});