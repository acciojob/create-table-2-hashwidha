function createTable() {
    //Write your code here
	let rows= Number(prompt("Input number of rows"));
	let cols=Number(prompt("Input number of columns"));
	let table= document.getElementById("myTable");

	for(let i=0;i<rows;i++){
		let row =table.insertRow(i);
		for(let j=0;j<cols;j++){
			let cell=row.insertCell(j)
			cell.innerHTML = `Row ${i} Col ${j}`;
		}
		
	}
  
}
