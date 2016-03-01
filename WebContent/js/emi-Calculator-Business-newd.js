var userName = '';
var ccRadio = 0;

var yesN0AddInfo = '';

var netSalary = 0;
var totalText = 0;
var totalSelect = 0;
var totalfilled = 0;
var inputLength = 0;
var selectLength = 0;
var totalPro = 0;

var salaryPrev = 0;


var year = 0;
var loanAmount = 0;
var intRates = $("#slider3").slider("value");

$(document).ready(function(){

	$("#OtherCompanyInfo, #VerifyMobileCode").fadeOut();
	$('div.tab-content').hide();
	$('div.tab-content .step').hide();
	$('div.tab-content:first-child').show();
	$('div.tab-content .step:first-child').show();


});

$(window).load(function(){
						
	$("#OtherCompanyInfo, #AfterVerify, #VerifyMobileCode").fadeOut(); 						

	$('div.tab-content').fadeOut(function(){
		$(this).hide();
		$('div.tab-content:first-child').show();
	});

//	$(".tabs a").click(function(){
//		$(".tab-content").hide();	
//		$(".tabs a").parent().removeClass("selected");
//		$(this).parent().addClass("selected");
//		var href = $(this).attr("title");
//		$("#"+href).show();
//	});

$("#CurrentEmployerDetails").change(function(){
	var thisValue = $(this).val();
	//alert(thisValue);
	if(thisValue == 'Other'){
		$("#OtherCompanyInfo").show();
		$("#OtherCompanyInfo input").removeAttr('disabled');
		$("#OtherCompanyInfo select").removeAttr('disabled');
	}else{
		
		$("#OtherCompanyInfo input").attr('disabled','disabled');
		$("#OtherCompanyInfo select").attr('disabled','disabled');
		$("#OtherCompanyInfo").hide();
	}
});

$("#fd-slider-yesno3 button").focus(function(){
	var thisValue = $(this).attr('aria-valuenow');
	//alert(thisValue);
	if(thisValue == 'No'){
		$("#AddOtherAddress").show();
	}else{
		$("#AddOtherAddress").hide();
	}
});

//$("#ConfirmVerification").click(function(){
//	$("#verification").hide();
//	$("#AfterVerify").show();										 
//										 
//});

$('.sliderTool').hover(function(){
	$(this).prev('.tool').fadeIn().css({ marginBottom: '25px'});								
	
},function(){ $(this).prev('.tool').fadeOut().css({ marginBottom: '25px'}); });


	///// Grab the input files
	$('[WaterMark]').each
	(
	  function()
	  {
		 $(this).addClass('watermark').val($(this).attr('WaterMark'));
		 $(this).focus(function() { if($(this).val() == $(this).attr('WaterMark')){ $(this).removeClass('watermark').val('');} });
		 $(this).keypress(function(){
		 	$(this).next('label').hide();
		 });
		 $(this).blur(function() { 
			if($.trim($(this).val()) == ''){  
				$(this).next('label').animate({opacity: 1},500, function(){ $(this).prev('input').addClass('watermark').val($(this).attr('WaterMark')); }).show();
				$(this).prev("div.tool").fadeOut();
				
		 	}else{
				$(this).next('label').hide();
				$(this).removeClass('error');
				$(this).prev("div.tool").fadeOut();
				}
		});
		
	  }
	);
	
	var input_i = 0;
	$('input:text').each
	(
	  function()
	  {		
	  		var text = $(this).val();
			var label = "<label>" + text + "</label>";
			
		   	$(this).parent().append(label);	
			//$('input:text').val('');
	  }
	 );
	
//	$('input:text').bind('focusOut', function(){
//		if($(this).val() != $(this).attr('WaterMark')){
//			
//			}										  
//	});
	var finalNetVal = 0;
	$('input:text').focus(function(){
		
		$(this).prev("div.tool").fadeIn();								
		$(this).next("label").animate({opacity: 0.25},500);
	});
	
	$(".inputDiv label").click(function(){
		
		$(this).prev("input").focus();								
		$(this).animate({opacity: 0.25},500);
	});

$('input:text').focusout(function(){
	if($(this).parent().hasClass('netsalary')){	
		//alert("yes");
	}
	else{
		var idValue = $(this).attr('id');
		if(idValue != 'OfficeEmailID'){
			if(idValue != 'personalEmailID'){
				if($(this).val() != $(this).attr('WaterMark') || $(this).val() != ''){ 
					var upperCase = $(this).val();
					upperCase = upperCase.toUpperCase();
					$(this).val(upperCase);
				}
			}
		}
		
		if(idValue == 'OfficeEmailID' || idValue == 'personalEmailID'){
		  var lowerCase = $(this).val();
		  lowerCase = lowerCase.toLowerCase();
		  $(this).val(lowerCase);
		}
		
	}
});

/* Number validation */
$('#Residencepincode, #MobileNoPersonal, #SalaryMar12, #SalaryFeb12, #variableMar12, #variableFeb12, #MonthlyObligations, #MobileVerification, #Officeemail, #ResidenceMobile, #OfficePin, #OfficeLandline, #OfficeLandlineExt, #PermanentPincode').keydown(function (e) {

    var key = e.charCode || e.keyCode || 0;
	//alert(key);
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 8 || key == 46 || key == 9)
        return true;
    else
        return false;
});


/* First, Middle & Last Name (Special Chracter Validation) */

$('#FirstName, #MiddleName, #LastName').keydown(function(e){

  var key = e.charCode || e.keyCode || 0;
  //alert(key);
  if ((key >= 65 && key <= 90) || key == 8 || key == 32 || key == 46 || key == 9)
	  return true;
  else
	  return false;


});

function containsInvalidChars(val) {
	//returs 'false' if val does not contain invalid chars, and 'true' if it contains.
	var pattern = new RegExp("[^a-zA-Z]");
	return pattern.test(val);
}


// Select City & Select State
$('#selectCity').change(function(){
	$('#state').val($(this).val());								 
});

$('#selectCityOffice').change(function(){
	$('#stateOffice').val($(this).val());								 
});

$('#PermanentCity').change(function(){
	$('#AddState').val($(this).val());								 
});

$('#ResidenceType').change(function(){
	  var ResidenceType = $(this).val();
	  //alert(ResidenceType);
	  if(ResidenceType == 'Rented-with family' || ResidenceType == 'Rented-with friends' || ResidenceType == 'Rented-Staying Alone' || ResidenceType == 'Paying Guest' || ResidenceType == 'Hostel' ||  ResidenceType == 'Company provided'){
		  
		  $('#ycPersonalDetails').show();
		  $('#ycPersonalDetails select').removeAttr('disabled');
	  }else{
		  $('#ycPersonalDetails select').attr('disabled','disabled');
		  $('#ycPersonalDetails').hide();
		  }
});


// Latest Net Salary
$('#SalaryMar12, #SalaryFeb12').focusout(function(){
		$('#variableMar12').attr('disabled','disabled');
		$('#variableFeb12').attr('disabled','disabled');
		var LatestSalary = $('#SalaryMar12').val();
		var prevMSalary = $('#SalaryFeb12').val();
		
		 if(LatestSalary == 'Latest Net Salary * (Mar-12)' || LatestSalary == '' || prevMSalary == 'Salary * (Feb 12)' || prevMSalary == ''){
			$('#variable').hide();
			return false;
		}
		
		
		LatestSalary = LatestSalary.replace(/,/g,''); // remove all "," comma from number
		prevMSalary = prevMSalary.replace(/,/g,''); // remove all "," comma from number
		
		if(LatestSalary >= 40000 && prevMSalary >= 40000){
				var variation1 = variation(LatestSalary,prevMSalary);
				var variation2 = variation(prevMSalary,LatestSalary);
				//alert(variation1 + " ... " + variation2);
				if(variation1 >= 20 || variation2 >= 20){
					$('#variable').show();
					$('#variableMar12').removeAttr('disabled');
					$('#variableMar12').parent().removeClass('none').removeClass('disabled');
					$('#variableMar12').focus();
					
					$('#variableFeb12').removeAttr('disabled');
					$('#variableFeb12').parent().removeClass('none').removeClass('disabled');
					
				}
		}
});

function variation(maxS,minS){
	var salary;
	if(maxS < minS){
		salary = Math.abs(((minS-maxS)/minS)*100);
	}else{
		salary = Math.abs(((maxS-minS)/maxS)*100);
	}
	return salary;
}

	// Net salary
	var	number = new Array;
	$(".netsalary input").focus(function(){
		number = $(this).val();
		number = number.replace(/,/g,''); // remove all "," comma from number
		$(this).val(number);
		
		if(finalNetVal != 0 ){
			return false;
		}										 
		//number = $(this).val();
		//number = number.replace(',','');
		//$(this).val(number);									 
	});

/* Upload Files Ticks marks */
//$('#documentation .uploadtd select').each('change', function(){
//	var doc_selc = $(this).val();
//	
//	var fileRegex = /^.*\.(jpg|JPG|gif|GIF|png|PNG|doc|DOC|docx|DOCX|pdf|PDF)$/ ;
//	
//	if(doc_selc == 'PAN'){
//		
//		}
//
//										   
//});

function fileTypeFilter(type){
	
	if( type == 'PAN' || type == 'Voter ID'){
		$('#idProof, #signatureProof, #dobProof').addClass('ticks');
	}else if(type == 'Passport'){
		$('#idProof, #signatureProof, #residenceProof, #dobProof').addClass('ticks');
	}else if(type == 'Driving License'){
		$('#idProof, #dobProof').addClass('ticks');
	}else if(type == 'Ration card'){
		$('#idProof, #residenceProof').addClass('ticks');
	}else if(type == 'Birth Certificate'){
		$('#dobProof').addClass('ticks');
	}
	
}


$('input#file1').change(function(){
	var fileRegex1 = /^.*\.(jpg|JPG|gif|GIF|png|PNG|doc|DOC|docx|DOCX|pdf|PDF)$/ ;
	var fileVal1 = $(this).val();
	var fileSelectVal1 = $('#id_pro').val();
	//alert('FIle select Val' + fileVal1);
    if(!fileRegex1.test(fileVal1)){
		//alert($(this).parent().attr('class'));
		$('#ProofFile .errorTip').show();
	}else{
		fileTypeFilter(fileSelectVal1);
		$('#ProofFile .errorTip').hide();
	}
});

$('input#file2').change(function(){
	var fileRegex2 = /^.*\.(jpg|JPG|gif|GIF|png|PNG|doc|DOC|docx|DOCX|pdf|PDF)$/ ;
	var fileVal2 = $(this).val();
	var fileSelectVal2 = $('#res_pro').val();
//	alert('FIle select Val' + fileSelectVal);
    if(!fileRegex2.test(fileVal2)){
		$('#ProofResi .errorTip').show();
	}else{
		fileTypeFilter(fileSelectVal2);
		$('#ProofResi .errorTip').hide();
	}
});

$('input#file3').change(function(){
	var fileRegex3 = /^.*\.(jpg|JPG|gif|GIF|png|PNG|doc|DOC|docx|DOCX|pdf|PDF)$/ ;
	var fileVal3 = $(this).val();
	var fileSelectVal3 = $('#sig_pro').val();
//	alert('FIle select Val' + fileSelectVal);
    if(!fileRegex3.test(fileVal3)){
		$('#ProofSign .errorTip').show();
	}else{
		fileTypeFilter(fileSelectVal3);
		$('#ProofSign .errorTip').hide();
	}
});
$('input#file4').change(function(){
	var fileRegex4 = /^.*\.(jpg|JPG|gif|GIF|png|PNG|doc|DOC|docx|DOCX|pdf|PDF)$/ ;
	var fileVal4 = $(this).val();
	var fileSelectVal4 = $('#dob_pro').val();
//	alert('FIle select Val' + fileSelectVal);
    if(!fileRegex4.test(fileVal4)){
		$('#Proof_dob .errorTip').show();
	}else{
		fileTypeFilter(fileSelectVal4);
		$('#Proof_dob .errorTip').hide();
	}
});




	var finalVal = '';
$(".netsalary input").focusout(function(){
	var attrValue = $(this).attr('watermark');
	
//	if(finalNetVal != 0 ){
//		//return false;
//		}											
	number = $(this).val();
	number = number.replace(/,/g,''); // remove all "," comma from number
	
	//number  = number.toString();
//	finalVal = numbers(number);
//	
//	alert("Final Value" + finalVal);
//	
//	$(this).val(finalVal);
	
	
	// Number Validation
		var value = number.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		var intRegex = /^\d+$/;
    
		
	   var x = value.split('.');
	   var x1 = x.length > 1 ? '.' + x[1] : '';
	   number = number.replace(x1,'');
	   
	   //alert(number + " ... .... x1 " + x1);
		// 	7123456
   		
	   var len = number.length;
	   var n = len/2;
	   var val = '';
	  //alert(number);
	 
	 if(finalVal!='' || finalVal != attrValue){
		 var i = 0;
		  switch(len){
			  case 4: val = number.substr(0,1) + "," + number.substr(1,1) + number.substr(2,1) + number.substr(3,1); break;
			  case 5: val = number.substr(0,1) + number.substr(1,1) + "," + number.substr(2,1) + number.substr(3,1) + number.substr(4,1); break;
			  case 6: val = number.substr(0,1) + "," + number.substr(1,1) + number.substr(2,1) + "," + number.substr(3,1) + number.substr(4,1) + number.substr(5,1); break;
			  case 7: val = number.substr(0,1) + number.substr(1,1) + "," + number.substr(2,1) + number.substr(3,1) + "," + number.substr(4,1) + number.substr(5,1) + number.substr(6,1); break;
			  case 8: val = number.substr(0,1) + "," + number.substr(1,1) + number.substr(2,1) + "," + number.substr(3,1) + number.substr(4,1) + "," + number.substr(5,1) + number.substr(6,1) + number.substr(7,1); break;
			  case 9: val = number.substr(0,1) + number.substr(1,1) + "," + number.substr(2,1) + number.substr(3,1) + "," + number.substr(4,1) + number.substr(5,1) + "," + number.substr(6,1) + number.substr(7,1) + number.substr(8,1); break;
			  default: val = number; break;
			  
		 }
		 finalVal = val + x1;
		 $(this).val(finalVal);
		 //finalNetVal = 1;
	}
  	
		if(number==''){
			
			finalVal = $(this).attr('watermark');
			//alert(finalVal);
		 	$(this).val(finalVal);
			finalVal = '';
		}
		
		if(!intRegex.test(value)) {
			$(this).prev('div.tool').show();
			$(this).addClass('error');
			netSalary = 1;
			//$(this).val('Please enter number only');
		}else{
			netSalary = 0;
			}
		
		
		
  
	});		






});



