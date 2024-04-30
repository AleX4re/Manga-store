const stars = document.querySelectorAll('.star-rating__star');
    stars.forEach(star => {
      star.addEventListener('mouseover', e => {
        const rating = e.target.dataset.rating;
        stars.forEach(s => {
          if (parseInt(s.dataset.rating) <= parseInt(rating)) {
            s.classList.add('star-rating__star--active');
          } else {
            s.classList.remove('star-rating__star--active');
          }
        });
      });
      star.addEventListener('click', e => {
        stars.forEach(s => {
          if (parseInt(s.dataset.rating) <= parseInt(rating)) {
            s.classList.add('star-rating__star--active');
          }
        });
      });
    });

    //корзина 

    const products = document.querySelectorAll('.product');
    const cartItems = document.querySelector('.cart__items');
    const cartTotal = document.querySelector('.cart__total');

    products.forEach(product => {
      product.addEventListener('click', () => {
        const id = product.getAttribute('data-id');
        const price = +product.getAttribute('data-price');

        addItemToCart(id, price);
      });
    });

    function addItemToCart(id, price) {
      const item = document.createElement('li');
      item.classList.add('cart__item');
      item.setAttribute('data-id', id);

      const itemName = document.createElement('span');
      itemName.classList.add('cart__item-name');
      itemName.textContent = `Товар ${id}`;

      const itemPrice = document.createElement('span');
      itemPrice.classList.add('cart__item-price');
      itemPrice.textContent = `${price} ₽`;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', () => {
        removeItemFromCart(id);
      });

      item.appendChild(itemName);
      item.appendChild(itemPrice);
      item.appendChild(deleteButton);

      cartItems.appendChild(item);

      updateCartTotal();
    }

    function removeItemFromCart(id) {
      const item = document.querySelector(`.cart__item[data-id="${id}"]`);
      cartItems.removeChild(item);

      updateCartTotal();
    }

    function updateCartTotal() {
      const items = document.querySelectorAll('.cart__item');
      let total = 0;

      items.forEach(item => {
        const price = +item.querySelector('.cart__item-price').textContent.slice(0, -2);
        total += price;
      });

      cartTotal.textContent = `${total} ₽`;
    }

    //вызов окна корзины
    const cart = document.getElementById("cart");
    const cartButton = document.getElementById("cart-button");
    const closeButton = document.querySelector(".close-button");
    const overlay = document.getElementById("overlay");
    
    cartButton.addEventListener("click", () => {
      cart.classList.remove("hidden");
      overlay.classList.add("shown");
    });
    
    closeButton.addEventListener("click", () => {
      cart.classList.add("hidden");
      overlay.classList.remove("shown");
    });
    
    overlay.addEventListener("click", () => {
      cart.classList.add("hidden");
      overlay.classList.remove("shown");
    });

    function vivod() {
        var name, fam, tel, voz;
        name = document.getElementById("name").value;
        let chislo = Math.ceil(Math.random()*99999999);
        if (voz < 18) {
          alert("Карта выдается только после 18 лет");
        } else {
          alert("Имя: " + name.toUpperCase() + fam.toUpperCase() + " \n" + "Номер карты: " + chislo + " \n");
        }
      }
  
     

    function Clear() {
        var name, fam, tel, voz;
        document.getElementById('name').value = '';
        document.getElementById('tel').value = '';
      }

      function otziv() {

          const form = document.querySelector('form');
      
          form.addEventListener('submit', (event) => {
      
            const name = document.getElementById('name').value;
            const tel = document.getElementById('tel').value;
      
            if (!name || !tel) {
              alert("Введите имя и номер телефона ");
            } else {
              alert("Отзыв оставлен");
            }
          });
        };

        function sale() {

          const form = document.querySelector('form');
      
          form.addEventListener('submit', (event) => {
      
            const name = document.getElementById('name').value;
            const fam = document.getElementById('fam').value;
            const tel = document.getElementById('tel').value;
            const voz = document.getElementById('voz').value;
            let chislo = Math.ceil(Math.random()*99999999);
      
            if (!name || !fam || !tel || !voz) {
              alert("Заполните все данные в анкете");
            } else {
              alert("Имя: " + name.toUpperCase() + " " +  fam.toUpperCase() + " \n" +  "Телефон: " + tel.toUpperCase() + " \n" + "Номер карты: " + chislo + " \n");
            }
          });
        };