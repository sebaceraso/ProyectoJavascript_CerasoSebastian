let jugador = 'X';

        for (let x = 1; x <= 9; x++) {
            document.getElementById('boton' + x).addEventListener('click', presion);
        }

        function presion(evt) {
            evt.target.value = jugador;
            if (jugador == 'X')
                jugador = 'O';
            else
                jugador = 'X';
            verificarGanador();
        }

        function verificarGanador() {
            let b1 = document.getElementById('boton1').value;
            let b2 = document.getElementById('boton2').value;
            let b3 = document.getElementById('boton3').value;
            let b4 = document.getElementById('boton4').value;
            let b5 = document.getElementById('boton5').value;
            let b6 = document.getElementById('boton6').value;
            let b7 = document.getElementById('boton7').value;
            let b8 = document.getElementById('boton8').value;
            let b9 = document.getElementById('boton9').value;

            if (b1 == 'X' && b2 == 'X' && b3 == 'X')
            swal("Gano la X", "Mas suerte para la proxima O", "success");
            if (b4 == 'X' && b5 == 'X' && b6 == 'X')
            swal("Gano la X", "Mas suerte para la proxima O", "success");
            if (b7 == 'X' && b8 == 'X' && b9 == 'X')
            swal("Gano la X", "Mas suerte para la proxima O", "success");
            if (b1 == 'X' && b4 == 'X' && b7 == 'X')
            swal("Gano la X", "Mas suerte para la proxima O", "success");
            if (b2 == 'X' && b5 == 'X' && b8 == 'X')
            swal("Gano la X", "Mas suerte para la proxima O", "success");
            if (b3 == 'X' && b6 == 'X' && b9 == 'X')
            swal("Gano la X", "Mas suerte para la proxima O", "success");
            if (b1 == 'X' && b5 == 'X' && b9 == 'X')
            swal("Gano la X", "Mas suerte para la proxima O", "success");
            if (b3 == 'X' && b5 == 'X' && b7 == 'X')
            swal("Gano la X", "Mas suerte para la proxima O", "success");

            if (b1 == 'O' && b2 == 'O' && b3 == 'O')
            swal("Gano la O", "Mas suerte para la proxima X", "success");
            if (b4 == 'O' && b5 == 'O' && b6 == 'O')
            swal("Gano la O", "Mas suerte para la proxima X", "success");
            if (b7 == 'O' && b8 == 'O' && b9 == 'O')
            swal("Gano la O", "Mas suerte para la proxima X", "success");
            if (b1 == 'O' && b4 == 'O' && b7 == 'O')
            swal("Gano la O", "Mas suerte para la proxima X", "success");
            if (b2 == 'O' && b5 == 'O' && b8 == 'O')
            swal("Gano la O", "Mas suerte para la proxima X", "success");
            if (b3 == 'O' && b6 == 'O' && b9 == 'O')
            swal("Gano la O", "Mas suerte para la proxima X", "success");
            if (b1 == 'O' && b5 == 'O' && b9 == 'O')
            swal("Gano la O", "Mas suerte para la proxima X", "success");
            if (b3 == 'O' && b5 == 'O' && b7 == 'O')
            swal("Gano la O", "Mas suerte para la proxima X", "success");
        }
        

        let resultado = localStorage.setItem ('resultado', alert);