$(document).ready(function () {



    if (!$.browser.opera) {


        /* Select Drop */
        $('select').focus(function () {
            $(this).prev(".tool").fadeIn();
        });
        $('select').focusout(function () {
            $(this).prev(".tool").fadeOut();
        });

        /* Radio Button selection */
        $('.various-lm .radio').click(function () {
            $('.various-lm .radio').removeClass('selected');
            $(this).addClass('selected');
        });


        /* Checkbox selection */
        $('.form input:checkbox').click(function () {
            if ($(this).parent().hasClass('selected')) {
                $(this).parent().removeClass('selected');
            } else {
                $(this).parent().addClass('selected');
                $(this).parent().removeClass('error');
            }
        });

        $(function () {
            $('#file1').customFileInput();
            $('#file2').customFileInput();
            $('#file3').customFileInput();
            $('#file4').customFileInput();
            $('#file5').customFileInput();
            $('#file6').customFileInput();
            $('#file7').customFileInput();
            $('#file8').customFileInput();
        });


    };
    var ValueAmount = 0;
    //$('#loan-amount a.ui-slider-handle span.amount').html(1);
    $(function () {


        $("#slider").slider({
            range: "min",
            value: 0.15,
            min: 1,
            max: 100,
            step: 0.15,
            slide: function (event, ui) {
                var L = ui.value;
                L = L * 100000;
                var N = $("#slider2").slider("value");
                N = N * 12;

                var I = ($("#slider3").slider("value") / 100) / 12;

                //$('#EMIValue,#YEMI').html(emi(N, L));
                //$('#loan-amount a.ui-slider-handle span.amount').html(ui.value);
                $('#YLT').html(N / 12 + ' years');
                L = numbers(L);
                $('#YLA').html(L);


                ajaxCalculation($("#slider2").slider("value"), ui.value, $("#slider3").slider("value"));
            }

        });
        $('#loan-amount a.ui-slider-handle span.amount').html($("#slider").slider("value"));

        $("#slider2").slider({
            range: "min",
            value: 1,
            min: 1,
            max: 240,
            slide: function (event, ui) {
                var L = $("#slider").slider("value");
                L = L * 100000;
                var N = ui.value;
                N = N * 12;
                var I = ($("#slider3").slider("value") / 100) / 12;

                $('#slider2 a.ui-slider-handle span.amount').html(ui.value);
                $('#txtTenure').val(ui.value);
                //$('#YLT').html(ui.value + ' years');
                L = numbers(L);
                //$('#YLA').html(L);

                ajaxCalculation(ui.value, $("#slider").slider("value"), $("#slider3").slider("value"));
            }

        });

        $("#slider3").slider({
            range: "min",
            value: 0.01,
            min: 5,
            max: 40,
            step: 0.01,
            slide: function (event, ui) {
                var L = $("#slider").slider("value");
                L = L * 100000;
                var N = $("#slider2").slider("value");
                N = N * 12;
                var I = (ui.value / 100) / 12;

                $('#slider3 a.ui-slider-handle span.amount').html(ui.value);
                $('#intrRate').val(ui.value + ' %');
                ajaxCalculation($("#slider2").slider("value"), $("#slider").slider("value"), ui.value);
            }

        });

        $('#slider2 a.ui-slider-handle span.amount').html($("#slider2").slider("value"));
		 $('#slider3 a.ui-slider-handle span.amount').html($("#slider3").slider("value"));

        $('#EMIValue').html(function () {
            return "Rs." + emi($("#slider2").slider("value"), $("#slider").slider("value"));
        });
    });


});


