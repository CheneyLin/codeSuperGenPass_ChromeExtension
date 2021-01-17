$(document).ready(function() {
  var DataLogo = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDNUMzRUE5MkU4Mjc2ODExODIyQTg5QzJBRjIzNUJGNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MkYxNEVEMjNFNEQxMUU5QTA4OEFFQjUzQ0QxRDk0OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MkYxNEVEMTNFNEQxMUU5QTA4OEFFQjUzQ0QxRDk0OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUI0QUI2Rjg3RTI0NjgxMTgzRDFDMzgzRjM5QjUyQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzVDM0VBOTJFODI3NjgxMTgyMkE4OUMyQUYyMzVCRjQiLz4gPC9yZGY6RGVzY3Jp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">';
  var SizeInput = 0;
  //Define options defaults.
  var options = {
    key_key: 'P'
  };

  //Go get real options
  chrome.extension.sendRequest({
    message: 'options'
  }, function(response) {
    $.extend(options, response);
    if (options && !options.notonload) {
      $('input[type="password"]:not(:hidden)').each(function() {
        makeSCP.call(this);
      });
    }
  });

  makeSCP = (function() {

    var passH = $(this).outerHeight(),
      passW = $(this).outerWidth(),
      passT = $(this).offset().top,
      passL = $(this).offset().left,
      id = 'scp-';
    SizeInput = passH;
    if (!$(this).attr('id')) {
      for (i = 0; i < 5; ++i) {
        id += Math.floor(Math.random() * 11);
      }
      $(this).attr('id', id);
    } else {
      id = $(this).attr('id');
    }

    $(this).keyup(function(e) {
      if (e.shiftKey && !e.altKey && e.ctrlKey && e.keyCode == options.key_key.charCodeAt(0)) {
        $('#scp-button-' + $(this).attr('id')).click();
      }

      if (e.keyCode == 13 && $('#scp-button-' + this.id).hasClass('expanded') &&
        $('#scp-button-' + this.id).find('.active').length > 0) {
        $('#scp-button-' + this.id).find('.active').click();
      }

      el = $('#scp-button-' + this.id);
      if (el.hasClass('expanded') && el.find('li').length > 0) {
        if (e.keyCode == 40) {
          li = el.find('li.active').next().length > 0 ?
            el.find('li.active').next() : el.find('li').first();
          el.find('li').removeClass('active').filter(li).addClass('active');
        } else if (e.keyCode == 38) {
          li = el.find('li.active').prev().length > 0 ?
            el.find('li.active').prev() : el.find('li').last();
          el.find('li').removeClass('active').filter(li).addClass('active');
        }
      }
    });

    $('body').append(

      $('<div/>', {
        class: 'superchromepass_button',
        height: passH,
        width: passH,
        id: 'scp-button-' + id
      }).css({
        top: passT,
        left: passL + passW + 10,
        lineHeight: passH - (passH / 6) + 'px'
      }).data('input', this).click(function(e) {

        var self = this;
        var tld = e.shiftKey;

        if (!$(this).hasClass('expanded')) {
          $(this).removeClass('corner');
          //Ask our background page what to do:
          chrome.extension.sendRequest({
            message: 'init'
          }, function(response) {
            input = $($(self).data('input'));

            //Our background page says we have multiple passes stored in the DB,
            // we should show the names of those:
            if (response.length > 1) {
              //Stretch our tab our and show the password options
              scpopen(self).html('<ul/>', {
                id: 'multiple'
              });
              $.each(response.passes, function(id, o) {
                $('ul', self).append(
                  $('<li/>', {
                    id: id,
                    text: o.name
                  }).click(function() {
                    var id = this.id;
                    $(this).parents('ul').slideUp(250);
                    chrome.extension.sendRequest({
                      message: 'request',
                      id: id,
                      disabletld: tld
                    }, function(response) {
                      scponepass(response, self, tld, id)
                    });
                  })
                );
              });
            }

            //We've only got one password, and its stored in our background page, so lets
            // just put that in our password field!
            else if (response.password) {
              scpclose(self);
              $('#' + $(self).attr('id').substr(11)).val(response.password);
            }

            //We don't have a password sent back to us, which means we need to ask for one:
            else {
              scponepass(response, self, tld);
            }
          });
        }

      }).append($('<b/>').html(DataLogo))

    );

  });
  $(document).on('focus', 'input[type="password"]:not(:hidden)', function() {
    if (!this.id || $('#scp-button-' + this.id).length == 0) {
      !$(this).hasClass('scp-pass') && makeSCP.call(this);
    }
  });
  $('input[type="password"]:not(:hidden)').on('focus', null, function() {
    if (!this.id || $('#scp-button-' + this.id).length == 0) {
      !$(this).hasClass('scp-pass') && makeSCP.call(this);
    }
  });

  scpclose = function(id) {
    $(id).animate({
      width: SizeInput,
      height: SizeInput
    }, 150).addClass('corner').removeClass('expanded').
    children('input,p').hide(200, function() {
      $(this).remove()
    });
    if ($(id).children('b').length == 0) {
      $(id).append($('<b/>').html(DataLogo));
    }
    $($(id).data('input')).focus();
    return $(id);
  }

  scpopen = function(id) {
    $(id).animate({
      width: 150 //,
      //borderRadius: '0 0 8px 8px',
      //marginTop: $($(id).data('input')).outerHeight(),
      //marginLeft: $(id).hasClass('corner') ? '-=135' : '-=152'
    }, 100).addClass('expanded').children('b').remove();
    return $(id);
  }

  scponepass = function(response, self, tld, id) {
    //We got a response, is it our password?
    if (response.pass && response.pass.length > 1 && !response.hash) {
      input.val(response.pass);
      scpclose(self);
    }
    //Its not, so we need to present a password box for the user:
    else {
      if (!$(self).hasClass('expanded')) {
        scpopen(self);
      }
      scpinput(response, self, tld, id);
    }
  }

  scpinput = function(response, self, tld, id) {
    if (options.include_identicon) {
      $(self).append($('<canvas width="16" height="16"></canvas>'));
    }
    $(self).append(
      $('<input/>', {
        type: 'text', //chrome autocomplete function forbid trick
        id: id,
        class: 'scp-pass',
        autocomplete: 'off'
      }).keyup(function(e) {
        this.type = 'password'; //chrome autocomplete function forbid trick
        var canvas = $(this).prev('canvas');
        // Update identicon if it exists
        if (canvas) {
          var seed = $(this).val();
          if (seed) {
            canvas.show();
            for (var i = 0; i <= 4; i = i + 1) {
              seed = hex_md5(seed).toString();
            }
            identicon5(canvas.get(0), seed, 16);
          } else {
            canvas.hide();
          }
        }
        if (response.hash) {
          if (b64_md5($(this).val()) == response.pass) {
            $(this).addClass('good').removeClass('bad');
          } else {
            $(this).addClass('bad').removeClass('good');
          }
        }
        if (e.keyCode == 13) {
          chrome.extension.sendRequest({
            id: $(this).attr('id'),
            message: 'request',
            password: $(this).val(),
            disabletld: tld
          }, function(response) {
            //We got a response, is it our password?
            if (response.pass && response.pass.length > 1 && !response.hash) {
              input.val(response.pass);
              scpclose(self);
            }
          });
          return false;
        }
        e.stopImmediatePropagation();
        return true;
      }).
      //Stop the password box from returning any events to potentially malicious scripts!
      bind('blur, focus, focusin, focusout, load, resize, scroll, unload, click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, error',
        function(e) {
          alert('This website has attempted to steal the contents of the SCP password box!');
          e.stopImmediatePropagation();
          return true
        }),
      $('<p/>', {
        text: chrome.i18n.getMessage("input_title")
      })
    );
    $(self).children('input').focus();
  }

  $(window).resize(function() {
    $('input[type="password"]:not(:hidden)').each(function() {

      $('#scp-button-' + $(this).attr('id')).css({
        top: $(this).offset().top,
        left: $(this).offset().left + $(this).outerWidth()
      })

    });
  });

});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.type == 'get') {
    response = $('input[type="password"][value!=""]:not(:hidden)').val();
    sendResponse({
      value: response
    });
  } else if (request.type == 'set') {
    $('input[type="password"]:not(:hidden)').val(request.value);
    //TODO: Animate buttons inside.
    sendResponse({});
  }
});


