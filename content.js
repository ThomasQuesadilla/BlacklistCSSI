var elements = document.getElementsByTagName('*');
//var blurImage = new Image(100, 200);
//blurImage.src = 'bg_black_blur.png';
//<img src="http://gamesites.nintendo.com.au/lego-city-undercover/bg_black_blur.png">

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            if (text.match(/marissa/gi)) {
              var replace = '<span style="background-color: black; color: black;">';
              for (var i = 0; i < text.length; i++) {
                replace += 'X';
              }
              replace +='</span>';
              
              var newNode = document.createElement('span');
              newNode.innerHTML = replace;
              
              element.replaceChild(newNode, element.childNodes[j]);

                
            }
        }
    }
}
