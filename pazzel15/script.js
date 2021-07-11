

var arr = [['X', 'X', 'X'], ['X', 'X', 'X'], ['X', 'X', 'X']];
var arr2 =[["<img src='1.jpg'>","<img src='2.jpg'>","<img src='3.jpg'>"],["<img src='4.jpg'>","<img src='5.jpg'>","<img src='6.jpg'>"],["<img src='7.jpg'>","<img src='8.jpg'>","<img src='9.jpg'>"]] 
var arr3=[['X','2','3'],['1','4','5'],['7','8','6']];
var count=0;
function fillArr() {
    let flag = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            let x = Math.floor(Math.random() * 10);
            while (isItemInArray(arr, x) == false || x==0) {
                x = Math.floor(Math.random() * 10);
            }
                arr[i][j] = x;
        }
    }
    find9();
}

function isItemInArray(array, item) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (array[i][j] == item) {
                return false;
            }
        }
    }
    return true;
}

function print() {
    fillArr();
    let str='';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let place = 'b' + i.toString() + j.toString();
            str=getImg(arr[i][j]);
            document.getElementById(place).innerHTML = str;
            document.getElementById(place).value = arr[i][j];
        }
    }
}

function getImg(num)
{
    if(num==1)
    {
        return arr2[0][0];
    }
    else if (num==2)
    {
        return arr2[0][1];
    }
    else if (num==3)
    {
        return arr2[0][2];
    }
    else if (num==4)
    {
        return arr2[1][0];
    }
    else if (num==5)
    {
        return arr2[1][1];
    }
    else if (num==6)
    {
        return arr2[1][2];
    }
    else if (num==7)
    {
        return arr2[2][0];
    }
    else if (num==8)
    {
        return arr2[2][1];
    }else
        return '';
}

