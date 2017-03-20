var htmlparser = require("htmlparser2");

var utils = require('./utils');
var ubase = require('./ubase');

var noCloseTagList = [
    'input', 'br', 'img', 'meta', 'link'
];

/**
 * 将html根据配置文件,转换成配置文件给定的标签和生成js内容
 * @param _fileName {string} 文件名,在parseType=ubase时有用
 * @param _toParseHtml {string} 要转换的html内容
 * @param _components {object} 组件配置内容
 * @param _parseType {string} 要转换的类型, ubase
 * @param _specialTag {string} 识别自定义标签的特殊标识,只能作为标签名的标识
 */
module.exports.init = function (_fileName, _toParseHtml, _components, _parseType, _specialTag) {
    return init(_fileName, _toParseHtml, _components, _parseType, _specialTag);
};


function init(_fileName, _toParseHtml, _components, _parseType, _specialTag) {
    let html = '';
    let js = '';

    let parser = new htmlparser.Parser({
        //起始标签的处理
        onopentag: function(tagName, attribs){
            let parseOpenData = parseHtml(tagName, attribs, 'open', _specialTag, _components, _parseType);
            html += parseOpenData.html;
            js += parseOpenData.js;
        },
        //标签内文本处理
        ontext: function(text){
            html += text;
        },
        //结束标签的处理
        onclosetag: function(tagName){
            if(noCloseTagList.indexOf(tagName) === -1){
                let parseOpenData = parseHtml(tagName, null, 'close', _specialTag, _components, _parseType);
                html += parseOpenData.html;
            }
        }
    }, {decodeEntities: true});

    parser.write(_toParseHtml);
    parser.parseComplete();

    switch (_parseType){
        case 'ubase':
            //将收集到的组件js内容,转换成js文件内容
            js = ubase.genorateJsFileContent(_fileName, js);
            break;
        default:
            break;
    }
    
    return {
        html: html,
        js: js
    };
}

/**
 * 
 * @param _tagName {string} 文件名,在parseType=ubase时有用
 * @param _tagAttributes {object} 该标签对应的属性
 * @param _tagOpenEndFlag {string} 该标签是在标签对的起始位置还是结束位置,open是起始位置,close是结束位置
 * @param _specialTag {string} 识别自定义标签的特殊标识,只能作为标签名的标识
 * @param _components {object} 所有组件的配置内容
 * @param _parseType {string} 要转换的类型, ubase
 * @returns {{html: string, js: string}}
 */
function parseHtml(_tagName, _tagAttributes, _tagOpenEndFlag, _specialTag, _components, _parseType) {
    let hasParseHtmlFlag = false;
    let html = '';
    let js = '';
    if(_tagName.indexOf(_specialTag) > -1){
        let componentItem = _components[_tagName];
        if(componentItem){
            switch (_parseType){
                case 'ubase':
                    if(_tagOpenEndFlag === 'open'){
                        html = ubase.parseOpenTag(componentItem, _tagAttributes);
                        js = ubase.parseJs(componentItem, _tagAttributes['id']);
                        hasParseHtmlFlag = true;
                    }else{
                        html = ubase.parseCloseTag(componentItem, _tagAttributes);
                        hasParseHtmlFlag = true;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    
    if(!hasParseHtmlFlag){
        if(_tagOpenEndFlag === 'open'){
            html = parseNormalOpenTag(_tagName, _tagAttributes);
        }else{
            html = parseNormalCloseTag(_tagName);
        }
    }

    return {
        html: html,
        js: js
    }
}

/**
 * 普通标签的拼接
 * @param _tagName {string} 标签名
 * @param _tagAttributes {object} 该标签对应的属性
 * @returns {string}
 */
function parseNormalOpenTag(_tagName, _tagAttributes){
    let html = `<${_tagName} ${utils.obj2str(_tagAttributes)}>`;
    return html;
}

function parseNormalCloseTag(_tagName){
    let html = `<${_tagName}>`;
    return html;
}