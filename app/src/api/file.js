(function(_0x15812e,_0x41d621){const _0x3a9267=_0xba5d,_0x3edf44=_0x15812e();while(!![]){try{const _0x2f7653=-parseInt(_0x3a9267(0xae))/0x1+parseInt(_0x3a9267(0xad))/0x2+-parseInt(_0x3a9267(0xab))/0x3*(parseInt(_0x3a9267(0xb4))/0x4)+parseInt(_0x3a9267(0xb0))/0x5+parseInt(_0x3a9267(0xa8))/0x6+parseInt(_0x3a9267(0xaa))/0x7+-parseInt(_0x3a9267(0xb3))/0x8;if(_0x2f7653===_0x41d621)break;else _0x3edf44['push'](_0x3edf44['shift']());}catch(_0x346a09){_0x3edf44['push'](_0x3edf44['shift']());}}}(_0x39dd,0x3e622));function _0xba5d(_0xa2cac9,_0xb03df4){const _0x39dd38=_0x39dd();return _0xba5d=function(_0xba5d77,_0x38c8a6){_0xba5d77=_0xba5d77-0xa2;let _0x2d68d7=_0x39dd38[_0xba5d77];return _0x2d68d7;},_0xba5d(_0xa2cac9,_0xb03df4);}import _0x3a2091 from'fs';import{logger}from'../utils/logger.js';export function readToken(_0x132ec3){return new Promise((_0x58bb2d,_0x5172e6)=>{const _0x2e0f4a=_0xba5d;_0x3a2091[_0x2e0f4a(0xa4)](_0x132ec3,_0x2e0f4a(0xa7),(_0x30c3c9,_0x2d599c)=>{const _0x12ca98=_0x2e0f4a;if(_0x30c3c9)return _0x5172e6(_0x30c3c9);const _0x5121b1=_0x2d599c[_0x12ca98(0xa3)]('\x0a')['map'](_0x194c90=>_0x194c90[_0x12ca98(0xb2)]())[_0x12ca98(0xa9)](_0x3e71fe=>_0x3e71fe);_0x5121b1['length']>0x0?_0x58bb2d(_0x5121b1):_0x5172e6(_0x12ca98(0xa2));});});}export function readAccounts(_0x23b83f){return new Promise((_0xf6189,_0xa63b3d)=>{const _0x52baac=_0xba5d;_0x3a2091['readFile'](_0x23b83f,_0x52baac(0xa7),(_0x5bff0e,_0x3d67cb)=>{const _0xd186ca=_0x52baac;if(_0x5bff0e)return _0xa63b3d(_0x5bff0e);const _0x2eb9c1=_0x3d67cb[_0xd186ca(0xa3)]('\x0a')[_0xd186ca(0xac)]((_0x1c8c7e,_0x30df7d)=>{const _0xdf8403=_0xd186ca;if(!_0x1c8c7e[_0xdf8403(0xa5)]('|'))return null;const [_0x235e50,_0x39c09d]=_0x1c8c7e['split']('|')[_0xdf8403(0xac)](_0x1c4595=>_0x1c4595?.['trim']());if(!_0x235e50||!_0x39c09d)return null;return{'email':_0x235e50,'password':_0x39c09d};})[_0xd186ca(0xa9)](_0x11c76a=>_0x11c76a!==null);_0x2eb9c1[_0xd186ca(0xa6)]===0x0&&console[_0xd186ca(0xb5)](_0xd186ca(0xaf)),_0xf6189(_0x2eb9c1);});});}function _0x39dd(){const _0xd46264=['No\x20tokens\x20found','split','readFile','includes','length','utf8','1415298DhxhJP','filter','652729qcRIfy','441CLLbrj','map','841134EGIgcs','2640TEnWwc','No\x20valid\x20accounts\x20found\x20in\x20the\x20file.','367745jwXDDq','Token\x20saved\x20successfully.','trim','1287848lUOwsj','10996bCRMMD','warn','Error\x20saving\x20token:'];_0x39dd=function(){return _0xd46264;};return _0x39dd();}export function saveToken(_0x3addb4,_0x176076){_0x3a2091['appendFile'](_0x3addb4,_0x176076+'\x0a',_0x300938=>{const _0x4dd58d=_0xba5d;_0x300938?logger(_0x4dd58d(0xb6),_0x300938):logger(_0x4dd58d(0xb1));});}export function delay(_0x33241c){return new Promise(_0x5e052e=>setTimeout(_0x5e052e,_0x33241c));}
