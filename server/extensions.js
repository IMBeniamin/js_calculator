module.exports = {
    get_type : (extname) => {
        let contentType = "text/html";
        switch (extname) {
            case '.html':
                contentType='text/html';
                break;
            case '.jpg':
                contentType='image/jpg';
                break;
            case '.jfif':
                contentType='image/jfif';
                break;
            case '.js':
                contentType='text/javascript';
                break;
            case '.css':
                contentType='text/css';
                break;
            case '.json':
                contentType='application/json';
                break;
            case '.png':
                contentType='image/png';
                break;
        }
        return contentType;
    }
}
