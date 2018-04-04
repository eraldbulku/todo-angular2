export class Init{
	load(){
		if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
			console.log('No Todos found');
			var todos = [
				{
					text: 'Football'
				},
				{
					text: 'Basketball'
				},
				{
					text: 'Tennis'
				}
			];

			localStorage.setItem('todos', JSON.stringify(todos));
			return;
		} else {
			console.log('Found Todos...');
		}
	}
}