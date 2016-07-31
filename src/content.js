var div_ids = [];
console.log('SCRIPT');

function update_dom( ) {
  console.log('SCRIPT REMOVE');
  console.log(document);
  div_ids.forEach(function( x ) {
    var el = document.getElementById(x);
//    console.log('checkin ' + x + ' : ' + el);
    if (el) {
      console.log('removed ' + x);
      el.remove();
    }
  });
}

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var list             = document.querySelector('body');

var observer = new MutationObserver(function( mutations ) {

  mutations.forEach(function( mutation ) {
    console.log(mutation);
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      console.log('UPDATE');
//      console.log(mutation);
      update_dom();
    }
  });
});

observer.observe(list, {
  attributes:    true,
  childList:     true,
  characterData: true,
});