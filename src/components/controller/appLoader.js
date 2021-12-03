import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '11894e4841a94b9aaff73c41655e8400', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
