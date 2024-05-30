"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconHighlight = exports.IconHelp = exports.IconHangup = exports.IconGoogle = exports.IconGear = exports.IconFeedback = exports.IconFavoriteSolid = exports.IconFavorite = exports.IconFaceSmile = exports.IconExitFullscreen = exports.IconExclamationTriangle = exports.IconExclamationSolid = exports.IconEmotionsSurprised = exports.IconEmotionsSad = exports.IconEmotionsNeutral = exports.IconEmotionsHappy = exports.IconEmotionsFearful = exports.IconEmotionsDisgusted = exports.IconEmotionsAngry = exports.IconEnvelope = exports.IconEnterFullscreen = exports.IconEnlarge = exports.IconEdit = exports.IconE2EE = exports.IconDownload = exports.IconDotsHorizontal = exports.IconDeviceHeadphone = exports.IconCopy = exports.IconConnectionInactive = exports.IconConnection = exports.IconCode = exports.IconCloudUpload = exports.IconCloseLarge = exports.IconCloseCircle = exports.IconCheck = exports.IconChatUnread = exports.IconCar = exports.IconCameraRefresh = exports.IconCalendar = exports.IconBell = exports.IconBluetooth = exports.IconAudioOnlyOff = exports.IconAudioOnly = exports.IconArrowUpLarge = exports.IconArrowUp = exports.IconArrowLeft = exports.IconArrowDownLarge = exports.IconArrowDown = exports.IconArrowBack = exports.IconAddUser = void 0;
exports.IconVolumeUp = exports.IconVolumeOff = exports.IconVideoOff = exports.IconVideo = exports.IconUser = exports.IconUsers = exports.IconUserDeleted = exports.IconTrash = exports.IconTileView = exports.IconSubtitles = exports.IconStop = exports.IconSites = exports.IconSip = exports.IconShortcuts = exports.IconShareDoc = exports.IconShare = exports.IconSend = exports.IconSecurityOn = exports.IconSecurityOff = exports.IconSearch = exports.IconScreenshare = exports.IconRingGroup = exports.IconRestore = exports.IconReply = exports.IconRemoteControlStop = exports.IconRemoteControlStart = exports.IconRecordOpportunity = exports.IconRecordLead = exports.IconRecordContact = exports.IconRecordAccount = exports.IconRecord = exports.IconRaiseHand = exports.IconPlus = exports.IconPlay = exports.IconPinned = exports.IconPin = exports.IconPhoneRinging = exports.IconPerformance = exports.IconOffice365 = exports.IconArrowRight = exports.IconNoiseSuppressionOn = exports.IconNoiseSuppressionOff = exports.IconModerator = exports.IconMicSlash = exports.IconMic = exports.IconMeter = exports.IconMessage = exports.IconInfoCircle = exports.IconInfo = exports.IconImage = void 0;
exports.IconYahoo = exports.IconWifi3Bars = exports.IconWifi2Bars = exports.IconWifi1Bar = exports.IconWhiteboardHide = exports.IconWhiteboard = exports.IconWarningCircle = exports.IconWarning = void 0;
const withBranding_1 = __importDefault(require("../components/withBranding"));
const constants_1 = require("./constants");
const { IconAddUser, IconArrowBack, IconArrowDown, IconArrowDownLarge, IconArrowLeft, IconArrowUp, IconArrowUpLarge, IconAudioOnly, IconAudioOnlyOff, IconBluetooth, IconBell, IconCalendar, IconCameraRefresh, IconCar, IconChatUnread, IconCheck, IconCloseCircle, IconCloseLarge, IconCloudUpload, IconCode, IconConnection, IconConnectionInactive, IconCopy, IconDeviceHeadphone, IconDotsHorizontal, IconDownload, IconE2EE, IconEdit, IconEnlarge, IconEnterFullscreen, IconEnvelope, IconEmotionsAngry, IconEmotionsDisgusted, IconEmotionsFearful, IconEmotionsHappy, IconEmotionsNeutral, IconEmotionsSad, IconEmotionsSurprised, IconExclamationSolid, IconExclamationTriangle, IconExitFullscreen, IconFaceSmile, IconFavorite, IconFavoriteSolid, IconFeedback, IconGear, IconGoogle, IconHangup, IconHelp, IconHighlight, IconImage, IconInfo, IconInfoCircle, IconMessage, IconMeter, IconMic, IconMicSlash, IconModerator, IconNoiseSuppressionOff, IconNoiseSuppressionOn, IconArrowRight, IconOffice365, IconPerformance, IconPhoneRinging, IconPin, IconPinned, IconPlay, IconPlus, IconRaiseHand, IconRecord, IconRecordAccount, IconRecordContact, IconRecordLead, IconRecordOpportunity, IconRemoteControlStart, IconRemoteControlStop, IconReply, IconRestore, IconRingGroup, IconScreenshare, IconSearch, IconSecurityOff, IconSecurityOn, IconSend, IconShare, IconShareDoc, IconShortcuts, IconSip, IconSites, IconStop, IconSubtitles, IconTileView, IconTrash, IconUserDeleted, IconUsers, IconUser, IconVideo, IconVideoOff, IconVolumeOff, IconVolumeUp, IconWarning, IconWarningCircle, IconWhiteboard, IconWhiteboardHide, IconWifi1Bar, IconWifi2Bars, IconWifi3Bars, IconYahoo } = Object.keys(constants_1.DEFAULT_ICON).reduce((exportedIcons, key) => {
    return {
        ...exportedIcons,
        [key]: (0, withBranding_1.default)({
            iconName: key,
            DefaultIcon: constants_1.DEFAULT_ICON[key]
        })
    };
}, {});
exports.IconAddUser = IconAddUser;
exports.IconArrowBack = IconArrowBack;
exports.IconArrowDown = IconArrowDown;
exports.IconArrowDownLarge = IconArrowDownLarge;
exports.IconArrowLeft = IconArrowLeft;
exports.IconArrowUp = IconArrowUp;
exports.IconArrowUpLarge = IconArrowUpLarge;
exports.IconAudioOnly = IconAudioOnly;
exports.IconAudioOnlyOff = IconAudioOnlyOff;
exports.IconBluetooth = IconBluetooth;
exports.IconBell = IconBell;
exports.IconCalendar = IconCalendar;
exports.IconCameraRefresh = IconCameraRefresh;
exports.IconCar = IconCar;
exports.IconChatUnread = IconChatUnread;
exports.IconCheck = IconCheck;
exports.IconCloseCircle = IconCloseCircle;
exports.IconCloseLarge = IconCloseLarge;
exports.IconCloudUpload = IconCloudUpload;
exports.IconCode = IconCode;
exports.IconConnection = IconConnection;
exports.IconConnectionInactive = IconConnectionInactive;
exports.IconCopy = IconCopy;
exports.IconDeviceHeadphone = IconDeviceHeadphone;
exports.IconDotsHorizontal = IconDotsHorizontal;
exports.IconDownload = IconDownload;
exports.IconE2EE = IconE2EE;
exports.IconEdit = IconEdit;
exports.IconEnlarge = IconEnlarge;
exports.IconEnterFullscreen = IconEnterFullscreen;
exports.IconEnvelope = IconEnvelope;
exports.IconEmotionsAngry = IconEmotionsAngry;
exports.IconEmotionsDisgusted = IconEmotionsDisgusted;
exports.IconEmotionsFearful = IconEmotionsFearful;
exports.IconEmotionsHappy = IconEmotionsHappy;
exports.IconEmotionsNeutral = IconEmotionsNeutral;
exports.IconEmotionsSad = IconEmotionsSad;
exports.IconEmotionsSurprised = IconEmotionsSurprised;
exports.IconExclamationSolid = IconExclamationSolid;
exports.IconExclamationTriangle = IconExclamationTriangle;
exports.IconExitFullscreen = IconExitFullscreen;
exports.IconFaceSmile = IconFaceSmile;
exports.IconFavorite = IconFavorite;
exports.IconFavoriteSolid = IconFavoriteSolid;
exports.IconFeedback = IconFeedback;
exports.IconGear = IconGear;
exports.IconGoogle = IconGoogle;
exports.IconHangup = IconHangup;
exports.IconHelp = IconHelp;
exports.IconHighlight = IconHighlight;
exports.IconImage = IconImage;
exports.IconInfo = IconInfo;
exports.IconInfoCircle = IconInfoCircle;
exports.IconMessage = IconMessage;
exports.IconMeter = IconMeter;
exports.IconMic = IconMic;
exports.IconMicSlash = IconMicSlash;
exports.IconModerator = IconModerator;
exports.IconNoiseSuppressionOff = IconNoiseSuppressionOff;
exports.IconNoiseSuppressionOn = IconNoiseSuppressionOn;
exports.IconArrowRight = IconArrowRight;
exports.IconOffice365 = IconOffice365;
exports.IconPerformance = IconPerformance;
exports.IconPhoneRinging = IconPhoneRinging;
exports.IconPin = IconPin;
exports.IconPinned = IconPinned;
exports.IconPlay = IconPlay;
exports.IconPlus = IconPlus;
exports.IconRaiseHand = IconRaiseHand;
exports.IconRecord = IconRecord;
exports.IconRecordAccount = IconRecordAccount;
exports.IconRecordContact = IconRecordContact;
exports.IconRecordLead = IconRecordLead;
exports.IconRecordOpportunity = IconRecordOpportunity;
exports.IconRemoteControlStart = IconRemoteControlStart;
exports.IconRemoteControlStop = IconRemoteControlStop;
exports.IconReply = IconReply;
exports.IconRestore = IconRestore;
exports.IconRingGroup = IconRingGroup;
exports.IconScreenshare = IconScreenshare;
exports.IconSearch = IconSearch;
exports.IconSecurityOff = IconSecurityOff;
exports.IconSecurityOn = IconSecurityOn;
exports.IconSend = IconSend;
exports.IconShare = IconShare;
exports.IconShareDoc = IconShareDoc;
exports.IconShortcuts = IconShortcuts;
exports.IconSip = IconSip;
exports.IconSites = IconSites;
exports.IconStop = IconStop;
exports.IconSubtitles = IconSubtitles;
exports.IconTileView = IconTileView;
exports.IconTrash = IconTrash;
exports.IconUserDeleted = IconUserDeleted;
exports.IconUsers = IconUsers;
exports.IconUser = IconUser;
exports.IconVideo = IconVideo;
exports.IconVideoOff = IconVideoOff;
exports.IconVolumeOff = IconVolumeOff;
exports.IconVolumeUp = IconVolumeUp;
exports.IconWarning = IconWarning;
exports.IconWarningCircle = IconWarningCircle;
exports.IconWhiteboard = IconWhiteboard;
exports.IconWhiteboardHide = IconWhiteboardHide;
exports.IconWifi1Bar = IconWifi1Bar;
exports.IconWifi2Bars = IconWifi2Bars;
exports.IconWifi3Bars = IconWifi3Bars;
exports.IconYahoo = IconYahoo;
