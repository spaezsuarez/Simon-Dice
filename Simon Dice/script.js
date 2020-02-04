const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");

const botonStart = document.getElementById("btnEmpezar");

const ultimoNivel = 4;

class Juego {

    constructor() {
        this.inicializar();
        this.generarSecuencia();
        this.nextLevel();

    }

    inicializar() {
        this.toggleBtn();
        this.nivel = 1;
        this.subnivel = 0;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        };
    }

    toggleBtn() {
        if (botonStart.classList.contains('hide')) {
            botonStart.classList.remove('hide');
        } else {
            botonStart.classList.add('hide');
        }
    }

    generarSecuencia() {

        this.secuencia = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];

    }

    changeColor(num) {
        switch (num) {
            case 0:
                return 'celeste';

            case 1:
                return 'violeta';

            case 2:
                return 'naranja';

            case 3:
                return 'verde';

        }

    }

    changeNumber(color) {

        switch (color) {
            case 'celeste':
                return 0;

            case 'naranja':
                return 2;

            case 'violeta':
                return 1;

            case 'verde':
                return 3;

        }

    }

    apagarColor(color) {
        this.colores[color].classList.remove('ligth');
    }

    eliminarListeners() {
        this.colores.celeste.removeEventListener("click", this.elegirColor.bind(this));
        this.colores.naranja.removeEventListener("click", this.elegirColor.bind(this));
        this.colores.violeta.removeEventListener("click", this.elegirColor.bind(this));
        this.colores.verde.removeEventListener("click", this.elegirColor.bind(this));
    }

    elegirColor(event) {

        let nombreColor = event.target.dataset.color;
        const numeroColor = this.changeNumber(nombreColor);
        this.iluminarColores(nombreColor);

        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel += 1;

            if (this.subnivel === this.nivel) {
                this.nivel += 1;

                if (this.nivel === (ultimoNivel + 1)) {
                    this.gano();
                } //Comentario random
                else {
                    setTimeout(() => { this.nextLevel() }, 2000);

                }
                this.eliminarListeners();
            }

        } //Comentario random
        else {

        }



    }

    agregarListeners() {
        this.colores.celeste.addEventListener("click", this.elegirColor.bind(this));
        this.colores.naranja.addEventListener("click", this.elegirColor.bind(this));
        this.colores.violeta.addEventListener("click", this.elegirColor.bind(this));
        this.colores.verde.addEventListener("click", this.elegirColor.bind(this));
    }

    iluminarColores(color) {
        this.colores[color].classList.add('ligth');
        setTimeout(() => {
            this.apagarColor(color)
        }, 250);
    }

    eliminarColores(color) {
        this.colores[color].classList.remove('ligth');
    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            let color = this.changeColor(this.secuencia[i]);
            setTimeout(() => { this.iluminarColores(color) }, 500 * i);

        }


    }

    nextLevel() {
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarListeners();
    }



    gano() {
        swal("Felicidades ", "Ganaste", "success").
        then(() => {
            this.eliminarListeners()
            this.inicializar()
        });
    }

    perdio() {
        swal("Lo sentimos", "Perdiste", "error").
        then(() => {
            this.eliminarListeners()
            this.inicializar();

        });
    }
}

function emepezarJuego() {
    window.juego = new Juego();
}


botonStart.addEventListener("click", emepezarJuego);