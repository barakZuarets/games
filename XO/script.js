var a = ['', '', '', '', '', '', '', '', ''];
var char = 'x';
function push(num) {
    // debugger;
    if (a[num] == '') {
        a[num] = char;
        if (char == 'x')
            char = 'o';
        else
            char = 'x';
        document.getElementById('turn').innerHTML = 'turn: ' + char;
    }
    print();
    setTimeout(function(){ 
    let check1 = check();
    if (check1 == 'win') {
        if (char == 'x'){
            alert('thr winner is: o');
            let c=parseInt( document.getElementById('oWin').innerHTML);
            document.getElementById('oWin').innerHTML=c+1;
            clean();
            print();
        }
        else{
            alert('thr winner is: x');
            let c=parseInt( document.getElementById('xWin').innerHTML);
            document.getElementById('xWin').innerHTML=c+1;
            clean();
            print();
        }

    }
    else if (check1 == 'teko') {
        alert('teko');
        clean();
        print();
    }
}, 1000); 
}
function print() {
    for (let i = 0; i < 9; i++) {
        let x = 'a' + i.toString();
        document.getElementById(x).innerHTML = a[i];
    }
}

function clean() {
    for (let i = 0; i < 9; i++) {
        a[i] = '';
    }

}
function check() {
    // debugger;
    if (a[0] != '' && a[0] == a[1] && a[0] == a[2] ||
        a[3] != '' && a[3] == a[4] && a[3] == a[5] ||
        a[6] != '' && a[6] == a[7] && a[6] == a[8] ||
        a[0] != '' && a[0] == a[3] && a[0] == a[6] ||
        a[1] != '' && a[1] == a[4] && a[1] == a[7] ||
        a[2] != '' && a[2] == a[5] && a[2] == a[8] ||
        a[0] != '' && a[0] == a[4] && a[0] == a[8] ||
        a[6] != '' && a[6] == a[2] && a[6] == a[4])
        return 'win';
    else
        for (let i = 0; i < 9; i++) {
            if (a[i] == '') {
                return 'not end';
            }
        }
    return 'teko';
}