function move(x, y) {
    let plac = 'b' + x + y;
    if (plac == 'b00') {
        if (document.getElementById(plac).value != 'X') {
            if (document.getElementById('b01').value == 'X') {
                document.getElementById('b01').value = document.getElementById(plac).value;
                document.getElementById(plac).value = 'X';
                document.getElementById(plac).innerHTML='';
                document.getElementById('b01').innerHTML=getImg(document.getElementById('b01').value);
                count++;
                document.getElementById('count').innerHTML=count;
            }
            else {
                if (document.getElementById('b10').value == 'X') {
                    document.getElementById('b10').value = document.getElementById(plac).value;
                    document.getElementById(plac).value = 'X';
                    document.getElementById(plac).innerHTML='';
                document.getElementById('b10').innerHTML=getImg(document.getElementById('b10').value);
                count++;
                document.getElementById('count').innerHTML=count;
                }
            }
        }
    }
    if (plac == 'b10') {
        if (document.getElementById(plac).value != 'X') {
            if (document.getElementById('b00').value == 'X') {
                document.getElementById('b00').value = document.getElementById(plac).value;
                document.getElementById(plac).value = 'X';
                document.getElementById(plac).innerHTML='';
                document.getElementById('b00').innerHTML=getImg(document.getElementById('b00').value);
                count++;
                document.getElementById('count').innerHTML=count;
            }
            else {
                if (document.getElementById('b20').value == 'X') {
                    document.getElementById('b20').value = document.getElementById(plac).value;
                    document.getElementById(plac).value = 'X';
                    document.getElementById(plac).innerHTML='';
                document.getElementById('b20').innerHTML=getImg(document.getElementById('b20').value);
                count++;
                document.getElementById('count').innerHTML=count;
                }
                else {
                    if (document.getElementById('b11').value == 'X') {
                        document.getElementById('b11').value = document.getElementById(plac).value;
                        document.getElementById(plac).value = 'X';
                        document.getElementById(plac).innerHTML='';
                document.getElementById('b11').innerHTML=getImg(document.getElementById('b11').value);
                count++;
                document.getElementById('count').innerHTML=count;
                    }
                }
            }
        }
    }
    if (plac == 'b20') {
        if (document.getElementById(plac).value != 'X') {
            if (document.getElementById('b10').value == 'X') {
                document.getElementById('b10').value = document.getElementById(plac).value;
                document.getElementById(plac).value = 'X';
                document.getElementById(plac).innerHTML='';
                document.getElementById('b10').innerHTML=getImg(document.getElementById('b10').value);
                count++;
                document.getElementById('count').innerHTML=count;
            }
            else {
                if (document.getElementById('b21').value == 'X') {
                    document.getElementById('b21').value = document.getElementById(plac).value;
                    document.getElementById(plac).value = 'X';
                    document.getElementById(plac).innerHTML='';
                document.getElementById('b21').innerHTML=getImg(document.getElementById('b21').value);
                count++;
                document.getElementById('count').innerHTML=count;
                }

            }
        }
    }
    if (plac == 'b01') {
        if (document.getElementById(plac).value != 'X') {
            if (document.getElementById('b00').value == 'X') {
                document.getElementById('b00').value = document.getElementById(plac).value;
                document.getElementById(plac).value = 'X';
                document.getElementById(plac).innerHTML='';
                document.getElementById('b00').innerHTML=getImg(document.getElementById('b00').value);
                count++;
                document.getElementById('count').innerHTML=count;
            }
            else {
                if (document.getElementById('b02').value == 'X') {
                    document.getElementById('b02').value = document.getElementById(plac).value;
                    document.getElementById(plac).value = 'X';
                    document.getElementById(plac).innerHTML='';
                document.getElementById('b02').innerHTML=getImg(document.getElementById('b02').value);
                count++;
                document.getElementById('count').innerHTML=count;
                }
                else {
                    if (document.getElementById('b11').value == 'X') {
                        document.getElementById('b11').value = document.getElementById(plac).value;
                        document.getElementById(plac).value = 'X';
                        document.getElementById(plac).innerHTML='';
                document.getElementById('b11').innerHTML=getImg(document.getElementById('b11').value);
                count++;
                document.getElementById('count').innerHTML=count;
                    }
                }
            }
        }
    }
    if (plac == 'b11') {
        if (document.getElementById(plac).value != 'X') {
            if (document.getElementById('b10').value == 'X') {
                document.getElementById('b10').value = document.getElementById(plac).value;
                document.getElementById(plac).value = 'X';
                document.getElementById(plac).innerHTML='';
                document.getElementById('b10').innerHTML=getImg(document.getElementById('b10').value);
                count++;
                document.getElementById('count').innerHTML=count;
            }
            else {
                if (document.getElementById('b12').value == 'X') {
                    document.getElementById('b12').value = document.getElementById(plac).value;
                    document.getElementById(plac).value = 'X';
                    document.getElementById(plac).innerHTML='';
                document.getElementById('b12').innerHTML=getImg(document.getElementById('b12').value);
                count++;
                document.getElementById('count').innerHTML=count;
                }
                else {
                    if (document.getElementById('b01').value == 'X') {
                        document.getElementById('b01').value = document.getElementById(plac).value;
                        document.getElementById(plac).value = 'X';
                        document.getElementById(plac).innerHTML='';
                document.getElementById('b01').innerHTML=getImg(document.getElementById('b01').value);
                count++;
                document.getElementById('count').innerHTML=count;
                    }
                    else if (document.getElementById('b21').value == 'X') {
                        document.getElementById('b21').value = document.getElementById(plac).value;
                        document.getElementById(plac).value = 'X';
                        document.getElementById(plac).innerHTML='';
                document.getElementById('b21').innerHTML=getImg(document.getElementById('b21').value);
                count++;
                document.getElementById('count').innerHTML=count;
                    }
                }
            }
        }
    }
    if (plac == 'b21') {
        if (document.getElementById(plac).value != 'X') {
            if (document.getElementById('b20').value == 'X') {
                document.getElementById('b20').value = document.getElementById(plac).value;
                document.getElementById(plac).value = 'X';
                document.getElementById(plac).innerHTML='';
                document.getElementById('b20').innerHTML=getImg(document.getElementById('b20').value);
                count++;
                document.getElementById('count').innerHTML=count;
            }
            else {
                if (document.getElementById('b22').value == 'X') {
                    document.getElementById('b22').value = document.getElementById(plac).value;
                    document.getElementById(plac).value = 'X';
                    document.getElementById(plac).innerHTML='';
                document.getElementById('b22').innerHTML=getImg(document.getElementById('b22').value);
                count++;
                document.getElementById('count').innerHTML=count;
                }
                else {
                    if (document.getElementById('b11').value == 'X') {
                        document.getElementById('b11').value = document.getElementById(plac).value;
                        document.getElementById(plac).value = 'X';
                        document.getElementById(plac).innerHTML='';
                document.getElementById('b11').innerHTML=getImg(document.getElementById('b11').value);
                count++;
                document.getElementById('count').innerHTML=count;
                    }
                }
            }
        }
    }
    if (plac == 'b02') {
        if (document.getElementById(plac).value != 'X') {
            if (document.getElementById('b01').value == 'X') {
                document.getElementById('b01').value = document.getElementById(plac).value;
                document.getElementById(plac).value = 'X';
                document.getElementById(plac).innerHTML='';
                document.getElementById('b01').innerHTML=getImg(document.getElementById('b01').value);
                count++;
                document.getElementById('count').innerHTML=count;
            }
            else {
                if (document.getElementById('b12').value == 'X') {
                    document.getElementById('b12').value = document.getElementById(plac).value;
                    document.getElementById(plac).value = 'X';
                    document.getElementById(plac).innerHTML='';
                document.getElementById('b12').innerHTML=getImg(document.getElementById('b12').value);
                count++;
                document.getElementById('count').innerHTML=count;
                }

            }
        }
    }
    if (plac == 'b12') {
        if (document.getElementById(plac).value != 'X') {
            if (document.getElementById('b22').value == 'X') {
                document.getElementById('b22').value = document.getElementById(plac).value;
                document.getElementById(plac).value = 'X';
                document.getElementById(plac).innerHTML='';
                document.getElementById('b22').innerHTML=getImg(document.getElementById('b22').value);
                count++;
                document.getElementById('count').innerHTML=count;
            }
            else {
                if (document.getElementById('b02').value == 'X') {
                    document.getElementById('b02').value = document.getElementById(plac).value;
                    document.getElementById(plac).value = 'X';
                    document.getElementById(plac).innerHTML='';
                document.getElementById('b02').innerHTML=getImg(document.getElementById('b02').value);
                count++;
                document.getElementById('count').innerHTML=count;
                }
                else {
                    if (document.getElementById('b11').value == 'X') {
                        document.getElementById('b11').value = document.getElementById(plac).value;
                        document.getElementById(plac).value = 'X';
                        document.getElementById(plac).innerHTML='';
                document.getElementById('b11').innerHTML=getImg(document.getElementById('b11').value);
                count++;
                document.getElementById('count').innerHTML=count;
                    }
                }
            }
        }
    }
    if (plac == 'b22') {
        if (document.getElementById(plac).value != 'X') {
            if (document.getElementById('b21').value == 'X') {
                document.getElementById('b21').value = document.getElementById(plac).value;
                document.getElementById(plac).value = 'X';
                document.getElementById(plac).innerHTML='';
                document.getElementById('b21').innerHTML=getImg(document.getElementById('b21').value);
                count++;
                document.getElementById('count').innerHTML=count;
            }
            else {
                if (document.getElementById('b12').value == 'X') {
                    document.getElementById('b12').value = document.getElementById(plac).value;
                    document.getElementById(plac).value = 'X';
                    document.getElementById(plac).innerHTML='';
                document.getElementById('b12').innerHTML=getImg(document.getElementById('b12').value);
                count++;
                document.getElementById('count').innerHTML=count;
                }

            }
        }
    }
    check();
}


