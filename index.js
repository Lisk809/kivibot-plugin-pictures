"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plugin = void 0;
const core_1 = require("@kivibot/core");
const plugin = new core_1.KiviPlugin('来张图', '1.0.0');
const https = require('https')
exports.plugin = plugin;
const config = {
    "setu": 1,
    //发送模式，是否有涩图
    "mode": 1
    //图片类型，0为壁纸模式，1为随机
    "wallpaper_type": ""
    //当为壁纸模式的时候的壁纸类型，mp为竖屏，pc为横屏
};
plugin.onMounted(() => {
    if (config["mode"] == 1) {
        if (config["setu"] == 1) {
            plugin.onMatch('来张图', (event) => {
                event.reply(cqcode.image("https://iw233.cn/api.php?sort=random", false))
            })

        } else {
            plugin.onMatch('来张图', (event) => {
                event.reply(cqcode.image("https://iw233.cn/api.php?sort=iw233", false))

            })
        }
    } else {
        event.reply(cqcode.image("https://iw233.cn/api.php?sort=" + config["wallpaper_type"], false))



    }
});