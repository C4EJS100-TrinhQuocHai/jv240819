/* 

    viết chương trình khai báo chuỗi bất kỳ,
     xây dựng hàm có tham số là 1 chuỗi và kết quả trả về là chuỗi được truyền vào nhưng 
     viết hoa tất cả các chữ cái đầu

     input : xin chào rikkei academy!;// split(" dùng để chuyển chuỗi thành mảng!")
     output: Xin Chào Rikkei Academy!;

     input : cố gắng học lập trình javascript
     output : Cố Gằng Học Lập Trình Javascript.

     Các bước làm:
     B1: tạo hàm
     B2: đi xử lý
     
*/
let text1 = "xin chào!";
let text2 = "cố gắng học lập trình javascript";
function convertString(char) {
    let arr = char.split(" ");// chuyển chuỗi thành array
    // console.log("arr", arr);
    // đi duyệt mảng
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    // muốn chuyển array sang string dùng join()
    return arr.join(" ");
}
console.log(convertString(text1));
console.log(convertString(text2));


// convertString(text1)
// let text = "hello rikkei";
// let result = text.split(" ")
// console.log("result", result);// ["hello","rikkei"]
// let text1 = "hello";
// console.log("text1", text1[0].toUpperCase());
// console.log(text1);
let numbers = ["Hoang", "Lan"];
// console.log(numbers.join(" "));

// slice
// numbers[1] = numbers[1][0].toUpperCase() + numbers[1].slice(1);

// console.log("numbers", numbers);


// let char = "phương";
// console.log(char.slice(2));

// phương thức slice: dùng để cắt, sao chép ra một mảng mới



