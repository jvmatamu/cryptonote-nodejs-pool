$(function() {
    var dropdown = $('<div class="dropdown" style="float: right"></div>');
    dropdown.append($('<button class="btn btn-secondary dropdown-toggle" href="#" role="button" id="poolsButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: #1f3c4a">Pool list <span class="caret"></span></button>'));
    var items = $('<ul class="dropdown-menu" aria-labelledby="poolsButton"></ul>');
    items.append($('<li class="dropdown-item"><a href="http://poolhost.com" style="color: #1f3c4a"><img src="http://poolhost.com/coinA/img/logoA.png" width="30" height="36" /> Saronite</a></li>'));
    items.append($('<li class="dropdown-item"><a href="http://poolhost.com" style="color: #1f3c4a"><img src="http://poolhost.com/coinB/img/logoB.png" width="30" height="36" /> Iridium</a></li>'));
    items.append($('<li class="dropdown-item"><a href="http://poolhost.com" style="color: #1f3c4a"><img src="http://poolhost.com/coinC/img/logoC.png" width="30" height="36" /> Triton</a></li>'));

    // repeat the above to add more links
    
    dropdown.append(items);
    dropdown.append('<style>#poolsButton:hover { background-color: white; }</stle>');
    dropdown.insertAfter($('#top-bar #langSelector'));

    $('.dropdown-toggle').dropdown();

    $('#top-bar').css("overflow", "visible");
});
