debugger 

var fetch = function () {
    $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q="+ $('#input_city').val()
      +"&appid=c8bdaccb89a38ddeae0eae1865d5dee7",
      success: function(data) {
        console.log(data);
        console.log(data.main.temp)
        displayWeather(data);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

  $('.searchF').on('click', fetch)


  function displayWeather(data){
      //Set date in specific format
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
            if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 
    today = dd+'/'+mm+'/'+yyyy;
     //Get city, temp & date in good format
    var source = $('#store-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template({name: data.name.toUpperCase(), 
        temp: Math.floor(data.main.temp - 273.15), 
        tempF: Math.floor((data.main.temp * 9/5) - 459.67),
        date: today
     // hour: today.getHours()
        
    });
    $('.weatherT').append(newHTML);


    $('.commentButton').on('click', addComment)

  }

    //Add comment

    var array = [];
    //push data to the array
    var updateArray = function(text) {
        array.push({text:text})
    }
    // display data
    var renderArray = function() {
        // localStorage.getItem('text')
        $('#inputU').find('p').remove();
        for (var i=0; i<array.length; i++) {
            var displayComment = $('<p>' + array[i].text + '<p>')
            console.log(displayComment)
            $('#inputU').append(displayComment)
        }

    }
    function addComment() {
        var uText = $('#comment').val();
        console.log(uText)

        updateArray(uText);
        renderArray();

    }




  