function check()
{
    let matrix=[[1,2,3],[4,5,6],[7,8,'X']];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let place = 'b' + i.toString() + j.toString();
            if(document.getElementById(place).value != matrix[i][j])
                return false;
        }
    }
    pause();
    document.getElementById('b22').innerHTML=arr2[2][2];
    setTimeout(function() {
     alert('winner you do it in '+ count + ' moves, at time of: ' + minutesLabel.innerHTML + minutesLabel2.innerHTML
     + ':'+ secondsLabel.innerHTML + secondsLabel2.innerHTML );
    clear();
    count=0;
    document.getElementById('count').innerHTML=count;
    print();
    clea();
    play();
}, 5000);
}

function find9()
{
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i][j]==9)
            {
                arr[i][j]='X';
            }
        }
    }
}

function clear(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
                arr[i][j]='X';
            }
        
    }
}
print();
play();


var minutesLabel = document.getElementById("minutesTens");
var minutesLabel2 = document.getElementById("minutesUnit");
var secondsLabel = document.getElementById("secondsTens");
var secondsLabel2 = document.getElementById("secondsUnit");
var totalSeconds = 0;
var get;
function play() {
  get = setInterval(setTime, 100);

}
function pause() {
  clearInterval(get);
}

function clea() {
  pause();
  totalSeconds=0;
  secondsLabel.innerHTML = '0';
  minutesLabel.innerHTML = '0';
  secondsLabel2.innerHTML = '0';
  minutesLabel2.innerHTML = '0';

}

function setTime() {
  totalSeconds++;
  secondsLabel.innerHTML =Math.floor(totalSeconds%60/10);
  secondsLabel2.innerHTML = parseInt(totalSeconds)%10  ;
  minutesLabel2.innerHTML =parseInt(totalSeconds / 60)%10;
  minutesLabel.innerHTML =Math.floor(totalSeconds/600);
}


