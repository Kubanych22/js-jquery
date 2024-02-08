
$(".modal-order__form").submit(function(event) {
  event.preventDefault();
  // $.post("https://jsonplaceholder.typicode.com/todos", $(this).serialize())
  //   .then(function(data) {
  //     console.log("data: ", data);
  //     return data;
  //   })
  //   .then(function(request) {
  //     console.log("request: ", request);
  //   })
  //   .catch(function(err) {
  //     console.log(err.status + ' - ' + err.statusText);
  //   });
  
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text('Спасибо! Ваша заявка принята, номер заявки ' + data.id);
      // $(".modal-order__form").slideUp(300);
    },
    error() {
      modalOrderTitle.text('Что-то пошло не так. Попробуйте позже.');
    }
  })
});

$('.header__burger').on('click', function() {
  $('.navigation').animate({
    left: 0,
  }, 500, function() {
    $('.navigation__close').animate({
      opacity: 1,
    }, 300, 'swing')
  })
})

$('.navigation__close').on('click', function(event) {
  event.preventDefault();
  $('.navigation').animate({
    left: -400
  }, 700)
})

$('.present').on('click', function() {
  $('.navigation').animate({
    left: -400
  }, 700)
})

