function fibonacciGenerator (n) {
        var output = []
        var n1 = 0;
        output.push(n1);
        if(n == 1){
            return(output);
        }
        var n2 =1;
        output.push(n2);
        if(n ==2){
            return(output)
        }
        for(var i=3; i<=n;i++){
            var item = n1 + n2;
            output.push(item);
            n1 = n2;
            n2 = item;
        }
        return(output);
        
    }

    console.log(fibonacciGenerator(100));
    
    