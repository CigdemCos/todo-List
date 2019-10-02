//This is so that whatever we write, it only executes after the page fully loads.
$(document).ready(function(){
	let addButton = $('.add-button');
	let field = $('.add-field');
	let tasks = $('.tasks');
	//Add task
	/*EcmaScript 6 comes with these back quotes or back ticks. They allows
	us to paste the code using several lines without causing any problems.
	And in addition to that we can then insert javascript code into this structure.*/
	addButton.on('click', function(){
		//preventing creating empty tasks.
		if(field.val() === ''){
			return;
		}
		let elem = `<li class="task">
					<div class="task-checked col-1">
						<input type="checkbox">
					</div>
					<div class="task-text col-2">${field.val()}</div>
					<div class="task-remove col-3"></div>
				</li>`;
				tasks.append(elem);
				field.val('');
	})	

	//Remove Task
   	//event gets delegated from the parent list element
	tasks.on('click', '.task-remove', function(){
			$(this).parent().remove();
	})
	
	//Checked
	tasks.on('change','.task-checked input' ,function(){
			$(this).parent().next().toggleClass('checked');
		
	})

	//Sortable
	//$('#tasks-list').sortable();

	//Draggable
    $('#widget').draggable();

})