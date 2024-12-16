//your JS code here. If required.

function fizzBuzz() {

	let ans="";

	for(let i=1;i<=20;i++)
		{
			if(i%3==0)
			{
				if(i%5==0)
				{
					ans+="FizzBuzz";
				}else
				{
					ans+="Fizz";
				}
				
			}else if(i%5==0)
			{
				ans+="Buzz";
			}else
			{
				ans+=i;
			}
			ans+="\n";
		}
	return ans;
}

alert(fizzBuzz())
