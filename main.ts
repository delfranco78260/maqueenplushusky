huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    huskylens.request()
    if (huskylens.readeBox(1, Content1.xCenter) > 80 && huskylens.readeBox(1, Content1.xCenter) == 240) {
        basic.showIcon(IconNames.Heart)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 250)
    } else if (huskylens.readeBox(1, Content1.xCenter) < 241) {
        basic.showIcon(IconNames.No)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 250)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
    } else if (huskylens.readeBox(1, Content1.xCenter) < 79) {
        basic.showIcon(IconNames.Yes)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 250)
    }
})
