# Copyright (c) 2024, Sanjay and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class Vehicle(WebsiteGenerator):
	def before_save(self):
		self.set_title()

	def set_title(self):
		# self.title=self.make+"-"+self.model+","+self.year
		self.title=f"{self.make} {self.model}, {self.year}"
