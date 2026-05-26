$(document).ready(function(){
  $("#contact-sticky-target").sticky({topSpacing: 0,
                                      zIndex: 1
  });
});

function updateSticky() {
  $("#contact-sticky-target").sticky('update');
}

const stickyLoopID = setInterval(updateSticky, 10);