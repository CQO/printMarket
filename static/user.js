window.userInfo = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')) : null;
function checkLogin() {
    if (!window.userInfo) {
        alert('当前操作需要登录!');
        window.location.href = '/login.html';
    }
}
setTimeout(() => {
    if (window.userInfo) {
        document.body.classList.add('user-' + window.userInfo.user_type)
        if (document.querySelector('.user-name')) {
            document.querySelector('.user-name').innerText = window.userInfo.username
        }
    }
}, 100);

function tcdl () {
    localStorage.clear()
    window.location.href = '/login.html';
}