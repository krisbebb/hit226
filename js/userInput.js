/**
* Scripts for {Project name and url}
*
* author: {name}
* email: {email}
* website: {portfolio}
*/


	var output = document.getElementById('output');

	var enterBtn = document.getElementById('write');
	var readBtn = document.getElementById('read');
	var resetBtn = document.getElementById('reset');

	var storageIndex = 0;

function storeTextHandler(event){
		event.preventDefault(); // we shouldn't need this, but just to be safe
		var customer = document.getElementById('customer');
		var address = document.getElementById('address');
		var pizza_type = document.getElementById('pizza_type');

		var crust_type = $("input[name='crust']:checked").val();
		var extras = [];
		$("input[name='extras']:checked").each(function() {
			extras.push($(this).attr('value'));
		});
		var extras = extras.join(' ');

		var userInput = [customer.value, address.value, pizza_type.value, crust_type, extras.toString()].join('<br>');



		if(userInput[0]){
			/* userInput isn't empty, store the value and increment our index*/

			localStorage.setItem(storageIndex++, userInput);

		}
		/* set the entry field to blank and set user focus to it*/
		customer.value = ' ';
		address.value = '';
		customer.focus();
		/* empty the output area*/
		output.textContent = '';
	}

	function readDBHandler(event){
		event.preventDefault(); // we shouldn't need this, but just to be safe
		var returnText = '';
		if(localStorage.length === 0){
			returnText = 'No orders in system';
		} else {
			/* loop through localStorage and add valeus to returnText */
			for (var i = 0; i < localStorage.length; i++) {
				returnText += "Order " + (i + 1) + ": <br>" + localStorage.getItem(i) + "<hr>";
			}
		}
		console.log(localStorage);
		// output.textContent = returnText;
		output.innerHTML = returnText;
	}
function resetDBHandler(event){
		event.preventDefault(); // we shouldn't need this, but just to be safe
		localStorage.clear();
		output.textContent = 'Orders cleared';
		/* reset our index */
		storageIndex = 0;
	}
  enterBtn.addEventListener('click', storeTextHandler);
  readBtn.addEventListener('click', readDBHandler);
  resetBtn.addEventListener('click', resetDBHandler);
