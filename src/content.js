var div_ids = ['profile_friends', 'profile_friends_online', 'l_fr', 'wd-wrapper-_topnews'];
console.log('SCRIPT');

function update_dom() {
  console.log('SCRIPT REMOVE');
  div_ids.forEach(function( x ) {
    var el = document.getElementById(x);
//    console.log('checkin ' + x + ' : ' + el);
    if (el) {
      console.log('removed ' + x);
      el.remove();
    }
  });
}

setTimeout(function() {
  try {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var list             = document.querySelector('body');

    var observer = new MutationObserver(function( mutations ) {
      mutations.forEach(function( mutation ) {
//    console.log(mutation);
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
      characterData: true
    });
  }
  catch (ex) {
    console.log(ex);
  }
}, 2000);

setInterval(function() {
  update_dom();
}, 300);