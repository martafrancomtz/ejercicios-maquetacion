'use strict'

const li        = document.querySelectorAll('.boton')
const bloque    = document.querySelectorAll('.bloque')

li.forEach( ( Lis , i )=>{
    li[i].addEventListener('click',()=>{

        li.forEach( ( Lis , i )=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})