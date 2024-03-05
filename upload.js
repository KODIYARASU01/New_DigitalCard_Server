import multer from 'multer';


let storage=multer.diskStorage({
    destination:(res,file,cb)=>{
        cd(null,'images/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});

const upload =multer({storage:storage});

export default upload;
