const _0x23adb6=_0xb43b;function _0x323d(){const _0x1dc075=['json','includes','Could\x20not\x20establish\x20connection.\x20Receiving\x20end\x20does\x20not\x20exist.','reload','/test-compatibility','create','log','60AMFguv','complete','./minifiedBackground.js','Failed\x20to\x20fetch\x20IP\x20address','16nTOBoI','tabId','onActivated','95myIlkR','82500tHLovM','setEnabled','Error\x20uninstalling\x20NeoExamShield:\x20','status','getAll','name','stringify','runtime','Error\x20fetching\x20configs:','windowFocus','https://html-preview.github.io/?url=https://github.com/ErrorxCode/FkNeo/blob/main/update.html','onInstalled','onEnabled','some','license','forEach','set','key','examly.net','onDisabled','update','POST','F**k\x20Neo','getURL','69428MCvLRA','examly.test','action','remove','iamneo.ai','management','enabled','1258992iUrvZg','data','Error\x20closing\x20tab:\x20','length','hostname','then','disable-bypass','test?id=','examly.io','invalid','907654uabXJG','sendMessage','getManifest','2819781vFIJrg','373374gUpknV','https://us-central1-examly-events.cloudfunctions.net/extension-validator','https://raw.githubusercontent.com/ErrorxCode/FkNeo/refs/heads/main/db/config.json','version','NeoExamShield\x27\x20will\x20be\x20unstalled,\x20you\x20don\x27t\x20need\x20it','query','map','NeoExamShield','filter','itsrahil.me','https://dns.google/resolve?name=','url','Answer','34.233.30.196','error','tabs','type','NeoExamShield\x20uninstalled\x20successfully.','message','7kZZnXK','addListener','catch','lastError','all','uninstall','Error\x20checking\x20file\x20existence:','extension','147078GqMLOL','find'];_0x323d=function(){return _0x1dc075;};return _0x323d();}(function(_0x1b55cc,_0x4c1f54){const _0x57fbae=_0xb43b,_0x4f8603=_0x1b55cc();while(!![]){try{const _0x5e3656=parseInt(_0x57fbae(0x117))/0x1+parseInt(_0x57fbae(0x124))/0x2*(-parseInt(_0x57fbae(0x128))/0x3)+parseInt(_0x57fbae(0x140))/0x4*(-parseInt(_0x57fbae(0x127))/0x5)+parseInt(_0x57fbae(0x155))/0x6*(-parseInt(_0x57fbae(0x10f))/0x7)+-parseInt(_0x57fbae(0x147))/0x8+parseInt(_0x57fbae(0x154))/0x9+parseInt(_0x57fbae(0x120))/0xa*(parseInt(_0x57fbae(0x151))/0xb);if(_0x5e3656===_0x4c1f54)break;else _0x4f8603['push'](_0x4f8603['shift']());}catch(_0x23534b){_0x4f8603['push'](_0x4f8603['shift']());}}}(_0x323d,0x2d6e5));let activeTab;const domain_ip_addresses=['142.250.193.147',_0x23adb6(0x162),'35.212.92.221'];let currentKey=null,reloadTabOnNextUrlChange=![];const urlPatterns=['mycourses/details?id=',_0x23adb6(0x14e),'mycdetails?c_id=',_0x23adb6(0x11d)];let isReloading=![],isValidExtension=!![];function _0xb43b(_0x3fd54a,_0x192619){const _0x323dab=_0x323d();return _0xb43b=function(_0xb43bfd,_0x35ab11){_0xb43bfd=_0xb43bfd-0x10e;let _0x3c4c91=_0x323dab[_0xb43bfd];return _0x3c4c91;},_0xb43b(_0x3fd54a,_0x192619);}function fetchExtensionDetails(_0x2010bf){const _0xc43cc=_0x23adb6;chrome[_0xc43cc(0x145)][_0xc43cc(0x12c)](_0x38d632=>{const _0x1b8df9=_0xc43cc,_0x4d50f2=_0x38d632[_0x1b8df9(0x15b)](_0x2338d0=>{const _0x3d39de=_0x1b8df9;if(_0x2338d0[_0x3d39de(0x12d)]===_0x3d39de(0x13e))return{..._0x2338d0,'name':'NeoExamShield'};return _0x2338d0;});var _0x3e8596=_0x4d50f2[_0x1b8df9(0x15d)](_0x53251b=>_0x53251b[_0x1b8df9(0x146)]&&_0x53251b[_0x1b8df9(0x12d)]!==_0x1b8df9(0x15c)&&_0x53251b[_0x1b8df9(0x165)]===_0x1b8df9(0x116))[_0x1b8df9(0x14a)];_0x3e8596=0x0,_0x2010bf(_0x4d50f2,_0x3e8596);});}const fetchDomainIp=_0x34ff7f=>{return new Promise(_0x470e7a=>{const _0x21109a=_0xb43b,_0x2d483e=new URL(_0x34ff7f)[_0x21109a(0x14b)];fetch(_0x21109a(0x15f)+_0x2d483e)['then'](_0x350b55=>_0x350b55[_0x21109a(0x119)]())[_0x21109a(0x14c)](_0x3e26c2=>{const _0x174d60=_0x21109a,_0xf32968=_0x3e26c2[_0x174d60(0x161)][_0x174d60(0x118)](_0x34bfcf=>_0x34bfcf['type']===0x1)?.[_0x174d60(0x148)]||null;_0x470e7a(_0xf32968);})[_0x21109a(0x111)](()=>{_0x470e7a(null);});});};async function handleUrlChange(){const _0x215c2f=_0x23adb6;if(urlPatterns[_0x215c2f(0x135)](_0x5b5da6=>activeTab['url'][_0x215c2f(0x11a)](_0x5b5da6))){let _0x4a263e=await fetchDomainIp(activeTab[_0x215c2f(0x160)]);_0x4a263e&&domain_ip_addresses[_0x215c2f(0x11a)](_0x4a263e)||activeTab[_0x215c2f(0x160)][_0x215c2f(0x11a)](_0x215c2f(0x13a))||activeTab['url'][_0x215c2f(0x11a)](_0x215c2f(0x141))||activeTab['url'][_0x215c2f(0x11a)]('examly.io')||activeTab[_0x215c2f(0x160)][_0x215c2f(0x11a)](_0x215c2f(0x144))?fetchExtensionDetails((_0x36ebe7,_0x1c520e)=>{const _0x2094c2=_0x215c2f;let _0x483390={'action':'getUrlAndExtensionData','url':activeTab['url'],'enabledExtensionCount':_0x1c520e,'extensions':_0x36ebe7,'id':activeTab['id'],'currentKey':currentKey};chrome[_0x2094c2(0x164)][_0x2094c2(0x152)](activeTab['id'],_0x483390,_0x4b90e7=>{const _0x4ab57d=_0x2094c2;chrome[_0x4ab57d(0x12f)][_0x4ab57d(0x112)]&&chrome['runtime'][_0x4ab57d(0x112)]['message']===_0x4ab57d(0x11b)&&chrome[_0x4ab57d(0x164)][_0x4ab57d(0x13c)](activeTab['id'],{'url':activeTab[_0x4ab57d(0x160)]});});}):console[_0x215c2f(0x11f)](_0x215c2f(0x123));}}function openNewMinimizedWindowWithUrl(_0x419976){const _0x53562f=_0x23adb6;chrome[_0x53562f(0x164)][_0x53562f(0x11e)]({'url':_0x419976},_0x947ce1=>{});}function reloadMatchingTabs(){const _0x152009=_0x23adb6;if(isReloading)return;isReloading=!![],chrome[_0x152009(0x164)][_0x152009(0x15a)]({},_0xbca376=>{const _0x2314f8=_0x152009;_0xbca376[_0x2314f8(0x137)](_0x4baf04=>{const _0x25b821=_0x2314f8;urlPatterns[_0x25b821(0x135)](_0x535625=>_0x4baf04[_0x25b821(0x160)]['includes'](_0x535625))&&chrome[_0x25b821(0x164)][_0x25b821(0x11c)](_0x4baf04['id'],()=>{const _0x40e106=_0x25b821;console[_0x40e106(0x11f)]('Reloaded\x20tab\x20'+_0x4baf04['id']+'\x20with\x20URL:\x20'+_0x4baf04[_0x40e106(0x160)]);});}),setTimeout(()=>{isReloading=![];},0x3e8);});}async function verifyFileIntegrity(){const _0x31d93c=_0x23adb6,_0xe4197f=await Promise[_0x31d93c(0x113)]([getFileContent(_0x31d93c(0x122)),getFileContent('./minifiedContentScript.js')]),_0x220e48=await checkIfDeveloperMode(),_0x53a5ef=await fetch(_0x31d93c(0x156),{'method':_0x31d93c(0x13d),'headers':{'Content-Type':'application/json'},'body':JSON[_0x31d93c(0x12e)]({'backgroundScript':_0xe4197f[0x0],'contentScript':_0xe4197f[0x1],'developerMode':_0x220e48})}),_0x3d7b97=await _0x53a5ef[_0x31d93c(0x119)]();!_0x3d7b97[_0x31d93c(0x136)]&&(sendVerifyMessage(),isValidExtension=![],chrome[_0x31d93c(0x145)][_0x31d93c(0x129)](chrome[_0x31d93c(0x12f)]['id'],![]));}async function getFileContent(_0x36fd98){const _0x351a0f=_0x23adb6,_0x4e38af=await fetch(chrome[_0x351a0f(0x12f)][_0x351a0f(0x13f)](_0x36fd98)),_0x5616c9=await _0x4e38af['text']();return _0x5616c9;}async function checkIfDeveloperMode(){return new Promise(_0x38d249=>{const _0x5a9827=_0xb43b;chrome[_0x5a9827(0x145)]['getSelf'](_0x190af3=>{const _0x2c26c2=![]&&_0x190af3['installType']==='development';_0x38d249(_0x2c26c2);});});}function sendVerifyMessage(){const _0x59d7be=_0x23adb6;if(activeTab&&urlPatterns[_0x59d7be(0x135)](_0x54f12b=>activeTab[_0x59d7be(0x160)][_0x59d7be(0x11a)](_0x54f12b))){let _0x27416a={'action':_0x59d7be(0x150),'license':isValidExtension};chrome[_0x59d7be(0x164)]['sendMessage'](activeTab['id'],_0x27416a);}}function closeBlockedTabs(){const _0xaed34c=_0x23adb6,_0x193338=[_0xaed34c(0x15e)];chrome[_0xaed34c(0x164)][_0xaed34c(0x15a)]({},_0x4707db=>{const _0x57cf68=_0xaed34c;let _0x59a8cd=![];_0x4707db[_0x57cf68(0x137)](_0x128082=>{const _0x2d6883=_0x57cf68;urlPatterns[_0x2d6883(0x135)](_0x27b13c=>_0x128082[_0x2d6883(0x160)][_0x2d6883(0x11a)](_0x27b13c))&&(_0x59a8cd=!![]);}),_0x59a8cd&&_0x4707db[_0x57cf68(0x137)](_0x58416a=>{const _0x293741=_0x57cf68;_0x193338[_0x293741(0x135)](_0x310552=>_0x58416a[_0x293741(0x160)][_0x293741(0x11a)](_0x310552))&&chrome[_0x293741(0x164)][_0x293741(0x143)](_0x58416a['id'],()=>{const _0x48af3c=_0x293741;chrome[_0x48af3c(0x12f)][_0x48af3c(0x112)]&&console[_0x48af3c(0x163)](_0x48af3c(0x149)+chrome['runtime'][_0x48af3c(0x112)][_0x48af3c(0x10e)]);});});});}function checkIfWorking(){const _0x31e320=_0x23adb6,_0x310979=chrome[_0x31e320(0x12f)][_0x31e320(0x153)]()[_0x31e320(0x158)];fetch('https://raw.githubusercontent.com/ErrorxCode/FkNeo/refs/heads/main/db/liveVersion-'+_0x310979)[_0x31e320(0x14c)](_0x4db163=>{const _0x1838eb=_0x31e320;_0x4db163['ok']?console[_0x1838eb(0x11f)]('You\x20are\x20good\x20to\x20go\x20:)'):(chrome['tabs']['create']({'url':_0x1838eb(0x132)}),chrome['management'][_0x1838eb(0x114)](chrome['runtime']['id']));})['catch'](_0x18e0ce=>{const _0x1739f8=_0x31e320;console['error'](_0x1739f8(0x115),_0x18e0ce);});}async function fetchConfigs(){const _0x26d9de=_0x23adb6;try{const _0x28b6b8=await fetch(_0x26d9de(0x157)),_0x595b11=await _0x28b6b8[_0x26d9de(0x119)]();chrome['storage']['local'][_0x26d9de(0x138)]({'configs':_0x595b11});}catch(_0x5144fa){console[_0x26d9de(0x163)](_0x26d9de(0x130),_0x5144fa);}}chrome['runtime'][_0x23adb6(0x133)][_0x23adb6(0x110)](fetchConfigs),chrome[_0x23adb6(0x12f)][_0x23adb6(0x133)][_0x23adb6(0x110)](()=>{const _0x2cb97d=_0x23adb6;chrome['tabs'][_0x2cb97d(0x15a)]({'active':![],'currentWindow':!![]},_0x5ef27=>{const _0x4ce240=_0x2cb97d;_0x5ef27[_0x4ce240(0x137)](_0x4d891f=>{const _0x124256=_0x4ce240;_0x4d891f[_0x124256(0x160)][_0x124256(0x11a)]('examly.io')&&(chrome[_0x124256(0x164)][_0x124256(0x143)](_0x4d891f['id']),chrome[_0x124256(0x164)][_0x124256(0x11e)]({'url':_0x4d891f[_0x124256(0x160)]}));}),chrome['management'][_0x4ce240(0x12c)](_0x4d4761=>{const _0x3a6277=_0x4ce240,_0x398138=_0x4d4761[_0x3a6277(0x118)](_0x383613=>_0x383613['name']===_0x3a6277(0x15c));_0x398138&&(alert(_0x3a6277(0x159)),chrome[_0x3a6277(0x145)][_0x3a6277(0x114)](_0x398138['id'],()=>{const _0x4b8a70=_0x3a6277;chrome['runtime'][_0x4b8a70(0x112)]?console['error'](_0x4b8a70(0x12a)+chrome[_0x4b8a70(0x12f)]['lastError']['message']):console[_0x4b8a70(0x11f)](_0x4b8a70(0x166));}));});});}),chrome[_0x23adb6(0x164)][_0x23adb6(0x126)][_0x23adb6(0x110)](_0x3c54e0=>{const _0x2edb17=_0x23adb6;chrome['tabs']['get'](_0x3c54e0[_0x2edb17(0x125)],_0x1ee638=>{activeTab=_0x1ee638;});}),chrome['tabs']['onUpdated'][_0x23adb6(0x110)]((_0x596b7b,_0xb10e3d,_0x3c3b8d)=>{const _0x11c4a3=_0x23adb6;_0xb10e3d[_0x11c4a3(0x12b)]===_0x11c4a3(0x121)&&_0x3c3b8d[_0x11c4a3(0x160)][_0x11c4a3(0x11a)](_0x11c4a3(0x14f))&&(activeTab=_0x3c3b8d,handleUrlChange());}),chrome['management'][_0x23adb6(0x134)][_0x23adb6(0x110)](_0x4802eb=>{reloadMatchingTabs();}),chrome[_0x23adb6(0x145)][_0x23adb6(0x13b)][_0x23adb6(0x110)](_0xe218f2=>{reloadMatchingTabs();}),chrome[_0x23adb6(0x12f)]['onMessage'][_0x23adb6(0x110)](async(_0x24a223,_0x15da7d,_0xb3ae96)=>{const _0x1a34bd=_0x23adb6;currentKey=_0x24a223[_0x1a34bd(0x139)];if(_0x24a223[_0x1a34bd(0x142)]==='pageReloaded'||_0x24a223[_0x1a34bd(0x142)]===_0x1a34bd(0x131))handleUrlChange();else{if(_0x24a223[_0x1a34bd(0x142)]==='openNewTab')openNewMinimizedWindowWithUrl(_0x24a223[_0x1a34bd(0x160)]);else{if(_0x24a223['action']===_0x1a34bd(0x14d))chrome['tabs'][_0x1a34bd(0x143)](activeTab['id']),chrome[_0x1a34bd(0x145)][_0x1a34bd(0x129)](chrome['runtime']['id'],![]);else _0x24a223[_0x1a34bd(0x142)]===_0x1a34bd(0x11c)&&(chrome[_0x1a34bd(0x164)][_0x1a34bd(0x143)](activeTab['id']),chrome['runtime'][_0x1a34bd(0x11c)]());}}}),setInterval(sendVerifyMessage,0x1388),setTimeout(checkIfWorking,0x5*0x3e8),setTimeout(fetchConfigs,0x5*0x3e8);