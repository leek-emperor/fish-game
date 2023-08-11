import Phaser from 'phaser'
import Anchor from 'phaser3-rex-plugins/plugins/behaviors/anchor/Anchor'
import { Buttons } from 'phaser3-rex-plugins/templates/ui/ui-components'
import LocalStorageData from 'phaser3-rex-plugins/plugins/localstorage-data'
import constants from '@/constants'
import Button from '@/components/Button'

export default class PlayerSkinsScene extends Phaser.Scene {
    private countText!: Phaser.GameObjects.Text

    constructor() {
        super(constants.SCENES.PLAYER_SKINS)
    }

    create() {
        this.addBackground()
        this.addCountSkins()
        this.addButtons()

    }

    private addBackground() {
        const { width, height } = this.cameras.main
        this.add
            .rectangle(0, 0, width, height, 0x2b_af_f6, 0.9)
            .setOrigin(0, 0)
            .setInteractive()
    }

    private addCountSkins() {
        const localStorageScene = this.scene.get(constants.SCENES.LOCAL_STORAGE)
        const localStorageData = localStorageScene.data.get(
            'localStorageData'
        ) as LocalStorageData

        // localStorageData.events.on(
        //   'changedata-fishes',
        //   (_: any, fishes: string[]) => {
        //     if (this.countText && fishes.length > 0) {
        //       this.countText.setText(`${fishes.length}/${constants.FISH.COUNT}`)
        //     }
        //   },
        //   this
        // )

        const currentSkins = localStorageData.get('fishes') as string[]

        const currentSkinsCount = currentSkins.length
        const allSkinsCount = constants.FISH.COUNT

        this.countText = this.add
            .text(0, 0, `${currentSkinsCount}/${allSkinsCount}`, {
                fontSize: '126px',
                fontFamily: constants.FONT.FAMILY,
                color: '#ffffff',
                align: 'right',
            })
            .setOrigin(1, 0.5)

        new Anchor(this.countText, {
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
