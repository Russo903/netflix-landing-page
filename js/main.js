const tabItems = document.querySelectorAll('.tab-item'); //basically turns into node array of tab items
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab
function selectItem(e){
    removeBorder();
    hideContent();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}

function hideContent(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// listen for click tab, for each element in tab items; listen for a click
tabItems.forEach(item => item.addEventListener('click', selectItem));



// listen for click tab, to show appropriete content per tab clicked
tabContentItems.forEach(item => item.addEventListener('click', selectItem));
