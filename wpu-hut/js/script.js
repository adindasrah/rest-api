$.getJSON('data/pizza.json', function(data){
	let menu = data.menu;
	$.each(menu, function(i, data){
		$('#daftar-menu').append('<div class="col-md-4"> <div class="card mb-3"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><h5 class="card-title">'+ data.deskripsi +'</h5><p class="card-text">Rp. '+ data.harga +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
	});
});