import Phaser from 'phaser'
import { Buttons } from 'phaser3-rex-plugins/templates/ui/ui-components'
import Anchor from 'phaser3-rex-plugins/plugins/behaviors/anchor/Anchor'
import { Label } from 'phaser3-rex-plugins/templates/ui/ui-components'
import ShakePosition from 'phaser3-rex-plugins/plugins/shakeposition'
import LocalStorageData from 'phaser3-rex-plugins/plugins/localstorage-data'
import constants from '@/constants'
import Button from '@/components/Button'

import getNewRandomFish from '@/helpers/getNewRandomFish'

export default class ShopScene extends Phaser.Scene {
    private gift!: Label

    constructor() {
        super(constants.SCENES.SHOP)
    }

    create() {
        this.addBackground()
        this.addTitle()
        this.addButtons()
    }

    private addBackground() {
        const { width, height } = this.cameras.main
        this.add
            .rectangle(0, 0, width, height, 0x2b_af_f6, 0.9)
            .setOrigin(0, 0)
            .setInteractive()
    }

    private addTitle() {
        const title = this.add
            .text(0, 0, '商城', {
                fontSize: '126px',
                fontFamily: constants.FONT.FAMILY,
                color: '#ffffff',
                align: 'right',
            })
            .setOrigin(1, 0.5)

        new Anchor(title, {
            x: 'right-50',
            y: 'top+180',
        })
    }

    private addButtons() {
        const backButton = new Button(this, {
            texture: 'ui',
            frameIcon: 'back',
            backgroundColor: 0xff_ff_ff,
            backgroundColorOver: 0x00_4f_79,
        })

        const buttons = new Buttons(this, {
            x: 0,
            y: 0,
            anchor: {
                centerX: 'left+120',
                centerY: 'top+180',
            },
            orientation: 'horizontal',
            buttons: [backButton],
            space: {
                item: 50,
            },
        }).layout()
        this.add.existing(buttons)

        buttons.on(
            'button.over',
            (button: Button) => {
                button.setOver()
            },
            this
        )

        buttons.on(
            'button.out',
            (button: Button) => {
                button.setDefaultStyle()
            },
            this
        )

        buttons.on(
            'button.click',
            (button: Button, index: number) => {
                this.game.sound.playAudioSprite('sfx', 'button')

                switch (index) {
                    case 0:
                        this.scene.stop()
                }
            },
            this
        )
    }


}
