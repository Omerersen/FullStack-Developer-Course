let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const saveİnputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn")
const saveTabBtn  =  document.querySelector("#save-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}


saveTabBtn.addEventListener("click" , function(){
  chrome.tabs.query({active: true , currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads" , JSON.stringify( myLeads ));
    render(myLeads);
  })
});

function render(leads){
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li> 
        <a href=${leads[i]} target = _blank> 
            ${leads[i]}
        </a>
    </li>
    ` ;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick" , function() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

saveİnputBtn.addEventListener("click" , function() {
  myLeads.push(inputEl.value)
  inputEl.value = "";
  localStorage.setItem("myLeads" , JSON.stringify(myLeads));
  render(myLeads);
});


     