var div_ids = ['profile_friends', 'profile_friends_online', 'l_fr', 'wd-wrapper-_topnews', 'l_msg'];
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

function try_observe()
{
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
      childList:     true,
      subtree:       true,
      attributes:    true,
      characterData: true
    });
  }
  catch (ex) {
    console.log(ex);
    setTimeout(try_observe, 500);
  }
}
try_observe();