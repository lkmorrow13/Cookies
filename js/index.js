$(function() {
	$('#value1').on('click', function() {
		if (Cookies.get('cook') == undefined) {
			Cookies.set('cook', 0)
		}
		Cookies.set('cook', parseInt(Cookies.get('cook')) + 1);
		$('#value1 h1').text(Cookies.get('cook'));
	})

	$('#value2').on('click', function() {
		if (Cookies.get('make') == undefined) {
			Cookies.set('make', 0)
		}
		Cookies.set('make', parseInt(Cookies.get('make')) + 1);
		$('#value2 h1').text(Cookies.get('make'));
	})

	$('#value3').on('click', function() {
		if (Cookies.get('this') == undefined) {
			Cookies.set('this', 0)
		}
		Cookies.set('this', parseInt(Cookies.get('this')) + 1);
		$('#value3 h1').text(Cookies.get('this'));
	})

	$('#clearClick').on('click', function() {
		Cookies.set('cook', 0);
		Cookies.set('make', 0);
		Cookies.set('this', 0);
		$('#value1 h1').text(0);
		$('#value2 h1').text(0);
		$('#value3 h1').text(0);
	})
})