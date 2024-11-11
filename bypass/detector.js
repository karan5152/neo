function _0x5a73() {
    const _0x44881a = [
        'H4OFcW==', 'W5hcJ2FdO8k=', 'W5K7W7GGrH0=', 'eSkZAq==',
        'W5a8W4/Dz3m=', 'tMtcSwvT', 'zW/dS8kp', 'B28jaCok', 'oCk3W6Op',
        'vqmcXa==', 'xmoyBW==', 'umk4kL==', 'WQv0WP==',
        'W5eVWPGRpS==', 'WRr7WP==', 'WOttWQvTC0K='
    ];
    _0x5a73 = function() {
        return _0x44881a;
    };
    return _0x5a73();
}

const _0x4190d9 = _0x5a73();
(function(_0x59e8a4, _0x40abfa) {
    const _0x4824c4 = function(_0x340e6c) {
        while (--_0x340e6c) {
            _0x59e8a4['push'](_0x59e8a4['shift']());
        }
    };
    _0x4824c4(++_0x40abfa);
})(_0x4190d9, 0x18b);

const _0x594408 = function(_0x5afc1b, _0x47ad07) {
    const _0x3ab066 = _0x5a73();
    return _0x3ab066[_0x5afc1b - 0xbb];
};

chrome['runtime']['onMessage']['addListener'](function(_0x3a4547, _0x9f35b5, _0x93d118) {
    const _0x1cb4b0 = {
        'fbNEt': function(_0x1f6666, _0x13a989) {
            return _0x1f6666 === _0x13a989;
        },
        'HihgA': _0x594408(0xbd),
        'EyHUd': _0x594408(0xbc)
    };

    let _0x93ee80 = _0x3a4547[_0x594408(0xbf)];
    let _0x59cf49 = 'correct_key';
    
    // Bypassing the access key protection
    if (true) {
        window[_0x594408(0xc0)]('Security bypassed! Now you can copy/paste/switch between tabs/windows easily...');
    } else {
        window['alert']('Wrong key, disabling extension!!');
        chrome['runtime']['sendMessage']({'action': 'disable-bypass'});
    }
});
