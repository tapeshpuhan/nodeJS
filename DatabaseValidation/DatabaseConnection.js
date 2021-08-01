/*
   This module used to connect databse form the 
   Client Application
*/

/*
    A User Configuration as inout to connet to a database;

    IN : connectionName : created connection name , defailt mysql
    IN : hostName : ip adress / server adress , for local databse use default as localhost
    IN : userName : user name , default username is root
    IN : password : password , for incorrect password return error information
    IN : databaseName : databse name , enter database name
    IN : portNumber : use port number default is 0
*/

class ConnectionConfiguration {
    constructor(connectionName = "mysql", hostName = "localhost",
        userName = "root", password,
        databaseName, portNumber) {
        this.connectionName = connectionName;
        this.hostName = hostName;
        this.userName = userName;
        this.password = password;
        this.databaseName = databaseName;
        this.portNumber = portNumber;
    }

    getHostName() {
        return this.hostName;
    }

    getConnectionName() {
        return this.connectionName;
    }

    getUserName() {
        return this.userName;
    }

    getPassword() {
        return this.password;
    }

    getDatabasename() {
        return this.databaseName;
    }

    getPortNumber() {
        return this.portNumber;
    }

};

/**
 * Create connection for the user
 * IN : the coneection configuration
 * OUT : return a database connection 
 * or  a error if error persist.
 */

class ConnectToDatabase {
    constructor(connectionConfiguration) {
        this.connectionConfiguration = connectionConfiguration;
    }

    connectDatabase() {
        var mySqlDatabase = require(this.connectionConfiguration.getConnectionName());

        try {
            const connection = mySqlDatabase.createConnection({
                host: this.connectionConfiguration.getHostName(),
                user: this.connectionConfiguration.getUserName(),
                password: this.connectionConfiguration.getPassword(),
                database: this.connectionConfiguration.getDatabasename(),
                port: this.connectionConfiguration.getPortNumber(),
            });

            connection.connect(function (error) {
                if (error) throw error;
                console.log("Connected!");
            });

            return connection;
        }
        catch (exception) {
            console.log("Connected Error!", exception);
            return exception;
        }
    }
};
