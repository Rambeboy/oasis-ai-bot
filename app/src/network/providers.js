(function(_0x4e2b17,_0x5e8105){const _0x25abed=_0x25e2,_0x4c5311=_0x4e2b17();while(!![]){try{const _0x46d271=parseInt(_0x25abed(0xfa))/0x1*(-parseInt(_0x25abed(0xf6))/0x2)+parseInt(_0x25abed(0x10f))/0x3+parseInt(_0x25abed(0x100))/0x4*(-parseInt(_0x25abed(0x106))/0x5)+parseInt(_0x25abed(0x110))/0x6*(-parseInt(_0x25abed(0x107))/0x7)+-parseInt(_0x25abed(0x10d))/0x8*(-parseInt(_0x25abed(0x10b))/0x9)+-parseInt(_0x25abed(0x109))/0xa+-parseInt(_0x25abed(0xfd))/0xb*(-parseInt(_0x25abed(0x103))/0xc);if(_0x46d271===_0x5e8105)break;else _0x4c5311['push'](_0x4c5311['shift']());}catch(_0x47c074){_0x4c5311['push'](_0x4c5311['shift']());}}}(_0x200c,0xb3507));import{generateRandomId}from'./system.js';import{readToken,saveToken}from'../api/file.js';import{logger}from'../utils/logger.js';import _0x4d32e from'axios';async function connectWithToken(_0x4e7a2d){const _0x279581=_0x25e2,_0x4e33ca=_0x279581(0x104),_0x1a30e7=generateRandomId(),_0x12b3ec={'0':{'json':{'name':_0x1a30e7,'platform':_0x279581(0x10e)}}},_0x38aea3={'Content-Type':_0x279581(0x10a),'Authorization':_0x4e7a2d};try{const _0x508ac3=await _0x4d32e[_0x279581(0xfe)](_0x4e33ca,_0x12b3ec,{'headers':_0x38aea3}),_0x9e198=_0x508ac3[_0x279581(0x105)][0x0]['result'][_0x279581(0x105)]['json'];return logger('Creating\x20Providers\x20successful:',_0x9e198),_0x9e198;}catch(_0x380464){return logger(_0x279581(0xfb),_0x380464[_0x279581(0xf8)]?_0x380464[_0x279581(0xf8)][_0x279581(0x101)]:_0x380464[_0x279581(0xf8)][_0x279581(0xfc)],'error'),null;}}export async function createProviders(_0x53c90a){const _0x350287=_0x25e2;try{const _0x1a7846=await readToken(_0x350287(0xf9));for(const _0x47fece of _0x1a7846){logger(_0x350287(0x102)+_0x47fece);for(let _0x56d777=0x0;_0x56d777<_0x53c90a;_0x56d777++){logger(_0x350287(0x108)+(_0x56d777+0x1)+_0x350287(0xf7));const _0x2bd51d=await connectWithToken(_0x47fece);if(_0x2bd51d)saveToken('providers.txt',_0x2bd51d);else{logger(_0x350287(0x10c),_0x350287(0xff),'error');continue;}};};return!![];}catch(_0x815bb1){logger(_0x350287(0xf5),_0x815bb1,_0x350287(0xff));};}function _0x200c(){const _0x21182d=['480eIkmGV','headless','234543deEgjY','6rdIaDa','Error\x20reading\x20token\x20or\x20connecting:','6CxBYvC','....','response','tokens.txt','188063pPLkbL','Creating\x20Providers\x20error:','statusText','33JhhEkD','post','error','2276CgCBDj','status','Creating\x20Providers\x20using\x20token:\x20','10642980RFiopO','https://api.oasis.ai/internal/authConnect?batch=1','data','8755OkyMMy','2361471HBlANU','Creating\x20Providers\x20#','3269740CKFvEv','application/json','33057VFvziH','Failed\x20to\x20create\x20provider'];_0x200c=function(){return _0x21182d;};return _0x200c();}function _0x25e2(_0x2f3ab0,_0xa5cdeb){const _0x200c88=_0x200c();return _0x25e2=function(_0x25e20a,_0x2076b8){_0x25e20a=_0x25e20a-0xf5;let _0x393faa=_0x200c88[_0x25e20a];return _0x393faa;},_0x25e2(_0x2f3ab0,_0xa5cdeb);};
