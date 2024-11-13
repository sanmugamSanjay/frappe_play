# Copyright (c) 2024, Sanjay and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Driver(Document):
	def before_save(self):
		self.name1 = f"{self.first_name} {self.last_name}"

	def sendAlert(self):
		frappe.errPrint("Message sending...")
		print("Message sending...")
