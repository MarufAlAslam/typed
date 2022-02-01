$('.searchBtn').click(function(){
    $(this).hide()
    $('.searchForm').toggle()
})

$('.notificationbtn').click(function(){
    $('.notification-popup, .notificationBg').show()
})
$('.notificationBg').click(function(){
    $('.notification-popup, .notificationBg').hide()
})



var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



$('.demo').select2();


$('.select2-search__field').attr("placeholder","hellow")


$('.voiceBtn').click(function(){
    $('.voiceBtn').removeClass('active')
    $(this).addClass('active')
})


$('#suggPop').click(function(){
  $('.card.popSuggest').show()
  $('.part2').addClass('padding')
})
$('.btn.closerPop').click(function(e){
  e.preventDefault()
  $('.card.popSuggest').hide()
  $('.part2').removeClass('padding')
})

$('.suggestTable tr').click(function(){
  $('#suggPop').val($.trim($(this).children('td').children('.name').html()))
  $('.card.popSuggest').hide()
  $('.part2').removeClass('padding')
})


$('#cont1').click(function(){
  $('.part1').hide()
  $('.part2').show()
  $('.flx.two').addClass('active')
})
$('#cont2').click(function(){
  $('.part2').hide()
  $('.part3').show()
  $('.flx.two').addClass('active')
})

$('#backBtn').click(function(){
  $('.part3').hide()
  $('.part2').show()
  $('.flx.two').addClass('active')
})

$('.closeInvite').click(function(e){
  e.preventDefault()
  $(this).parent().hide()
})


$('.declineBtn').click(function(){
  $(this).parent().parent().parent().parent().parent().parent().hide()
})


$('.comntBn').click(function(){
  $('.commentSection').toggleClass('active')
  $('.AddCommentSection').removeClass('active')
})
$('.addCommentBtn').click(function(){
  $('.AddCommentSection').toggleClass('active')
  $('.commentSection').removeClass('active')
})


$('.rating-group').click(function(){
  $('.reviewSample').show()
})

$('.sentReview').click(function(){
  var rev = $.trim($('#reviewTextField').val())
  // console.log(rev)
  $('.reviewWriter').hide()
  $('.displayReview').show()
  $('#reviewShower').html('"'+rev+'"')
})


$('.removeUserBtn').click(function(){
  $(this).parent().parent().addClass('marked-for-delete')
  var name = $(this).parent().parent().children('td').children('.flx').children('span').html()
  var img = $(this).parent().parent().children('td').children('.flx').children('img').attr("src")
  $('.removePopBg, .removePopup').show()
  $('.userName').html(name)
  $('.profileImg').attr("src",img)
})


$('.cancelPop').click(function(){
  // $(this).parent().parent().hide()
  $('tr').removeClass('marked-for-delete')
  $('.removePopBg, .removePopup, .rolePop').hide()
})

$('.deleteCurrentUserBtn').click(function(){
  $('tr.marked-for-delete').hide()
  $('.removePopBg, .removePopup').hide()
})


$('.addMemberBtn').click(function(){
  $('.removePopBg, .addMember').show()
})


$('.removePopBg').click(function(){
  $('tr').removeClass('marked-for-delete')
  $('.removePopup, .addMember, .removePopBg, .rolePop').hide()
})

$('.addCloser.btn').click(function(){
  $('.removePopBg, .addMember').hide()
})




$('.editUserBtn').click(function(){
  $(this).parent().parent().addClass('marked-for-delete')
  var name = $(this).parent().parent().children('td').children('.flx').children('span').html()
  var img = $(this).parent().parent().children('td').children('.flx').children('img').attr("src")
  $('.removePopBg, .rolePop').show()
  $('.userName').html(name)
  $('.profileImg').attr("src",img)
})


$('.more1Btn').click(function(){
  $('.more1').toggleClass('active')
  $('.more2').removeClass('active')
})

$('.table.mb-0.mt-3.table-striped.invTable tr').click(function(){
  $('.more2').addClass('active')
})

$('.menus').click(function(e){
  e.preventDefault()
  $('.menus').removeClass("text-black").addClass("text-muted")
  $(this).removeClass("text-muted").addClass("text-black")
  $('.settings').hide()
})

$('.menu1').click(function(){
  $('.settings1').show()
})
$('.menu2').click(function(){
  $('.settings2').show()
})
$('.menu3').click(function(){
  $('.settings3').show()
})



$('.rejectInvite').click(function(){
  $(this).parent().parent().parent().parent().addClass("markedForDelete")
  $('.rejectBg, .rejectPop').show()
})
$('.btnCancel').click(function(){
 $('.card.markedForDelete').removeClass("markedForDelete")
  $('.rejectBg, .rejectPop').hide()
})

$('.rejectBtnIN').click(function(){
  $('.card.markedForDelete').hide()
   $('.rejectBg, .rejectPop').hide()
 })


 var val = 0

//  $('.decBtn').click(function(){
//    if(val>0){
//      val--
//     //  $('.numberField').val(val)
//     alert(val)
//    }
//  })
//  $('.incbtn').click(function(){
//   val++
//   $('.numberField').val(val)
// })

var num = 0
$('.decBtn').click(function(){
  if(num > 0){
    num--
  }
  $('.numberField').val(num)
})

$('.incBtn').click(function(){
 num++
  $('.numberField').val(num)
})


$('.extra').click(function(){
  $('.extraPop, .extraBg').show()
})
$('.extraBg').click(function(){
  $('.extraPop, .extraBg').hide()
})


$('.menuOpener').click(function(){
  $('.col-md-2.sidebar').css("transform","translateX(0)")
})
$('.menuCloserS').click(function(){
  $('.col-md-2.sidebar').css("transform","translateX(-100%)")
})


