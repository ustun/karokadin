var images = [
  "BA_MG_0399-Edit.jpg",
  "BA__MG_0480-Edit.jpg",
  "DY_P1100100.JPG",
  "HO_KKD_8588_1.jpg",
  "HO_KKD_8599_1.jpg",
  "HO_karo_kadin_harun9.jpg",
  "MD_DSC_0177.jpg",
  "MD_DSC_0315.jpg",
  "MD_DSC_0433.jpg",
  "MD_DSC_0635.jpg",
  "MD_karo_kadin_murat_durum.jpg",
  "MD_karo_kadin_temsil_murat_durum.jpg"];


var imageNode = function (image) {
  return $('<img class="lazyOwl" src="images/' + image + '"/>');
};

var appendImages = function () {
  images.forEach(function (image) {
    $('#carousel').append(imageNode(image));
  });
};



false && $(function () {

  appendImages();

  $("#carousel").owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
responsive: false,
    autoplayHoverPause:true,
    items : 1,
    //lazyLoad : true,
    autoHeight:true,
    autoWidth:true
  });




});



var tMax = 15000;

var t = 0;

var closeModal = function () {
    $('body').removeClass('modal-open');
    $('#modal').remove();
};

$(function () {

    $('#modal-close').click(closeModal);

    window.setTimeout(closeModal, tMax);

    var interval = window.setInterval(function () {

	$('#remaining').text(Math.floor((tMax - t) / 1000));
	t += 1000;

	if (t < 0) {
	    window.clearInterval(interval);
	}

    }, 1000);

});
