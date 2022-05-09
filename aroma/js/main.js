function register() {
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (name == "")
    alert("Введите Ваше имя!");
  else if (username == "")
    alert("Введите Ваш логин!");
  else if (password == "")
    alert("Введите пароль!");
  else if (confirmPassword == "")
    alert("Подтвердите пароль!");
  else if (password != confirmPassword)
    alert("Пароли не совпадают!");
  else {
    //handleSubmit(name, username, password);
    signup(name, username, password);
    alert("Добро пожаловать " + name + " !");
  }
};
function login() {
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (name == "")
    alert("Введите Ваше имя!");
  else if (username == "")
    alert("Введите Ваш логин!");
  else if (password == "")
    alert("Введите пароль!");
  else {
    //handleSubmit(name, username, password);
    signup(name, username, password);
    alert("Добро пожаловать " + name + " !");
  }
};
async function handleSubmit (name, username, password) {
  //...
  var data = {
    "name": name,
    "username": username,
    "password": password,
  };
  // Вызов API login
  const response = await fetch(`https://beautylab.herokuapp.com/api/auth/signup`, {
    method: 'POST',
    body: JSON.stringify({data})
  })
  //...
  // Извлечение из ответа JWT 
  const { jwt_token } = await response.json();
  alert (jwt_token);
  //...
  // Выполнение каких-либо действий с токеном в методе login
  //await login({ jwt_token })
}
function signup(name, username, password) {
  var xhr = new XMLHttpRequest();
  var data = {
    "name": name,
    "username": username,
    "password": password,
  };
  xhr.open(
    'POST',
    'https://beautylab.herokuapp.com/api/auth/signup',
    true
  )
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.send(JSON.stringify(data));
  const { jwt_token } = await response.json();
  alert (jwt_token);
  
  };


  $(function () {
    "use strict";

    //------- Parallax -------//
    skrollr.init({
      forceHeight: false
    });

    //------- Active Nice Select --------//
    $('select').niceSelect();

    //------- hero carousel -------//
    $(".hero-carousel").owlCarousel({
      items: 3,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 5000,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        810: {
          items: 3
        }
      }
    });

    //------- Best Seller Carousel -------//
    if ($('.owl-carousel').length > 0) {
      $('#bestSellerCarousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          900: {
            items: 3
          },
          1130: {
            items: 4
          }
        }
      })
    }

    //------- single product area carousel -------//
    $(".s_Product_carousel").owlCarousel({
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      loop: true,
      nav: false,
      dots: false
    });

    //------- mailchimp --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();

    //------- fixed navbar --------//  
    $(window).scroll(function () {
      var sticky = $('.header_area'),
        scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

    //------- Price Range slider -------//
    if (document.getElementById("price-range")) {

      var nonLinearSlider = document.getElementById('price-range');

      noUiSlider.create(nonLinearSlider, {
        connect: true,
        behaviour: 'tap',
        start: [500, 4000],
        range: {
          // Starting at 500, step the value by 500,
          // until 4000 is reached. From there, step by 1000.
          'min': [0],
          '10%': [500, 500],
          '50%': [4000, 1000],
          'max': [10000]
        }
      });


      var nodes = [
        document.getElementById('lower-value'), // 0
        document.getElementById('upper-value')  // 1
      ];

      // Display the slider value and how far the handle moved
      // from the left edge of the slider.
      nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
        nodes[handle].innerHTML = values[handle];
      });

    }

  });

