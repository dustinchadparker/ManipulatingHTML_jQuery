

$(document).ready(function () {

    //create first button and place in document with an alert when clicked
    $('<button id=firstButton>First Button</button>').appendTo(document.body);
    $('#firstButton').click(function () {
        alert("This is a nice message.");
    });


    //place second button and input text after first button
    $('#secondButton').insertAfter('#firstButton');
    $("input[type=text]").insertAfter('#secondButton');

    //second button click function
    $('#secondButton').click(function () {
        let valueText = $("input[type=text]").val();
        alert(valueText);
    });

    //set style of buttons for aesthetics
    $('button').css({
        'display': 'inline-block',
        'float': 'left',
        'width': '120px',
        'margin-right': '100%', // adjust
        'height': '25px', // adjust
        'padding': '5px' //adjust
    });

    //insert div after text area
    $('div').insertAfter("input[type=text]");

    //set div as a pink box
    $('div').css({
        'display': 'inline-block',
        'float': 'left',
        'width': '50px',
        'height': '50px',
        'margin-right': '100%', // adjust
        'background-color': 'pink', // adjust
        'padding': '5px' //adjust
    });

    //pink and yellow change based on hover
    $('div').hover(function () {
        $(this).css("background-color", "yellow");
    }, function () {
        $(this).css("background-color", "pink");
    });

    //create a par and append
    $('<p>Random text in this par.</p>').insertAfter('div');
    
    //change par to random color when clicked
    $('p').click(function() {
        let col1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $(this).css('color', col1);
    });

    //add a button and an empty div
    $('<button id=spanButton>Span Button</button>').insertAfter('p');
    $('<div id=spanDiv></div>').insertAfter('#spanButton');

    //add a span to div when button is clicked.
    $('#spanButton').click(function() {
        $('<span>Charlie </span>').appendTo('#spanDiv');
    });

    //place friendsButton and span div at end of page
    $('#friendsButton').insertAfter('#spanDiv');
    $('ul').insertAfter('#friendsButton');
    $('ul').css('color', 'red');

    //add friends to ul when button is clicked.
    $('#friendsButton').click(function() {
        let friendsArray = ["Friend1", "Friend2", "Friend3", "Friend4", "Friend5", "Friend6", "Friend7", "Friend8", "Friend9", "Friend10"];

        for(let i=0; i<friendsArray.length; i++) {
            $('<li>'+ friendsArray[i] + '</li>').appendTo('ul');
        }

        $('li').css('color', 'black');
    });



});