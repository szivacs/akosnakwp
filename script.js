let kepek = new Array("banki_to1.jpg","banki_to2.jpg","banki_to3.jpg","banki_to4.jpg","banki_to5.jpg","banki_to6.jpg","pecsi_to1.jpg","pecsi_to2.jpg","pecsi_to3.jpg","pecsi_to4.jpg","pecsi_to5.jpg","pecsi_to6.jpg","vadasa_to1.jpg","vadasa_to2.jpg","vadasa_to3.jpg","vadasa_to4.jpg","vadasa_to5.jpg","vadasa_to6.jpg","tisza_to1.jpg","tisza_to2.jpg","tisza_to3.jpg","tisza_to4.jpg","tisza_to5.jpg","tisza_to6.jpg");
let db = kepek.length-1;
let sz = '';

for (i = 0; i < db; i++){
    sz += '<div class="col-sm-12 col-lg-4">';
    sz += '<img src="kepek/'+kepek[i]+'" title="bankit_to1.jpg" class="img-fluid img-thumbnail lekerekit">';
    sz += '</div>';
}

document.getElementById('doboz').innerHTML = sz;