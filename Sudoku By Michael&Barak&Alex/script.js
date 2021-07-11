// משתנים גלובליים


//משתנה גלובלי המכיל את לוח הסודוקו
var sudokuBoard = [//sudoku
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
    , [4, 5, 6, 7, 8, 9, 1, 2, 3]
    , [7, 8, 9, 1, 2, 3, 4, 5, 6]
    , [2, 3, 4, 5, 6, 7, 8, 9, 1]
    , [5, 6, 7, 8, 9, 1, 2, 3, 4]
    , [8, 9, 1, 2, 3, 4, 5, 6, 7]
    , [3, 4, 5, 6, 7, 8, 9, 1, 2]
    , [6, 7, 8, 9, 1, 2, 3, 4, 5]
    , [9, 1, 2, 3, 4, 5, 6, 7, 8]
];
//משתנה שמכיל העתק של לוח הסודוקו של המשחק האוחרון
var boardCopy = [];
//מונה כמות רמזים
var hint = 0;
//מכיל את שם המשתמש לאחר התחברות
var userName = 'guest';

var num;
//מערך המכיל את שמות המשתמשים והסיסמאות
var userNameAndPassword = [['abcd', '1234']];


// ___________________________________________________________________________________________________________

// יצירת לוח

// מקבל לוח ואת רמת המחיקה וכמות תאים למחיקה
//מחזיר טבלה מחוקה בהתאם לכמות התאים המבוקשים
function buildBordBydifficulty(myMatrix, difficulty) {
    let placeToDelete = selectRandomPlaces(difficulty);
    for (let i = 0; i < placeToDelete.length; i++) {
        myMatrix[placeToDelete[i][0]][placeToDelete[i][1]] = ' ';
    }
    return myMatrix;
}

//בוחר מספרים למחוק לקמה קלה
function selectRandomPlaces(num) {
    // debugger;
    let placeToDelete = [[0, 0]];
    let count = 0;
    let x;
    let y;
    while (count < num) {
        y = Math.floor(Math.random() * 9);
        x = Math.floor(Math.random() * 9);
        if (isItemInArray(placeToDelete, [x, y])) {
            placeToDelete.push([x, y]);
            count++;
        }
    }
    return placeToDelete;
}

//מקבל מערך מיקומים ומיקום
//מחזיר אם המיקום נמצא ברשימת מיקומים מחיקה
function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return false;
        }
    }
    return true;
}

// משנה את הסודוקו באופן רנדומלי לשורות או לעמודות
function randomMatrix() {
    let rotateRowsOrColumns = Math.floor(Math.random() * 2)
    while (rotateRowsOrColumns >= 0) {
        sudokuBoard = rotateRows(sudokuBoard);//sudoku
        sudokuBoard = rotateColumns(sudokuBoard);//sudoku
        rotateRowsOrColumns--;
    }
    return sudokuBoard;

}
//מקבל לוח סודוקו
//מעביר 3 שורות מהסוף להתחלה
function rotateRows(myMatrix) {

    for (let i = 0; i < 3; i++) {
        myMatrix.push(myMatrix.shift());
    }
    return myMatrix;
}
//מקבל לוח סודוקו
//מעביר 3 עמודות מהסוף להתחלה
function rotateColumns(myMatrix) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 3; j++)
            myMatrix[i].push(myMatrix[i].shift());
    }
    return myMatrix;
}


// מקבל את הלוח הראשי
//מעתיק את הלוח הראשי כדי שלא ישתנה
//מחזיר העתק של הלוח
function copyMatrix(matrix) {
    let newMatrix = [[0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0, 0, 0]];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            newMatrix[i][j] = matrix[i][j];
        }
    }
    return newMatrix;
}



function print() {
    whitebox();


    let str = 'b';
    num = Number(document.getElementById('dificult').value);
    document.getElementById('levelsDiv').style.display = 'none';
    document.getElementById('gameDiv').style.display = 'block';
    sudokuBoard = randomMatrix();

    boardCopy = copyMatrix(sudokuBoard);
    boardCopy = buildBordBydifficulty(boardCopy, num);

    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            str += i.toString() + k.toString();
            document.getElementById(str).value = boardCopy[i][k];
            if (boardCopy[i][k] != ' ') {
                document.getElementById(str).disabled = true;
                document.getElementById(str).style.backgroundColor = 'rgb(229, 226, 226)';
            }

            str = 'b';
        }
    }

}



// ___________________________________________________________________________________________________________

