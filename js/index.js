function domID(id) {
    return document.getElementById(id);
}
// Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var body = domID('main');
var selectTime = domID('selectTime');
var timer = domID('timer');
var titleDate = "";

var DateNewYear = new Date("Jan 1, 2023 00:00:00").getTime();
var DateChristmas = new Date("Dec 25, 2022 00:00:00").getTime();
var DateHalloween = new Date("Oct 1, 2022 00:00:00").getTime();
var DateValentine = new Date("Feb 14, 2022 00:00:00").getTime();

var countDownDate = new Date().getTime();

var day = domID('day');
var hour = domID('hour');
var minute = domID('minute');
var second = domID('second');


function handleChange() {
    var value = selectTime.value;
    console.log(value);
    if (value == 0) {
        countDownDate = DateNewYear;
        titleDate = 'HAPPY NEW YEAR 2023';
        body.style.backgroundImage = "url('./img/new-year.jpg')"
    } else if (value == 1) {
        countDownDate = DateChristmas;
        titleDate = 'HAPPY CHRISTMAS'
        body.style.backgroundImage = "url('./img/christmas.jpeg')"
    } else if (value == 2) {
        countDownDate = DateHalloween;
        titleDate = 'HAPPY HALLOWEEN'
        body.style.backgroundImage = "url('./img/halloween.jpeg')"
    } else if (value == 3) {
        countDownDate = DateValentine
        titleDate = 'HAPPY VALENTINE'
        body.style.backgroundImage = "url('./img/valenteen.jpeg')"
    } else {
        alert("Please select event!")
    }

    countDown();
}
function countDown() {
    var x = setInterval(function () {
        // get current day
        // lúc này biến now sẽ lấy đơn vị mili giây ( 1 con số khá lớn ) 
        var now = new Date().getTime();
        var distance = countDownDate - now;
        console.log(distance)
        // kiểm tra event đã hết hạn chưa ? 
        if (distance < 0) {
            domID('timer').innerHTML = "Event Expired";
            // xóa các innerHTML có số của nó trước đó 
            day.innerHTML = "---";
            hour.innerHTML = "---";
            minute.innerHTML = "---";
            second.innerHTML = "---";
        } else {
            document.getElementById("timer").innerHTML = "";
            // 1000 mili giây chia 1000 -> 1 giây 
            // 60 giây chia 60 -> 1 phút
            // 60 phút chia 60 -> 1h
            // 24h chia 24 -> 1 ngày

            // giả sử distance = 987654321 mili giây 
            // 987654321 mili giây = 987654.321 giây =  16460.90535 phút = 274.3484225 giờ = 11.43118427 ngày 
            // nhưng ta cần lấy số dư của ngày 

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            // ta lấy số dư còn lại của ngày là (distance % (1000 * 60 * 60 * 24)) ( mili giây) chia cho 
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            day.innerHTML = days + "d";
            hour.innerHTML = hours + "h";
            minute.innerHTML = minutes + "m";
            second.innerHTML = seconds + "s";

            // Reset
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = titleDate;
                day.innerHTML = "---";
                hour.innerHTML = "---";
                minute.innerHTML = "---";
                second.innerHTML = "---";
            }
        }
    }, 1000)
}

