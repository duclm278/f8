# Vấn đề khi không sử dụng biến CS

Cập nhật tháng 3 năm 2022

<video style="width: 100%; max-width: 600px; border: 1px solid #ececec; border-radius: 3px;" loop="" muted="" autoplay="">
    <source type="video/mp4" src="https://videos.fullstack.edu.vn/f8-prod/public-videos/GrJQXF5yo6pf89xNVYjAmPneJNX0ZFuPi7VIjU4v.mp4">
</video>

Trong `index.html`, `style.css` chứa code để tạo ra một giao diện trang web đơn giản. Tại trang web này, màu chủ đạo của website là `#f05123` được sử dụng lặp lại nhiều lần.

👉 Giả sử đây là website bạn làm cho khách, khách yêu cầu đổi sang màu khác thì bạn sẽ phải đi sửa khá nhiều chỗ. Một website thực tế, code HTML, CSS có thể lên tới hàng chục ngàn dòng, khi ấy mọi việc sẽ khá khó khăn.

### Ví dụ cho việc đi sửa màu ở từng nơi:

> Đây chỉ là ví dụ nhỏ, F8 đưa ra để các bạn hình dung ra vấn đề. Trong thực tế khi số lượng các dòng code lên hàng chục ngàn thì vấn đề sẽ rõ ràng hơn.

# Giải quyết vấn đề với biến CSS

Cập nhật tháng 3 năm 2022

Vẫn là website được đưa ra ở bài trước, nhưng trong bài này F8 đã đặt biến `--primary` để lưu màu chủ đạo là `#f05123`.

### Giờ đây, chỉ cần sửa tại một nơi:

<video style="width: 100%; border: 1px solid #ececec; border-radius: 3px" loop="" muted="" autoplay="">
    <source type="video/mp4" src="https://videos.fullstack.edu.vn/f8-prod/public-videos/IDdlY4kTwboVmHTsgqsnc3z64K0EqMl1ahRchsha.mp4">
</video>

# Ví dụ sử dụng đơn vị % #1

Cập nhật tháng 2 năm 2022

Các bạn mở tab `TRÌNH DUYỆT` và thử thay đổi CSS bên file `style.css` để khám phá cách mà đơn vị `%` hoạt động nhé.

### Nguyên lý hoạt động

Thuộc tính `width`, `height` với đơn vị `%` sẽ phụ thuộc vào kích thước `width`, `height` của thẻ mà nó phụ thuộc, mặc định là thẻ cha trực tiếp. Ví dụ: Thẻ cha có width `100px`, thẻ con có `width: 50%` sẽ tương ứng với `50px`.

Trong ví dụ này, các bạn sẽ thấy các class `box` nằm trong thẻ `body`, mặc định thẻ `body` sẽ có `width` bằng kích thước cửa sổ trình duyệt. Vì vậy, `box` có `width: 50%` sẽ bằng 50% chiều ngang trình duyệt.

> Vài chương tới, các bạn sẽ được làm quen với thuộc tính `position` trong CSS, thuộc tính này có thể làm thay đổi thẻ phụ thuộc. Khi ấy, một thẻ được đặt `width: 50%` có thể sẽ không phụ thuộc vào thẻ cha trực tiếp của nó nữa.

# Reset margin được đặt mặc định

Cập nhật tháng 3 năm 2022

Ở bài trước, chắc hẳn một số bạn sẽ nhìn ra, có một khoảng trắng bị dư ra phải không?

