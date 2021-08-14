from django.contrib import admin
from django.urls import path, include
from django.conf import settings

from . import views

urlpatterns = [
    #Leave as empty string for base url
	path('', views.store, name="store"),
	path('cart/', views.cart, name="cart"),
	path('checkout/', views.checkout, name="checkout"),
	path('update_item/', views.updateItem, name="update_item"),
	path('process_order/', views.processOrder, name="process_order"),
	
	path('accounts/', include('allauth.urls')),

	path('delete_product/<product_id>', views.deleteProduct, name="delete_product"),
	path('add_product', views.addProduct, name="add_product"),
	path('view_orders', views.viewOrders, name="view_orders"),
	path('view_customers', views.viewCustomers, name="view_customers"),
]