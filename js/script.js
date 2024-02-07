const present = $(".present__title");

const elem = $(".navigation__city");

// present.click(function (event) {
//   $(this).toggleClass('present__title_active red');
// });
//
// present.dblclick(function (event) {
//   $(this).toggleClass('red');
// });

const modalBtn = $(".present__modal_order");
const modalClose = $(".modal-order__close");
const modalOrder = $(".modal-order");

modalBtn.on("click", function () {
  modalOrder.show(500);
});

modalClose.on("click", function () {
  modalOrder.hide(500);
});

const modalOrderInput = $(".modal-order__input");
const modalOrderTitle = $(".modal-order__title");
const modalOrderWrapper = $(".modal-order__wrapper");

modalOrderInput.focus(function () {
  modalOrderTitle.text(`Введите ${$(this).attr("placeholder").toLowerCase()}`);
});

$(".modal-order__input_tel").focus(function () {
  modalOrderTitle.text(`Введите ${$(this).attr("placeholder").toLowerCase()}`);
});
$(".modal-order__input_email").focus(function () {
  modalOrderTitle.text(
    `Введите ${$(this).attr("placeholder").toLowerCase().slice(0, -1)}`,
  );
});

modalOrderInput.blur(function () {
  modalOrderTitle.text("Заполните форму");
});

// modalOrderInput.keydown(function (event) {
//   console.log(event.type);
// })
// modalOrderInput.keypress(function (event) {
//   console.log(event.type);
// })
// modalOrderInput.keyup(function (event) {
//   console.log(event.type);
// })
//
//
// modalOrderWrapper.mousedown(function (event) {
//   console.log(event.type);
// })
// modalOrderWrapper.mouseup(function (event) {
//   console.log(event.type);
// })
// modalOrderWrapper.mousemove(function (event) {
//   console.log(event.type);
// })
// modalOrderWrapper.mouseleave(function (event) {
//   console.log(event.type);
// })
// modalOrderWrapper.mouseover(function (event) {
//   console.log(event.type);
// })
// modalOrderWrapper.mouseout(function (event) {
//   console.log(event.type);
// })

// $('.what-building__text').on('click', '.what-building__item', function () {
//   console.log($(this));
// })

// const div = $(`
//   <div class="hello-world">
//   <h1 class="title">Привет, Мир!</h1>
//   </div>
// `);

// const div = $(`<div>`);
// div.html(`
//   <div class="hello-world">
//     <h1 class="title">Привет, Мир!</h1>
//   </div>
// `)

// div.html(`
//     <h2 class="title">Привет, друзья!</h2>
// `)
// div.text('Привет, Мир!');
// div.addClass('hello-world');
// $('body').append(div);
//
// div.css('padding', '40px')
// div.css('margin', '20px')
// div.css('border', '3px solid black')
// div.innerHeight()
//
// console.log(div.outerHeight(true));
// console.log(div.outerHeight());
// console.log(div.innerHeight());
// console.log(div.height());

// $('.title').remove()

// const foo = function () {
//   $(this).animate({
//     height: '30px',
//   }, 1000, function () {
//     alert('Animation ended')
//   });
// }

// const bar = function () {
//   $(this).fadeToggle(1000);
// }

// $('.what-building__text').on('click', foo);
// $('.what-building__text').on('click', bar);

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

