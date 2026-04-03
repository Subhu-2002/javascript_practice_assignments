function loadData(){
    let btnArr = [
        ['', '', '', 'C'],
        ['1', '2', '3' ,'+'],
        ['4', '5', '6', '-'],
        ['7', '8', '9', '*'],
        ['0', '.', '=', '/']
    ]

    
    let btnTable = document.getElementById("btnTable");
    let inputBox = document.getElementById("inputBox");
    let symbolBox = document.getElementById("symbol");

    let lastValue, result, symbol;

    for(let i=0; i<btnArr.length; i++){
        let row = document.createElement("tr");
        for(let j=0; j<btnArr[i].length; j++){
            let col = document.createElement("td");
            let btn = document.createElement("input");
            btn.setAttribute("type", "button");
            btn.setAttribute("value", ""+btnArr[i][j]);
            btn.style.width="100%";
            btn.style.height="80px";
            btn.style.fontSize="24px";
            btn.style.fontWeight="bold";

            btn.addEventListener("click", function(){
                if(btnArr[i][j] == '+'){
                    symbolBox.value = '+';
                    symbol = '+';
                    lastValue = parseFloat(inputBox.value);
                    inputBox.value = "";
                }else if(btnArr[i][j] == '-'){
                    symbolBox.value = '-';
                    symbol = '-';
                    lastValue = parseFloat(inputBox.value);
                    inputBox.value = "";
                }else if(btnArr[i][j] == '*'){
                    symbolBox.value = '*';
                    symbol = '*';
                    lastValue = parseFloat(inputBox.value);
                    inputBox.value = "";
                }else if(btnArr[i][j] == '/'){
                    symbolBox.value = '/';
                    symbol = '/';
                    lastValue = parseFloat(inputBox.value);
                    inputBox.value = "";
                }else if(btnArr[i][j] == "C"){
                    symbolBox.value = '';
                    lastValue = 0;
                    inputBox.value = "";
                }else if(btnArr[i][j] == '='){

                    if(symbol == '+') result = lastValue + parseFloat(inputBox.value);
                    else if(symbol == '-') result = lastValue - parseFloat(inputBox.value);
                    else if(symbol == '*') result = lastValue * parseFloat(inputBox.value);
                    else result = lastValue / parseFloat(inputBox.value);

                    symbolBox.value = '='; 
                    inputBox.value = result;
                }else{
                    inputBox.value = inputBox.value+btnArr[i][j];
                }
            })

            col.style.padding="8px";
            col.appendChild(btn);

            row.appendChild(col);
        }
        btnTable.appendChild(row);
    }
}