function censor() {
  var elements = document.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
          var node = element.childNodes[j];

          if (node.nodeType === 3) {
              var text = node.nodeValue;

              if (text.match(/marissa/gi) || (text.match(/trump/gi))) {
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
}

censor();
setInterval(censor, 5000);
