// The proxy design pattern is simply about placing some intermediary between a client and some system
// There can be multiple reasons for this but the idea is you don't want the client and resource talking directly
// Consider some client making requests to some remote server, this server has lots of information
// You don't want the client talking to the server directly (need to be authenticated, etc)
// You therefore add a proxy server in between your client and server to make the requests and make sure the client is authenticated

class Server {
    serveRequest() {
        return 'Valuable payload';
    }
}

class ProxyServer {
    securedServer: Server;
    isUserAuthenticated: boolean = false;

    constructor(server: Server) {
        this.securedServer = server;
    }

    givePassword(credentials: string) {
        if (credentials === 'super_secret_password_123') {
            this.isUserAuthenticated = true;
        }
    }

    sendRequest() {
        if (this.isUserAuthenticated) {
            return this.securedServer.serveRequest();
        }

        return 'Please give password to send requests';
    }
}

// Now the client needs to provide the password to be able to serve requests

const server = new ProxyServer(new Server());

server.sendRequest(); // Will not work

server.givePassword('super_secret_password_123');
server.sendRequest(); // Will work
