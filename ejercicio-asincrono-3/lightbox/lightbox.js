'use strict'

const enlaces  = document.querySelectorAll('.marco .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('.cerrar')

enlaces.forEach(( Enlacess , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let urls = Enlacess.querySelector('.img').src
        console.log( urls ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', urls)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})