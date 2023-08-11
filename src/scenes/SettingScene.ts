import constants from "@/constants";
import { Buttons, Label } from 'phaser3-rex-plugins/templates/ui/ui-components'
import Button from '@/components/Button'
import Anchor from 'phaser3-rex-plugins/plugins/behaviors/anchor/Anchor'
export default class SettingsScene extends Phaser.Scene {
    constructor() {
        super(constants.SCENES.SETTINGS);
    }
    create() {
        this.addBackground()
        this.addTitle()
        this.addButtons()
        this.addVersion()
    }
    private addBackground() {
        const { width, height } = this.cameras.main
        this.add
            .rectangle(0, 0, width, height, 0x00_4f_79, 0.9)
            .setOrigin(0, 0)
            .setInteractive() // 类似于禁用了输入事件
    }
    private addTitle() {
        const title = this.add
            .text(0, 0, '设置', {
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

    private addVersion() {
        const version = this.game.config.gameVersion

        const title = this.add
            .text(0, 0, 'v' + version, {
                fontSize: '48px',
                fontFamily: constants.FONT.FAMILY,
                color: '#ffffff',
                align: 'right',
            })
            .setOrigin(0.5, 0.5)

        new Anchor(title, {
            x: 'center',
            y: 'bottom-100',
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
                this.sound.unlock();
                try {
                    this.game.sound.playAudioSprite('sfx', 'button')
                } catch (error) {
                    console.log(error.message)
                }
                switch (index) {
                    case 0:
                        this.scene.stop()
                }
            },
            this
        )
    }

}
