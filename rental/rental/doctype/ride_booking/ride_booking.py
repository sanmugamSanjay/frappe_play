# Copyright (c) 2024, Sanjay and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class RideBooking(Document):
	def validate(self):
		if not self.rate:
			frappe.throw("Mandatory field RATE missing")

		total_distance=0
		for item in self.item:
			total_distance+=item.distance_in_km
		self.amount=total_distance*self.rate
