/* Global variables, constants */
var updateBtns = document.getElementsByClassName('update-cart');

/* Event listeners */
for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'Action:', action)

        console.log('USER:', user)
        if (user == 'AnonymousUser') {
            console.log('User is not authenticated')

        } else {
            updateUserOrder(productId, action)
        }
    })
}

function getToken(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getToken('csrftoken')

function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...')

		var url = '/update_item/'

		fetch(url, {
			method:'POST',
			headers:{
				'Content-Type':'application/json',
				'X-CSRFToken':csrftoken,
			}, 
			body:JSON.stringify({'productId':productId, 'action':action})
		})
		.then((response) => {
		   return response.json();
		})
		.then((data) => {
		    location.reload()
		});
}

/* Toggle navbar-toggler icon between "bars" and "X" icons 
    according to whether the mobile navbar is open */
$(function () {
    $('#navbarSupportedContent')
        /* When mobile navbar is open, hide the "bars" icon and display the "X" icon */
        .on('shown.bs.collapse', function () {
            $('#navbar-open-icon').addClass('hidden');
            $('#navbar-close-icon').removeClass('hidden');
        })
        /* When mobile navbar is closed, hide the "X" icon and display the "bars" icon */
        .on('hidden.bs.collapse', function () {
            $('#navbar-open-icon').removeClass('hidden');
            $('#navbar-close-icon').addClass('hidden');
        });

});