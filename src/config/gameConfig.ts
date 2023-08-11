import Phaser from "phaser"
import constants, { SceneList } from "../constants"
import { FloatingNumbersPlugin } from '@/plugins/FloatingNumbers'

const plugins = {
    scene: [
        {
            key: 'floatingNumbers',
            plugin: FloatingNumbersPlugin,
            sceneKey: 'floatingNumbers',
            mapping: 'floatingNumbers',
            systemKey: 'floatingNumbers',
        },
    ],
}
// import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin'

// const plugins = {
//     scene: [{
//         key: 'rexUI',
//         plugin: UIPlugin,
//         mapping: 'rexUI'
//     }]
// }

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Dont Touch',
    version: '0.0.1',
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: constants.COLORS.DEFAULT.BACKGROUND,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        zoom: constants.SCALE,
        width: constants.WIDTH,
        height: constants.HEIGHT,
    },
    physics: {
        default: 'matter',
        matter: {
            debug: constants.DEBUG,
            gravity: {
                y: 3,
            },
        },
    },
    render: {
        pixelArt: false,
        antialias: true,
        antialiasGL: true,
        roundPixels: true,
    },
    audio: {
        disableWebAudio: true
    },
    autoFocus: true,
    dom: {
        createContainer: true,
    },
    scene: SceneList,
    plugins
}

export default gameConfig