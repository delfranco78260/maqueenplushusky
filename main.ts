huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.readeBox(1, Content1.xCenter) > 80 && huskylens.readeBox(1, Content1.xCenter) < 160) {
        basic.showIcon(IconNames.Heart)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    } else if (huskylens.readeBox(1, Content1.xCenter) < 79) {
        basic.showIcon(IconNames.No)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 60)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
    } else if (huskylens.readeBox(1, Content1.xCenter) > 180) {
        basic.showIcon(IconNames.Yes)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 80)
    }
})
