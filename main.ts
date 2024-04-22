let distancia = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    basic.showNumber(distancia)
})
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    if (distancia < 100 && distancia >= 80) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (distancia < 80 && distancia >= 60) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    if (distancia < 60 && distancia >= 40) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
    if (distancia < 40 && distancia >= 20) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
    if (distancia < 20 && distancia >= 0) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    }
})
