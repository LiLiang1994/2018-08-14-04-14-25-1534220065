module.exports = function main(input) {
	var result="";
	var nums=new Map([['0',["._.","|.|","|_|"]],['1',["...","..|","..|"]],['2',["._.","._|","|_."]],['3',["._.","._|","._|"]],['4',["...","|_|","..|"]],['5',["._.","|_.","._|"]],['6',["._.","|_.","|_|"]],['7',["._.","..|","..|"]],['8',["._.","|_|","|_|"]],['9',["._.","|_|","..|"]]]);
	
	for(var j=0;j<3;j++){
		for(var i=0;i<input.length;i++){
			result+=nums.get(input.charAt(i))[j];
			if(i<input.length-1){
				result+=" ";
			}
		}
		result+="\n";
	}
	
	console.log("result");
    console.log(result);
    return result;
};