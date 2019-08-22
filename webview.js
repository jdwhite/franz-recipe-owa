"use strict";

module.exports = Franz => {
  const getMessages = () => {
    var unread = 0;

	[].forEach.call(
      document.querySelectorAll('div[role="treeitem"][aria-level="2"]'),
      function (el) {
        var el_folder = el.querySelector('span');
        var folder = "";
        var el_unread = el.querySelector('span span');
        
        if (el_folder !== null) {
          folder = el_folder.innerHTML;
          if (el_unread !== null &&
              folder !== "Deleted Items" &&
              folder !== "Junk Email"
          ) {
            unread += parseInt(el_unread.innerHTML) || 0;
            //console.log("folder="+folder+", unread="+unread);
          }
        }
      }
    );

    Franz.setBadge(unread);
  };

  Franz.loop(getMessages);

};