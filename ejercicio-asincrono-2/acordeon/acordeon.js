'use strict'

const seccion    = document.querySelectorAll('.seccion')
const h2        = document.querySelectorAll('.h2')

h2.forEach( ( cadaH2 , i )=>{
    h2[i].addEventListener('click', ()=>{

        seccion.forEach( ( cadaSeccion , i )=>{
            seccion[i].classList.remove('activo')
        })
        seccion[i].classList.add('activo')
    })
})