// Burger menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});



document.getElementById('burger').addEventListener('change', function() {
    const burger = this.value;
    const quantity = document.getElementById('quantity').value;
    const prices = {
      'MacResident': 5.99,
      'Spicy King': 6.49,
      'Veggie Delight': 4.99
    };
    
    if (burger) {
      const totalPrice = (prices[burger] * quantity).toFixed(2);
      document.getElementById('summary-text').innerText = `You have selected ${quantity} ${burger}(s).`;
      document.getElementById('total-price').innerText = `Total Price: $${totalPrice}`;
    } else {
      document.getElementById('summary-text').innerText = 'Select a burger to see your order summary.';
      document.getElementById('total-price').innerText = '';
    }
  });
  
  document.getElementById('quantity').addEventListener('input', function() {
    const burger = document.getElementById('burger').value;
    const quantity = this.value;
    const prices = {
      'MacResident': 5.99,
      'Spicy King': 6.49,
      'Veggie Delight': 4.99
    };
  
    if (burger) {
      const totalPrice = (prices[burger] * quantity).toFixed(2);
      document.getElementById('total-price').innerText = `Total Price: $${totalPrice}`;
    }
  });
  