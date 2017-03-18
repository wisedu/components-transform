var fs = require('fs');
var http = require('http');
var path = require('path');
var async = require('async');

/**
 * 同步创建文件夹
 * @param dirpath 要创建的路径
 */
module.exports.createFolder = function(dirpath) {
    createFolder(dirpath);
};

/**
 * 同步遍历文件夹，返回所有文件夹和文件路径
 * @param _path
 * @returns {{files: Array, folders: Array}}
 */
module.exports.scanFolder = function(_path) {
    return scanFolder(_path);
};

/**
 * 复制文件
 * @param readPath 读取路径
 * @param writePath 写入路径
 * @param callback
 */
module.exports.copyFile = function(readPath, writePath, callback) {
    copyFile(readPath, writePath, callback);
};

/**
 * 多文件复制
 * @param pathList 路径列表
 * @param pathList.readPath 读取的文件路径
 * @param pathList.writePath 文件写入的路径
 * @param callback
 */
module.exports.copyMultipleFile = function(pathList, callback) {
    copyMultipleFile(pathList, callback);
};


/**
 * 生成guid
 * @returns {string}
 */
module.exports.newGuid = function() {
    return (S4() + S4() + "_" + S4() + "_" + S4() + "_" + S4() + "_" + S4() + S4() + S4());
};

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/**
 * 写文件
 * @param writePath 要写入的文件的路径
 * @param fileData 要写入的内容
 * @param callback
 */
module.exports.writeFile = function(writePath, fileData, callback) {
    writeFile(writePath, fileData, callback);
};

/**
 * 异步读文件
 * @param readPath 读取的文件地址
 * @param callback
 */
module.exports.readFile = function(readPath, callback) {
    readFile(readPath, callback);
};

/**
 * 将文件或文件夹压缩成zip
 * @param zipData 要压缩的文件对象
 * @param zipData.zipPath 压缩后文件路径
 * @param zipData.fileList 文件列表
 * @param zipData.replacePrePath 要替换的文件路径前缀
 * @param zipData.replaceToPrePath 要替换成的文件路径前缀
 * @param callback
 */
module.exports.folderToZip = function(zipData, callback) {
    folderToZip(zipData, callback);
};

/**
 * 编译scss
 * @param _data
 * @param _data.pathArray 需要合并的文件路径
 * @param _data.concatFileName 编译后的文件名
 * @param _data.writeFilePath 编译后文件存放地址
 * @param callback
 */
module.exports.gulpCss = function(_data, callback) {
    gulpCss(_data, callback);
};


/**
 * 合并js文件
 * @param _data
 * @param _data.pathArray 需要合并的文件路径
 * @param _data.concatFileName 合并后的文件名
 * @param _data.writeFilePath 合并后文件存放地址
 * @param callback
 */
module.exports.gulpJs = function(_data, callback) {
    gulpJs(_data, callback);
};

/**
 * 去掉字符串两端的空格
 * @param str
 */
module.exports.trim = function(str) {
    return trim(str);
};

/**
 * 转换json文本中出现的换行符等
 * @param str
 * @returns {*}
 */
