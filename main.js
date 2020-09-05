// Calculator Code


 const $input = document.querySelector("input");
		document.querySelectorAll(".num_key").forEach (el=>{
			el.onclick =() => $input.value= $input.value!=="0" ?
			$input.value + el.innerText:el.innerText;
		}
		);
		const buffer=[]
		const opCallback=opName=>()=>{
			let currentVal=parseFloat($input.value);
			if(opName==="percent"){
				currentVal*=0.01;
				$input.value=currentVal
			}
			else{
				if(buffer && buffer.length){
					buffer.push({value:currentVal});
					const result= evaluate(buffer);

					buffer.push({value:result});
					buffer.push({value: opName});

					$input.value="";
				}
				else{
					buffer.push({value:currentVal});
					buffer.push({value:opName});
					$input.value="";

				}

				
			}
		}
		 const evaluate=buffer=> {
		 	const secondOperand=buffer.pop().value;
		 	const operator=buffer.pop().value;
		 	const firstOperand=buffer.pop().value;

		 	switch(operator){
		 		case"add":
		 		return firstOperand + secondOperand;
		 		break;
		 		case"subtract":
		 		return firstOperand - secondOperand;
		 		break;
		 		case"multiply":
		 		return firstOperand * secondOperand;
		 		break;
		 		case"divide":
		 		return firstOperand / secondOperand;
		 		break;
		 		case"squareroot":
		 		return Math.sqrt(firstOperand);
		 		break;
		 		default:
		 		return secondOperand;

		 	}

		 }
		 for (const opName of["add","subtract","multiply","divide","percent","squareroot"]){
		 	document.querySelector(`.op_key[op=${opName}]`).onclick = opCallback(opName);
		 }
		 document.querySelector(".eq__key").onclick = ()=>{
		 	if(buffer && buffer.length){
					buffer.push({value:parseFloat($input.value)});
					$input.value=evaluate(buffer);
				}
			}
				
document.querySelector(".op_key[op=clear]").onclick=()=>{
					$input.value=0;
					buffer.length=0;
				}
				document.querySelector(".op_key[op=Abs]").onclick=()=>{
					$input.value=-parseFloat($input.value);
				}


	//Form Validation Code




	
	function validation(){
	var name =document.getElementById('name').value;
	var phone =document.getElementById('phone').value;
	var email =document.getElementById('email').value;

	if(name == ""){
		document.getElementById('Name').innerHTML ="**Please fill the username field";
		return false;
	}
	
	if(!isNaN(name)){
		document.getElementById('Name').innerHTML ="**Only characters are allowed";
		return false;


	}
	if(phone == ""){
		document.getElementById('Phone No.').innerHTML =" **Please fill the Phone Number field";
		return false;
	}
	if(isNaN(phone)){
		document.getElementById('Phone No.').innerHTML =" **user must write digits only not characters";
		return false;
	}
	if((phone.length!=10)){
		document.getElementById('Phone No.').innerHTML =" **Phone No. must be of 10 digits only";
		return false;
	}

	
	if((email == "")){
		document.getElementById('E-mail').innerHTML =" **Please fill the Email-id field";
		return false;
	}
	if((email.indexOf('@')<=0)){
		document.getElementById('E-mail').innerHTML =" **@ is in  Invalid Position";
		return false;

	}
	if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.')){
		document.getElementById('E-mail').innerHTML =" **. is in Invalid Position";
		return false;

	}
}	





//Pallindrome code



function palindrome(word){
      var midddle=Math.ceil(word.length/2),
      i;
      for(i=0; i<=midddle; ++i ){
        if (word[i]!==word[(word.length-1)-i]){
          return false;
        }
      } 
      return true;
    }


    document.querySelector('button').addEventListener('click',function(e){
      
      var element=document.querySelector('input');
      
      if(palindrome(element.value)){
        element.classList.add('palindrome');
        alert("palindrome");
      }
      else{
        element.classList.remove('not_palindrome');
        alert("not a palindrome");
      }
    });




    //Anagram Code





    var button=document.getElementById('button-test');
		button.addEventListener('click',checkAnagram);
		var resultDiv=document.getElementById('result')

		function checkAnagram(){
			var str1 =document.getElementById('string1').value;
			var str2 =document.getElementById('string2').value;

			if(str1!==null &&str2!==null){
				if(str1.length!==str2.length){
					resultDiv.innerHTML="Strings are not anagrams.";
					return false;
				}
				var hashTable={};
				for(var i=0;i<str1.length;i++){
					if(hashTable.hasOwnProperty(str1[i]))
					{
						hashTable[str1[i]]=hashTable[str1[i]]+1;
					}
					else{
						hashTable[str1[i]]=1;
					}
				}
				for(var i=0;i<str2.length;i++){
					if(hashTable.hasOwnProperty(str2[i]))
					{
						hashTable[str2[i]]=hashTable[str2[i]]-1;
					}
					else{
						resultDiv.innerHTML="Strings are not anagrams!.";
						return false;
					}
				}
				for (var i in hashTable){
					if(hashTable[i]!==0){
						resultDiv.innerHTML="Strings are not anagrams!.";
						return false;

					}
					else{
						resultDiv.innerHTML="Strings are anagrams!.";
					}
				}
				return true;
			}

		}



		//Game code


		function myfunction(){
		var user=prompt('Choose Any Random Number')
		var Ran
		var computer=Math.random();
		if(computer<0.34){
			computer="Human";
		}
		else if(computer<=0.67){
			computer="Cockroach";
		}
		else{
			computer="Nuclear Bomb";
		}
		alert("Computer chooses:" +computer)
		var ran= Math.floor(Math.random()*Math.floor(1000))
		var remainder = ran %3;
		if(remainder ==0){
			user='Human'
		}
		else if(remainder==1){
			user='Cockroach'
		}
		else{
			user='Nuclear Bomb'
		}
		check (computer,user)

	}
	function check(computer,user){
		var result
		if(computer=='Human'& user=='Human'){
			result='TIE'

		}
		else if(computer=='Human'&user=='Cockroach'){
			result='lose'
		

		}
		else if(computer=='Human'&user=='Nuclear Bomb'){
			result='win'
		

		}
		else if(computer=='Cockroach'&user=='Human'){
			result='win'
		

		}
		else if(computer=='Cockroach'&user=='Cockroach'){
			result='Tie'
		

		}
		else if(computer=='Cockroach'&user=='Nuclear Bomb'){
			result='lose'
		

		}
		else if(computer=='Nuclear Bomb'&user=='Cockroach'){
			result='win'
		

		}
		else if(computer=='Nuclear Bomb'&user=='Human'){
			result='lose'
		

		}
		else if(computer=='Nuclear Bomb'&user=='Cockroach'){
			result='win'
		

		}
		else{
			result='Tie'
		}
		alert("You are:"+user)
		
		alert('You' + result)
		}
			
