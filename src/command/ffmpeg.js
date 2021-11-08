const spawnSync = require("child_process").spawnSync;
const path = require("path");
const fs = require("fs-extra");

const {
  FFMPEG_COMMAND,
  OUTPUT_AVS_IN_CUT,
  OUTPUT_AVS_IN_CUT_LOGO,
} = require("../settings");

exports.exec = (save_dir, save_name, target, ffoption, hw, format) => {
  const args = ["-hwaccel", "qsv", "-c:v", "mpeg2_qsv", "-hwaccel_output_format", "qsv", "-fix_sub_duration", "-y", "-i"];

  if (target == "cutcm") {
    args.push(OUTPUT_AVS_IN_CUT);
  }else{
    args.push(OUTPUT_AVS_IN_CUT_LOGO);
  }
  if (ffoption) {
    const option_args=ffoption.split(' ');
    for(let i = 0; i < option_args.length; i++){
      if(option_args[i]){
        args.push(option_args[i]);
      } 
    }
  }
  args.push("-o");
  args.push(path.join(save_dir,`${save_name}.${format}`));
  //console.log(args);
  try {
    spawnSync(FFMPEG_COMMAND, args, { stdio: "inherit" });
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
};
