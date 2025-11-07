/* js/product-data.js */

// Chúng ta sử dụng một ĐỐI TƯỢNG (object) để có thể tìm kiếm sản phẩm bằng ID (ví dụ: 'P01')
const allProducts = {
  // --- PIZZA ---
  'P01': {
    id: 'P01',
    name: 'Pizza Phô Mai Truyền Thống',
    price: 129000,
    image: 'images/f1.png',
    ratingCount: 45,
    shortDesc: 'Được làm từ đế bánh nướng vàng giòn, kết hợp sốt cà chua truyền thống và lớp phô mai Mozzarella dày.',
    longDesc: [
      'Bánh pizza được nướng trong lò chuyên dụng, giữ được độ giòn ngoài và mềm trong.',
      'Sốt cà chua tươi, phô mai mozzarella nhập khẩu, cùng hương vị đặc trưng sẽ mang đến trải nghiệm tuyệt vời.',
      'Mọi nguyên liệu đều được chọn lọc kỹ càng, đảm bảo vệ sinh an toàn thực phẩm và giữ trọn hương vị Ý truyền thống.'
    ]
  },
  'P03': {
    id: 'P03',
    name: 'Pizza Hải Sản',
    price: 129000,
    image: 'images/f3.png',
    ratingCount: 109,
    shortDesc: 'Tôm, mực và nghêu tươi ngon phủ đầy trên lớp phô mai Mozzarella tan chảy, tạo nên hương vị biển cả hấp dẫn.',
    longDesc: [
      'Pizza hải sản được phủ đầy tôm, mực và nghêu tươi ngon, kết hợp cùng phô mai Mozzarella béo ngậy.',
      'Lớp đế mỏng giòn và sốt cà chua thơm lừng mang lại cảm giác như đang thưởng thức ẩm thực vùng biển Địa Trung Hải.'
    ]
  },
  'P06': {
    id: 'P06',
    name: 'Pizza Thập Cẩm',
    price: 129000,
    image: 'images/f6.png',
    ratingCount: 121,
    shortDesc: 'Sự kết hợp tuyệt vời của xúc xích, nấm, ớt chuông, thịt nguội và phô mai béo ngậy.',
    longDesc: [
      'Pizza thập cẩm kết hợp nhiều loại topping hấp dẫn như xúc xích, nấm, thịt nguội, ớt chuông và phô mai tan chảy.',
      'Được nướng ở nhiệt độ cao trong lò chuyên dụng, bánh giữ được độ giòn bên ngoài và thơm béo bên trong.'
    ]
  },

  // --- BURGER ---
  'B02': {
    id: 'B02',
    name: 'Burger Bò',
    price: 139000, // Lấy giá từ menu.html
    image: 'images/f2.png',
    ratingCount: 50,
    shortDesc: 'Thịt bò xay tươi được nướng chín tới, kẹp cùng phô mai tan chảy, rau xà lách, cà chua và nước sốt đặc biệt.',
    longDesc: [
      'Bánh burger bò được làm từ thịt bò tươi xay nhuyễn, nướng chín tới để giữ vị ngọt tự nhiên.',
      'Phô mai tan chảy hòa quyện cùng rau xà lách, cà chua và sốt mayonnaise đặc biệt.',
      'Món ăn mang đến hương vị đậm đà kiểu Mỹ, thích hợp cho bữa trưa nhanh gọn hoặc bữa ăn năng lượng.'
    ]
  },
  'B07': {
    id: 'B07',
    name: 'Burger Gà Giòn Cay',
    price: 139000,
    image: 'images/f7.png',
    ratingCount: 50,
    shortDesc: 'Ức gà chiên giòn cay kẹp trong bánh mềm, ăn là ghiền.',
    longDesc: [
      'Burger gà giòn cay sử dụng phần ức gà tươi, được tẩm ướp gia vị đậm đà và chiên vàng giòn rụm.',
      'Vỏ bánh mềm kết hợp cùng sốt cay đặc trưng tạo cảm giác kích thích vị giác.',
      'Món ăn phù hợp cho những ai yêu thích hương vị cay nhẹ, giòn rụm và thơm ngon.'
    ]
  },
  'B08': {
    id: 'B08',
    name: 'Burger Đặc Biệt KHK',
    price: 139000, // Lấy giá từ menu.html
    image: 'images/f8.png',
    ratingCount: 109,
    shortDesc: 'Sự hòa quyện độc đáo giữa thịt bò nướng, trứng ốp la, phô mai cheddar và sốt đặc chế của KHK.',
    longDesc: [
      'Burger đặc biệt KHK gồm hai lớp thịt bò tươi, trứng ốp la, rau tươi và phô mai cheddar tan chảy.',
      'Công thức độc quyền của nhà hàng giúp hương vị đậm đà, béo ngậy nhưng không ngán — món ăn "signature" bạn không thể bỏ qua.'
    ]
  },

  // --- PASTA & FRIES ---
  'PA04': {
    id: 'PA04',
    name: 'Nui Ý Sốt Bò Bằm',
    price: 99000,
    image: 'images/f4.png',
    ratingCount: 45,
    shortDesc: 'Nui Ý ống mềm dai kết hợp cùng sốt bò bằm đậm vị, rắc phô mai Parmesan thơm lừng.',
    longDesc: [
      'Nui Ý được luộc chín vừa tới, trộn cùng sốt bò bằm được nấu từ cà chua chín mọng và thịt bò tươi.',
      'Rắc thêm phô mai Parmesan và lá oregano khô để mang đến hương vị Ý truyền thống, hấp dẫn và đầy dinh dưỡng.'
    ]
  },
  'PA09': {
    id: 'PA09',
    name: 'Nui Ý Phô Mai Đút Lò',
    price: 99000,
    image: 'images/f9.png', // Sửa hình ảnh từ f4.png (trong file gốc) thành f9.png (từ menu.html)
    ratingCount: 45,
    shortDesc: 'Nui Ý hòa quyện cùng sốt kem béo và lớp phô mai vàng óng, thơm lừng khi nướng chín.',
    longDesc: [
      'Nui Ý được luộc chín tới, trộn cùng sốt kem sữa tươi và phô mai mozzarella.',
      'Sau đó được đút lò cho lớp phô mai tan chảy và vàng óng, tạo nên hương vị béo ngậy, mềm mịn.',
      'Món ăn mang phong cách Ý hiện đại, phù hợp cho cả người lớn lẫn trẻ nhỏ.'
    ]
  },
  'F05': {
    id: 'F05',
    name: 'Khoai Tây Chiên Giòn',
    price: 59000,
    image: 'images/f5.png',
    ratingCount: 71,
    shortDesc: 'Khoai tây vàng giòn, nóng hổi, dùng kèm tương cà và sốt mayonnaise béo ngậy.',
    longDesc: [
      'Khoai tây được cắt sợi vừa ăn, chiên trong dầu nóng đến khi vàng giòn bên ngoài, mềm bùi bên trong.',
      'Dùng kèm với tương cà hoặc sốt mayonnaise sẽ càng tăng thêm độ hấp dẫn. Phù hợp làm món ăn kèm hoặc snack nhẹ.'
    ]
  }
};