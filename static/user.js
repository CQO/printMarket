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
    }
}, 100);