module.exports.resetJsonSpecialSymbol = function(str) {
    return !str ? '' : str.replace(/\\n/g, '').replace(/\\"/g, '"');
};

/**
 * 删除文件夹
 * @param folderPath
 */
module.exports.clearFolder = function(folderPath) {
    clearFolder(folderPath);
};

/**
 * 删除文件
 * @param filePath
 */
module.exports.deleteFile = function(filePath) {
    deleteFile(filePath);
};

/**
 * md5 hash加密
 * @param _str
 * @returns {*}
 */
module.exports.createMD5Hash = function(_str) {
    return crypto.createHash('md5').update(_str).digest('hex');
};

/**
 * 根据路径获取组件编译所需的数据
 * 返回的数据对象:
 * src 风格包路径前缀
 * dest 编译后写入的文件夹
 * name 编译后的文件名
 * key 风格包的key  ${provider}---${device}---${style}
 * @param _path
 */
module.exports.getComponentsCompileDataByPath = function(_path) {
    return getComponentsCompileDataByPath(_path);
};

/**
 * 编译的打印方法
 * @param message
 */
module.exports.consoleCompile = function(message) {
    consoleCompile(message);
};

/**
 * 解析表单
 * @param _req 请求
 * @param _uploadDir 文件存放路径
 * @param callback
 * @return data
 * @return data.type {string} success/error
 * @return data.files {object} 文件数据
 * @return data.fields {object} 普通字段值
 */
module.exports.parseFormData = function(_req, _uploadDir, callback) {
    parseFormData(_req, _uploadDir, callback);
};

/**
 * zip文件解压
 * @param writePath 解压的路径
 * @param readPath zip包的路径
 * @param callback
 * @param callback.type success/error
 * @param callback.message 错误信息
 * @param callback.stdout 解压信息string
 */
module.exports.unzip = function(writePath, readPath, callback) {
    unzipFile(writePath, readPath, callback);
};

/**
 * 数据绑定到模板
 * @param data
 * @param tpl
 */
module.exports.dataBindingForTemplate = function(data, tpl) {
    return dataBindingForTemplate(data, tpl);
};

/**
 * 判断数据是否是json对象
 * @param obj
 * @returns {boolean}
 */
module.exports.isJson = function(obj) {
    return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
};

/**
 * 判断数据是否是数组
 * @param obj
 * @returns {boolean}
 */
module.exports.isArray = function(obj) {
    return toString.apply(obj) === '[object Array]';
};

/**
 * 判断数据是否是字符串
 * @param obj
 * @returns {boolean}
 */
module.exports.isString = function(obj) {
    return Object.prototype.toString.apply(obj) === '[object String]';
};

/**
 * 判断数据是否是空对象
 * @param obj
 * @returns {boolean}
 */
module.exports.isEmptyObject = function(obj) {
    var key;
    for (key in obj) {
        return false;
    }
    return true;
};

/**
 * 获取请求参数
 * @param obj
 * @returns {Object}
 */
module.exports.getParam = function(req) {
    if (req.method === 'POST') {
        return req.body;
    }
    return req.query;
};

/**
 * 深度clone纯JSON对象
 * @param obj
 * @returns {JSON}
 */
module.exports.cloneJsonObject = function(json) {
    let target = null;
    if (this.isJson(json)) {
        target = {};
    } else if (this.isArray(json)) {
        target = [];
    }
    if (target) {
        for (let key in json) {
            target[key] = this.cloneJsonObject(json[key]);
        }
        return target;
    }
    return json;
};

module.exports.createId = createId;

module.exports.getCurrentDateTime = function() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
};

/**
 * 写组件模板文件
 * @param data
 * @param data.userId 用户id
 * @param data.device 设备
 * @param data.enName 组件模板的英文名
 * @param data.template 原始模板html
 * @param data.quoteTemplate 在导出时,作为组件被引用的html
 * @param data.property 组件模板的模板属性
 * @param data.propertyTemplate 模板内的组件的属性
 * @param callback
 */
// module.exports.writeTemplateComponentFile = function(data, callback) {
//     let userId = data.userId;
//     let device = data.device;
//     let enName = data.enName;
//     let template = data.template;
//     let quoteTemplate = data.quoteTemplate;
//     let property = data.property;
//     let propertyTemplate = data.propertyTemplate;
//     //创建模板文件夹
//     let folderPath = `./subPage/${userId}/${device}/${enName}/`;
//     createFolder(folderPath);
//
//     //写入html文件和json文件
//     async.parallel([
//             //写入template.html文件
//             function(parallelCallback){
//                 writeFile(folderPath+'/template.html', template, parallelCallback);
//             },
//             //写入quoteTemplate.html文件
//             function(parallelCallback){
//                 writeFile(folderPath+'/quoteTemplate.html', quoteTemplate, parallelCallback);
//             },
//             //写入property.json文件
//             function(parallelCallback){
//                 writeFile(folderPath+'/property.json', property, parallelCallback);
//             },
//             //propertyTemplate.json文件
//             function(parallelCallback){
//                 writeFile(folderPath+'/propertyTemplate.json', propertyTemplate, parallelCallback);
//             },
//             //component.js文件
//             function(parallelCallback){
//                 readFile('./controller/template/componentTemplate.js', function (err, _result) {
//                     let className = enName.replace(/-/g, '');
//                     let jsTemplate = _result.data.replace(/replaceClassName/g, className)
//                         .replace(/replaceTagName/g, enName);
//
//                     writeFile(folderPath+'/component.js', jsTemplate, parallelCallback);
//                 });
//             }
//         ],
//         function(err, results){
//             callback(null, {type: 'success'});
//         });
// };


/**
 * zip文件解压
 * @param writePath 解压的路径
 * @param readPath zip包的路径
 * @param callback
 * @param callback.type success/error
 * @param callback.message 错误信息
 * @param callback.stdout 解压信息string
 */
function unzipFile(writePath, readPath, callback) {
    createFolder(writePath);
    let cmd = `unzip -o -d ${writePath} ${readPath}`;
    exec(cmd, function(err, stdout, stderr) {
        if (err) {
            callback(null, { type: 'error', message: stderr });
        } else {
            callback(null, { type: 'success', stdout: stdout });
        }
    });
}

/**
 * 解析表单
 * @param _req 请求
 * @param _uploadDir 文件存放路径
 * @param callback
 */
