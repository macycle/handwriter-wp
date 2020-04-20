console.log('hello')



import $ from 'jquery'

import './css/index.css'

$(function(){
    $('li:odd').css('background','red')
    $('li:even').css('background','yellow')
})