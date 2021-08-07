var myArray = [
    {"rank":"66","country":"India","gold":"0","silver":"2","bronze":"4","total":"6"},
{"rank":"1","country":"China","gold":"38","silver":"29","bronze":"17","total":"84"},
{"rank":"2","country":"United States","gold":"34","silver":"36","bronze":"32","total":"102"},
{"rank":"3","country":"Japan","gold":"25","silver":"12","bronze":"16","total":"53"},
{"rank":"4","country":"Great Britain","gold":"20","silver":"21","bronze":"21","total":"62"},
{"rank":"5","country":"ROC","gold":"17","silver":"25","bronze":"23","total":"65"},
{"rank":"6","country":"Australia","gold":"17","silver":"6","bronze":"21","total":"44"},
{"rank":"7","country":"Germany","gold":"10","silver":"11","bronze":"16","total":"37"},
{"rank":"8","country":"Italy","gold":"10","silver":"10","bronze":"18","total":"38"},
{"rank":"9","country":"Netherlands","gold":"9","silver":"10","bronze":"12","total":"31"},
{"rank":"10","country":"France","gold":"7","silver":"12","bronze":"11","total":"30"},
{"rank":"11","country":"New Zealand","gold":"7","silver":"6","bronze":"7","total":"20"},
{"rank":"12","country":"Hungary","gold":"6","silver":"7","bronze":"6","total":"19"},
{"rank":"13","country":"Canada","gold":"6","silver":"6","bronze":"11","total":"23"},
{"rank":"14","country":"Republic of Korea","gold":"6","silver":"4","bronze":"10","total":"20"},
{"rank":"15","country":"Brazil","gold":"6","silver":"4","bronze":"8","total":"18"},
{"rank":"16","country":"Cuba","gold":"6","silver":"3","bronze":"4","total":"13"},
{"rank":"17","country":"Poland","gold":"4","silver":"4","bronze":"5","total":"13"},
{"rank":"18","country":"Czech Republic","gold":"4","silver":"3","bronze":"2","total":"9"},
{"rank":"19","country":"Jamaica","gold":"4","silver":"1","bronze":"3","total":"8"},
{"rank":"20","country":"Spain","gold":"3","silver":"7","bronze":"6","total":"16"},
{"rank":"21","country":"Switzerland","gold":"3","silver":"4","bronze":"6","total":"13"},
{"rank":"22","country":"Denmark","gold":"3","silver":"3","bronze":"4","total":"10"},
{"rank":"23","country":"Croatia","gold":"3","silver":"3","bronze":"2","total":"8"},
{"rank":"23","country":"Kenya","gold":"3","silver":"3","bronze":"2","total":"8"},
{"rank":"25","country":"Norway","gold":"3","silver":"2","bronze":"1","total":"6"},
{"rank":"26","country":"Belgium","gold":"3","silver":"1","bronze":"1","total":"5"},
{"rank":"26","country":"Slovenia","gold":"3","silver":"1","bronze":"1","total":"5"},
{"rank":"28","country":"Sweden","gold":"2","silver":"6","bronze":"0","total":"8"},
{"rank":"29","country":"Georgia","gold":"2","silver":"5","bronze":"1","total":"8"},
{"rank":"30","country":"Chinese Taipei","gold":"2","silver":"4","bronze":"6","total":"12"},
{"rank":"31","country":"Turkey","gold":"2","silver":"2","bronze":"8","total":"12"},
{"rank":"32","country":"Iran","gold":"2","silver":"2","bronze":"2","total":"6"},
{"rank":"33","country":"Serbia","gold":"2","silver":"1","bronze":"4","total":"7"},
{"rank":"34","country":"Bulgaria","gold":"2","silver":"1","bronze":"2","total":"5"},
{"rank":"35","country":"Uganda","gold":"2","silver":"1","bronze":"1","total":"4"},
{"rank":"36","country":"Ecuador","gold":"2","silver":"1","bronze":"0","total":"3"},
{"rank":"37","country":"Israel","gold":"2","silver":"0","bronze":"2","total":"4"},
{"rank":"37","country":"Uzbekistan","gold":"2","silver":"0","bronze":"2","total":"4"},
{"rank":"39","country":"Greece","gold":"2","silver":"0","bronze":"1","total":"3"},
{"rank":"39","country":"Qatar","gold":"2","silver":"0","bronze":"1","total":"3"},
{"rank":"41","country":"Bahamas","gold":"2","silver":"0","bronze":"0","total":"2"},
{"rank":"41","country":"Kosovo","gold":"2","silver":"0","bronze":"0","total":"2"},
{"rank":"43","country":"Ukraine","gold":"1","silver":"5","bronze":"10","total":"16"},
{"rank":"44","country":"Belarus","gold":"1","silver":"3","bronze":"3","total":"7"},
{"rank":"45","country":"Romania","gold":"1","silver":"3","bronze":"0","total":"4"},
{"rank":"45","country":"Venezuela","gold":"1","silver":"3","bronze":"0","total":"4"},
{"rank":"47","country":"Hong Kong","gold":"1","silver":"2","bronze":"2","total":"5"},
{"rank":"48","country":"Philippines","gold":"1","silver":"2","bronze":"1","total":"4"},
{"rank":"48","country":"Slovakia","gold":"1","silver":"2","bronze":"1","total":"4"},
{"rank":"50","country":"South Africa","gold":"1","silver":"2","bronze":"0","total":"3"},
{"rank":"51","country":"Austria","gold":"1","silver":"1","bronze":"5","total":"7"},
{"rank":"52","country":"Indonesia","gold":"1","silver":"1","bronze":"3","total":"5"},
{"rank":"53","country":"Portugal","gold":"1","silver":"1","bronze":"2","total":"4"},
{"rank":"54","country":"Ethiopia","gold":"1","silver":"1","bronze":"1","total":"3"},
{"rank":"55","country":"Tunisia","gold":"1","silver":"1","bronze":"0","total":"2"},
{"rank":"56","country":"Ireland","gold":"1","silver":"0","bronze":"2","total":"3"},
{"rank":"57","country":"Estonia","gold":"1","silver":"0","bronze":"1","total":"2"},
{"rank":"57","country":"Fiji","gold":"1","silver":"0","bronze":"1","total":"2"},
{"rank":"57","country":"Latvia","gold":"1","silver":"0","bronze":"1","total":"2"},
{"rank":"57","country":"Thailand","gold":"1","silver":"0","bronze":"1","total":"2"},
{"rank":"61","country":"Bermuda","gold":"1","silver":"0","bronze":"0","total":"1"},
{"rank":"61","country":"Morocco","gold":"1","silver":"0","bronze":"0","total":"1"},
{"rank":"61","country":"Puerto Rico","gold":"1","silver":"0","bronze":"0","total":"1"},
{"rank":"64","country":"Colombia","gold":"0","silver":"4","bronze":"1","total":"5"},
{"rank":"65","country":"Dominican Republic","gold":"0","silver":"3","bronze":"2","total":"5"},
{"rank":"67","country":"Azerbaijan","gold":"0","silver":"2","bronze":"3","total":"5"},
{"rank":"68","country":"Armenia","gold":"0","silver":"2","bronze":"2","total":"4"},
{"rank":"69","country":"Kyrgyzstan","gold":"0","silver":"2","bronze":"1","total":"3"},
{"rank":"70","country":"Egypt","gold":"0","silver":"1","bronze":"4","total":"5"},
{"rank":"71","country":"Mongolia","gold":"0","silver":"1","bronze":"3","total":"4"},
{"rank":"72","country":"Argentina","gold":"0","silver":"1","bronze":"2","total":"3"},
{"rank":"72","country":"San Marino","gold":"0","silver":"1","bronze":"2","total":"3"},
{"rank":"74","country":"Jordan","gold":"0","silver":"1","bronze":"1","total":"2"},
{"rank":"74","country":"Nigeria","gold":"0","silver":"1","bronze":"1","total":"2"},
{"rank":"76","country":"Lithuania","gold":"0","silver":"1","bronze":"0","total":"1"},
{"rank":"76","country":"Namibia","gold":"0","silver":"1","bronze":"0","total":"1"},
{"rank":"76","country":"North Macedonia","gold":"0","silver":"1","bronze":"0","total":"1"},
{"rank":"76","country":"Turkmenistan","gold":"0","silver":"1","bronze":"0","total":"1"},
{"rank":"80","country":"Kazakhstan","gold":"0","silver":"0","bronze":"7","total":"7"},
{"rank":"81","country":"Mexico","gold":"0","silver":"0","bronze":"4","total":"4"},
{"rank":"82","country":"Finland","gold":"0","silver":"0","bronze":"2","total":"2"},
{"rank":"83","country":"Burkina Faso","gold":"0","silver":"0","bronze":"1","total":"1"},
{"rank":"83","country":"Cote d'Ivoire","gold":"0","silver":"0","bronze":"1","total":"1"},
{"rank":"83","country":"Ghana","gold":"0","silver":"0","bronze":"1","total":"1"},
{"rank":"83","country":"Grenada","gold":"0","silver":"0","bronze":"1","total":"1"},
{"rank":"83","country":"Kuwait","gold":"0","silver":"0","bronze":"1","total":"1"},
{"rank":"83","country":"Malaysia","gold":"0","silver":"0","bronze":"1","total":"1"},
{"rank":"83","country":"Moldova","gold":"0","silver":"0","bronze":"1","total":"1"},
{"rank":"83","country":"Syria","gold":"0","silver":"0","bronze":"1","total":"1"},
{"rank":"91","country":"Afghanistan","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Albania","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Algeria","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"American Samoa","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Andorra","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Angola","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Antigua and Barbuda","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Aruba","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Bahrain","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Bangladesh","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Barbados","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Belize","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Benin","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Bhutan","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Bolivia","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Bosnia and Herzegovina","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Botswana","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"British Virgin Islands","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Brunei Darussalam","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Burundi","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Cambodia","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Cameroon","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Cape Verde","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Cayman Islands","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Central African Republic","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Chad","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Chile","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Comoros","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Congo","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Cook Islands","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Costa Rica","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Cyprus","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Djibouti","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Dominica","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"DR Congo","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"El Salvador","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Equatorial Guinea","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Eritrea","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Eswatini","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Federated States of Micronesia","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Gabon","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Gambia","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Guam","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Guatemala","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Guinea","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Guinea-Bissau","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Guyana","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Haiti","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Honduras","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Iceland","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Iraq","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Kiribati","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Laos","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Lebanon","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Lesotho","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Liberia","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Libya","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Liechtenstein","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Luxembourg","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Madagascar","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Malawi","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Maldives","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Mali","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Malta","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Marshall Islands","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Mauritania","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Mauritius","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Monaco","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Montenegro","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Mozambique","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Myanmar","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Nauru","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Nepal","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Nicaragua","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Niger","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Oman","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Pakistan","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Palau","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Palestine","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Panama","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Papua New Guinea","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Paraguay","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Peru","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Refugee Olympic Team","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Rwanda","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Saint Kitts and Nevis","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Saint Lucia","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Samoa","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Sao Tome and Principe","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Saudi Arabia","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Senegal","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Seychelles","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Sierra Leone","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Singapore","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Solomon Islands","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Somalia","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"South Sudan","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Sri Lanka","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"St Vincent and the Grenadines","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Sudan","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Suriname","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Tajikistan","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Tanzania","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Timor-Leste","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Togo","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Tonga","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Trinidad and Tobago","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Tuvalu","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"United Arab Emirates","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Uruguay","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Vanuatu","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Vietnam","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Virgin Islands","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Yemen","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Zambia","gold":"0","silver":"0","bronze":"0","total":"0"},
{"rank":"91","country":"Zimbabwe","gold":"0","silver":"0","bronze":"0","total":"0"}
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
