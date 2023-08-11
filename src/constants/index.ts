import LoadingScene from "@/scenes/LoadingScene"
import GameFieldScene from "@/scenes/GameFieldScene"
import LocalStorageScene from "@/scenes/LocalStorageScene"
import MainMenuScene from "@/scenes/MainMenuScene"
import SettingsScene from "@/scenes/SettingScene"
import GameOverScene from "@/scenes/GameOverScene"
import GameInfoUiScene from "@/scenes/GameInfoUiScene"
import ShopScene from "@/scenes/ShopScene"
import PlayerSkinsScene from "@/scenes/PlayerSkinsScene"
const DEBUG = false

const SCALE = 1

const width = 1080
const height = 1920

const constants = {
    SCALE,
    WIDTH: width * SCALE,
    HEIGHT: height * SCALE,
    DEBUG,
    SPIKE: {
        WIDTH: 145,
        HEIGHT: 87,
    },
    WALL: {
        HEIGHT: 150,
    },
    COLORS: {
        DEFAULT: {
            BACKGROUND: '#EBEBEB',
            SPIKE: '#808080',
            // SPIKE: '#000',
        },
        ACCENT: '#2BAFF6',
        ACCENT_VARIANT: '#004F79',
    },
    SCENES: {
        LOADING: 'loading-scene',
        MAIN_MENU: 'main-menu-scene',
        GAME_FIELD: 'game-field-scene',
        GAME_OVER: 'game-over-scene',
        GAME_INFO_UI: 'game-info-ui-scene',
        PLAYER_SKINS: 'player-skins-scene',
        LOCAL_STORAGE: 'local-storage-scene',
        SHOP: 'shop-scene',
        SETTINGS: 'settings-scene',
    },
    CURSOR: {
        DEFAULT: 'url(assets/cursors/default.cur), default',
        POINTER: 'url(assets/cursors/pointer.cur), pointer',
    },
    FONT: {
        FAMILY: '"Noto Sans", sans-serif',
        COLOR: '#ffffff',
    },
    FISH: {
        COUNT: 126,
        BUY_COST: 1000,
        GIFT_COST: 500,
    },
}
export const SceneList = [LoadingScene, GameFieldScene, MainMenuScene, LocalStorageScene, GameInfoUiScene, GameOverScene, SettingsScene, PlayerSkinsScene, ShopScene]

export default constants;