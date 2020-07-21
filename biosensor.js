//This class generates a living simulator
class Biosensor{
    constructor(name){
        //to initialise an owner and keep track of his heart rate
        this.owner = name;
        this.heartRate = 0;	
        this.live()	
    }

    //to generate random number between the given minimun and maximum value
    generateRandomCount(min, max){
        return parseInt(Math.random() * (max - min) + min);
    }

    //this function will generate a random number between 60 and 70
    generateHeartbeat(){
        let heartBeat = this.generateRandomCount(60,70);
        this.heartRate = heartBeat;
        console.log('Name: '+ this.owner + ' --- Heart Rate: ' + this.heartRate)	
    }

    //live function starts an endless interval to generate a beat every second
    live(){
        setInterval(()=>{this.generateHeartbeat()},1000)
    }
}

let andrea = new Biosensor('Andrea')
let james = new Biosensor('James')