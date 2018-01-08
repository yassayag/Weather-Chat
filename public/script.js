
debugger

var fetch = function () {
    $.ajax({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#input_city').val()
            + "&appid=c8bdaccb89a38ddeae0eae1865d5dee7",
        success: function (data) {
            console.log(data);
            console.log(data.main.temp)
            var array = [{name: "Marseille", temp: 18, tempF: 48, hour:10, date:'01/01/2018'}]
            var dataArray = {data: array};
            renderArray();



            
            displayWeather(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};

$('.searchF').on('click', fetch)



var data_array = [{
    id:1,
    name: 'Marseille', 
    temp: 18, 
    tempF: 48,
    hour:10, 
    date:'01/01/2018',
    comment_array:['good', 'I love it']
  },
    {
    id:2,
    name: 'Paris', 
    temp: 18, 
    tempF: 48,
    hour:10, 
    date:'01/01/2018',
    comment_array:['good', 'I love it']
    }]


var renderArray = function () {
    //Set date in specific format
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;
    var source = $('#store-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template({data:array}

                // hour: today.getHours()
);

}





// var pushTemp = function(city, temp) {
//     var array = [];
//     pushArray({city:city, temp:temp}) 
// }

// var findTemp = function () {
//     var cityName = $(this).closest('div').find('input');
//     console.log(cityName)
//     var cityTemp = data.main.temp
//     console.log(cityTemp)
// }

// var renderTemp = function() {

// }



// function displayWeather(data) {
//     //Set date in specific format
//     var today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth() + 1;
//     var yyyy = today.getFullYear();
//     if (dd < 10) {
//         dd = '0' + dd;
//     }

//     if (mm < 10) {
//         mm = '0' + mm;
//     }
//     today = dd + '/' + mm + '/' + yyyy;
//     //Get city, temp & date in good format
//     var source = $('#store-template').html();
//     var template = Handlebars.compile(source);
//     var newHTML = template({
//         name: data.name.toUpperCase(),
//         temp: Math.floor(data.main.temp - 273.15),
//         tempF: Math.floor((data.main.temp * 9 / 5) - 459.67),
//         date: today
//         // hour: today.getHours()

//     });
//     $('.weatherT').append(newHTML);


//     $('.commentButton').on('click', addComment)

// }

// //Add comment

// var array = [];
// //push data to the array
// var updateArray = function (text) {
//     array.push({ text: text })
// }
// // display data
// var renderArray = function () {
// // localStorage.getItem('text')
//     $('.inputU').find('p').remove();
//     for (var i = 0; i < array.length; i++) {
//         var displayComment = $('<p>' + array[i].text + '<p>')
//         console.log(displayComment)
//         $('.inputU').append(displayComment)
//     }

// }
// function addComment() {
//     var uText = $(this).closest("div").find("input").val();
//     console.log(uText)

//     updateArray(uText);
//     renderArray();

// }




