
    const btn = document.querySelector('#btn');

    btn.addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:3000/usuarios');

            if (response.ok) {
                const usuarios = await response.json();
                const inputEmail = document.querySelector('#email').value;
                const inputPassword = document.querySelector('#password').value;

                const usuarioEncontrado = usuarios.find(usuario => usuario.email === inputEmail);

                if (usuarioEncontrado && usuarioEncontrado.password === inputPassword) {
                    // Inicio de sesión exitoso, redirigir al usuario
                    
                    window.location.href = '../../index.html';

                    // Almacenar el nombre del usuario en el almacenamiento local
                    localStorage.setItem('nombreUsuario', usuarioEncontrado.nombre);
                } else {
                    // Mostrar mensaje de error
                    console.log('Nombre de usuario o contraseña incorrectos.');
                }
            } else {
                // Manejar errores de red
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            // Capturar y manejar errores generales
            console.error('There has been a problem with your fetch operation:', error);
        }
    });



