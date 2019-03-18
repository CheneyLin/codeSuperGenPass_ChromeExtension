$(document).ready(function() {
  addpassword = (function(i, fade) {
    stealth = localStorage['password_' + i + '_salt'] || '';
    storestr = localStorage['password_' + i + '_type'] == 'none' ?
      'No password is stored' :
      'Stored as <em>' + localStorage['password_' + i + '_type'] + '</em>';
    var strMask = "******************************************";
    storestr = localStorage['password_' + i + '_password'];
    storestr2 = strMask.substring(0, storestr.length);

    if (stealth.length > 0) {
      storestr += ' + ' + stealth;
      storestr2 += '<b>stealth</b>'
    }
    $('#panel_list').append(
      $('<div/>', {
        id: 'password_' + i,
        class: 'card added'
      }).append(

        $('<div/>', {
          class: 'title'
        }).html('<i>Profile Name</i><br>' + localStorage['password_' + i + '_name'] || ''),
        $('<div/>', {
          class: 'length'
        }).html(localStorage['password_' + i + '_length'] || ''),
        $('<div/>', {
          class: 'storestr'
        }).html('<i>Master Password</i><br><div title="' + storestr + '">' + storestr2 + '</div>'),
        $('<div/>', {
          class: 'stealth'
        }).html('<i>Password Stealth</i><br>' + stealth.length > 0 ? 'With Stealth' : ' '),
        $('<div/>', {
          class: 'action'
        }).append(
          $('<button/>', {
            class: 'delete'
          }).text('Delete Password')
        )
      )
    );

    if (typeof fade != 'undefined') {
      $('#password_' + i).hide().animate({
          height: 'toggle',
          opacity: 'toggle'
        }, 500,
        function() {
          $(this).removeClass('added')
        });
    } else {
      $('#password_' + i).removeClass('added');
    }
  });

  passes = JSON.parse(localStorage['passwords'] || '[]');
  for (i = 0; i < passes.length; ++i) {
    addpassword(passes[i]);
  }

  $('#lengthadjust').change(function() {
    $('#range_val').text($(this).val());
  }).keydown(function(e) {
    if (e.keyCode == 37) {
      $(this).val(parseInt($(this).val()) - 1);
      $('#range_val').text($(this).val());
    } else if (e.keyCode == 39) {
      $(this).val(parseInt($(this).val()) + 1);
      $('#range_val').text($(this).val());
    }
  }).click(function() {
    $(this).focus()
  });

  $('.reveal').click(function() {
    $(this).prev('input').get(0).type =
      $(this).prev('input').attr('type') == 'password' ? 'text' : 'password';
  });

  $('#buttonset button').click(function() {
    $('#buttonset button').removeClass('toggle').filter(this).addClass('toggle');
    $(this).attr('id') == 'none' ?
      $('#password').attr('disabled', 'disabled') :
      $('#password').removeAttr('disabled');
  });
  /*
  $('#buttonset button, #stealth').
  bind('mouseenter focus', function() {
    $('#' + this.id + '_answer').fadeIn(250);
  }).
  bind('mouseleave blur', function() {
    $('#' + this.id + '_answer').fadeOut(250);
  }).mousemove(function(e) {
    $('.answer_box').css({
      left: e.pageX
    });
  });
  */

  //$('#panel_list .delete').live('click',function(){
  $(document).on('click', '#panel_list .delete', function() {

    id = $(this).parents('div.card').addClass('deleted').fadeOut(500, function() {
      $(this).remove();
    }).attr('id');
    delete localStorage[id + '_name'];
    delete localStorage[id + '_type'];
    delete localStorage[id + '_length'];
    delete localStorage[id + '_password'];
    delete localStorage[id + '_salt'];
    passes = JSON.parse(localStorage['passwords']);
    val = id.replace('password_', '');
    passes = passes.filter(function(v) {
      if (v == val) {
        return false;
      }
      return true;
    });
    localStorage['passwords'] = JSON.stringify(passes);

  });

  $('#save').click(function() {

    if ($('#name').val() == '') {
      $('#name').focus().addClass('bad').keyup(function() {
        $(this).removeClass().unbind('keyup');
      });
      return false;
    }
    if ($('#password').val() == '') {
      $('#password').focus().addClass('bad').keyup(function() {
        $(this).removeClass().unbind('keyup');
      });
      return false;
    }
    //User needs to save their password:
    i = b64_md5($('#name').val()).substring(0, 5) || 'scpg' + Math.floor(Math.random() * 100);
    if (localStorage['passwords'] && localStorage['passwords'].indexOf('"' + i + '"') > 0) {
      $('#name').focus().addClass('bad').keyup(function() {
        $(this).removeClass().unbind('keyup');
      });
      return false;
    }
    if (typeof localStorage['passwords'] != 'string') {
      localStorage['passwords'] = JSON.stringify([i]);
    } else {
      passes = JSON.parse(localStorage['passwords']);
      passes.push(i);
      localStorage['passwords'] = JSON.stringify(passes);
    }
    localStorage['password_' + i + '_name'] = $('#name').val() || 'My Password';
    localStorage['password_' + i + '_length'] = $('#lengthadjust').val() || 10;
    //localStorage['password_' + i + '_type'] = $('#buttonset .toggle:first').attr('id');

    localStorage['password_' + i + '_type'] = 'always';
    localStorage['password_' + i + '_password'] = $('#password').val();
    /*
    switch (localStorage['password_' + i + '_type']) {
      case 'hash':
        localStorage['password_' + i + '_password'] = b64_md5($('#password').val());
        break;
      case 'session':
        var bg = chrome.extension.getBackgroundPage();
        bg.session_password = $('#password').val();
        break;
      case 'always':
        localStorage['password_' + i + '_password'] = $('#password').val();
        break;
    }
    */
    if ($('#stealth').val().length > 0) {
      localStorage['password_' + i + '_salt'] = $('#stealth').val();
    }

    addpassword(i, true);
    $('#name').val('My Password');
    $('#password').val('');
    $('#stealth').val('');

  });

  $('#notonload').click(function() {
    var options = JSON.parse(localStorage['options'] || '{}');
    if ($(this).is(':checked')) {
      options.notonload = false;
    } else {
      options.notonload = true;
    }
    localStorage['options'] = JSON.stringify(options);
  });

  $('#key_key').keyup(function(e) {
    $('#key_key').val(String.fromCharCode(e.which));
    var options = JSON.parse(localStorage['options'] || '{}');
    options.key_key = String.fromCharCode(e.which);
    localStorage['options'] = JSON.stringify(options);
  });

  var options = JSON.parse(localStorage['options'] || '{}');

  $('#key_key').val(options.key_key || 'P');
  options.notonload ?
    $('#notonload').removeAttr('checked', 'checked') :
    $('#notonload').attr('checked', 'checked');

});
