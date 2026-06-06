const path = require('path');
const fs = require('fs/promises')


const fileUploadMiddleware = async (req, res, next) => {

    try {

        await fs.mkdir(path.join(process.cwd(), 'uploads'), { recursive: true });

        // Check if a file was actually attached to the request
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: 'No files were uploaded.' });
        }

        const sampleFile = req.files.photo;

        if (!sampleFile) {
            return res.status(400).json({ message: 'no file as named photo' });
        }

        const allowedExtensions = ['.png', '.jpg', '.jpeg'];
        const fileExtension = path.extname(sampleFile.name).toLowerCase();

        // 1. Check file extension
        if (!allowedExtensions.includes(fileExtension)) {
            return res.status(400).json({ message: 'Invalid file type. Only JPG and PNG allowed.' });
        }

        const fileBuffer = sampleFile.data;

        // 2. Generate a secure, unique filename to avoid overwrites
        const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1E9)}-${sampleFile.name}`;
        const destinationPath = path.join(process.cwd(), 'uploads', uniqueFilename);

        // 3. Save the binary buffer to disk natively
        await fs.writeFile(destinationPath, fileBuffer);

        next();
    } catch (error) {
        next(error)
    }

}

module.exports = {
    fileUploadMiddleware
}