function CheckNumericKeyInfo(char1, mozChar) {
    if (mozChar != null) { // Look for a Mozilla-compatible browser
        if ((mozChar >= 48 && mozChar <= 57) || mozChar == 8 || mozChar == 46 || mozChar == 0)
            RetVal = true;
        else {
            RetVal = false;
        }
    }
    else { // Must be an IE-compatible Browser
        if ((char1 >= 48 && char1 <= 57) || char1 == 8 || char1 == 46 || char1 == 0) RetVal = true;
        else {
            RetVal = false;
        }
    }
    return RetVal;
}

function CheckNumericKeyInfo1(char1, mozChar) {
    if (mozChar != null) { // Look for a Mozilla-compatible browser
        if ((mozChar >= 48 && mozChar <= 57) || mozChar == 8 || mozChar == 44 || mozChar == 0)
            RetVal = true;
        else {
            RetVal = false;
        }
    }
    else { // Must be an IE-compatible Browser
        if ((char1 >= 48 && char1 <= 57) || char1 == 8 || char1 == 44 || char1 == 0) RetVal = true;
        else {
            RetVal = false;
        }
    }
    return RetVal;
}

function emi(year1, loanAmount1){
	//alert(year + " " + loadAmount);
	var L = loanAmount1;
	var N = year1;
	var I = ($("#slider3").slider("value") / 100) / 12;

	//var emi11 = (L*I)* ((Math.pow((1+I),N) /  (Math.pow((1+I),N))-1));
	
	var emi1 = ( (L*I)* (Math.pow((1+I),N)) ) /(Math.pow((1+I),N)-1);
	emi1 = emi1.toString();

    
	   var x = emi1.split('.');
	   var x1 = x.length > 1 ? '.' + x[1] : '';
	   emi1 = emi1.replace(x1,'');
	   
	   //alert(number + " ... .... x1 " + x1);
		// 	7123456
   		
	   var len = emi1.length;
	   var n = len/2;
	   var val = '';
	  //alert(number);
	 

		 var i = 0;
		  switch(len){
			  case 4: val = emi1.substr(0,1) + "," + emi1.substr(1,1) + emi1.substr(2,1) + emi1.substr(3,1); break;
			  case 5: val = emi1.substr(0,1) + emi1.substr(1,1) + "," + emi1.substr(2,1) + emi1.substr(3,1) + emi1.substr(4,1); break;
			  case 6: val = emi1.substr(0,1) + "," + emi1.substr(1,1) + emi1.substr(2,1) + "," + emi1.substr(3,1) + emi1.substr(4,1) + emi1.substr(5,1); break;
			  case 7: val = emi1.substr(0,1) + emi1.substr(1,1) + "," + emi1.substr(2,1) + emi1.substr(3,1) + "," + emi1.substr(4,1) + emi1.substr(5,1) + emi1.substr(6,1); break;
			  case 8: val = emi1.substr(0,1) + "," + emi1.substr(1,1) + emi1.substr(2,1) + "," + emi1.substr(3,1) + emi1.substr(4,1) + "," + emi1.substr(5,1) + emi1.substr(6,1) + emi1.substr(7,1); break;
			  case 9: val = emi1.substr(0,1) + emi1.substr(1,1) + "," + emi1.substr(2,1) + emi1.substr(3,1) + "," + emi1.substr(4,1) + emi1.substr(5,1) + "," + emi1.substr(6,1) + emi1.substr(7,1) + emi1.substr(8,1); break;
			  default: val = emi1; break;
			  
		val = val + x1;
		 //finalNetVal = 1;
	}
	return val;
}	
	

// Google Chart
$(document).ready(function(){
//	var	url	= "http://chart.apis.google.com/chart?cht=p3&chd=t:45,35,20&chs=600x250&chl=Loan%20Amount|Interest|Fee%20and%20Taxes&chco=04a6e2,0068ad,003d7e"
//	$("#chart").append("<img src='" + url + "' alt='" + url + "' />" );
});



