$(function(){
	$('[data-toggle="tooltip"]').tooltip();

	$('#compra').on('show.bs.modal',function(e){
		console.log('el modal compra se esta mostrando');

		$('.compraBtn').removeClass('btn-outline-success');
		$('.compraBtn').addClass('btn-primary');
		$('.compraBtn').prop('disabled', true);
	});

	$('#compra').on('shown.bs.modal',function(e){
		console.log('el modal compra se mostró');
	});

	$('#compra').on('hide.bs.modal',function(e){
		console.log('el modal compra se ocultó');
	});

	$('#compra').on('hidden.bs.modal',function(e){
		console.log('el modal compra se esta ocultando');
		$('.compraBtn').removeClass('btn-primary');
		$('.compraBtn').addClass('btn-outline-success');
		$('.compraBtn').prop('disabled', false);
	});
});

	$('.carousel').carousel({
		interval:1800
	});

	
	