let liens = 0;
const table = document.createElement("table");

function addTable() {
    if (document.getElementById('table') !=null){
        alert("Table already created");
    }
    else {


        table.innerHTML =
        "<table>\n" +

            "<th class='numbers'>\n"+ liens + "</th>\n"+ "<th>\n"+ "another line" + "</th>\n"+

        "</table>";

        table.setAttribute('id','table');
        document.body.append(table);
        liens++;
    }
}

function addLine() {
    if (document.getElementById('table') === null){
        alert("Creat a table");
        return null;
    }
    let t = table.insertRow();
    t.innerHTML = "<th class='numbers'>\n"+ liens + "</th>\n"+ "<th>\n"+ "another line" + "</th>\n";
    liens++;

}

function deleteLine(){
    if (document.getElementById('element').value==="") {
        alert("Write a number");
        return null;
    }
    const element = document.getElementById('element');
    let th = document.getElementsByClassName('numbers');
    let flag = 0;
    console.log(Number(element.value))
    try {
        for (let i = 0; i < th.length; i++) {
            const thElement = th[i];
            console.log(Number(thElement.textContent))
            if (Number(thElement.textContent)    === Number(element.value)){
                thElement.parentElement.remove()
                flag = 1;

            }
        }

        if (flag === 0) {
            alert('wrong number')
        }

    }
    catch (e){
        alert("Wrong number");
    }

}