/* 

    Viết chương trình khai báo mảng gồm nhiều chuỗi bất kỳ
    yêu cầu người dùng nhập vào 1 chuỗi bất kỳ
    Xây dựng hàm có 2 tham số là 1 mảng và 1 chuỗi, 
    kết quả trả về là tất cả các phần tử trong mảng có chứa chuỗi vừa nhập.

    let array=["hello","welcome"]
    let text="h"
    ["hello"];
*/
// let std1=["nam","lan"];
let text = prompt("mời bạn nhập từ cần tìm kiếm");
let students = ["hoa", "thu", "minh", "ha", "thanh", "vân", "ngọc"];
function findText(arr, char) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(char) !== -1) {
            result.push(arr[i]);
        }
    }
    return result
    // console.log("kết quả tìm kiếm", result);
}
findText(students, text);

// let userName = "hoa";
// console.log("kết quả tìm kiếm", userName.indexOf("t"));

/*
    indexOf(): dùng để tìm kiếm áp dụng với array và text
    nếu có trả về vị trí còn không có trả về -1
*/

// tìm kiếm  chữ h có trong userName hay không
// indexOf, includes