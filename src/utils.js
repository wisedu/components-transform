
module.exports.obj2str = function (_obj) {
    return obj2str(_obj);
};

function obj2str(_obj){
    let str = "";
    for(let item in _obj){
        str += ` ${item}="${_obj[item]}"`;
    }
    return str;
}