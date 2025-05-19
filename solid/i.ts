interface CloudHostingProvider{
    createServer(region: string):void;
    listServers(region:string):void;
}

interface CDNProvider{
    getCDNAddress():void;
}

interface CloudStorageProvider{
    storeFile(name: string):void;
    getFile(name:string): void;
}


class Amazon implements CloudHostingProvider, CDNProvider, CloudStorageProvider {

    createServer(region: string): void {
        throw new Error("Method not implemented.");
    }

    listServers(region: string): void {
        throw new Error("Method not implemented.");
    }

    getCDNAddress(): void {
        throw new Error("Method not implemented.");
    }

    storeFile(name: string): void {
        throw new Error("Method not implemented.");
    }

    getFile(name: string): void {
        throw new Error("Method not implemented.");
    }
}

class Dropbox implements CloudStorageProvider {
    storeFile(name: string): void {
        throw new Error("Method not implemented.");
    }

    getFile(name: string): void {
        throw new Error("Method not implemented.");
    }
}