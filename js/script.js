// TODO| Descrizione:
// TODO| Partendo dal markup in allegato, rifare lo slider usando Vuejs.
// TODO| Bonus:
// TODO| 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// TODO| 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// TODO| 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Vue.config.devtools = true

var app= new Vue(
    {
        el: '#root',
        data: {
              currentActiveElement: 0,
              slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
        },
    // ! inizio methods    
       methods: {
        showNextElement() {
            if(this.currentActiveElement < this.slides.length - 1){
                this.currentActiveElement ++;
            }else{
                this.currentActiveElement = 0;
            }
        },
        showPreviousElement() {
            if(this.currentActiveElement > 0) {
                this.currentActiveElement--;
            }else{
                this.currentActiveElement = this.slides.length - 1;
            }
        }
      // ! fine methods  
       }
    }
)

