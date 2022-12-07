"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const core_1 = require("@kivibot/core");
const plugin = new core_1.KiviPlugin('来张图', '1.0.0');
const https = require('https')
exports.plugin = plugin;
const config = {
  setu:1,
  //发送模式，是否有涩图
};
plugin.onMounted(() => {
    if(setu==1){
        plugin.onMatch('来张图', (event)  => {
            event.reply("https://iw233.cn/api.php?sort=random",false)
  })
    
    }
    else{
        plugin.onMatch('来张图', (event)  => {
            event.reply("https://iw233.cn/api.php?sort=iw233",false)
    
    }
    }});