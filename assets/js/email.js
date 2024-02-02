function delaySubmit() {
    setTimeout(function() {
      document.getElementById('myForm').submit();
      window.location.href = 'http://127.0.0.1:5501/index.html';
    }, 4000); // Delay de 3 segundos
    
  }

function verificatabela(){


    
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;


if(name === "" || email === "" || message === ""){

    const Toast = Swal.mixin({ 
        toast: true, 
        customClass : {
        popup: 'custom-toast'
        },
        position: "top-start", 
        showConfirmButton: false, 
        timer: 3500, 
        timerProgressBar: false, 
        didOpen: (toast) => { 
        toast.onmouseenter = Swal.stopTimer; 
        toast.onmouseleave = Swal.resumeTimer; 
        
        } 
        }); 
        Toast.fire({ 
            
        icon: "warning", 
        title: "Por favor, preencha todos os campos.",
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
          },
        color: "white", 
        iconColor: "white", 
        
        
        }); 

}else{
    const Toast = Swal.mixin({ 
        toast: true, 
        customClass : {
        popup: 'custom-toast'
        },
        position: "top-start", 
        showConfirmButton: false, 
        timer: 3500, 
        timerProgressBar: false, 
        didOpen: (toast) => { 
        toast.onmouseenter = Swal.stopTimer; 
        toast.onmouseleave = Swal.resumeTimer; 
        
        } 
        }); 
        Toast.fire({ 
            
        icon: "success", 
        title: "Seu e-mail foi enviado!\nTe responderemos em breve.",
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
          },
        color: "white", 
        iconColor: "white", 
        
        }); 
}

}