![image.png](https://files.fullstack.edu.vn/f8-prod/public-images/621b73693d3c8.png) **\*Thắc mắc:** Rõ ràng BOX 4 `width: 100%` rồi sao lại dư ra như vậy?\*

---

### Lý do

Trên trình duyệt được đặt sẵn một số thuộc tính CSS mặc định, trong đó có thuộc tính `margin`, đây là thuộc tính tạo ra một khoảng cách giữa các thẻ. Cụ thể trong tình huống trên, thẻ `body` mặc định có `margin: 8px`, vì vậy `body` đang đẩy ra xung quanh `8px` và gây ra hiện tượng trên.

> Chương sau, các bạn sẽ được học về thuộc tính margin.

---

### Cách khắc phục

Không chỉ thẻ `body`, một số thẻ thông dụng như `h1-h6`, `p` cũng có margin mặc định. Trong thực tế, điều này thường tạo ra những khoảng trắng ngoài ý muốn. Để khắc phục chúng ta sẽ `Reset CSS` bằng cách sau:

👉 Sử dụng `*` selector, vì nó tác động lên mọi thẻ, vì vậy chúng ta có thể reset cho mọi thẻ:

```css
* {
  margin: 0; /* Loại bỏ margin mặc định */
  padding: 0; /* Loại bỏ padding mặc định */
}
```

Copy

> Chương sau, bạn cũng sẽ được học về thuộc tính `padding`, thuộc tính này cũng có thể xảy ra vấn đề gần giống như `margin`, nên chúng thường được reset cùng nhau.

# Ví dụ sử dụng đơn vị % #2

Cập nhật tháng 3 năm 2022

Ở bài [#1](https://fullstack.edu.vn/learning/html-css?id=dd794d1c-cea2-4f50-a792-91765cc92a74), F8 đã đưa ra ví dụ về đặt `width` theo đơn vị `%`. Thực tế, thuộc tính `height` đặt theo `%` cũng hoạt động tương tự, tuy nhiên các bạn cần chú ý một chút để tránh hiểu nhầm.

Hãy nhớ, thuộc tính `width` và `height`, khi đặt theo `%` sẽ tỉ lệ vào thẻ mà nó phụ thuộc, mặc định là thẻ cha trực tiếp của nó. Vì vậy, thẻ cha của nó phải có kích thước cho `width` hoặc `height` thì thẻ con đặt theo `%` mới có tác dụng.

- Với chiều rộng thì các thẻ như `body`, `div` sẽ mặc định có `width: 100%`. Vì vậy, ở bài [#1](https://fullstack.edu.vn/learning/html-css?id=dd794d1c-cea2-4f50-a792-91765cc92a74) các bạn mà comment thuộc tính `width` của `.box1` lại, bạn sẽ thấy nó chiếm `100%` chiều rộng.
- Với chiều cao, mặc định các thẻ có `height: auto`, chiều cao sẽ tự động thay đổi khi nội dung bên trong nó tăng lên. Nếu thẻ cha có `height: auto` và thẻ con của nó `height: 50%` thì sẽ không có tác dụng, khi ấy thẻ con vẫn có `height: auto`.

👉 Vì vậy, để một thẻ có thể đặt `height` theo `%` thì thẻ nó phụ thuộc phải có một chiều cao mang tính cố định.

> Các bạn xem ví dụ trong `index.html`, `style.css` nhé. Khi đã hiểu ví dụ, hãy đọc lại nội dung ở đây nhé.

# Ví dụ sử dụng đơn vị rem #1

Cập nhật tháng 2 năm 2022

Khi bạn CSS cho một thẻ là `font-size: 1rem`, thì giá trị `1rem` này sẽ phụ thuộc vào giá trị `font-size` được đặt cho thẻ `html`, mặc định tại trình duyệt thì `font-size: 16px`, vì vậy mặc định `font-size: 1rem` sẽ bằng `16px`, `2rem` sẽ bằng `32px`.

Khi các bạn đặt `font-size` với giá trị khác cho thẻ `html` thì giá trị của `rem` cũng sẽ thay đổi theo tương tự. Hãy mở tab `TRÌNH DUYỆT` và thử thay đổi file `style.css` để khám phá cách hoạt động của `rem` bạn nhé.

# Vấn đề khi sử dụng px cho font-size

Cập nhật tháng 2 năm 2022

Giả sử bạn làm cho khách hàng 1 website tin tức, ban đầu khách hàng đồng ý với kích cỡ font chữ hiện tại. Nhưng sau đó, khách hàng nhận thấy kích cỡ font chữ hơi nhỏ và muốn tăng tất cả font-size to lên một chút.

### 👉 Khi sử dụng px, bạn sẽ phải đi sửa từng chỗ như video mô tả dưới đây:

<video style="width: 100%; border: 1px solid #ececec; border-radius: 3px" loop="" muted="" autoplay="">
    <source type="video/mp4" src="https://videos.fullstack.edu.vn/f8-prod/public-videos/hFq4jpLW81rD4wjmy8al9HNgCAd5ufQXLy6w6Us0.mp4">
</video>

# Ưu điểm khi sử dụng rem cho font-size

Cập nhật tháng 3 năm 2022

Vẫn là ví dụ ở bài trước, nhưng thay vì sử dụng `px` thì bài này F8 sẽ sử dụng `rem`.

### Khi cần tăng/giảm font-size cho tất cả, chỉ cần sửa 1 nơi:

<video style="width: 100%; border: 1px solid #ececec; border-radius: 3px" loop="" muted="" autoplay="">
    <source type="video/mp4" src="https://videos.fullstack.edu.vn/f8-prod/public-videos/ybgNBqwBzZBvdLqv1KaxVTsxw2dTkpHTJIVjDWvA.mp4">
</video>

> Ngoài ra, đơn vị rem có thể tự tăng/giảm kích cỡ font chữ theo settings của trình duyệt, thiết bị, VD: người cao tuổi thường để điện thoại có kích cỡ chữ lớn hơn. Với đơn vị px thì không được như vậy, vì px thuộc nhóm đơn vị tuyệt đối.

---

## Con số 62.5% là gì?

Mặc định font-size của thẻ html là 16px - tương ứng với 100%. Khi ấy, `1rem` sẽ bằng `16px`. Vậy khi muốn đặt font-size tương ứng với `10px` thì ta sẽ đặt bằng bao nhiêu rem?

Đương nhiên, theo mặc định `10px` đổi sang rem sẽ là `10/16 = 0.625`, như vậy để CSS bằng đơn vị `rem` ra được kích cỡ tương ứng `10px` ta sẽ CSS là `font-size: 0.625rem`.

👉 Khá hại não khi phải quy đổi như vậy. Vì vậy, chúng ta có thể quy đổi tỉ lệ tại thẻ html với CSS `font-size: 62.5%`. Kết quả thu được, `1rem = 10px`, `1.6rem = 16px`, `2rem = 20px`, `2.4rem = 24px`.

> Đơn vị rem được sử dụng với font-size trong rất nhiều website. Cách quy đổi font-size: 62.5% cũng có thể được coi là một mẹo giúp chúng ta dễ dàng sử dụng đơn vị rem hơn.

---

## Tại sao không sử dụng 10px thay cho 62.5%?

Chắc hẳn một số bạn sẽ nhận thấy, nếu con số 62.5% chỉ để dễ dàng trong việc chuyển đổi rem sang px thì tại sao chúng ta không làm như này:

```css
html {
    font-size: 10px;
}
```

Copy

Tại sao không làm luôn như này cho nhanh? Qua bài học về các đơn vị, các bạn cần nhớ px là đơn vị tuyệt đối, nó sẽ tương ứng với số px hiển thị trên màn hình của bạn (phụ thuộc vào độ phân giải trong tùy chọn hiển thị của thiết bị).

Tức là, cho dù một người mắt kém, họ cài đặt kích thước font chữ trên trình duyệt hoặc thiết bị của họ lớn hơn bình thường, với việc sử dụng font-size là px thì chữ trên website của bạn vẫn sẽ giữ đúng kích thước px của nó, và hiển thị bị nhỏ hơn so với mong muốn của người dùng.

Đối với rem, là đơn vị tương đối. Mặc định font chữ của trình duyệt là 16px thì 62.5% sẽ ứng với 10px. Nhưng nếu người dùng mắt kém, cần chữ to hơn, họ set trình duyệt mặc định ở font chữ lớn hơn, khi ấy chữ trên website của bạn cũng sẽ được lớn lên theo. Vì khi ấy, 62.5% sẽ là 62.5% của kích thước font chữ mà người dùng cài đặt.

---

## Công cụ chuyển đổi PX to REM

👉 [https://nekocalc.com/px-to-rem-converter](https://fullstack.edu.vn/external-url?continue=https%3A%2F%2Fnekocalc.com%2Fpx-to-rem-converter)

# TODO