function parseFormData(_req, _uploadDir, callback) {
    createFolder(_uploadDir);

    let form = new multiparty.Form({ uploadDir: _uploadDir, encoding: 'utf-8' });
    form.parse(_req, function(err, fields, files) {
        if (err) {
            return callback(null, { type: 'error', message: err });
        }
        callback(null, { type: 'success', files: files, fields: fields });
    });
}

function consoleCompile(message) {
    var myDate = new Date();
    console.log(myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + "----" + message + "----");
}

function clearFolder(folderPath) {
    var files = [];
    // folderPath = folderPath.replace(/\//g,"\\");
    if (fs.existsSync(folderPath)) {
        files = fs.readdirSync(folderPath);
        files.forEach(function(file, index) {
            var curPath = folderPath + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                clearFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
}

function deleteFile(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
}

/**
 * 去掉字符串两端的空格
 * @param str
 * @returns {string}
 */
function trim(str) {
    var newStr = '';
    if (str) {
        var reg = /^\s*|\s*$/g;
        newStr = str.replace(reg, '');
    }
    return newStr;
}

function getComponentsCompileDataByPath(_path) {
    let data = null;
    let info_re = '';
    let provider_re = /\/components\/([a-z]*)\//;
    let provider_match = _path.match(provider_re);
    if (!provider_match) {
        return data;
    }

    let provider = provider_match[1];

    if (provider === 'third') {
        info_re = new RegExp(`/components/${provider}/(\\w*)/(new|add)/(mobile|pc)/(\\w*(-\\w*)*)/`);
    } else {
        info_re = new RegExp(`/components/${provider}/(\\w*)/(\\w*(-\\w*)*)/`);
    }

    let info_match = _path.match(info_re);
    let userId = '';
    let device = '';
    let style = '';
    let importType = '';
    if (info_match) {
        if (provider === 'third') {
            userId = info_match[1];
            importType = info_match[2];
            device = info_match[3];
            style = info_match[4];
        } else {
            device = info_match[1];
            style = info_match[2];
        }
    }

    if (provider && device && style) {
        let key = `${provider}---${device}---${style}`;
        let src = '';
        let dest = '';
        let name = 'components';

        if (provider === 'third') {
            key = `${provider}---${userId}---${importType}---${device}---${style}`;
            src = `./components/${provider}/${userId}/${importType}/${device}/${style}`;
            dest = `./distComponents/${provider}/${userId}/${importType}/${device}/${style}/`;
        } else {
            key = `${provider}---${device}---${style}`;
            src = `./components/${provider}/${device}/${style}`;
            dest = `./distComponents/${provider}/${device}/${style}/`;
        }

        data = {
            key: key,
            src: src,
            dest: dest,
            name: name,
            provider: provider,
            device: device,
            style: style,
            importType: importType
        };
    }

    return data;
}

// function createFolder(dirpath) {
//     if (!fs.existsSync(dirpath)) {
//         dirpath = checkAndGetFolderPath(dirpath);
//         var pathtmp;
//         dirpath.split("/").forEach(function(dirname) {
//             if (pathtmp) {
//                 pathtmp = path.join(pathtmp, dirname);
//             } else {
//                 pathtmp = dirname;
//             }
//             if (!fs.existsSync(pathtmp)) {
//                 if (!fs.mkdirSync(pathtmp)) {
//                     return false;
//                 }
//             }
//         });
//     }
//     return true;
// }

function createFolder(dirpath) {
    if (!fs.existsSync(dirpath)) {
        dirpath = checkAndGetFolderPath(dirpath);
        dirpath = dirpath.replace(path.resolve(), '');
        var pathtmp;
        dirpath.split(path.sep).forEach(function(dirname) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            }else {
                pathtmp = dirname;
            }
            if(pathtmp){
                if (!fs.existsSync(pathtmp)) {
                    if (!fs.mkdirSync(pathtmp)) {
                        return false;
                    }
                }
            }
        });
    }

    return true;
}

/**
 * 验证路径是否是文件夹路径,若不是则提取文件夹路径,并返回
 * @param _path
 * @returns {*}
 */
function checkAndGetFolderPath(_path) {
    let file_match = _path.match(/\/(\w*(-\w*)*)\.\w*$/);
    if (file_match) {
        _path = _path.replace(file_match[0], '');
    }

    return _path;
}

function scanFolder(_path) {
    var fileList = [],
        folderList = [],
        walk = function(path, fileList, folderList) {
            files = fs.readdirSync(path);
            files.forEach(function(item) {
                var tmpPath = /\/$/.test(path) ? path + item : path + '/' + item,
                    stats = fs.statSync(tmpPath);

                if (stats.isDirectory()) {
                    walk(tmpPath, fileList, folderList);
                    folderList.push(tmpPath);
                } else {
                    fileList.push(tmpPath);
                }
            });
        };

    walk(_path, fileList, folderList);

    return {
        'files': fileList,
        'folders': folderList
    };
}

/**
 * 单文件复制
 * @param readPath
 * @param writePath
 * @param callback
 */
function copyFile(readPath, writePath, callback) {
    if (!fs.existsSync(readPath)) {
        //验证并创建文件夹
        createFolder(writePath);
        var readFile = fs.createReadStream(readPath);
        var writeFile = fs.createWriteStream(writePath);

        writeFile.on("close", function() {
            callback(null, readPath);
        });

        readFile.pipe(writeFile);
    }else{
        callback(null, '');
    }
}

/**
 * 多文件复制
 * @param pathList 路径列表
 * @param pathList.readPath 读取的文件路径
 * @param pathList.writePath 文件写入的路径
 * @param callback
 */
function copyMultipleFile(pathList, topCallback) {
    async.forEachOf(pathList, function(value, key, callback) {
        let readPath = value.readPath;
        let writePath = value.writePath;
        //验证并创建文件夹
        createFolder(writePath);
        copyFile(readPath, writePath, callback)

    }, function(err) {
        if (err) console.error(err.message);
        topCallback(null, { type: 'success' });
    });
}

function writeFile(writePath, fileData, callback) {
    //验证并创建文件夹
    createFolder(writePath);
    fs.writeFile(writePath, fileData, function(err) {
        if (err) {
            console.log(err);
            return callback(null, { 'type': 'error', 'message': err, 'path': writePath });
        }

        return callback(null, { 'type': 'success', 'path': writePath });
    });
}

function readFile(readPath, callback) {
    fs.readFile(readPath, 'utf-8', function(err, data) {
        if (err) {
            console.log(err);
            return callback(null, { 'type': 'error', 'message': err, 'path': readPath });
        } else {
            if (/\.json$/.test(readPath)) {
                try {
                    data = JSON.parse(data);
                    callback(null, { 'type': 'success', 'data': data, 'path': readPath });
                } catch (err) {
                    console.log(err);
                    callback(null, { 'type': 'error', 'message': err, 'path': readPath });
                }
            } else {
                callback(null, { 'type': 'success', 'data': data, 'path': readPath });
            }
        }
    });
}

function folderToZip(zipData, callback) {
    var output = fs.createWriteStream(zipData.zipPath);
    var archive = archiver('zip');

    archive.on('error', function(err) {
        throw err;
    });

    archive.pipe(output);

    var fileList = zipData.fileList;
    for (var fileItem of fileList) {
        var name = fileItem.replace(zipData.replacePrePath, zipData.replaceToPrePath);
        archive.append(fs.createReadStream(fileItem), { name: name })
    }

    archive.finalize();

    archive.on('end', function(data) {
        callback(null, { 'msg': 'success' });
    });
}

function gulpCss(_data, callback) {
    var src = _data.src;
    var name = _data.name + '.scss';
    var dest = _data.dest;

    let stream = gulp.src(src)
        .pipe(concat(name))
        .pipe(sass().on('error', function(err) {
            return callback(null, { 'type': 'error', data: err, flag: 'sass' });
        }))
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 2 versions', 'Android >= 4.0', 'iOS >= 8']
        }))
        // .pipe(gulp.dest(writeFilePath))
        // .pipe(rename({suffix: '.min'}))
        // .pipe(minifycss())
        .pipe(gulp.dest(dest));

    stream.on("end", function() {
        consoleCompile(`编译 ${name} 成功`);
        callback(null, { 'type': 'success', flag: 'sass' });
    });
    stream.on("error", function(err) {
        consoleCompile(`编译 ${name} 成功`);
        console.log(err);
        callback(null, { 'type': 'error', data: err, flag: 'sass' });
    });
}

function gulpJs(_data, callback) {
    var src = _data.src;
    var name = _data.name + '.js';
    var dest = _data.dest;

    var stream = gulp.src(src)
        .pipe(concat(name))
        // .pipe(gulp.dest(writePath))
        // .pipe(rename({suffix: '.min'}))
        // .pipe(uglify())
        .pipe(gulp.dest(dest));

    stream.on("end", function() {
        consoleCompile(`编译 ${name} 成功`);
        callback(null, { 'type': 'success', flag: 'js' });
    });
    stream.on("error", function(err) {
        consoleCompile(`编译 ${name} 失败`);
        console.log(err);
        callback(null, { 'type': 'error', data: err, flag: 'js' });
    });
}

function dataBindingForTemplate(data, tpl) {
    if (data) {
        for (let key in data) {
            let value = data[key];

            tpl = tpl.replace(new RegExp(`<%= ${key} %>`, 'g'), value);
        }
    }
    return tpl;
}

/**
 * 生成id有字母和数字组成,有32个字符
 * @returns {string}
 */
function createId() {
    return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
