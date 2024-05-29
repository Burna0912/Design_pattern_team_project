document.addEventListener("DOMContentLoaded", () => {
  // URL에서 쿼리 파라미터 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const cartData = urlParams.get("cart");

  if (cartData) {
    // JSON 문자열을 JavaScript 객체로 변환
    const cartItems = JSON.parse(decodeURIComponent(cartData));
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalPriceContainer = document.querySelector(".total-price .price");

    let totalPrice = 0;

    // 장바구니 내역 생성
    cartItems.forEach(item => {
      const itemElement = document.createElement("li");
      itemElement.innerHTML = `
        <span class="product-name">${item.productName} (${item.order})</span>
        <span class="product-price">${(item.price * item.order).toLocaleString()}</span>
      `;
      cartItemsContainer.appendChild(itemElement);

      // 총 가격 계산
      totalPrice += item.price * item.order;
    });

    // 총 결제 금액 표시
    totalPriceContainer.textContent = totalPrice.toLocaleString();
  }
});
