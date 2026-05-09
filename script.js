function mudarStatus(tipo){

  const area = document.getElementById('statusArea');
  const titulo = document.getElementById('statusTitulo');
  const texto = document.getElementById('statusTexto');
  const icone = document.getElementById('iconeStatus');
  const site = document.getElementById('siteNome');

  area.className = 'status-area ' + tipo;

  if(tipo === 'seguro'){

    site.innerText = 'google.com';

    titulo.innerText = 'SITE SEGURO';

    texto.innerText = 'Nenhuma ameaça detectada.';

    icone.innerText = '✔';
  }

  if(tipo === 'suspeito'){

    site.innerText = 'promo-imperdivel.net';

    titulo.innerText = 'SITE SUSPEITO';

    texto.innerText = 'Este site apresenta comportamento suspeito.';

    icone.innerText = '!';
  }

  if(tipo === 'perigoso'){

    site.innerText = 'freepix-premio.xyz';

    titulo.innerText = 'SITE PERIGOSO';

    texto.innerText = 'Possível tentativa de phishing detectada.';

    icone.innerText = '✖';
  }
}

function analisarURL(){

  const input = document.getElementById('inputAnalise').value.toLowerCase();

  const resultado = document.getElementById('resultadoAnalise');

  resultado.className = 'resultado-analise';

  resultado.innerHTML = 'Analisando segurança...';

  setTimeout(() => {

    if(
      input.includes('google') ||
      input.includes('github') ||
      input.includes('microsoft')
    ){

      resultado.classList.add('resultado-seguro');

      resultado.innerHTML = '🟢 Site seguro detectado';
    }

    else if(
      input.includes('promo') ||
      input.includes('free') ||
      input.includes('bonus')
    ){

      resultado.classList.add('resultado-suspeito');

      resultado.innerHTML = '🟡 Site suspeito encontrado';
    }

    else{

      resultado.classList.add('resultado-perigoso');

      resultado.innerHTML = '🔴 Site perigoso detectado';
    }

  }, 1500);
}