//מאמת התחברות ומעביר לדף המשחק
function logIn() {

    let uName = document.getElementById('username1').value;
    let pass = document.getElementById('password1').value;
    if (isItemInArray(userNameAndPassword, [uName, pass]) == false) {
        document.getElementById('un').innerHTML = 'Hellow ' + uName;
        document.getElementById('border2').style.display = 'none';
        document.getElementById('levelsDiv').style.display = 'block';
    }
    else {
        alert('username or password wrong');
    }

}
function signup(){
    document.getElementById('cPassword1').style.display = 'block';
    document.getElementById('cPassword').style.display = 'block';
    document.getElementById('reg').style.display = 'block';
    document.getElementById('log').style.display = 'none';
    
}

function registeretin()
{
    let uName = document.getElementById('username1').value;
    let pass = document.getElementById('password1').value;
    let cPass = document.getElementById('cPassword1').value;
    if(pass!=cPass)
    {
        alert('the password and the confirm is not the same');
    }
    else  if (isItemInArray(userNameAndPassword, [uName, pass]) == false)
    {
        alert('the user name exist change your user name  or login if it is yours');
    }
    else
    {
        userNameAndPassword.push([uName, pass]);
        document.getElementById('un').innerHTML = 'Hellow ' + uName;
        document.getElementById('border2').style.display = 'none';
        document.getElementById('levelsDiv').style.display = 'block';
    }

}

// ___________________________________________________________________________________________________________


// מעביר בין המסכים בהתאם לקישור
function pushLink(str) {
    if (str == 'Home') {
        document.getElementById('border1').style.display = 'block';
        document.getElementById('border2').style.display = 'none';
        document.getElementById('border3').style.display = 'none';
        document.getElementById('border4').style.display = 'none';
        document.getElementById('levelsDiv').style.display = 'none';
        document.getElementById('gameDiv').style.display = 'none';
        document.getElementById('h1').style.display = 'none';
        document.getElementById('h2').style.display = 'none';
        document.getElementById('h3').style.display = 'none';
        document.getElementById('h4').style.display = 'none';
        
    }
    else if (str == 'login') {
        document.getElementById('border1').style.display = 'none';
        document.getElementById('border2').style.display = 'block';
        document.getElementById('border3').style.display = 'none';
        document.getElementById('border4').style.display = 'none';
        document.getElementById('gameDiv').style.display = 'none';
        document.getElementById('levelsDiv').style.display = 'none';
        document.getElementById('h1').style.display = 'block';
        document.getElementById('h2').style.display = 'none';
        document.getElementById('h3').style.display = 'none';
        document.getElementById('h4').style.display = 'none';
        document.getElementById('cPassword1').style.display = 'none';
    document.getElementById('cPassword').style.display = 'none';
    document.getElementById('reg').style.display = 'none';
    document.getElementById('log').style.display = 'block';
    document.getElementById('username1').value='';
    document.getElementById('password1').value='';
    document.getElementById('cPassword1').value='';

    }
    else if (str == 'game') {
        document.getElementById('border1').style.display = 'none';
        document.getElementById('border2').style.display = 'none';
        document.getElementById('border3').style.display = 'none';
        document.getElementById('border4').style.display = 'none';
        document.getElementById('gameDiv').style.display = 'none';
        document.getElementById('levelsDiv').style.display = 'block';
        document.getElementById('h1').style.display = 'none';
        document.getElementById('h2').style.display = 'none';
        document.getElementById('h3').style.display = 'none';
        document.getElementById('h4').style.display = 'block';

    }
    else if (str == 'about') {
        document.getElementById('border1').style.display = 'none';
        document.getElementById('border2').style.display = 'none';
        document.getElementById('border3').style.display = 'none';
        document.getElementById('border4').style.display = 'block';
        document.getElementById('levelsDiv').style.display = 'none';
        document.getElementById('gameDiv').style.display = 'none';
        document.getElementById('h1').style.display = 'none';
        document.getElementById('h2').style.display = 'none';
        document.getElementById('h3').style.display = 'block';
        document.getElementById('h4').style.display = 'none';

    }
    else {
        document.getElementById('border1').style.display = 'none';
        document.getElementById('border2').style.display = 'none';
        document.getElementById('border3').style.display = 'block';
        document.getElementById('border4').style.display = 'none';
        document.getElementById('levelsDiv').style.display = 'none';
        document.getElementById('h1').style.display = 'none';
        document.getElementById('gameDiv').style.display = 'none';
        document.getElementById('h2').style.display = 'block';
        document.getElementById('h3').style.display = 'none';
        document.getElementById('h4').style.display = 'none';

    }

}

