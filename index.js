var init = require('./src/init');

/**
 * 将html根据配置文件,转换成配置文件给定的标签和生成js内容
 * @param _fileName {string} 文件名,在parseType=ubase时有用
 * @param _toParseHtml {string} 要转换的html内容
 * @param _components {object} 所有组件的配置内容
 * @param _parseType {string} 要转换的类型, ubase
 * @param _specialTag {string} 识别自定义标签的特殊标识,只能作为标签名的标识
 * @return _data
 * @return _data.html {string} 转换后的html内容
 * @return _data.js {string} 转换后的js内容
 */
module.exports.transform = function(_fileName, _toParseHtml, _components, _parseType, _specialTag) {
    return init.init(_fileName, _toParseHtml, _components, _parseType, _specialTag);
};