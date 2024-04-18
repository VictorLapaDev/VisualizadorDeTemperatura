//a1d450fb1c8426731ec5c9586f851bb9

    const obterTemp = () =>{
    
        var localizacao =  document.getElementById("local").value;

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`)
          .then(resposta =>{
            // console.log(resposta)
            return resposta.json()
          })
            .then(dados =>{
              console.log(dados)

              var temperatura = dados.main.temp;
              temperatura.toFixed(1);

              var tempShow = document.getElementById("temperatura");
              tempShow.innerText = `${temperatura}ºC`;

              var imagem = dados.weather[0].icon;
              document.getElementById("imagi").src= `https://openweathermap.org/img/wn/${imagem}@2x.png`;

              var mensagem = document.getElementById("menssagem");
              mensagem.innerText = `A temperatura em ${localizacao} é de`;
            })

            .catch(erro => {
              console.log(erro)
            })
      }

