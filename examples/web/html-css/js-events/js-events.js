
/**** js-events.js ****/


function jsEvents()
{
    console.log("js-events.js is loadded");
}


/***
 * onLoad - all document events - triggers.
 */
function onloadthis()
{

    document.getElementById('barcode').addEventListener('click', fnCheckboxEvent);

}


/****
 * fnCheckboxEvent - Checkbox Events
 */
function  fnCheckboxEvent()
{
    if (document.getElementById('barcode').checked == true)
    {            
        document.getElementById("output").innerText = "barcode checked ... id == " + document.getElementById("barcode").id;
        console.log("barcode checked ... id == " + document.getElementById("barcode").id);                
    }
    else
    {
        document.getElementById("output").innerText = "barcode ... id == " + document.getElementById("barcode").id;
        console.log("barcode ... id == " + document.getElementById("barcode").id);    
    }
}




