import frappe

def print_data(doc,event):
    frappe.throw("Test thorow via doc type event")

def print_data1():
    frappe.log_error("Test thorow via doc type event")