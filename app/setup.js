const _0x42e378=_0x98c3;(function(_0x402b38,_0x545a02){const _0x1950b6=_0x98c3,_0x44763e=_0x402b38();while(!![]){try{const _0x4a2d0a=parseInt(_0x1950b6(0x1e5))/0x1*(parseInt(_0x1950b6(0x1d2))/0x2)+parseInt(_0x1950b6(0x1e1))/0x3+-parseInt(_0x1950b6(0x1d5))/0x4+parseInt(_0x1950b6(0x1d4))/0x5*(parseInt(_0x1950b6(0x1d9))/0x6)+parseInt(_0x1950b6(0x1d8))/0x7*(-parseInt(_0x1950b6(0x1e4))/0x8)+-parseInt(_0x1950b6(0x1db))/0x9+parseInt(_0x1950b6(0x1de))/0xa*(parseInt(_0x1950b6(0x1e0))/0xb);if(_0x4a2d0a===_0x545a02)break;else _0x44763e['push'](_0x44763e['shift']());}catch(_0x2e0b11){_0x44763e['push'](_0x44763e['shift']());}}}(_0x3893,0x6ddca));import{readToken,delay}from'./src/file/file.js';import{showBanner}from'./src/utils/helper.js';import{loginFromFile}from'./src/utils/login.js';import{createProviders}from'./src/network/providers.js';import{logger}from'./src/utils/logger.js';import{createInterface}from'readline';function _0x3893(){const _0x18e571=['6103911moaEDm','1680504SGkTrb','Creating\x20','close','24QaSrqu','17HSWGAt','stdin','error','stdout','70546RSTKUf','accounts.js','10hVPsdS','2944204kCajfB','No\x20accounts\x20were\x20successfully\x20logged\x20in.\x20Exiting...','\x20Providers...','941178bfykdw','30318rcfswK','No\x20proxies\x20found\x20in\x20proxy_list.js\x20Exiting...','6212790mjcrSL','Enter\x20the\x20number\x20of\x20Providers\x20you\x20want\x20to\x20create\x20[1-100]:\x20','Invalid\x20input.\x20Please\x20enter\x20a\x20number\x20between\x201\x20and\x20100.','20pYeqAU','question'];_0x3893=function(){return _0x18e571;};return _0x3893();}const rl=createInterface({'input':process[_0x42e378(0x1cf)],'output':process[_0x42e378(0x1d1)]});function askQuestion(_0x40c902){const _0x20ee91=_0x42e378;return new Promise(_0x134ba7=>rl[_0x20ee91(0x1df)](_0x40c902,_0x134ba7));}function _0x98c3(_0x220b35,_0x11a524){const _0x3893bc=_0x3893();return _0x98c3=function(_0x98c3c0,_0x31fb63){_0x98c3c0=_0x98c3c0-0x1cf;let _0x3374f4=_0x3893bc[_0x98c3c0];return _0x3374f4;},_0x98c3(_0x220b35,_0x11a524);}async function setup(){const _0x18a22b=_0x42e378;showBanner();const _0x157102=await askQuestion(_0x18a22b(0x1dc)),_0x5b4500=parseInt(_0x157102,0xa);if(isNaN(_0x5b4500)||_0x5b4500<0x1||_0x5b4500>0x64){logger(_0x18a22b(0x1dd),'',_0x18a22b(0x1d0)),rl['close']();return;};const _0x73cc5c=await readToken('proxy_list.js'),_0x43c865=await loginFromFile(_0x18a22b(0x1d3));if(_0x73cc5c['length']===0x0){logger(_0x18a22b(0x1da),'','error'),rl[_0x18a22b(0x1e3)]();return;}if(!_0x43c865){logger(_0x18a22b(0x1d6),'',_0x18a22b(0x1d0)),rl['close']();return;}logger(_0x18a22b(0x1e2)+_0x5b4500+_0x18a22b(0x1d7)),await createProviders(_0x5b4500),rl['close']();}setup();
