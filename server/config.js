const commonICConfig = {
  apiKey: process.env.MORPH_API_KEY || '',
  debugMode: 'n',
  showAPITrace: 'n',
  lang: 'en',
  nullTemplate: 'y',
};

const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/giftests',
  port: process.env.PORT || 3000,
  facebook: {
    apiVersion: 'v2.9',
    clientID: process.env.FB_CLIENT_ID || '',
    clientSecret: process.env.FB_CLIENT_SECRET || '',
    callbackURL: process.env.FB_CALLBACK_URL || '',
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    region: process.env.AWS_REGION || 'us-east-2',
    s3Bucket: process.env.AWS_S3_BUCKET || 'animated.test.com',
    s3Url: process.env.AWS_S3_URL || 'http://animatedtest.com',
    s3Folder: process.env.AWS_S3_FOLDER || 'dev',
  },
  sessionSecret: process.env.SESSION_SECRET || 'AnimatedtestSESS',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
  morphApiUrl: process.env.MORPH_API_URL || 'http://localhost',
  backgroundConfig: {
    ...commonICConfig,
    background: 'https://static.animatedtest.com/bg.jpg',
    textbox2_x: 0,
    textbox2_y: 0,
    textbox2_w: 300,
    textbox2_h: 40,
    textbox2_font: 13,
    textbox2_maxFontSize: 20,
    textbox2_fontColor: '#FFFFFF',
    textbox2_text: '',
    textbox3_x: 0,
    textbox3_y: 340,
    textbox3_w: 300,
    textbox3_h: 32,
    textbox3_font: 13,
    textbox3_maxFontSize: 20,
    textbox3_fontColor: '#FFFFFF',
    textbox3_text: '',
  },
  faceDetectConfig: {
    ...commonICConfig,
    custImg3_effectB_param: {
      op: 'faceDetect',
      drawBox: 'n',
      cropToFace: 'y',
      debugCmd: 'n',
      detectMethod: 'accurate_2',
      returnFaceDetectResultOnly: 'y',
    },
    custImg3_effect: 'B',
    custImg3_w: 300,
    custImg3_h: 300,
  },
  morphConfig: {
    ...commonICConfig,
    background: 'http://dev01.dev103.social-net.me:8080/imagecreator/temp/morphimgbgd.png',
    imgType: 'aniGIF',
    outputParams: {
      frameCount: '10',
      frameDelay_ms: '500',
      quantizeImage: '32',
    },
    custImg2_effectA_param: {
      op: 'faceDetect',
      drawBox: 'n',
      cropToFace: 'y',
      debugCmd: 'n',
      detectMethod: 'accurate_2',
      cropToFaceRatio: '1:1',
    },
    custImg2_effect: 'A',
    custImg2_w: 300,
    custImg2_h: 300,
    custImg3_effectB_param: {
      op: 'faceDetect',
      drawBox: 'n',
      cropToFace: 'y',
      debugCmd: 'n',
      detectMethod: 'accurate_2',
      cropToFaceRatio: '1:1',
    },
    custImg3_effect: 'B',
    custImg3_w: 300,
    custImg3_h: 300,
    custImg2_internalUse: 'y',
    custImg3_internalUse: 'y',
    custImg4_url: 'morphImg1',
    custImg4_x: 0,
    custImg4_y: 40,
    custImg4_w: 300,
    custImg4_h: 300,
    custImg4_type: 'morphImg',
    morphImg1: {
      srcCustImgID: '2',
      destCustImgID: '3',
      w: '200',
      h: '200',
      debugCmd: 'n',
      morphIn2Direction: 'y',
    },
    background_cacheVer: 'v1',
  },
};

export default config;