// ___________________________________________________________________________________________________________

// מנקה את הלוח לחזרה לתחילת המשחק 
function clean() {
    whitebox();
    hint = 0;
    let str = 'b';
    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            str += i.toString() + k.toString();
            document.getElementById(str).value = boardCopy[i][k];
            document.getElementById(str).style.color = 'black';

            if (boardCopy[i][k] != ' ') {
                document.getElementById(str).disabled = true;
                document.getElementById(str).style.backgroundColor = 'rgb(229, 226, 226)';
            }

            str = 'b';
        }
    }
}
//מאפס את כל התכונות בלוח ליצירת לוח חדש
function whitebox() {
    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            str = 'b' + i.toString() + k.toString();
            document.getElementById(str).style.backgroundColor = 'white';
            document.getElementById(str).disabled = false;
            document.getElementById(str).value = '';
            document.getElementById(str).style.color = 'black';
        }
    }
}
// ___________________________________________________________________________________________________________

// רמז
function hintClick() {

    let str = 'b';
    let i;
    let j;
    while (hint < 3) {
        i = Math.floor(Math.random() * 9);
        j = Math.floor(Math.random() * 9);
        str = 'b' + i.toString() + j.toString();
        if (document.getElementById(str).value != sudokuBoard[i][j]) {
            document.getElementById(str).value = sudokuBoard[i][j];
            document.getElementById(str).disabled = true;
            hint++;
            break;

        }

    }
}


// בודק את המשחק אם מולא כמו שצריך
function check() {
    let str = 'b';
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            str += i.toString() + j.toString();
            if (sudokuBoard[i][j] != Number(document.getElementById(str).value)) {
                alert(' טעות בפתרון במקום:' + i.toString() + j.toString());
                hint = 0;
                num = [];
                whitebox();
                document.getElementById('levelsDiv').style.display = 'block';
                document.getElementById('gameDiv').style.display = 'none';
                break;
            }
            str = 'b';
        }
    }
    alert('מצוין');
    hint = 0;
    num = [];
    whitebox();
    document.getElementById('levelsDiv').style.display = 'block';
    document.getElementById('gameDiv').style.display = 'none';
}
// ___________________________________________________________________________________________________________

//הפיכת מספרים לאדומים בלחיצה

// צובע את התאים במשבצת בשורה ובעמודה של המיקום שנלחץ
function paint(x, y, qub) {
    let str = 'b';
    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            str += i.toString() + k.toString();
            document.getElementById(str).style.color = 'black';
            str = 'b';
        }
    }
    let squarr = selectTheCellsInTheQube(qub);
    for (let i = 0; i < squarr.length; i++) {
        str = 'b' + squarr[i];
        document.getElementById(str).style.color = 'red';
    }
    for (let i = 0; i < 9; i++) {
        str = 'b' + x.toString() + i.toString();
        document.getElementById(str).style.color = 'red';

        str = 'b' + i.toString() + y.toString();
        document.getElementById(str).style.color = 'red';
    }
}
//מקבל מספר קוביה ומחזיא התאים באותה קוביה
function selectTheCellsInTheQube(num) {
    if (num == 0) {
        return [['00'], ['01'], ['02'], ['10'], ['11'], ['12'], ['20'], ['21'], ['22']];
    }
    if (num == 1) {
        return [['03'], ['04'], ['05'], ['13'], ['14'], ['15'], ['23'], ['24'], ['25']];
    }
    if (num == 2) {
        return [['06'], ['07'], ['08'], ['16'], ['17'], ['18'], ['26'], ['27'], ['28']];
    }
    if (num == 3) {
        return [['30'], ['31'], ['32'], ['40'], ['41'], ['42'], ['50'], ['51'], ['52']];
    }
    if (num == 4) {
        return [['33'], ['34'], ['35'], ['43'], ['44'], ['45'], ['53'], ['54'], ['55']];
    }
    if (num == 5) {
        return [['36'], ['37'], ['38'], ['46'], ['47'], ['48'], ['56'], ['57'], ['58']];
    }
    if (num == 6) {
        return [['60'], ['61'], ['62'], ['70'], ['71'], ['72'], ['80'], ['81'], ['82']];
    }
    if (num == 7) {
        return [['63'], ['64'], ['65'], ['73'], ['74'], ['75'], ['83'], ['84'], ['85']];
    }
    if (num == 8) {
        return [['66'], ['67'], ['68'], ['76'], ['77'], ['78'], ['86'], ['87'], ['88']];
    }
}


