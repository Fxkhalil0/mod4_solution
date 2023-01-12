var names=new Array();
names[0]="Fatma";
names[1]="Jana";
names[2]="Julia";
names[3]="Alaa";
names[4]="Sara";
names[5]="Jamal";
names[6]="Ahmed";
names[7]="Jenna";
names[8]="Jihan";
names[9]="Mustafa";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}