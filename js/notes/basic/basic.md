# 2. Biến, comments, built-in

# Sử dụng JavaScript với HTML

Cập nhật tháng 3 năm 2022

> Nếu bạn chưa học HTML, CSS, vui lòng xem kỹ lộ trình học tại đây: [https://fullstack.edu.vn/learning-paths](https://fullstack.edu.vn/learning-paths)

## Cách Internal (sử dụng nội bộ)

Đặt trực tiếp cặp thẻ `script` vào mã HTML và viết `javascript` giữa cặp thẻ này.

```html
<body>
  ...
  <script>
    alert("Xin chào các bạn!");
  </script>
  ...
</body>
```

Copy

---

## Cách External (sử dụng file .js bên ngoài)

Các bạn sẽ thường thấy cách này được sử dụng vì mã `javascript` được viết riêng biệt ra một file `.js` ở bên ngoài. Mã của chúng ta sẽ gọn gàng, dễ nhìn, dễ chỉnh sửa hơn vì không bị viết lẫn lộn vào HTML như cách `Internal`.

```html
<body>
  ...
  <script src="đường_dẫn_tới_file.js"></script>
</body>
```

Copy

Trong trường hợp sử dụng file `.js` thì nội dung của file không được chứa thẻ `<script>`. Sau đây là ví dụ nội dung file `.js`.

### Đúng

```js
// Nội dung file .js
alert("Xin chào các bạn!");
```

Copy

### Sai

```js
// Nội dung file .js
<script>alert('Xin chào các bạn!')</script>
```

Copy

---

> Trong thực tế cách `Internal` cũng được sử dụng khá phổ biến trong các trường hợp mã `javascript` đó chỉ sử dụng tại duy nhất một màn hình và số lượng các dòng code không nhiều. Tuy nhiên cách này các bạn nên tránh việc lạm dụng vì sẽ dễ gây rác source code và lặp lại code không mong muốn.

# Khái niệm biến và cách sử dụng

Cập nhật tháng 3 năm 2022

## Biến là gì?

Trong quá trình xây dựng website hoặc các ứng dụng với JavaScript chúng ta sẽ cần phải làm việc với các dạng thông tin dữ liệu khác nhau. Ví dụ:

1.  Phần mềm kế toán - Chúng ta sẽ làm việc với những con số
2.  Website bán hàng - Làm việc với dữ liệu thông tin sản phẩm, đơn hàng và giỏ hàng
3.  Ứng dụng Chat - Dữ liệu là những đoạn chat, tin nhắn, thông tin người chat

Biến được sử dụng để lưu trữ các thông tin trên trong quá trình ứng dụng JavaScript hoạt động.

---

## Khai báo biến

Để khai báo biến ta sẽ bắt đầu bằng từ khóa `var` (var là viết tắt của từ `variable` - nghĩa là biến). Khai báo biến có cú pháp như sau:

```js
var [dấu cách] [tên biến];
```

Copy

Theo cú pháp trên, mình sẽ định nghĩa một biến có tên là `fullName` với dự định để lưu tên đầy đủ của mình vào đó.

```js
var fullName;
```

Copy

Tiếp theo, ta có thể lưu thông tin vào biến `fullName` này:

```js
var fullName; // khai báo biến

fullName = "Sơn Đặng"; // gán giá trị
```

Copy

Các bạn chú ý có dấu nháy đơn `''` bao ngoài chữ `Sơn Đặng`. Đó là cách để thể hiện dữ liệu dạng `chuỗi` (văn bản) trong JavaScript.

> Khi đoạn mã trên được chạy (thực thi) JavaScript sẽ tạo biến với tên `fullName` và gán giá trị `'Sơn Đặng'` cho biến này. Một vùng nhớ trong RAM của máy tính sẽ được sử dụng để phục vụ việc lưu trữ những giá trị của biến khi chương trình được thực thi.

Chuỗi `'Sơn Đặng'` đã được lưu vào vùng nhớ tương ứng với biến `fullName`. Ta có thể truy cập tới chuỗi này qua tên biến:

```js
var fullName;

fullName = "Sơn Đặng";

alert(fullName); // hiển thị giá trị của biến
```

Copy

Để đơn giản và ngắn gọn, ta có thể kết hợp việc khai báo biến và gán giá trị cho biến thành một dòng:

```js
var fullName = "Sơn Đặng"; // khai báo và gán giá trị

alert(fullName);
```

Copy

Ta cũng có thể khai báo nhiều biến trong cùng một dòng cách nhau bởi dấu `,` như sau:

```js
var fullName = "Sơn Đặng",
  age = 18,
  workAt = "F8";
```

Copy

Trông có vẻ ngắn gọn, tuy nhiên mình khuyên các bạn không nên dùng cách này. Khi cần khai báo nhiều biến hơn thì cách này trở nên rất khó đọc.

Ta nên khai báo biến trên mỗi dòng khác nhau để dễ đọc hơn (nên dùng cách này):

```js
var fullName = "Sơn Đặng";
var age = 18;
var workAt = "F8";
```

Copy

Một số cách khai báo biến trên nhiều dòng khác như sau:

```js
var fullName = "Sơn Đặng",
  age = 18,
  workAt = "F8";
```

Copy

Thậm chí có cả phong cách sau:

```js
var fullName = "Sơn Đặng",
  age = 18,
  workAt = "F8";
```

Copy

Về mặt kỹ thuật thì tất cả các cách đều tương tự nhau. Vì vậy dùng cách nào là tùy theo sở thích của bạn.

> Khi gán giá trị dạng số cho biến chúng ta không sử dụng dấu nháy đơn `''` bao bọc bên ngoài. Như ví dụ trên thì `age = 18` ta sẽ viết luôn là số `18` và không sử dụng dấu nháy.

---

## Quy tắc đặt tên

1.  Tên biến có thể bao gồm chữ cái, số, dấu gạch dưới ( \_ ) và kí tự đô la ( $ )
2.  Tên biến không thể bắt đầu bằng số, phải bắt đầu bằng một chữ cái hoặc dấu gạch dưới hoặc dấu đô la
3.  Tên biến phân biệt chữ hoa và chữ thường. Vì vậy `tenbien` và `TenBien` là 2 biến khác nhau
4.  Tên biến không được (không thể) đặt trùng với các từ khóa của JavaScript

> Từ khóa là những từ được JavaScript sử dụng để tạo nên những quy chuẩn về mặt chức năng và cú pháp trong JavaScript. Ví dụ: Để khai báo một biến ta sẽ sử dụng từ khóa `var`. Vì vậy ta không thể đặt tên biến là “var”

#### Ví dụ cho tên biến hợp lệ

```js
var address; // tên biến sử dụng chữ cái

var first_name; // kết hợp chữ cái và gạch dưới

var $last_name; // dấu đô la, gạch dưới và chữ cái

var f8; // chữ cái và số, số đứng sau chữ cái
```

Copy

#### Ví dụ cho tên biến không hợp lệ

```js
var java-script; // bao gồm dấu gạch ngang

var 8f; // bắt đầu với chữ số

var var = 'Biến'; // sử dụng trùng từ khóa `var`
```

Copy

Các chữ cái không phải tiếng Lating vẫn có thể được sử dụng làm tên biến (không sử dụng cách này):

```js
var ດ້ານວິຊາການ = "..."; // tiếng Pháp
var ਤਕਨੀਕੀ = "..."; // tiếng Lào
```

Copy

> Trong thực tế chúng ta sẽ sử dụng tiếng Anh để đặt tên biến vì đó là quy ước chung Quốc Tế.

---

## Gán giá trị cho biến

Các bạn hãy tưởng tượng biến như một chiếc hộp và giá trị gán cho biến như là đồ vật được bỏ vào hộp. Vì vậy ta có thể đặt bất cứ giá trị gì vào hộp và ta cũng có thể thay thế chúng nếu muốn:

```js
var fullName; // tạo chiếc hộp

fullName = "Sơn Đặng"; // cho đồ vật vào hộp

fullName = "Nguyễn Văn A"; // thay thế đồ vật khác

alert(fullName); // Nguyễn Văn A
```

Copy

> Khi giá trị của biến được thay đổi, giá trị cũ sẽ bị xóa khỏi biến.

Ta cũng có thể sao chép giá trị từ biến này sang biến khác:

```js
var currentCourse = "JavaScript";

var newCourse;

// copy giá trị 'JavaScript' từ biến
// 'currentCourse' sang biến 'newCourse'
newCourse = currentCourse;

// bây giờ, biến 'newCourse' và 'currentCourse'
// đều có giá trị là 'JavaScript'

alert(currentCourse); // JavaScript

alert(newCourse); // JavaScript
```

Copy

> Có thể bạn chưa biết có những ngôn ngữ lập trình như `Scala`, `Erlang` không cho phép thay đổi giá trị của biến đã định nghĩa. Ta bắt buộc phải tạo biến mới khi cần lưu giá trị và không thể gán lại giá trị cho biến cũ.

---

## Đặt tên biến như nào cho đúng?

Đặt tên biến hợp lệ theo quy tắc của JavaScript là việc đơn giản, tuy nhiên trong thực tế đặt tên biến không chỉ dừng lại ở việc đặt cho hợp lệ mà ta còn phải quan tâm tới các yếu tố khác như:

1.  Tên biến phải có ý nghĩa cụ thể, phải rõ ràng và thể hiện được nó đang lưu trữ cái gì.
2.  Sử dụng tiếng Anh để đặt tên biến, sử dụng các từ có thể đọc lên được như `userName`, `phoneNumber`, `verifyEmail`, …
3.  Tránh đặt tên biến ngắn như `a`, `b`, `p` trừ khi bạn chỉ đang làm ví dụ hoặc bạn thật sự hiểu trường hợp đó có thể đặt tên như vậy.
4.  Tránh đặt tên biến chung chung kiểu như `data`, `value`. Vì khi nhìn vào không thể hiểu `data` là `data` của cái gì, `value` là `value` của cái gì. Chỉ sử dụng tên dạng này khi đang trong ngữ cảnh cụ thể giúp bổ nghĩa cho những từ chung chung đó.

#### Đặt tên biến chung chung (trường hợp nên tránh)

Ví dụ:

```js
var data = "..."; // không biết data là data của cái gì
var value = "..."; // không biết value là value của cái gì

// var documentData = '...' ; Nên đặt rõ ràng ra như này
// var documentValue = '...'; và như này
```

Copy

#### Đặt tên biến chung chung (trường hợp nên dùng)

Ví dụ:

```js
function Document() {
  var data = "...";
  // hoặc
  var value = "...";

  // var documentValue = '...'; Đặt như này sẽ bị lặp lại chữ "document" không cần thiết
}
```

Copy

Bạn chưa cần quan tâm `function` là gì vì ta sẽ học nó ở những bài sau. Trong trường hợp này biến `data` hoặc `value` nằm trong `Document`. Vì vậy `Document` đã giúp lập trình viên khi nhìn vào hiểu được `data`, `value` là thuộc về `Document`. Trong trường hợp này thì tên biến giúp đơn giản hóa và vẫn truyền đạt được đầy đủ ý nghĩa.

---

## Có thể bạn chưa biết

1.  Đặt tên biến là một trong những kỹ năng quan trọng và phức tạp nhất trong lập trình. Nhìn lướt qua các tên biến có thể biết code nào được viết bởi người mới và người đã có nhiều kinh nghiệm.

2.  Trong thực tế nhiều khi chúng ta phải làm việc trên code đã có sẵn thay vì viết hoàn toàn mới. Có khi bạn sẽ làm việc trên code cũ của người khác và ngược lại. Vì vậy đặt tên biến rõ ràng, dễ hiểu, truyền đạt đúng mục đích sử dụng là quan trọng hơn cả.

3.  Chỉ sau vài tháng bạn có thể quên đi đoạn mã do chính tay mình viết. Để chính bạn hiểu bạn đã từng code cái gì trong quá khứ thì việc đặt tên biến tuân thủ các nguyên tắc trên là vô cùng quan trọng.

4.  Khi phải lựa chọn giữa `performance` (hiệu năng) và `clean code` (code sạch) người ta thường lựa chọn clean code. Việc đánh đổi này là cần thiết để giúp code dễ hiểu, dễ bảo trì và nâng cấp về sau. Và đặt tên biến chính là một trong những yếu tố giúp code của bạn trở nên clear hơn.

> **Fact:** Code cho máy hiểu thì dễ, code cho người hiểu mới khó!

# Cú pháp comments là gì?

Cập nhật tháng 3 năm 2022

## Giới thiệu

Hầu hết các ngôn ngữ lập trình đều có cú pháp dành cho việc comment code. Trình biên dịch sẽ bỏ qua những dòng và khối comment trong code của bạn. Vì vậy comment mang mục đích để lập trình viên có thể chú thích code mà không ảnh hưởng tới việc thực thi của ngôn ngữ lập trình.

---

## Cú pháp

#### Comment trên một dòng

Chúng ta sẽ sử dụng 2 dấu gạch chéo `//` trước comment. Cú pháp như sau:

```js
// [Nội dung comment]
```

Copy

Áp dụng:

```js
// Hàm alert sẽ bật lên hộp thoại
// trên trình duyệt
alert("Học lập trình tại F8");
```

Copy

Hoặc sử dụng ở phía sau dòng code:

```js
var userName = "sondn"; // Gán 'sondn' cho userName
```

Copy

#### Comment nhiều dòng - một khối

Cú pháp:

```js
/* [Nội dung comment] */

// hoặc

/*
[Nội dung comment]
*/
```

Copy

Áp dụng:

```js
/**
Ở bài trước chúng ta đã học về biến
Và hôm nay chúng ta học về comment
*/

var fullName;
var age;
```

Copy

> Bất cứ nội dung gì nằm giữa ký tự `/*` và `*/` sẽ là comment.

---

## Sử dụng khi nào?

Chúng ta sử dụng comment với 2 mục đích chính:

#### Mục đích chú thích code

Chúng ta sẽ chú thích trên các đoạn code để hướng dẫn cách sử dụng, mô tả cách hoạt động hoặc giải thích tại sao ta lại làm như vậy. Việc làm này thường áp dụng đối với những đoạn code phức tạp, với những code đơn giản thì không cần sử dụng comment. Hãy áp dụng nguyên tắc đặt tên biến đã học để code của bạn viết ra sẽ tự giải thích luôn ý nghĩa của chính nó.

Đây là ví dụ cho việc comment để mô tả cách sử dụng:

```javascript
/*
Example:

var checked = true;

<Checkbox
   checked={checked}
   onChange={event => doSomething(event.target.checked)}
>
 Label for Box
</Checkbox>
*/

function Checkbox() {
   ...
}

```

Copy

> Việc lạm dụng comment, sử dụng không đúng lúc, không đúng chỗ sẽ gây dư thừa không cần thiết, làm mã của bạn trở nên khó nhìn và gây phản tác dụng. Vì vậy hãy cân nhắc sự cần thiết mỗi khi có ý định sử dụng comment trong mã của bạn.

Ví dụ dưới đây mô tả việc sử dụng comment chưa hiệu quả:

```js
// Khai báo biến
var email;
var password;

// Lấy giá trị người dùng nhập vào email input
emaill = event.target.value;

// Lấy giá trị người dùng nhập vào password input
password = event.target.value;
```

Copy

Comment như trên trở nên dư thừa không cần thiết vì đã là lập trình viên JavaScript thì ai cũng sẽ hiểu đoạn code như vậy để làm gì.

> Ngoại lệ khi bạn là người mới học, việc sử dụng comment như trên là cần thiết để giúp bạn ghi nhớ chức năng, nhiệm vụ của từng đoạn code. Khi bạn đã hiểu và ghi nhớ được những kiến thức đó - Hãy ngừng comment như vậy!

#### Mục đích Vô hiệu hóa đoạn code

Bản chất là trình biên dịch code sẽ bỏ qua những comment (không thực thi chúng). Vì vậy khi một đoạn code được comment lại thì đoạn code đó sẽ không chạy. Đôi khi bạn sẽ muốn tạm bỏ đi một đoạn code nào đó trong ứng dụng của bạn, đó chính là lúc bạn có thể sử dụng comment.

Ví dụ:

```js
var email = "email@domain.com";
var address = "Hà Nội, Việt Nam";

alert(email); // alert này sẽ chạy
// alert(address); // alert này không chạy
```

Copy

# -

# 3. Toán tử, kiểu dữ liệu

# Toán tử ++ và --

Cập nhật tháng 3 năm 2022

Đây là 2 toán tử nghe qua thì rất dễ hiểu, nhưng để hiểu nguyên lý về cách hoạt động của nó chúng ta sẽ phải mất thêm một chút thời gian đó. Để hoàn thành bài học về 2 toán tử này, chúng ta sẽ cùng trải qua một số bài học sau nhé.

Ok, bắt đầu thôi!

## Toán tử ++

Toán tử `++` giúp tăng giá trị của một biến mang giá trị số lên 1. Có 2 cách để sử dụng toán tử `++` là:

1.  Dùng làm hậu tố: `variable++` (toán tử nằm sau biến)
2.  Dùng làm tiền tố: `++variable` (toán tử nằm trước biến)

### #1 Sử dụng ++ làm hậu tố

Ở đây, chúng ta sẽ xét ví dụ sử dụng toán tử `++` làm hậu tố trước (vì trong thực tế, chúng ta thường dùng kiểu hậu tố nhiều hơn):

```js
var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3
```

Copy

Sau mỗi khi sử dụng toán tử `++`, giá trị của biến `number` được tăng lên 1. Có vẻ khá dễ dàng để hiểu cách hoạt động của nó phải không?

Tuy nhiên, hãy xem xét thêm ví dụ sau:

```js
var number = 1;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3
```

Copy

> 👉 Toán tử `++` khi dùng là hậu tố sẽ **tăng giá trị của biến lên 1** và **trả về giá trị trước khi tăng**.

### #2 Sử dụng ++ làm tiền tố

Ở ví dụ này, chúng ta sử dụng `++` làm tiền tố. Tuy nhiên, kết quả trông sẽ không khác gì khi dùng `++` làm hậu tố:

```js
var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3
```

Copy

Nhưng khi xem xét kỹ hơn, các bạn sẽ nhìn ra điểm khác:

```js
var number = 1;

console.log(++number); // 2
console.log(number); // 2

console.log(++number); // 3
console.log(number); // 3
```

Copy

> 👉 Toán tử `++` khi dùng là tiền tố sẽ **tăng giá trị của biến lên 1** và **trả về giá trị sau khi tăng**.

---

## Toán tử - -

Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử `--` sẽ trừ đi 1.

---

## Tổng kết

- `x++` tăng giá trị biến lên 1 và trả về giá trị **trước** khi tăng
- `++x` tăng giá trị biến lên 1 và trả về giá trị **sau** khi tăng
- `x--` giảm giá trị biến xuống 1 và trả về giá trị **trước** khi giảm
- `--x` giảm giá trị biến xuống 1 và trả về giá trị **sau** khi giảmm

> Trong video sau, chúng ta sẽ phân tích một cách chi tiết để hiểu nguyên lý của cách hoạt động trên.

# Truthy và Falsy là gì?

Cập nhật tháng 6 năm 2021

## Truthy - to bool is true

Bất cứ giá trị nào trong JavaScript khi chuyển đổi sang kiểu dữ liệu `boolean` mà có giá trị `true` thì ta gọi giá trị đó là `Truthy`.

Các giá trị `1`, `['BMW']`, `{ name: 'Miu' }` và `'hi'` được đề cập trong ví dụ dưới đây là `Truthy` vì khi chuyển sang `Boolean` ta nhận được giá trị `true`.

Ví dụ:

```js
console.log(Boolean(1)); // true
console.log(Boolean(["BMW"])); // true
console.log(Boolean({ name: "Miu" })); // true

console.log(!!"hi"); // true
```

Copy

> `!!` là gì? Đơn giản thôi. Toán tử `!` là toán tử `not` (phủ định) nên `!!` là 2 lần phủ định, mà 2 lần phủ định lại trở thành “khẳng định”. Trong JavaScript thì đây là một “tip” để convert (chuyển đổi) mọi kiểu dữ liệu khác sang `Boolean`.

Ví dụ:

```js
console.log(!!1); // true
console.log(!!"f8"); // true
console.log(!!["Mercedes"]); // true
```

Copy

Thêm `!!` phía trước các giá trị truthy sẽ luôn trả về `true`.

---

## Falsy - to bool is false

Bất cứ giá trị nào trong JavaScript khi chuyển đổi sang kiểu dữ liệu `boolean` mà có giá trị `false` thì ta gọi giá trị đó là `Falsy`.

Trong JavaScript có 6 giá trị sau được coi là Falsy:

1.  `false`
2.  `0` (số không)
3.  `''` or `""` (chuỗi rỗng)
4.  `null`
5.  `undefined`
6.  `NaN`

Ví dụ:

```js
console.log(!!false); // false
console.log(!!0); // false
console.log(!!""); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
```

Copy

---

## Chú ý!

Nội dung đã đề cập phía trên đã đầy đủ khi nói về `Truthy` và `Falsy` trong JavaScript. Tuy nhiên mình vẫn cần nhấn mạnh lại với các bạn rằng:

Ngoài 6 giá trị đã đề cập tới ở phần `Falsy` thì toàn bộ các giá trị khác đều là `Truthy`, kể cả những giá trị sau:

1.  `'0'` (một chuỗi chứa số không)
2.  `' '` (một chuỗi chứa dấu cách)
3.  `'false'` (một chuỗi chứa từ khóa false)
4.  `[]` (một array trống)
5.  `{}` (một object trống)
6.  `function(){}` (một hàm “trống”)

> Một số người chuyển từ ngôn ngữ khác sang rất có thể sẽ bị nhầm `[]` (mảng “rỗng”) là falsy, bởi vì trong ngôn ngữ họ đã học trước đó `[]` là falsy.

Với những người hiểu nhầm `[]` là falsy sẽ gặp trường hợp khó hiểu sau:

Ví dụ:

```js
var cars = []; // Dù là mảng "rỗng" vẫn là truthy

if (!cars) {
  // Họ sẽ thắc mắc: "Tại sao lại không lọt vào đây?"
}
```

Copy

Vì `[]` là truthy nên `!cars` sẽ trả về `false`. Câu lệnh `if` sẽ nhận được kết quả của mệnh đề so sánh là `false`, vì vậy đoạn mã trong `if` trên sẽ không được lọt vào.

---

## Ngoại lệ? - document.all

Trong JavaScript (phía trình duyệt) sẽ có sẵn một đối tượng `document`, và khi bạn thử `!!document.all` sẽ trả về `false`. Chẳng lẽ `document.all` cũng là falsy hay sao?

Bản thân mình cũng thắc mắc điều này nên mình đã search Google “Why document.all is falsy?” và mình đã tìm được câu trả lời [tại đây](https://fullstack.edu.vn/external-url?continue=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F10350142%2Fwhy-is-document-all-falsy).

**Tóm tắt câu trả lời:**

`document.all` là một ngoại lệ chính thức duy nhất theo đặc tả ECMA (phiên bản 5). Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là `true`. Tuy nhiên, `document.all` là một ngoại lệ.

**Cụ thể như sau:**

1.  `document.all` chuyển sang boolean sẽ là `false`
2.  `document.all` khi là toán hạng của toán tử so sánh `==` hoặc `!=` sẽ là `undefined`
3.  Khi `typeof document.all` sẽ trả về `"undefined"`

> ECMA là đặc tả chi tiết kỹ thuật mà các ngôn ngữ theo đặc tả này phải tuân theo. JavaScript là một ngôn ngữ tuân thủ đặc tả kỹ thuật ECMA.

# -

# 6. Làm việc với số

# Kiểu dữ liệu số (number)

Cập nhật tháng 3 năm 2022

## Kiểu số - Number

Trong JavaScript có 2 loại số:

1.  Các số thông thường trong JavaScript được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động). Trong hầu hết các trường hợp khi làm việc với JavaScript là chúng ta sử dụng loại số này.
2.  Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.

Vì mức độ thông dụng nên ở đây chúng ta chỉ tìm hiểu về loại số thông thường.

---

## Cách khai báo

Cách thông thường khi ta khai báo một số. Ví dụ là: `1000000` (một triệu)

```js
var million = 1000000;
```

Copy

Cũng là khai báo số `1000000` nhưng có cách viết khác. Bạn có thể thêm chữ `e` vào sau số `1` và chỉ định số số không phía sau chữ `e` như sau:

```js
var million = 1e6; // tương tự: 1000000

// hoặc

var billion = 2e9; // tương tự: 2000000000 (hai tỏi à nhầm hai tỉ)
```

Copy

---

## Đối tượng Number

Đối tượng Number trong JavaScript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong JavaScript:

| Phương thức                 | Vai trò                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| Number.isFinite()           | Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean                 |
| Number.isInteger()          | Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean                  |
| Number.parseFloat()         | Chuyển đổi chuỗi đã cho thành một số dấu phẩy động                                          |
| Number.parseInt()           | Chuyển đổi chuỗi đã cho thành một số nguyên                                                 |
| Number.prototype.toFixed()  | Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân |
| Number.prototype.toString() | Chuyển đổi và trả về số đã cho dưới dạng chuỗi                                              |

Ví dụ:

```js
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2); // false
Number.isInteger(Math.PI); // false

Number.parseFloat("10"); // 10
Number.parseFloat("10.00"); // 10
Number.parseFloat("238,21"); // 238
Number.parseFloat("237.22"); // 237.22
Number.parseFloat("34 56 78"); // 34
Number.parseFloat(" 37 "); // 37
Number.parseFloat("18 is my age"); // 18

Number.parseInt("10"); // 10
Number.parseInt("10.00"); // 10
Number.parseInt("238,21"); // 238
Number.parseInt("237.22"); // 237
Number.parseInt("34 56 78"); // 34
Number.parseInt(" 37 "); // 37
Number.parseInt("18 is my age"); // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString(); // '11'
(18).toString(); // '18'
(17.3).toString(); // '17.3'
```

Copy
