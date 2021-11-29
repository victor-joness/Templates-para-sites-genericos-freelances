
    // Usa o debounce da biblioteca lodash, para evitar excessivos disparos da função ao scroll. Assim a função só vai disparar a cada 200ms, o tempo é informado ao final da função.
    $(window).on('scroll', _.debounce(function() {
  
        // Seleciona a navegação
        // Identifica o tamanho total do menu
        // Verifica a distância entre o scroll e o topo
        var $nav = $('nav'),
            navHeight = $nav.outerHeight(),
            windowTop = $(this).scrollTop();
        
        // Verifica quando a distância do scroll for maior que o tamanho total do menu
        if (windowTop > navHeight) {
          // Adiciona a classe small ao menu
          $nav.addClass('small');
          $('nav > a > img').addClass('logosmall'); 
          $('nav > div').addClass('smallmobile-menu');        
          // Trocar imagem        
          $('nav > a > img').attr({ src: './img/logo_header.png' });
          $('#contraste').attr({ src: './img/contraste.png' });
          $('#fontplus').attr({ src: './img/a+.png' });
          $('#fontless').attr({ src: './img/a-.png' });                     
        } else {
          // Remove a classe small do menu
          $nav.removeClass('small');        
          $('nav > a > img').removeClass('logosmall');        
          $('nav > div').removeClass('smallmobile-menu');  
          // Coloca o nome inteiro da empresa novamente        
          $('nav > a > img').attr({ src: './img/logotrans.png' });
          $('#contraste').attr({ src: './img/contraste-black.png' });
          $('#fontplus').attr({ src: './img/a+black.png' });
          $('#fontless').attr({ src: './img/a-black.png' });
        }
        
      }, 200));
  
      