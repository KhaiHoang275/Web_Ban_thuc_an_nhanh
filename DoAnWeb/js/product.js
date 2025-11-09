function changeImage(img) {
  document.getElementById("mainImage").src = img.src;
}

function increase() {
  let input = document.getElementById("quantity");
  input.value = parseInt(input.value) + 1;
}

function decrease() {
  let input = document.getElementById("quantity");
  if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
}

function orderNow() {
  Swal.fire({
    title: "🎉 Đặt hàng thành công!",
    html: `
      <img src="images/f1.png" alt="Pizza" style="width:100px; margin-bottom:10px; border-radius:50%;">
      <p style="font-size:17px;">Cảm ơn bạn đã tin tưởng <b>Feane</b> 🍕<br>
      Đơn hàng của bạn đang được xử lý.</p>
    `,
    background: 'linear-gradient(135deg, #fff8e1, #ffe0b2)',
    color: '#333',
    showCancelButton: true,
    confirmButtonColor: '#ff6f00',
    cancelButtonColor: '#757575',
    confirmButtonText: 'Xem đơn hàng',
    cancelButtonText: 'Đóng',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "order.html"; // chuyển tới trang đơn hàng
    }
  });
}
