export const simpleAction = () => dispacth => { 
	dispacth({
		type: 'SIMPLE_ACTION',
		payload: 'result_of_simpleaction'
	})
}