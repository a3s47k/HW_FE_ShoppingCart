var tongcong = 0

$(document).ready(function () {

// Load
doResult()

// Action 
$('#price').on('change blur mouseleave', function() {
doResult()
})
$('#quantity').on('change blur mouseleave', function() {
doResult()
})

$('#delivery').on('change', function(e) {
doChange(e, tongcong)
})
});

function doResult() {
// SUM
var gia = parseInt($('#price').val())
var soluong = parseInt($('#quantity').val())
tongcong = gia * soluong
$('#sum').text(tongcong)

}
function doChange(e, tongcong) {
doResult()
// ADDONS
var giaohang = 0
if(e.target.value == '2') {
giaohang = ((10 * tongcong) / 100) + tongcong
} else if(e.target.value == '3') {
giaohang = ((5 * tongcong) / 100) + tongcong
} else {
giaohang = tongcong
}
$('#sum').text(giaohang)

}






























// $(function(){
// 	console.log("start !")
// } )
// $("ul li p").hide();
// $("ul li h2").on("click",function(){
// 	var $arr = $(this).parent();
//     var $this = $(this).parent().find('p');
//     $("li p").not($this).hide();
//     $("li").not($arr).removeClass("arrow-down")
//     // here is what I want to do
//     $this.toggle();
//     $arr.toggleClass("arrow-down");
// });


/*

$("item").each


*/

// $("ul li p").hide();
// $("ul li h2").on("click",function(){
// 	var $this = $(this).parent().find("p");
// 	var $arr = $(this).parent();
// 	$("ul li").not($arr).removeClass("arrow-down");
// 	$("li p").not($this).hide();
// 	$this.toggle(5000);
// 	$arr.toggleClass("arrow-down");

// })

// setTimeout(function(){
// 	console.log(1);
// })
// setInterval(function(){
// 	console.log(2);
// })

// $(".item").each(function(){
// 	var image= $(this).attr("data-name")
// 	$(this).find("p").css({
// 		"background": "url("+image+")"
// 	})

// })

// $("ul li img").on("click",function(){
// 	var image = $(this).attr("src")
// 	$("p img").attr("src",image)

// })
// $(function(){
// 	if( $("li.active").length > 0){
// 		var image = $(this).attr("src")
// 		$("p img").attr("src",image)
// 	}
// });


