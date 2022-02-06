import express from 'express';
import { UploadFileModel } from '../Models';

class UploadController {
  create = (req: any, res: express.Response) => {
    console.log('create executed!');
    // const userId = req.user._id;
    // const file: any = req.file;
    // console.log(file, userId);
    // const fileData = {
    //   filename: file.originalname,
    //   size: file.bytes,
    //   ext: file.format,
    //   url: file.url,
    //   user: userId,
    // };
    // const uploadFile = new UploadFileModel(fileData);
    // uploadFile
    //   .save()
    //   .then((fileObj: any) => {
    //     res.json({
    //       status: 'success',
    //       file: fileObj,
    //     });
    //   })
    //   .catch((err: any) => {
    //     res.json({
    //       status: 'error',
    //       message: err,
    //     });
    //   });
  };

  delete = () => {};
}

export default UploadController;