/* Save Button Click */
$(window).load(function(){


$('#ResidenceYes').click(function(){
	
	$('#AddOtherAddress input,#AddOtherAddress select').each(function(){
		$(this).attr('disabled','disabled');
	});
	$('#AddOtherAddress').fadeOut(300);
});

$('#ResidenceNo').click(function(){
	$('#AddOtherAddress').fadeIn();
	$('#AddOtherAddress input,#AddOtherAddress select').each(function(){
		$(this).removeAttr('disabled');
	});
	$('#AddState').attr('disabled','disabled');
});



$('#SaveNProceeds1').bind('click',function(){
										
	var test1 = 0;
	var test2 = 0;
	var test3 = 0;
	var test4 = 0;
	$("#personal-details select").each(function(){
			if($(this).attr('disabled')){
				
			}else{
				var selectId = '';
				var selectVal = '';
				
				selectId = $(this).attr('id');
				selectVal = $(this).val();
				if(selectVal == 'DD' || selectVal == 'MMM' || selectVal == 'YYYY' || selectVal == 'Select City *' || selectVal == 'Select State *' || selectVal == 'Residence Type *' || selectVal == 'Years in current city *'){
					$(this).addClass('error');
					$(this).parent().next(".errorTip").show();
					test2++;
				}else{
					$(this).removeClass('error');
					$(this).parent().next(".errorTip").hide();
				}
				selectId = '';
				selectVal = '';
			}
		});
	
	
	$("#personal-details input:text").each(function(){
		if($(this).val() == $(this).attr('WaterMark') || $(this).val() == ''){
			if($(this).attr('disabled')){
			
			}else{
				
						$(this).addClass('error');
						$(this).parent().next(".errorTip").show();
						//alert($(this).val());
						test1++;
						//return false;
					
			}
		}
		else{ 
			$(this).removeClass('error');
			$(this).parent().next(".errorTip").hide();
			totalText++;
			//alert("yes 1");
		}
	}); /* #form1 input:text */									 
	
	if(validateEmail('OfficeEmailID'))
		{
			$('#OfficeEmailID').removeClass('error');
			$('#OfficeEmailID').parent().next(".errorTip").hide();
		}
		else
		{
		   $('#OfficeEmailID').addClass('error');
		   $('#OfficeEmailID').parent().next(".errorTip").show();
		   
		   test3++;
		}

		var MobileNoPersonal = $("#MobileNoPersonal");
		var mobNoPersonLength = $("#MobileNoPersonal").val();
		//alert(mobNoLength.length);
		//var isNumerber = $(this).val();
		var value = mobNoPersonLength.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		var intRegex = /^\d+$/;   
		///// /^\d+$/;	
		
		if(!intRegex.test(value)) {
			$(MobileNoPersonal).addClass('error');
			$(MobileNoPersonal).parent().next(".errorTip").show();
			test4++;
		}else if(mobNoPersonLength.length < 10){
			$(MobileNoPersonal).addClass('error');
			$(MobileNoPersonal).parent().next(".errorTip").show();
			test4++;
		}
	
		// Residence Pincode		
		var Residencepincode = $("#Residencepincode");
		var ResidencepincodeLen = $("#Residencepincode").val();
		//alert(mobNoLength.length);
		//var isNumerber = $(this).val();
		var value = ResidencepincodeLen.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		var intRegex = /^\d+$/;   
		///// /^\d+$/;	
		
		if(!intRegex.test(value)) {
			$(Residencepincode).addClass('error');
			$(Residencepincode).parent().next(".errorTip").show();
			test1++;
		}else if(ResidencepincodeLen.length < 6){
			$(Residencepincode).addClass('error');
			$(Residencepincode).parent().next(".errorTip").show();
			test1++;
		}
		
		//var pan = $('#PAN').val();
		var PanNo = $('#PAN').val();
		var PanValidation = /^[A-Za-z]{3}[pP]{1}[A-Za-z]{1}\d{4}[A-Za-z]{1}$/;
		PanNo = PanNo.toUpperCase();
		$('#PAN').val(PanNo);
		//alert(PanNo.length);
		
		if(!PanValidation.test(PanNo)) {
			//alert("first");
			$('#PAN').addClass('error');
			$('#PAN').parent().next(".errorTip").show();
			test1++;
		}else if(PanNo.length < 10){
			//alert("aafirst");
			$('#PAN').addClass('error');
			$('#PAN').parent().next(".errorTip").show();
			test1++;
		}
		
		
		
		
		/* Name of the User */
		userName = $('#FirstName').val();
		$('.userName').html(userName);

		var MiddleName1 = $('#MiddleName').val();
		if(MiddleName1 == '' || MiddleName1 == 'Middle Name (As per PAN)'){
			$('#MiddleName').removeClass('error');
			test1--;
		}
		
		if(!$('#accept').parent().hasClass('selected')){
			//alert("Please accept the Terms and Conditions");
			//return false;
			$('#accept').parent().addClass('error');
			$('#accept').parent().next(".errorTip").show();
			test1++;
		}else{
			$('#accept').parent().removeClass('error');
			$('#accept').parent().next(".errorTip").hide();
			}
		
//test1 = 0;
//test2 = 0;
//test3 = 0;
//test4 = 0;

	//alert("tset1 .." + test1 + "... test2  " + test2 + "... test3  " + test3 + "... test4  " + test4);	

		if(test1 == 0 && test2 == 0 && test3 == 0 && test4 == 0){
			
			$('#personalError1').hide();
			
			$('#MiddleName').val($('#MiddleName').attr('watermark'));
			$('#MiddleName').removeClass('error');
			
			$('#work-info').css({marginLeft: '-1000px'});
			$('#work-info').fadeIn();
			$('#work-info').animate({marginLeft: 0});
			//
			$("#personal-details select, #personal-details input").each(function(){
				$(this).attr('disabled','disabled');
				$(this).parent().addClass('disabled');
			});
			
			$("html, body").animate({ scrollTop: $(document).height() }, "slow");
			//$(window).scrollTop(974);
			
			$(this).hide();
			$('#referenceId').show();
			
			$('#progressBar .percent').html('20%');
			$('#per1').after('<img src="images/0-20.gif" id="per2" alt="20 percent" />');
		}else{
				$('#personalError1').fadeIn();
				//alert('personalError1');
			}

});

$('#SaveNProceeds2').bind('click',function(){

//$(".tab-content").hide();
//$(".tabs li.t2").addClass("done");
//var href = $(".tabs li.t3 a").attr("title");
//$(".tabs li").removeClass("selected");
//$(".tabs li.t3").addClass("selected");
//$("#"+href).show();

										
	var test1 = 0;
	var test2 = 0;
	var test3 = 0;
	
	$("#work-info select").each(function(){	
			var selectId = '';
			var selectVal = '';
			
			selectId = $(this).attr('id');
			selectVal = $(this).val();
			
		
			if(selectVal == 'MM' || selectVal == 'YYYY' || selectVal == 'YY' || selectVal == 'Current Employer *' || selectVal == 'Mode of crediting salary *'){
				$(this).addClass('error');
				$(this).parent().next(".errorTip").show();
				test2++;
			}else{
				$(this).removeClass('error');
				$(this).parent().next(".errorTip").hide();
			}
			selectId = '';
			selectVal = '';

		});
	
	$("#work-info .netsalary input:text").each(function(){
														
		if($(this).val() == $(this).attr('WaterMark') || $(this).val() == ''){ 
			if($(this).attr('disabled')){
			
			}else{
				$(this).addClass('error');
				$(this).parent().next(".errorTip").show();
				//alert($(this).val());
				test1++;
				//return false;
			}
		}
		else{ 
			$(this).removeClass('error');
			$(this).parent().next(".errorTip").hide();
			var isNumerber = $(this).val();
			var value = isNumerber.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
			var intRegex = /^[0-9,]+$/;   
			///// /^\d+$/;	
			
			if(!intRegex.test(value)) {
				$(this).addClass('error');
				test1++;
			}
		}
		
	});

		var CurrentEmployerDetails = $("#CurrentEmployerDetails").val();
		if(CurrentEmployerDetails != 'Other' && CurrentEmployerDetails != 'Current Employer *'){
			//test1--;
			//test2--;
		}else if(CurrentEmployerDetails == 'Other'){
		$("#work-info #OtherCompanyInfo input:text").each(function(){
			
			// Web Address
				var web = /^([a-zA-Z0-9_\-]+(?:\.[a-zA-Z0-9_\-]+)*\.[a-zA-Z]{2,4}(?:\/[a-zA-Z0-9_]+)*(?:\/[a-zA-Z0-9_]+\.[a-zA-Z]{2,4}(?:\?[a-zA-Z0-9_]+\=[a-zA-Z0-9_]+)?)?(?:\&[a-zA-Z0-9_]+\=[a-zA-Z0-9_]+)*)$/; //Web Address Validate Here
				
				var webAddress = $('#otherComapanyWesite').val();
				if(!web.test(webAddress)) {
					$('#otherComapanyWesite').addClass('error');
					$('#otherComapanyWesite').parent().next(".errorTip").show();
					test1++;
				}
				else{
					$('#otherComapanyWesite').parent().next(".errorTip").hide();
					}
			});
		
			var employerCons = $('#EmployerConstitution').val();
			if(employerCons == 'Employer Constitution *'){
				$('#EmployerConstitution').addClass('error');
				$('#EmployerConstitution').parent().next(".errorTip").show();
				test2++;
			}
			else{
				$('#EmployerConstitution').parent().next(".errorTip").hide();
				}
		}




//test1 = 0;
//test2 = 0;
//test3 = 0;

//		alert("test1 .." + test1 + "... test2  " + test2 + "... test3  " + test3);
		if(test1 == 0 && test2 == 0 && test3 == 0){
			$('#personalError2').hide();
			$('#financial-info').css({ marginLeft : '-1000px'});
			
			$('#financial-info').fadeIn();
			$('#financial-info').animate({marginLeft: '0px'});
			//$(this).parent().hide();
			form1 =1;
			$("#work-info select, #work-info input").each(function(){
				$(this).attr('disabled','disabled');
				$(this).parent().addClass('disabled');
			});
			$("html, body").animate({ scrollTop: $(document).height() }, "slow");
			//$(window).scrollTop(90);
			
			$('#progressBar .percent').html('40%');
			$('#per2').after('<img src="images/21-40.gif" id="per3" alt="40 percent" />');
			$(this).hide();
		}else{
				$('#personalError2').fadeIn();
			}




});

$('#ProceedsOffer').bind('click',function(){

//$(".tab-content").hide();
//$(".tabs li.t2").addClass("done");
//var href = $(".tabs li.t3 a").attr("title");
//$(".tabs li").removeClass("selected");
//$(".tabs li.t3").addClass("selected");
//$("#"+href).show();

										
	var test1 = 0;
	var test2 = 0;
	var test3 = 0;
	
	$("#financial-info select").each(function(){	
			var selectId = '';
			var selectVal = '';
			
			selectId = $(this).attr('id');
			selectVal = $(this).val();
			
		
			if(selectVal == 'Immovable Assets *' || selectVal == 'Movable Assets *'){
				$(this).addClass('error');
				$(this).parent().next(".errorTip").show();
				test2++;
			}else{
				$(this).removeClass('error');
				$(this).parent().next(".errorTip").hide();
			}
			selectId = '';
			selectVal = '';

		});	
	
	$("#financial-info input:text").each(function(){
		if($(this).val() == $(this).attr('WaterMark') || $(this).val() == ''){ 
		if($(this).attr('disabled')){
			
			}else{
				$(this).addClass('error');
				$(this).parent().next(".errorTip").show();
				//alert($(this).val());
				test1++;
				//return false;
			}
		}
		else{ 
			$(this).removeClass('error');
			$(this).parent().next(".errorTip").hide();
			totalText++;
			//alert("yes 1");
		}
	}); /* #form1 input:text */									 
	
	$("#financial-info .netsalary input").each(function(){
														
		var isNumerber = $(this).val();
		var value = isNumerber.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		var intRegex = /^[0-9,]+$/;   
		///// /^\d+$/;	
		
		if(!intRegex.test(value)) {
			//$(this).prev('div.tool').show();
			//$(this).prev('div.tool').show();
			$(this).addClass('error');
			test1++;
			//netSalary = 1;
			//$(this).val('Please enter number only');
		}
	});
	
	$("#financial-info #verification .number input:text").each(function(){
			var mobileOffereVer = $(this);
			var mobileOffereLen = $(this).val();
			
			//var isNumerber = $(this).val();
			var value = mobileOffereLen.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
			var intRegex = /^\d+$/;   
			///// /^\d+$/;	
			if(!intRegex.test(value)) {
				$(mobileOffereVer).addClass('error');
				$(mobileOffereVer).parent().parent().next(".errorTip").show();
				test1++;
			}else if(mobileOffereLen.length < 5){
				$(mobileOffereVer).addClass('error');
				$(mobileOffereVer).parent().parent().next(".errorTip").show();
				test1++;
			}
	}); /* #form1 input:text */	
	

	var ccChecked = 0;
	var emiChecked = 0;

	$("#financial-info .radioValidation input:radio").each(function(){
		var name = '';
		name = $(this).attr('name');
		var radioChecked = $(this + '[name= ' + name + ']').is(':checked');
		
		
//		alert(ccChecked);
//		alert(name + ' ' + radioChecked);
		if(name == 'CC' && ccChecked == 0){
			if(radioChecked == true){
				$(this).parent().parent().next(".errorTip").hide();
				ccChecked = 1;
				//alert(radioChecked);
			}else{
				$(this).parent().parent().next(".errorTip").show();
				test1++;
				//alert(radioChecked);
			}
		}
		
		if(name == 'EMI' && emiChecked == 0){
			if(radioChecked == true){
				$(this).parent().parent().next(".errorTip").hide();
				emiChecked = 1;
			}else{
				$(this).parent().parent().next(".errorTip").show();
				test1++;
			}
		}

		//$(this).addClass('error');
		
		
	});
	

//test1 = 0;
//test2 = 0;
//test3 = 0;
//		alert('test1...' + test1 + 'test2...' + test2 + 'test3...' + test3)
		if(test1 == 0 && test2 == 0 && test3 == 0){
			//$('#personalError3').hide();
			$('#personalError3').hide();
			$(".tab-content").hide();
			$(".tabs li.t1").addClass("done");
			var href = $(".tabs li.t2 a").attr("title");
			$(".tabs li").removeClass("selected");
			$(".tabs li.t2").addClass("selected");
			$("#"+href).show();
			//$(this).parent().hide();
			$("#financial-info select, #financial-info input").each(function(){
				$(this).attr('disabled','disabled');
				$(this).parent().addClass('disabled');
			});
			$(window).scrollTop(413);
			
			$('#progressBar .percent').html('60%');
			$('#per3').after('<img src="images/41-60.gif" id="per4" alt="60 percent" />');
			//$(this).hide();
		}else{
				$('#personalError3').fadeIn();
			}




});

$("#ConfirmVerification").click(function(){
		var test1=0;
		var test2=0;
		$("#financial-info #verification .number input:text").each(function(){
			var mobileOffereVer = $(this);
			var mobileOffereLen = $(this).val();
			
			//var isNumerber = $(this).val();
			var value = mobileOffereLen.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
			var intRegex = /^\d+$/;   
			///// /^\d+$/;	
			if(!intRegex.test(value)) {
				$(mobileOffereVer).addClass('error');
				test2++;
			}else if(mobileOffereLen.length < 5){
				$(mobileOffereVer).addClass('error');
				test2++;
			}else{test2--;} 
		}); /* #form1 input:text */	
		
		
		
		
		if(test1 == 0 && test2 == 0){
			$("#verification").hide();
			$("#AfterVerify").fadeIn();
		}
										 
});

//	$("#submitDataFetch").click(function(){
//		var test1 = 0;
//		var mobileNoVerify = $("#MobileNo");
//		var mobNoLength = $("#MobileNo").val();
//		//alert(mobNoLength.length);
//		
//		if(mobNoLength.length < 10){
//			$(mobileNoVerify).addClass('error');
//			return false;
//		}else{
//		
//			if($(mobileNoVerify).val() == $(mobileNoVerify).attr('WaterMark') || $(mobileNoVerify).val() == ''){ 
//				if($(this).attr('disabled')){
//					
//					}else{
//						$(this).addClass('error');
//						$(this).parent().next(".errorTip").show();
//						test1++;
//					}
//				}
//				else{ 
//					$(this).removeClass('error');
//					$(this).parent().next(".errorTip").hide();
//			}
//		}
//		if(test1==0){										 
//			$("#submitButtonFetch").hide();
//			$("#VerifyMobileCode").fadeIn();								  
//		}
//	});
	
	
	$("#submitVerify").click(function(){
		var testVerify = 0;										 
		$("#mobileNumber input:text").each(function(){
			if($(this).val() == $(this).attr('WaterMark') || $(this).val() == ''){ 
				if($(this).attr('disabled')){
					
					}else{
						$(this).addClass('error');
						$(this).parent().next(".errorTip").show();
						testVerify++;
					}
				}
				else{ 
					$(this).removeClass('error');
					$(this).parent().next(".errorTip").hide();
				}
			}); 										 
		
		if(testVerify==0){
			$("#SavedInfoBack").fadeOut();									  
		}									  
						  
	});



$('#proceedsSubmit20').bind('click',function(){

	$(".tab-content").hide();
	$(".tabs li.t4").addClass("done");
	var href = $(".tabs li.t5 a").attr("title");
	$(".tabs li").removeClass("selected");
	$(".tabs li.t5").addClass("selected");
	$("#"+href).show();

});
//// Complete your documentation
$('#proceed2Doc').bind('click',function(){

	var test1 = 0;
	var test2 = 0;
	
	$("#additional-info .verify select").each(function(){	
		var selectId = '';
		var selectVal = '';
		
		selectId = $(this).attr('id');
		selectVal = $(this).val();
		if($(this).attr('disabled')){	
	
		}else{
			if(selectVal == 'Salary Bank name *' || selectVal == 'Select Office City *' || selectVal == 'Select State *' || selectVal == 'Years in current city *'){
				$(this).addClass('error');
				$(this).parent().next(".errorTip").show();
				test2++;
			}else{
				$(this).removeClass('error');
				$(this).parent().next(".errorTip").hide();
			}
		}
		selectId = '';
		selectVal = '';

	});
	
	$("#additional-info .verify input:text").each(function(){
		if($(this).val() == $(this).attr('WaterMark') || $(this).val() == ''){ 
			if($(this).attr('disabled')){
				
				}else{
					$(this).addClass('error');
					$(this).parent().next(".errorTip").show();
					test1++;
				}
			}
			else{ 
				$(this).removeClass('error');
				$(this).parent().next(".errorTip").hide();
			}
	}); /* #form1 input:text */

	
	
		var mobileOffereVer = $('#ResidenceMobile');
		var mobileOffereLen = $('#ResidenceMobile').val();
		
		//var isNumerber = $(this).val();
		var value = mobileOffereLen.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		var intRegex = /^\d+$/;   
		///// /^\d+$/;	
		if(!intRegex.test(value)) {
			$(mobileOffereVer).addClass('error');
			test2++;
		}else if(mobileOffereLen.length < 10){
			$(mobileOffereVer).addClass('error');
			test2++;
		}
		
		
		$("#additional-info .pincode input:text").each(function(){
			if($(this).val() == $(this).attr('WaterMark') || $(this).val() == ''){ 
				if($(this).attr('disabled')){
					
					}else{
						$(this).addClass('error');
						$(this).parent().next(".errorTip").show();
						test1++;
					}
				}
				else{ 
					var pincode = $(this);
					var	pincodeVal = $(this).val();
						//alert(pincodeVal);
						//var isNumerber = $(this).val();
						var value = pincodeVal.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
						var intRegex = /^\d+$/;   
						///// /^\d+$/;	
						if(!intRegex.test(value)) {
							$(pincode).addClass('error');
							$(this).parent().next(".errorTip").show();
							test1++;
						}else if(pincodeVal.length < 6){
							$(pincode).addClass('error');
							$(this).parent().next(".errorTip").show();
							test1++;
						}else{
							$(this).removeClass('error');
							$(this).parent().next(".errorTip").hide();
						}
				}
		}); /* #form1 input:text */
		
		var OLL = $('#OfficeLandline');
		var OLLlen = $('#OfficeLandline').val();
		
		//var isNumerber = $(this).val();
		var value = OLLlen.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		var OLLintRegex = /^\d+$/;   
		///// /^\d+$/;	
		if(!OLLintRegex.test(value)) {
			$(OLL).addClass('error');
			$(OLL).parent().next(".errorTip").show();
			test2++;
		}else if(OLLlen.length < 8){
			$(OLL).addClass('error');
			$(OLL).parent().next(".errorTip").show();
			test2++;
		}else{
			$(OLL).removeClass('error');
			$(OLL).parent().next(".errorTip").hide();
		}
	
	
//	alert("OK");
//	var divVal = $('#AddOtherAddress').attr('value');
//	alert(divVal);
	//if(){}
	
//	alert(test1 + " ... ... " + test2);

	
	if(test1 == 0 && test2 == 0){
		
			$(this).hide();
		
			$('#additionError').hide();
			$('#documentation').css({ marginLeft : '-1000px'});
			
			$('#documentation').fadeIn();
			$('#documentation').animate({marginLeft: '0px'});
		
		
			$('#progressBar .percent').html('90%');
			$('#per6').after('<img src="images/81-90.gif" id="per7" alt="90 percent" />');
		  
			$(window).scrollTop(1207);
		  
		  $("#additional-info input, #additional-info select").each(function(){
			$(this).attr('disabled','disabled');
			$(this).parent().addClass('disabled');
		  });
		  
		  
	  }else{
		  	$('#additionError').fadeIn();
		  }
	


});



var form1 = 0, form2 = 0, form3 = 0, form5=0, form6=0;
	
	$('#form1-click').bind('click',function(){
		form1 = 0;
		var test1 = 0;
		var test2 = 0;
		
		$("#form1 input:text").each(function(){
			if($(this).val() == $(this).attr('WaterMark')){ 
			if($(this).attr('disabled')){
				
				}else{
					$(this).addClass('error');
					//alert($(this).val());
					test1++;
					//return false;
				}
			}
			else{ 
				$(this).removeClass('error');
				totalText++;
				//alert("yes 1");
			}
		}); /* #form1 input:text */
		
	
		$("#form1 select").each(function(){	
			var selectId = '';
			var selectVal = '';
			
			selectId = $(this).attr('id');
			selectVal = $(this).val();
			
		
			if(selectVal == 'Your Residence City' || selectVal == 'DD' || selectVal == 'MM' || selectVal == 'YYYY' || selectVal == 'YY'){
					$(this).next('span').addClass('error');
					//alert(selectVal);
					test2++;
			}else{
				//alert(selectId);
				$(this).next('span.select').removeClass('error');
				totalSelect++;
				
			}
			selectId = '';
			selectVal = '';

		});
		
		if(netSalary == 1){
				$('#netSalary').addClass('error');
				$('#netSalary').prev('div.tool').show().fadeIn();
			}
		
		if(test1 == 0 && test2 == 0 && netSalary == 0){
			//alert("yes 2");
			$('#rightPer').animate({height: '10px'});
			$('#progressBar .percent').html('5%');
			$('#form2').css({ marginLeft : '850px'});
			$('#form2').fadeIn();
			$('#form2').animate({marginLeft: 0}, 500);
			$(this).parent().hide();
			form1 =1;
			
		}else{
			return false;
			}
		
		
	});/* End of form1 */
	
$('#form2-click').bind('click',function(){
		form2 = 0;
		var test1 = 0;
		var test2 = 0;
		
		$("#form2 input:text").each(function(){
			if($(this).val() == $(this).attr('WaterMark')){ 
			if($(this).attr('disabled')){
				
				}else{
					$(this).addClass('error');
					//alert($(this).val());
					test1++;
					//return false;
				}
			}
			else{ 
				$(this).removeClass('error');
				totalText++;
				//alert("yes 1");
			}
		}); /* #form1 input:text */
		
		if(validateEmail('OfficeEmailID'))
		  {
			  $('#OfficeEmailID').removeClass('error');
		  }
		  else
		  {
			 $('#OfficeEmailID').addClass('error');
			 return false;
		  }

		if(test1 == 0){
			//alert("yes 2");
			$('#rightPer').animate({height: '28px'});
			$('#progressBar .percent').html('15%');
			$('#form3').css({ marginLeft : '850px'});
			$('#form3').fadeIn();
			$('#form3').animate({marginLeft: 0});
			$(this).parent().hide();
			form2 =1;
		}else{
			return false;
			}
		
		
	});/* End of form2 */

	$('#form3-click').bind('click',function(){
		form3 = 0;
		var ftest1 = 0;
		var ftest3 = 0;
		
		$("#form3 input:text").each(function(){
			if($(this).val() == $(this).attr('WaterMark')){ 
			if($(this).attr('disabled')){
				
				}else{
					$(this).addClass('error');
					//alert($(this).val());
					ftest1++;
					//return false;
				}
			}
			else{ 
				$(this).removeClass('error');
				totalText++;
				//alert("yes 1");
			}
		}); /* #form1 input:text */
		
		$("#form3 select").each(function(){
												 
			var selectId = '';
			var selectVal = '';
			
			selectId = $(this).attr('id');
			selectVal = $(this).val();
			
			if(selectVal == 'Residence Type'){
					$(this).next('span').addClass('error');
					//alert(selectVal);
					ftest3++;
			}else{
				//alert(selectId);
				$(this).next('span.select').removeClass('error');
				totalSelect++;
				
			}
		});
		

		if(ftest1 == 0 && ftest3 == 0){
			//alert("yes 2");
			$('#rightPer').animate({height: '47px'});
			$('#progressBar .percent').html('25%');
			$('#form4').css({ marginLeft : '850px'});
			$('#form4').fadeIn();
			$('#form4').animate({marginLeft: 0});
			$(this).parent().hide();
			form3 =1;
		}else{
			return false;
			}
		
		
	});/* End of form3 */


	$('#save1').click(function(){
									  
//		$('#form1-click').click();
//		$('#form2-click').click();
//		$('#form3-click').click();											  
									  
		var ftext = 0;
		var fselect = 0;
		$("#form4 input:text").each(function(){
			if($(this).val() == $(this).attr('WaterMark')){ 
			
			  if($(this).attr('disabled')){
				  
				  }else{
					$(this).addClass('error');
					//alert("error check this");
					$(this).prev('div.tool').show();
					ftext++;
			  		//error=1;
				  }
				
				
			}
			else{ 
				$(this).removeClass('error');
				totalText++;
				//alert("yes 1");
			}
		
		
		$("#form4 select").each(function(){
												 
			var selectId = '';
			var selectVal = '';
			
			selectId = $(this).attr('id');
			selectVal = $(this).val();
			
			if(selectVal == 'Mode of crediting salary'){
					$(this).next('span').addClass('error');
					//alert(selectVal);
					fselect++;
			}else{
				//alert(selectId);
				$(this).next('span.select').removeClass('error');
				totalSelect++;
				
			}
		});
		
		
		if(!$('span.checkbox').hasClass('selected')){
			//alert("Please accept the Terms and Conditions");
			return false;
			}
		
		//if(!$(".checkbox input:checked")){ alert("error"); return false;}	
		
		if(ftext==0 && form1==1 && form2==1 && form3==1 && fselect == 0 ){
				$('#rightPer1').animate({height: '18px'});
				$('#progressBar .percent').html('34%');
				
				$(window).scrollTop('0px');
				
				$('#financial-info').css({marginLeft: '850px'});
				$('.tabs li.t1').addClass('done');
				$('.tabs li').removeClass('selected');
				$('.tabs li.t1').removeClass('selected');
				$('#personal-details').hide();
				$('#financial-info').show();
				$('#financial-info').animate({marginLeft: '0'},500);
				$('.tabs li.t2').addClass('selected');
				

			}
		}); /* #personal-details input:text */
		
		
		
	}); /* Save Button First & #form4 */



/* Financial Info */
$('#form5-click').bind('click',function(){
		form5 = 0;
		var ftest1 = 0;
		var ftest3 = 0;
		
		$("#form5 input:text").each(function(){
			if($(this).val() == $(this).attr('WaterMark')){ 
			if($(this).attr('disabled')){
				
				}else{
					$(this).addClass('error');
					//alert($(this).val());
					ftest1++;
					//return false;
				}
			}
			else{ 
				$(this).removeClass('error');
				totalText++;
				//alert("yes 1");
			}
		}); /* #form1 input:text */
		
		$("#form5 select").each(function(){
												 
			var selectId = '';
			var selectVal = '';
			
			selectId = $(this).attr('id');
			selectVal = $(this).val();
			
			if(selectVal == 'Office City' || selectVal == 'Marital Status'){
					$(this).next('span').addClass('error');
					//alert(selectVal);
					ftest3++;
			}else{
				//alert(selectId);
				$(this).next('span.select').removeClass('error');
				totalSelect++;
				
			}
		});
		

		if(ftest1 == 0 && ftest3 == 0){
			//alert("yes 2");
			$('#rightPer1').animate({height: '48px'},300, function(){
				$('#rightPer1').animate({width: '42px'});													   
																   
			});
			$('#progressBar .percent').html('50%');
			
			$('#form6').css({ marginLeft : '850px'});
			$('#form6').fadeIn();
			$('#form6').animate({marginLeft: 0});
			$(this).parent().hide();
			form5 =1;
		}else{
			return false;
			}
		
		
	});/* End of form5 */

$('#save2').click(function(){
									  
		//$('#form5-click').click();
										  
									  
		var ftext = 0;
		var fselect = 0;
		$("#form6 input:text").each(function(){
			if($(this).val() == $(this).attr('WaterMark')){ 
			
			  if($(this).attr('disabled')){
				  
				  }else{
					$(this).addClass('error');
					//alert("error check this");
					$(this).prev('div.tool').show();
					ftext++;
			  		//error=1;
				  }
			}
			else{ 
				$(this).removeClass('error');
				totalText++;
				//alert("yes 1");
			}
		

		if(ftext==0 && form5==1){
				$('#leftPer1').animate({height: '27px', width: '42px'});
				$('#progressBar .percent').html('66%');
				
				$('#loan-calculation').css({marginLeft: '850px'});
				$('.tabs li.t2').addClass('done');
				$('.tabs li').removeClass('selected');
				$('.tabs li.t2').removeClass('selected');
				$('.tab-content').hide();
				$('#loan-calculation').show();
				$('#loan-calculation').animate({marginLeft: '0'},500);
				$('.tabs li.t3').addClass('selected');
				
				
				//$('.tabs li.t2 a').click();
			}
		}); /* #personal-details input:text */
		
		
		
	}); /* Save Button First & #form4 */



});


