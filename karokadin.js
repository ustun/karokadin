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
  return $('<img class="lazyOwl" src=242 data-src="images/' + image + '"/>');
};

var appendImages = function () {
  images.forEach(function (image) {
    $('#carousel').append(imageNode(image));
  });
};

$(function () {

  appendImages();

  $("#carousel").owlCarousel({
    items : 1,
    lazyLoad : true,
    autoHeight:true,
    autoWidth:true,
    navigation : true
  });

});


console.log("aaa");
alert('aa')
