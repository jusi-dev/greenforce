import Glide from './glide.esm.js'

new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 4000,
    animationDuration: 600,
    hoverpause: false
}).mount();