function validateEmail(txtEmail){
   var a = document.getElementById(txtEmail).value;
   var filter = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{1,4}$/;
    if(filter.test(a)){
        return true;
    }
    else{
        return false;
    }
}


//$.validator.addMethod('numericOnly', function (value) { 
//   $(this).addClass('error');
//   //alert("This validate");
//   return /[0-9 ],/.test(value); 
//});





$(window).load(function(){
	/* Progress bar position setter */
	$(window).scroll(function(){
		$('#progressBar').stop();
		var pro = $(window).scrollTop();
		//var proB = $(window).scrollBottom();
		//pro = pro.toFixed(0);
		var px = 0;
		px = pro + 15;
		if(pro >= 420){
			$('#progressBar').animate({ top: px}, 200);
			px = 0;
		}
		if(pro < 420){
			$('#progressBar').animate({ top: '420px'}, 200);
		}
	
	});
	
});

// Pop in Personal Detail page
$(document).ready(function(){
	$("#saveData").click(function(){
		//alert("Yes me");								  
		$("#SavedInfoBack").fadeIn();							  
	});
	$(".close, .popClick").click(function(){
		$("#SavedInfoBack").fadeOut();	
		$("#PCFees").fadeOut();
		$("#termsConditionsPop").fadeOut();
		$("#saveforlaterPop").fadeOut();
	});


	$("#termsConditions").click(function(){
		//alert("Yes me");								  
		$("#termsConditionsPop").fadeIn();							  
	});
	
	$("#saveforlater").click(function(){
		//alert("Yes me");								  
		$("#saveforlaterPop").fadeIn();							  
	});
	
	$("#SaveOffer").click(function(){
		//alert("Yes me");								  
		$("#div_save").fadeIn();							  
	});
	
	
	
//	$(".close, .popClick").click(function(){
//		$("#termsConditionsPop").fadeOut();				   
//	});
	
	$("#pcf").click(function(){
		
		$('#progressBar .percent').html('70%');
		$('#per4').after('<img src="images/61-70.gif" id="per5" alt="70 percent" />');
		
							 
		//alert("Yes me");								  
		$("#PCFees").fadeIn();							  
	});
	$(".close, .popClick").click(function(){
		$("#PCFees").fadeOut();				   
	});
		$(".close, .popClick").click(function(){
		$("#saveforlaterPop").fadeOut();				   
	});
	
	$('#ProceedsDoc').click(function(){
		
		$('#progressBar .percent').html('80%');
		$('#per5').after('<img src="images/71-80.gif" id="per6" alt="80 percent" />');									 
									 
		$("#PCFees").fadeOut();									 
		$(".tab-content").hide();
		$(".tabs li.t2").addClass("done");
		var href = $(".tabs li.t3 a").attr("title");
		$(".tabs li").removeClass("selected");
		$(".tabs li.t3").addClass("selected");
		$("#"+href).show();
		$(window).scrollTop(403);								 
	});
	
//	$("#submitDataFetch").click(function(){
//		$("#mobileNumber").hide();
//		$("#VerifyMobileCode").fadeIn();								  
//	});
//	$("#submitVerify").click(function(){
//		$("#SavedInfoBack").fadeOut();								  
//	});
});
//
////$(document).ready(function(){
function numbers(value){

		var numberRs = new Array();
		numberRs = value;
		numberRs = numberRs.toString();
		//alert("Numbers " + numberRs);
		var x = numberRs.split('.');
		var x1 = x.length > 1 ? '.' + x[1] : '';
		
		numberRs=numberRs.replace(x1,'');
		var len = numberRs.length;
		var val = '';
		
switch(len){
	case 4: val = numberRs.substr(0,1)+","+numberRs.substr(1,1)+numberRs.substr(2,1)+numberRs.substr(3,1);break;
	case 5: val = numberRs.substr(0,1)+numberRs.substr(1,1)+","+numberRs.substr(2,1)+numberRs.substr(3,1)+numberRs.substr(4,1); break;
	case 6: val = numberRs.substr(0,1)+","+numberRs.substr(1,1)+numberRs.substr(2,1)+","+numberRs.substr(3,1)+numberRs.substr(4,1)+numberRs.substr(5,1); break;
	case 7: val = numberRs.substr(0,1)+numberRs.substr(1,1)+","+numberRs.substr(2,1)+numberRs.substr(3,1)+","+numberRs.substr(4,1)+numberRs.substr(5,1)+numberRs.substr(6,1); break;
	case 8: val = numberRs.substr(0,1)+","+numberRs.substr(1,1)+numberRs.substr(2,1)+","+numberRs.substr(3,1)+numberRs.substr(4,1)+","+numberRs.substr(5,1)+numberRs.substr(6,1)+numberRs.substr(7,1); break;
	case 9: val = numberRs.substr(0,1)+numberRs.substr(1,1)+","+numberRs.substr(2,1)+numberRs.substr(3,1)+","+numberRs.substr(4,1)+numberRs.substr(5,1)+","+numberRs.substr(6,1)+numberRs.substr(7,1)+numberRs.substr(8,1); break;
	default: val = numberRs; break;
}

		val = val + x1;
		//alert(val);
		 return val;
	}
	//});


	$(document).ready(function () {



	});

	function ajaxCalculation(vmtor, vAmt, vintr) {

	        $('#txtLoanAmount').val(numbers(vAmt));
	        vAmt = vAmt * 100000;
	        var terms;
	        var numAmt, denAmt;
	        var emiv;
	        terms = 12;
	        numAmt = vAmt * Math.pow((1 + vintr / (terms * 100)), vmtor);
	        denAmt = 100 * terms * (Math.pow((1 + vintr / (terms * 100)), vmtor) - 1) / vintr;
	        emiv = 12 * (numAmt / (denAmt * 12));
	        emiv = Math.round(emiv);
	        $('#YEMI').text(numbers(emiv));
		    $('#EMIValue').html("Rs." + numbers(emiv));
	        $('#intrRate').val(numbers(vintr));
	        $('#txtTenure').val(numbers(vmtor));

	    }

	    $(window).load(function () {
	        $('#intrRate').focusout(function () {
	            var changedIntRtVal = $('#intrRate').val();
	            changedIntRtVal = parseFloat(changedIntRtVal);
	            if (changedIntRtVal <= 40) {
	                $("#slider3").slider('value', changedIntRtVal.toFixed(2));
	                $('#slider3 a.ui-slider-handle span.amount').html(changedIntRtVal.toFixed(2));
	                ajaxCalculation($("#slider2").slider("value"), $("#slider").slider("value"), changedIntRtVal)
	            }
	            else {
	                alert("Entered wrong interest rate.");
	            }
	        });


	        $('#txtTenure').focusout(function () {
	            var changedTnrRtVal = $('#txtTenure').val();
	            changedTnrRtVal = parseInt(changedTnrRtVal);
	            if (changedTnrRtVal <= 240) {
	                $("#slider2").slider('value', changedTnrRtVal.toFixed(0));
	                $('#slider2 a.ui-slider-handle span.amount').html(changedTnrRtVal.toFixed(0));
	                ajaxCalculation(changedTnrRtVal, $("#slider").slider("value"), $("#slider3").slider("value"))
	            }
	            else {
	                alert("Entered wrong tenure.");
	            }
	        });

	        $('#txtLoanAmount').focusout(function () {
	            var changedAmtVal = 0;
	            changedAmtVal = $('#txtLoanAmount').val();
	            var length = changedAmtVal.length;
	            var count = 0;

	            for (i = 0; i < length; i++) {
	                c = changedAmtVal.charAt(i);
	                if (c == ',')
	                    count++;
	            }
	            for (jj = 0; jj < count; jj++) {
	                changedAmtVal = changedAmtVal.replace(',', '');
	            }
	            //changedAmtVal = changedAmtVal / 100000;
	            //alert(changedAmtVal);
	            if (changedAmtVal <= 100 && changedAmtVal >= 1) {
	                $("#slider").slider('value', changedAmtVal);
	                $('#slider a.ui-slider-handle span.amount').html(changedAmtVal);
	                ajaxCalculation($("#slider2").slider("value"), changedAmtVal, $("#slider3").slider("value"))
	            }
	            else {
	                alert("Entered wrong amount.");
	            }
	        });


	    });

	    $(window).load(function () {
/*	        var slide = $("#slider").slider("value");
	        var slide2 = $("#slider2").slider("value");
	        var slide3 = $('#slider3').slider("value");
	        ajaxCalculation(slide2, slide, $("#slider3").slider("value"));
*/			
			ajaxCalculation(36,10, 12);
			$("#slider").slider('value', 10);
			$("#slider2").slider('value', 36);
			$("#slider3").slider('value', 12);
			$('#slider a.ui-slider-handle span.amount').html(10);
			$('#slider2 a.ui-slider-handle span.amount').html(36);
			$('#slider3 a.ui-slider-handle span.amount').html(12);
	    });
		
