"""
URL configuration for vikramSolarBack project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

app_name = 'superuser'
urlpatterns = [
    path('', views.dashboard, name='dashboard'),

    path('get-ajax-form-type', views.getAjaxFormType, name='getAjaxFormType'),
    
    path('role-list', views.roleList, name='roleList'),
    path('role-add', views.roleAdd, name='roleAdd'),
    path('role-edit/<int:id>', views.roleEdit, name='roleEdit'),
    path('role-view/<int:id>', views.roleView, name='roleView'),

    path('user-list', views.userList, name='userList'),
    path('user-add', views.userAdd, name='userAdd'),
    path('user-edit/<int:id>', views.userEdit, name='userEdit'),

    path('vendor-list', views.vendorList, name='vendorList'),
    path('vendor-add', views.vendorAdd, name='vendorAdd'),
    path('vendor-edit/<int:id>', views.vendorEdit, name='vendorEdit'),
    path('vendor-view/<int:id>', views.vendorView, name='vendorView'),

    path('customer-list', views.customerList, name='customerList'),
    path('customer-add', views.customerAdd, name='customerAdd'),
    path('customer-edit/<int:id>', views.customerEdit, name='customerEdit'),
    path('customer-view/<int:id>', views.customerView, name='customerView'),

    path('uom-list', views.uomList, name='uomList'),
    path('uom-add', views.uomAdd, name='uomAdd'),
    path('uom-edit/<int:id>', views.uomEdit, name='uomEdit'),

    path('child-uom-list', views.childUomList, name='childUomList'),
    path('child-uom-add', views.childUomAdd, name='childUomAdd'),
    path('child-uom-edit/<int:id>', views.childUomEdit, name='childUomEdit'),

    path('item-category-list', views.itemCategoryList, name='itemCategoryList'),
    path('item-category-add', views.itemCategoryAdd, name='itemCategoryAdd'),
    path('item-category-edit/<int:id>', views.itemCategoryEdit, name='itemCategoryEdit'),

    path('item-type-list', views.itemTypeList, name='itemTypeList'),
    path('item-type-add', views.itemTypeAdd, name='itemTypeAdd'),
    path('item-type-edit/<int:id>', views.itemTypeEdit, name='itemTypeEdit'),

    path('item-color-list', views.itemColorList, name='itemColorList'),
    path('item-color-add', views.itemColorAdd, name='itemColorAdd'),
    path('item-color-edit/<int:id>', views.itemColorEdit, name='itemColorEdit'),

    path('item-list', views.itemList, name='itemList'),
    path('item-add', views.itemAdd, name='itemAdd'),
    path('item-edit/<int:id>', views.itemEdit, name='itemEdit'),

    path('store-list', views.storeList, name='storeList'),
    path('store-add', views.storeAdd, name='storeAdd'),
    path('store-edit/<int:id>', views.storeEdit, name='storeEdit'),
    
    path('bill-of-material-list', views.billOfMaterialList, name='billOfMaterialList'),
    path('bill-of-material-add', views.billOfMaterialAdd, name='billOfMaterialAdd'),
    path('bill-of-material-edit/<int:id>', views.billOfMaterialEdit, name='billOfMaterialEdit'),
    path('bill-of-material-view/<int:id>', views.billOfMaterialView, name='billOfMaterialView'),
    path('bill-of-material-print/<int:id>', views.billOfMaterialPrint, name='billOfMaterialPrint'),
    
    path('purchase-order-list', views.purchaseOrderList, name='purchaseOrderList'),
    path('purchase-order-add', views.purchaseOrderAdd, name='purchaseOrderAdd'),
    path('purchase-order-edit/<int:id>', views.purchaseOrderEdit, name='purchaseOrderEdit'),
    path('purchase-order-view/<int:id>', views.purchaseOrderView, name='purchaseOrderView'),
    path('purchase-order-print/<int:id>', views.purchaseOrderPrint, name='purchaseOrderPrint'),

    path('store-item-list', views.storeItemList, name='storeItemList'),
    path('store-item-add', views.storeItemAdd, name='storeItemAdd'),
    path('store-item-edit/<int:id>', views.storeItemEdit, name='storeItemEdit'),

    path('store-transaction-list', views.storeTransactionList, name='storeTransactionList'),
    path('store-transaction-add', views.storeTransactionAdd, name='storeTransactionAdd'),
    path('store-transaction-edit/<int:id>', views.storeTransactionEdit, name='storeTransactionEdit'),
    path('store-transaction-view/<int:id>', views.storeTransactionView, name='storeTransactionView'),

    path('job-order-list', views.jobOrderList, name='jobOrderList'),
    path('job-order-add', views.jobOrderAdd, name='jobOrderAdd'),
    path('job-order-edit/<int:id>', views.jobOrderEdit, name='jobOrderEdit'),
    # path('job-order-view/<int:id>', views.jobOrderView, name='jobOrderView'),
]
