const form = document.getElementById('form');
      const username = document.getElementById('username');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const passwordconfirmation = document.getElementById('password-confirmation');
      const select = document.getElementById("tipoPessoa");
      const campoCpf = document.getElementById("campoCpf");
      const campoCnpj = document.getElementById("campoCnpj");
      const cnpj = document.getElementById("cnpj");

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkinputs();
      })

      function checkinputs() {
        const usernameValue = username.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        const passwordconfirmationValue = passwordconfirmation.value;
        const cnpjValue = cnpj.value;

        if (usernameValue === '') {
          setErrorFor(username, 'campo obrigatório');
        } else {
          setSuccessFor(username);
        }

        if (emailValue === '') {
          setErrorFor(email, 'campo obrigatório');
        }
        else if (!checkEmail(emailValue)) {
          setErrorFor(email, 'email inválido');
        } else { 
          setSuccessFor(email); 
        }

        if (passwordValue === '') {
          setErrorFor(password, 'campo obrigatório');
        }
        else if (passwordValue.length < 8) {
          setErrorFor(password, 'mínimo oito caracteres');
        } else { 
          setSuccessFor(password) 
        }

        if (passwordconfirmationValue === '') {
          setErrorFor(passwordconfirmation, 'campo obrigatório');
        }
        else if (passwordconfirmationValue !== passwordValue) {
          setErrorFor(passwordconfirmation, 'senhas não conferem');
        } else { 
          setSuccessFor(passwordconfirmation); 
        }

        
        if (select.value === "pj") { 
          if (cnpjValue === "") {
            setErrorFor(cnpj, "campo obrigatório");
          } else if (!/^[0-9]{14}$/.test(cnpjValue)) {
            setErrorFor(cnpj, "CNPJ deve conter 14 dígitos");
          } else {
            setSuccessFor(cnpj);
          }
        }
      }

      function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = message;
        formControl.className = 'form-control error';
      }

      function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
      }

      function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
         }
