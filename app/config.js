'use strict';

const defaultDomain = 'callcenter.africa';

const configOptions= {
    defaultDomain           : defaultDomain,
    enrollmentDomain        : defaultDomain,
    defaultConferenceDomain : `videoconference.callcenter.africa`,
    defaultGuestDomain      : `guest.${defaultDomain}`,
    wsServer                : 'wss://webrtc.callcenter.africa:10888/webrtcgateway/ws',
    publicUrl               : 'https://webrtc.callcenter.africa',
    enrollmentUrl           : 'https://webrtc.callcenter.africa/enrollment-sylk-mobile.phtml',
    serverCallHistoryUrl    : 'https://webrtc.callcenter.africa/settings-webrtc.phtml',
    serverSettingsUrl       : 'https://callcenter.africa/sip_settings.phtml',
    fileTransferUrl         : 'https://webrtc-gateway.sipthor.net:9999/webrtcgateway/filetransfer',
    fileSharingUrl          : 'https://webrtc.callcenter.africa:9999/webrtcgateway/filesharing',

    iceServers              : [{urls: 'stun:stun.sipthor.net:3478'}],
    useServerCallHistory    : true,
    intercomDomains         : []
};


module.exports = configOptions;

