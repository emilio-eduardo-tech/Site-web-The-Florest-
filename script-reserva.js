document.addEventListener('DOMContentLoaded', function() {
  
    const form = document.getElementById('formReserva');
    
    const msgDiv = document.getElementById('mensagemConfirmacao');

    form.addEventListener('submit', function(e) {
        
        e.preventDefault(); 

        const mensagemSucesso = 'Reserva feita com sucesso! Estaremos te aguardando ansiosamente! ';

        msgDiv.innerHTML = `
            <p style="
                background-color: #e6ffe6; /* Fundo verde claro */
                color: #008000;          /* Texto verde escuro */
                padding: 15px;
                border: 1px solid #cce5cc;
                border-radius: 5px;
                font-weight: bold;
                font-size: 1.1em;
                margin-top: 10px;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            ">${mensagemSucesso}</p>
        `;
        
        form.reset();
    });
});