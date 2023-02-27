huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.readeBox(1, Content1.xCenter) > 80 && huskylens.readeBox(1, Content1.xCenter) == 240) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 70)
    } else if (huskylens.readeBox(1, Content1.xCenter) < 241) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 70)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
    } else if (huskylens.readeBox(1, Content1.xCenter) < 79) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 70)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
