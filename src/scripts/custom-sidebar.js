const activeElem = $('.nav-tabs>li:first-child').find('a').attr('href');
$('.nav-tabs>li:first-child').find('a').addClass('active show');
$('#arsip_artikel .tab-content div:first-child').addClass('active show');
$(activeElem).addClass('active show');
$(activeElem).removeClass('fade in');
$('.nav-tabs li a').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	$(this).parent().siblings().removeClass('active');
	$(this).parent().addClass('active');
	$(this).parents('.nav-tabs').siblings('.tab-content').children().removeClass('active show');
	$(this).parents('.nav-tabs').siblings('.tab-content').find(href).addClass('active show');
});

$('button[data-toggle=collapse]').click(function () {
	const dataTarget = $(this).attr('data-target');
	$(dataTarget).toggle('collapse');
})