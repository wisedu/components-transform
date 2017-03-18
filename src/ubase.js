var utils = require('./utils');

/**
 * 解析起始标签
 * @param _component {object} 自定义标签配置
 * @param _tagAttributes {object} 该标签对应的属性
 */
module.exports.parseOpenTag = function (_component, _tagAttributes) {
    return parseTag(_component, _tagAttributes, true);
};

/**
 * 解析起始标签
 * @param _component {object} 自定义标签配置
 * @param _tagAttributes {object} 该标签对应的属性
 */
module.exports.parseCloseTag = function (_component, _tagAttributes) {
    return parseTag(_component, _tagAttributes, false);
};

/**
 * 将标签对应的js初始化方法进行拼接
 * @param _component {object} 自定义标签配置
 * @param _id {string} 该组件的id
 */
module.exports.parseJs = function (_component, _id) {
    return parseJs(_component, _id);
};

/**
 * 将获取的所有js内容,转换成规范写法的js内容
 * @param _fileName {string} 文件名
 * @param _jsContent {string} js内容
 */
module.exports.genorateJsFileContent = function (_fileName, _jsContent) {
    return genorateJsFileContent(_fileName, _jsContent);
};

/**
 * 标签html解析
 * @param _component {object} 自定义标签配置
 * @param _tagAttributes {object} 该标签对应的属性
 * @param isOpenTag 是否是标签的起始位置,true是,false不是
 * @returns {string}
 */
function parseTag(_component, _tagAttributes, isOpenTag){
    let property = _component.property;
    let html = '';
    let targetTag = property.targetTag;
    if(isOpenTag){
        html = `<${targetTag} ${utils.obj2str(_tagAttributes)}>`;
    }else{
        let isCloseTag = property.isCloseTag;
        if(typeof isCloseTag === 'boolean' && !isCloseTag){
            html = '';
        }else{
            html = `</${targetTag}>`;
        }
    }
    
    return html;
}

function parseJs(_component, _id) {
    let jsContent = '';
    let componentProperty = _component.property;
    let mock = '';
    let initType = componentProperty.initType;
    let initFun = componentProperty.initFun;
    let isNeedMock = componentProperty.isNeedMock;
    if(isNeedMock){
        mock = _component.mock;
    }

    if(initType === 'object'){
        jsContent = `$('#${_id}').${initFun}(${JSON.stringify(mock)});`
    }
    return jsContent;
}

function genorateJsFileContent(_fileName, _jsContent) {
    let jsTemplate =
        `define(function(require, exports, module){
        var utils = require('utils');
        var viewConfig = {
            initialize: function(){
                var view = utils.loadCompiledPage('${_fileName}');
                this.$rootElement.html(view.render({}), true);
    
                ${_jsContent}
            },
            eventMap: function(){
                return{
                    
                }
            }
        };
        
        return viewConfig;
    });`;

    return jsTemplate;
}