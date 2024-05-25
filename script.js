function validarForm() {
    var senha = document.getElementById('senha').value;
    var repetirSenha = document.getElementById('repetirSenha').value;
    if (senha !== repetirSenha) {
      document.getElementById('senhaMismatch').classList.remove('hidden');
      document.getElementById('senha').value = ''; // Limpa o campo senha
      document.getElementById('repetirSenha').value = ''; // Limpa o campo repetirSenha
      return false;
    }
    return true;
  }
  
  function fecharAviso() {
    document.getElementById('senhaMismatch').classList.add('hidden');
    document.getElementById('senha').value = ''; // Limpa o campo senha
    document.getElementById('repetirSenha').value = ''; // Limpa o campo repetirSenha
  }
  