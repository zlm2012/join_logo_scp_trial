const path = require("path");
const uuid = require("uuid/v4")();
const fs = require("fs-extra");

exports.CHANNEL_LIST = path.join(__dirname, "../setting/ChList.csv");
exports.PARAM_LIST_1 = path.join(__dirname, "../setting/JLparam_set1.csv");
exports.PARAM_LIST_2 = path.join(__dirname, "../setting/JLparam_set2.csv");

exports.LOGOFRAME_COMMAND = path.join(__dirname, "../bin/logoframe");
exports.CHAPTEREXE_COMMAND = path.join(__dirname, "../bin/chapter_exe");
exports.JLSCP_COMMAND = path.join(__dirname, "../bin/join_logo_scp");
exports.FFPROBE_COMMAND = "/usr/local/bin/ffprobe";

exports.JL_DIR = path.join(__dirname, "../JL");
exports.LOGO_PATH = path.join(__dirname, "../logo");

OUTPUT_FOLDER_DIR = path.join(__dirname, `../result`);

exports.init = filepath => {
  const filename = path.basename(filepath, path.extname(filepath));
  const save_dir = path.join(OUTPUT_FOLDER_DIR, filename);
  fs.ensureDirSync(save_dir);
  exports.LOGOFRAME_AVS_OUTPUT = path.join(save_dir,"obs_logo_erase.avs");
  exports.OUTPUT_AVS_CUT = path.join(save_dir, "obs_cut.avs");
  exports.INPUT_AVS = path.join(save_dir, "in_org.avs");

  exports.LOGOFRAME_TXT_OUTPUT = path.join(save_dir,"obs_logoframe.txt");
  exports.CHAPTEREXE_OUTPUT = path.join(save_dir, "obs_chapterexe.txt");
  exports.JLSCP_OUTPUT = path.join(save_dir, "obs_jlscp.txt");
  return this;
};


