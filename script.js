
function modoEscuro() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}


if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark");
}


document.addEventListener("DOMContentLoaded", () => {
    
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('ratingText');
    const submitBtn = document.getElementById('submitBtn');
    const commentBox = document.getElementById('commentBox');
    const confirmationMsg = document.getElementById('confirmationMsg');

    let currentRating = 0;

    
    const labels = {
        1: 'Péssimo 😞',
        2: 'Ruim 🙁',
        3: 'Razoável 😐',
        4: 'Muito Bom 🙂',
        5: 'Excelente! 😄'
    };

    
    stars.forEach((star) => {
        
        star.addEventListener('click', () => {
            currentRating = parseInt(star.getAttribute('data-value'));
            highlightStars(currentRating);
            ratingText.textContent = labels[currentRating];
        });

        
        star.addEventListener('mouseover', () => {
            const hoverValue = parseInt(star.getAttribute('data-value'));
            highlightStars(hoverValue);
            ratingText.textContent = labels[hoverValue];
        });

        
        star.addEventListener('mouseout', () => {
            highlightStars(currentRating);
            ratingText.textContent = currentRating ? labels[currentRating] : 'Selecione uma nota';
        });
    });

    
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
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            if (currentRating === 0) {
                alert('Por favor, selecione ao menos uma estrela antes de enviar.');
                return;
            }

            const payload = {
                rating: currentRating,
                comment: commentBox ? commentBox.value.trim() : '',
                date: new Date().toISOString()
            };

            console.log('Dados prontos para envio:', payload);

            
            if (commentBox) commentBox.style.display = 'none';
            if (submitBtn) submitBtn.style.display = 'none';
            if (ratingText) ratingText.style.display = 'none';
            if (confirmationMsg) confirmationMsg.classList.remove('hidden');
        });
    }
});