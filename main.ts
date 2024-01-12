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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    col1count = 0
    col2count = 0
    col3count = 0
    col4count = 0
    col5count = 0
    col6count = 0
    if (Selections[0] == 1) {
        col1count += 1
        col2count += 1
    }
    if (Selections[1] == 1) {
        col1count += 1
    }
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
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
let sprite_list: Sprite[] = []
let SelectedCount = 0
let current = 0
let Selections: number[] = []
let col6count = 0
let col5count = 0
let col4count = 0
let col3count = 0
let col2count = 0
let col1count = 0
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
