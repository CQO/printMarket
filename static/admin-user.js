window.userInfo = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')) : null;
function checkLogin() {
    if (!window.userInfo) {
        alert('当前操作需要登录!');
        window.location.href = '/admin_login.html';
    }
}
setTimeout(() => {
    if (window.userInfo) {
        document.body.classList.add('user-' + window.userInfo.user_type)
        if (window.usernameShow) {
            window.usernameShow.innerText = window.userInfo.username
            window.usernameShow.onclick = function () {
                localStorage.clear()
                window.location.href = '/admin_login.html';
            }
        }
    } else {
        checkLogin()
    }
}, 100);

// 保存CSV
function fake_click(obj) {
var ev = document.createEvent("MouseEvents");
ev.initMouseEvent(
    "click", true, false, window, 0, 0, 0, 0, 0
    , false, false, false, false, 0, null
    );
obj.dispatchEvent(ev);
}
function download(name, data) {
var urlObject = window.URL || window.webkitURL || window;

var downloadData = new Blob([data]);

var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
save_link.href = urlObject.createObjectURL(downloadData);
save_link.download = name;
fake_click(save_link);
}

function saveCSV (name, data) {
let saveData = ''
data.forEach(element => {
    if (element) {
    saveData += element.join(',')
    saveData += '\r\n'
    }
});

var urlObject = window.URL || window.webkitURL || window;

var downloadData = new Blob(['\ufeff' + saveData], { type: 'text/csv,charset=UTF-8'});

var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
save_link.href = urlObject.createObjectURL(downloadData);
save_link.download = name;
fake_click(save_link);
}