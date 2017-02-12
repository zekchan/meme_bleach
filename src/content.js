//var div_ids = ['profile_friends', 'profile_friends_online', 'l_fr', 'wd-wrapper-_topnews', 'l_msg'];


function update_dom() {
  const gardanovs = document.querySelectorAll('[data-peer="22904165"]');
  if (gardanovs) {
    gardanovs.forEach(function(el) {
      el.remove();
    });
  }
  const previews = [].slice.call(document.getElementsByClassName('nim-dialog--text-preview'));
  if (previews) {
    previews.forEach(function(el) {
      el.remove();
    });
  }
  /*  div_ids.forEach(function( x ) {
   var el = document.getElementById(x);
   //    console.log('checkin ' + x + ' : ' + el);
   if (el) {
   console.log('removed ' + x);
   el.remove();
   }
   });*/
}

try {
  update_dom();
}
catch (ex) {

}

function try_observe() {
  try {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var list             = document.querySelector('body');

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
//    console.log(mutation);
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
//      console.log(mutation);
          update_dom();
        }
      });
    });

    observer.observe(document.body, {
      childList :     true,
      subtree :       true,
      attributes :    true,
      characterData : true
    });
  }
  catch (ex) {
    console.error(ex);
    update_dom();
    setTimeout(try_observe, 100);
  }
}
try_observe();
