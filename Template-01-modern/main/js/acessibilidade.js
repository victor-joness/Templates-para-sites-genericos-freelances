(function () {
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.onload = function(){
        const body = document.body;
        if(body.className === 'body contrast'){
            $('#logo').attr({ src: './img/logo_empresa.png' });
            $('#contraste').attr({ src: './img/contraste.png' });
            $('#fontplus').attr({ src: './img/a+.png' });
            $('#fontless').attr({ src: './img/a-.png' });
            click = !click;
        }
    }

    window.onbeforeunload = function(){
        localStorage.setItem("contrastState", "false");
    }

    window.toggleContrast = function () {
        Contrast.toogle();
    };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
        trocaimg();
    }

    

})();

click = true;
function trocaimg(){
        click = !click;
      if (!click) {
        $('#logo').attr({ src: './img/logo_empresa.png' });
        $('#contraste').attr({ src: './img/contraste.png' }); 
        $('#fontplus').attr({ src: './img/a+.png' });
        $('#fontless').attr({ src: './img/a-.png' });
        
    } else {
          $('#logo').attr({ src: './img/logo_empresa.png' });
          $('#contraste').attr({ src: './img/contraste-black.png' }); 
          $('#fontplus').attr({ src: './img/a+black.png' });
          $('#fontless').attr({ src: './img/a-black.png' });
      }
}
    