//ajaxCalculation(36,10, 12);
/*$("#slider").slider('value', 10);
$("#slider2").slider('value', 36);
$("#slider3").slider('value', 12);*/
	    
$(document).ready(function(){

///////////////////*  Top Menu  *///////////////////////////

(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);

//start drop down menu scripts @@@@@@
 $(document).ready(function () {
	function megaHoverOver() {
		$(this).find(".subnav").stop().fadeTo('', 1).show();
		$(this).find(".menuArrow").stop().fadeTo('', 1).show();
		//$(this + " .sub").css({zIndex:999999});

		//Calculate width of all ul's
		(function ($) {
			jQuery.fn.calcSubWidth = function () {
				rowWidth = 0;
				//Calculate row
				$(this).find("ul").each(function () {
					rowWidth += $(this).width();
				});
			};
		})(jQuery);

		if ($(this).find(".row").length > 0) { //If row exists...
			var biggestRow = 0;
			//Calculate each row
			$(this).find(".row").each(function () {
				$(this).calcSubWidth();
				//Find biggest row
				if (rowWidth > biggestRow) {
					biggestRow = rowWidth;
				}
			});
			//Set width
			$(this).find(".subnav").css({ 'width': biggestRow });
			$(this).find(".row:last").css({ 'margin': '0' });

		} else { //If row does not exist...

			$(this).calcSubWidth();
			//Set Width
			$(this).find(".subnav").css({ 'width': rowWidth });
		}
	}
	function megaHoverOut() {
		//$(this + " a").removeClass("selected");
		$(this).find(".subnav").stop().fadeTo('', 0, function () {
			$(this).hide();
		});
		$(this).find(".menuArrow").stop().fadeTo('', 0,function(){
			$(this).hide();														
		});
	}
	var config = {
		sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
		interval: 0, // number = milliseconds for onMouseOver polling interval    
		over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
		timeout: 100, // number = milliseconds delay before onMouseOut    
		out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
	};

	$(".header ul li .subnav").css({ 'opacity': '0' });
	$(".header ul li .menuArrow").css({ 'opacity': '0' });
	$(".header ul li").hoverIntent(config);

});
		
/////////////////////////////**** End Top Menu **********//////////////////////////
						   
});