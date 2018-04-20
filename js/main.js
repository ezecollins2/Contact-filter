let filterInput = document.getElementById('filterInputes');


filterInput.addEventListener('keyup', filterNames)



function filterNames(){
    let filterValue = document.getElementById('filterInputes').value.toUpperCase();
    let ul = document.getElementById('names');
    //get li
    let li = document.getElementsByClassName('collection-item');
    //convert to Array and loop through
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) != -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
}