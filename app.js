var myArray = [
    {'rank':'1', 'country':'China', 'gold':'24', 'silver':'14', 'bronze':'13', 'total':'51'},
    {'rank':'2', 'country':'United States', 'gold':'20', 'silver':'23', 'bronze':'16', 'total':'59'},
    {'rank':'3', 'country':'Japan', 'gold':'17', 'silver':'5', 'bronze':'9', 'total':'31'},
    {'rank':'4', 'country':'Australia', 'gold':'14', 'silver':'3', 'bronze':'14', 'total':'31'},
    {'rank':'5', 'country':'ROC', 'gold':'12', 'silver':'19', 'bronze':'13', 'total':'44'},
]

buildTable(myArray)



function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].rank}</td>
                        <td>${data[i].country}</td>
                        <td>${data[i].gold}</td>
                        <td>${data[i].silver}</td>
                        <td>${data[i].bronze}</td>
                        <td>${data[i].total}</td>
                  </tr>`
        table.innerHTML += row


    }
}