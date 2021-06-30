//initialization
let stations: Array<number>
let lastsync: Array<number>

radio.setGroup(1)
radio.setTransmitPower(7)

radio.sendValue("SYNC",input.runningTime()/100)
radio.sendValue("WAKE", 0)

function printStations() {
    serial.writeLine("Registered Stations \n\r ---------")
    for (let i=0; i<stations.length; i++)
        serial.writeLine("STATION: "+ i.toString() +" ID:"+stations[i])
}

control.setInterval(function () {
    led.toggle(2, 2)
}, 1000, control.IntervalMode.Interval)

radio.onReceivedValue(function (name: string, value: number) {
    if (name === "STATION") {
        stations.insertAt(0, value)
        printStations()
    }
    if (name === "SYNCACK") {
        //for 
    }
})

radio.onReceivedString(function (receivedString: string) {
    
})



basic.forever(function () {
	
})
