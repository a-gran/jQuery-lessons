/*

let test = $('#test').html()
console.log(test)

*/

/*
let first = $('div.first')
for (let i = 0; i < first.length; i++) {
    first.get(i).style.color = 'red'
    first.get(i).style.fontWeight = 'bold'
  }

setTimeout(" $('p.first').get(0).style.color = 'green' ", 2000)
*/

/*
let divs = $('div')
console.log(divs.length)
*/

/*
let img = $('img[title = small]')
img.hide()
*/

/*
let link = $('#menu li a:first')
console.log(link.html())
*/

/*
let linkNew = $('#menu li a:eq(2)')
console.log('linkNew', linkNew.html())
*/

function valid() {
  let state = $("input[name='gender']:checked").val()
  if(!state) {
    return $('#message').html('<b>Укажите Ваш пол!</b><br>')    
  } else if (state == 'male') {
    $('.foto-male').show()
    return $('#message').html('Выбран мужской пол!')    
  } else if (state == 'female') {
    $('.foto-female').show()
    return $('#message').html('Выбран женский пол!')  
  }
}