/* This code soon wont be needed when chrome.experimental.infobar comes into main.*/
function UpdateNotify(t, s, bt, bu) {
  s = s || 'data:image/png;base64,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%3D';
  $('body').append(
    $('<div/>', {
      id: 'update_bar',
      width: $(window).width() - 10
    }).text(t).append(
      $('<img/>', {
        src: s,
        width: 26,
        height: 26
      }),
      $('<a/>', {
        class: 'close'
      }).click(function() {
        $(this).parents('div').animate({
          top: '-36px'
        }, 500, function() {
          $(this).remove();
        });
        $('body').animate({
          marginTop: '-=36px'
        });
      }),
      $('<div/>', {
        class: 'button'
      }).append(
        $('<button/>').text(bt || 'Options').click(function() {
          window.open(chrome.extension.getURL(bu || 'options.html'));
        })
      )
    )
  ).animate({
    marginTop: '+=36px'
  }, 200);
  $('#update_bar').animate({
    top: '0'
  }, 200);
  return true;
}
chrome.extension.sendRequest({
  message: 'versioncheck'
}, function(response) {
  if (response.notify) {
    UpdateNotify(response.message, false, 'Options', 'scp_options.html');
    chrome.extension.sendRequest({
      message: 'versioncheck',
      notify: true
    });
  }
});
