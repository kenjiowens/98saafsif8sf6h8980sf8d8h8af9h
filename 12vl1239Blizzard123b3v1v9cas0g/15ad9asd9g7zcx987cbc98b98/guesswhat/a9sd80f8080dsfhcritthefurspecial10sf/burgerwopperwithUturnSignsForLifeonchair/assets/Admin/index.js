window.addEventListener('beforeunload', ev => {
    ev.returnValue = 
        'Are you sure you want to leave?';
});
function create() {
    var url = document.getElementById('input').value;
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}
var password;
var pass1="fishy";
password=prompt('Enter Password To View Page','');
if (password==pass1) {
    //alert('Correct password, Click OK to enter');
}
else {
    alert('Wrong, try again');
    window.location="https://classroom.google.com"
};

const data = JSON.stringify({ action: 'close',
 when: +new Date
});
window.addEventListener('beforeunload', ev => {
    navigator.sendBeacon('/analytics', data);
});
const pendingOps = new Set();

function updatePage() {
    const promise = fetch('/new-content');


pendingOps.add(promise);

const cleanup = 
    () => pendingOps.delete(promise);
promise.then(cleanup).catch(cleanup);
}