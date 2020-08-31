fetch("dat.json").then(response=>{
	return response.json();
}).then(data=>{
	//console.log(data.profile.basics);
	profile(data.profile.basics);
	details(data.profile.details);
})
var child_one=document.querySelector(".child_one");
var child_two=document.querySelector(".child_two");

var profile=(basic_info)=>{
	//console.log(basic_info.name);
	var name=document.createElement("h2");
	name.textContent=basic_info.name;
	child_one.append(name);
	var role=document.createElement("h4");
	role.textContent=basic_info.role;
	child_one.append(role);
	var email=document.createElement("a");
	email.href="mailto:"+basic_info.email;
	email.classList.add("link");
	email.textContent=basic_info.email;
	child_one.append(email);

	var mobile=document.createElement("a");
	mobile.href="tel:"+basic_info.mobile;
	mobile.classList.add("link");
	mobile.textContent=basic_info.mobile;
	child_one.append(mobile);
 	
 	var add=document.createElement("h3");
 	add.textContent=basic_info.address;
 	child_one.append(add);

}
var details=(details_info)=>{
	var summaryheading=document.createElement("h2");
	summaryheading.textContent="Summary";
	child_two.append(summaryheading);
	var hr1=document.createElement("hr");
	child_two.append(hr1);
	var list=document.createElement("ul");
	details_info.summary.map(i=>{
		var listitem=document.createElement("li");
		listitem.textContent=i;
		list.append(listitem);
	})
	child_two.append(list);
	
	var skillheading=document.createElement("h2");
	skillheading.textContent="Skills";
	child_two.append(skillheading);
	var shr1=document.createElement("hr");
	child_two.append(shr1);

	details_info.skills.map(j=>{
		var skilltype=document.createElement("h3");
		skilltype.textContent=j.type;
		child_two.append(skilltype);

		j.values.map(j_value=>{
			var skillvalue=document.createElement("span");
			skillvalue.textContent=j_value;
			skillvalue.classList.add("skill");
			child_two.append(skillvalue);
		})
	})


}