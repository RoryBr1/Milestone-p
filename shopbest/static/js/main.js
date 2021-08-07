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

function updateUserOrder(productId, action) {
    console.log('User is authenticated, sending data...')

    var url = '/update_item/'

    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                'productId': productId,
                'action': action
            })
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