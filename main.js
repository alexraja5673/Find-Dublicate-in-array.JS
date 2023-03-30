let a=[100,4,6,7,15,9,15,4,100,3];
			function dup(a){
				let b=[],c=[];
			for (i=0;i<a.length;i++){
				let x=0;
				for (j=0;j<b.length;j++){
					if (a[i]==b[j]){
						x=1;
						c.push(a[i]);
						break;
					}
				}
				if (x==0){
					b.push(a[i]);
				}
			}
			console.log(c);
			console.log(b);
			}
			dup(a);