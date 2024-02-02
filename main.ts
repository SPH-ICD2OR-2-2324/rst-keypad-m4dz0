namespace SpriteKind {
    export const UI = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.max(0, curY - 1)
    UpdateCursor()
})
function InitKeys () {
    for (let index = 0; index <= keypadList.length - 1; index++) {
        mySprite = sprites.create(keypadList[index], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
function UpdateCursor () {
    cursorSprite.left = curX * 23
    cursorSprite.top = curY * 31
}
function printCol3 () {
    clearScreen()
    printout = []
    if (Selections[11] == 1) {
        printout.push(11)
    }
    if (Selections[12] == 1) {
        printout.push(12)
    }
    if (Selections[8] == 1) {
        printout.push(8)
    }
    if (Selections[13] == 1) {
        printout.push(13)
    }
    if (Selections[14] == 1) {
        printout.push(14)
    }
    if (Selections[2] == 1) {
        printout.push(2)
    }
    if (Selections[9] == 1) {
        printout.push(9)
    }
    for (let index = 0; index <= printout.length - 1; index++) {
        mySprite = sprites.create(keypadList[printout[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    col1count = 0
    col2count = 0
    col3count = 0
    col4count = 0
    col5count = 0
    col6count = 0
    colCounter()
    colCountComplete()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    current = curY * 7 + curX
    Selections[current] = Selections[current] * -1
    if (Selections[current] == 1) {
        if (SelectedCount == 4) {
            Selections[current] = Selections[current] * -1
        } else {
            SelectedCount += 1
            keypadList[current].replace(0, 7)
        }
    } else {
        SelectedCount += -1
        keypadList[current].replace(7, 0)
    }
    clearScreen()
    InitKeys()
    InitCursor()
})
function printCol2 () {
    clearScreen()
    printout = []
    if (Selections[7] == 1) {
        printout.push(7)
    }
    if (Selections[0] == 1) {
        printout.push(0)
    }
    if (Selections[6] == 1) {
        printout.push(6)
    }
    if (Selections[8] == 1) {
        printout.push(8)
    }
    if (Selections[9] == 1) {
        printout.push(9)
    }
    if (Selections[5] == 1) {
        printout.push(5)
    }
    if (Selections[10] == 1) {
        printout.push(10)
    }
    for (let index = 0; index <= printout.length - 1; index++) {
        mySprite = sprites.create(keypadList[printout[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.max(0, curX - 1)
    UpdateCursor()
})
function clearScreen () {
    sprite_list = sprites.allOfKind(SpriteKind.UI)
    for (let value of sprite_list) {
        value.destroy()
    }
}
function InitCursor () {
    cursorSprite = sprites.create(img`
        88888..........88888
        88888..........88888
        88................88
        88................88
        88................88
        88................88
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        88................88
        88................88
        88................88
        88................88
        88................88
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        88................88
        88................88
        88................88
        88888..........88888
        88888..........88888
        `, SpriteKind.UI)
    UpdateCursor()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curY < 3) {
        curX = Math.min(6, curX + 1)
    } else {
        curX = Math.min(5, curX + 1)
    }
    UpdateCursor()
})
function printCol1 () {
    clearScreen()
    printout = []
    if (Selections[0] == 1) {
        printout.push(0)
    }
    if (Selections[1] == 1) {
        printout.push(1)
    }
    if (Selections[2] == 1) {
        printout.push(2)
    }
    if (Selections[3] == 1) {
        printout.push(3)
    }
    if (Selections[4] == 1) {
        printout.push(4)
    }
    if (Selections[5] == 1) {
        printout.push(5)
    }
    if (Selections[6] == 1) {
        printout.push(6)
    }
    for (let index = 0; index <= printout.length - 1; index++) {
        mySprite = sprites.create(keypadList[printout[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curX == 6) {
        curY = Math.min(2, curY + 1)
    } else {
        curY = Math.min(3, curY + 1)
    }
    UpdateCursor()
})
function InitArray () {
    Selections = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
    ]
}
function printCol6 () {
    clearScreen()
    printout = []
    if (Selections[15] == 1) {
        printout.push(15)
    }
    if (Selections[7] == 1) {
        printout.push(7)
    }
    if (Selections[23] == 1) {
        printout.push(23)
    }
    if (Selections[24] == 1) {
        printout.push(24)
    }
    if (Selections[19] == 1) {
        printout.push(19)
    }
    if (Selections[25] == 1) {
        printout.push(25)
    }
    if (Selections[26] == 1) {
        printout.push(26)
    }
    for (let index = 0; index <= printout.length - 1; index++) {
        mySprite = sprites.create(keypadList[printout[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
function printCol4 () {
    clearScreen()
    printout = []
    if (Selections[15] == 1) {
        printout.push(15)
    }
    if (Selections[16] == 1) {
        printout.push(16)
    }
    if (Selections[17] == 1) {
        printout.push(17)
    }
    if (Selections[4] == 1) {
        printout.push(4)
    }
    if (Selections[13] == 1) {
        printout.push(13)
    }
    if (Selections[10] == 1) {
        printout.push(10)
    }
    if (Selections[18] == 1) {
        printout.push(18)
    }
    for (let index = 0; index <= printout.length - 1; index++) {
        mySprite = sprites.create(keypadList[printout[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
function colCountComplete () {
    if (col1count == 4) {
        printCol1()
    } else {
        game.splash("INVALID")
    }
    if (col2count == 4) {
        printCol2()
    } else {
        game.splash("INVALID")
    }
    if (col3count == 4) {
        printCol3()
    } else {
        game.splash("INVALID")
    }
    if (col4count == 4) {
        printCol4()
    } else {
        game.splash("INVALID")
    }
    if (col5count == 4) {
        printCol5()
    } else {
        game.splash("INVALID")
    }
    if (col6count == 4) {
        printCol6()
    } else {
        game.splash("INVALID")
    }
}
function printCol5 () {
    clearScreen()
    printout = []
    if (Selections[19] == 1) {
        printout.push(19)
    }
    if (Selections[18] == 1) {
        printout.push(18)
    }
    if (Selections[17] == 1) {
        printout.push(17)
    }
    if (Selections[20] == 1) {
        printout.push(20)
    }
    if (Selections[16] == 1) {
        printout.push(16)
    }
    if (Selections[21] == 1) {
        printout.push(21)
    }
    if (Selections[22] == 1) {
        printout.push(22)
    }
    for (let index = 0; index <= printout.length - 1; index++) {
        mySprite = sprites.create(keypadList[printout[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
function colCounter () {
    if (Selections[0] == 1) {
        col1count += 1
        col2count += 1
    }
    if (Selections[1] == 1) {
        col1count += 1
    }
    if (Selections[2] == 1) {
        col1count += 1
        col3count += 1
    }
    if (Selections[3] == 1) {
        col1count += 1
    }
    if (Selections[4] == 1) {
        col1count += 1
        col4count += 1
    }
    if (Selections[5] == 1) {
        col1count += 1
        col2count += 1
    }
    if (Selections[6] == 1) {
        col1count += 1
        col2count += 1
    }
    if (Selections[7] == 1) {
        col2count += 1
        col6count += 1
    }
    if (Selections[8] == 1) {
        col2count += 1
        col3count += 1
    }
    if (Selections[9] == 1) {
        col2count += 1
        col3count += 1
    }
    if (Selections[10] == 1) {
        col2count += 1
        col4count += 1
    }
    if (Selections[11] == 1) {
        col3count += 1
    }
    if (Selections[12] == 1) {
        col3count += 1
    }
    if (Selections[13] == 1) {
        col3count += 1
        col4count += 1
    }
    if (Selections[14] == 1) {
        col3count += 1
    }
    if (Selections[15] == 1) {
        col4count += 1
        col6count += 1
    }
    if (Selections[16] == 1) {
        col4count += 1
        col5count += 1
    }
    if (Selections[17] == 1) {
        col4count += 1
        col5count += 1
    }
    if (Selections[18] == 1) {
        col4count += 1
        col5count += 1
    }
    if (Selections[19] == 1) {
        col5count += 1
        col6count += 1
    }
    if (Selections[20] == 1) {
        col5count += 1
    }
    if (Selections[21] == 1) {
        col5count += 1
    }
    if (Selections[22] == 1) {
        col5count += 1
    }
    if (Selections[23] == 1) {
        col6count += 1
    }
    if (Selections[24] == 1) {
        col6count += 1
    }
    if (Selections[25] == 1) {
        col6count += 1
    }
    if (Selections[26] == 1) {
        col6count += 1
    }
}
let sprite_list: Sprite[] = []
let SelectedCount = 0
let current = 0
let col6count = 0
let col5count = 0
let col4count = 0
let col3count = 0
let col2count = 0
let col1count = 0
let Selections: number[] = []
let printout: number[] = []
let cursorSprite: Sprite = null
let mySprite: Sprite = null
let curY = 0
let curX = 0
let list: number[] = []
curX = 0
curY = 0
scene.setBackgroundImage(bgImage)
InitArray()
InitKeys()
InitCursor()
