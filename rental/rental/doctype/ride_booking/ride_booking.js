// Copyright (c) 2024, Sanjay and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {
        console.log("check Refresh")
        if(frm.doc.status === "New"){
            frm.add_custom_button("Accept",()=>{
                frm.set_value("status","Accepted")
                frm.save()
            },"Action")
            frm.add_custom_button("Reject",()=>{
                console.log("check button state Accept")
                frm.set_value("status","Rejected")
                frm.save()
            },"Action")
        }
	},
    rate(frm){
        // calculate(frm)
        frm.trigger("update_total_amount")
    },
    update_total_amount(frm){
        let total=0;
    console.log("Test Items",frm.doc.item)
    for (let item of frm.doc.item){
        if (tem.distance_in_km > 0)
        total=total+item.distance_in_km
    }
    let amount=total* frm.doc.rate
    console.log("check total amount:",amount)
    frm.set_value("amount",amount)
    }

});

frappe.ui.form.on("Ride Booking Item", {
    distance_in_km(frm,cdt,cdn){
    //    calculate(frm)
    frm.trigger("update_total_amount")
    },
    item_remove(frm){
        frm.trigger("update_total_amount")
    },
    item_add(frm){
        frm.trigger("update_total_amount")
    }

});

const calculate =(frm)=>{
    let total=0;
    console.log("Test Items",frm.doc.item)
    for (let item of frm.doc.item){
        total=total+item.distance_in_km
    }
    let amount=total* frm.doc.rate
    console.log("check total amount:",amount)
    frm.set_value("amount",amount)
}