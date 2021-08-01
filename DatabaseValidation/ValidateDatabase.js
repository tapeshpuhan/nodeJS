
import { ConnectToDatabase, ConnectionConfiguration } from "./DatabaseConnection.js";

function validateConnection(tableFieldNameList, resultUpdate) {
    dataConnection = new ConnectToDatabase(new ConnectionConfiguration("mysql", "localhost", "root", "1", "Employee", 3306));
    connection = dataConnection.connectDatabase();

    let listOfFiledNameAvailabe = [];

    var getInformationFromDB = function (callback) {
        connection.query("SELECT * FROM Project", function (err, result, fields) {
            if (err) throw err;

            for (const field in fields) {
                listOfFiledNameAvailabe.push(fields[field].name);
            }
            callback(listOfFiledNameAvailabe);
        });
    }

    getInformationFromDB(function (result) {
        for (const inputField of tableFieldNameList)
            if (!result.includes(inputField))
            {
                resultUpdate(false) ;
                return;
            }
                
        resultUpdate(true) ;
    });

}

validateConnection(["Pid", "Salary"],function (result){console.log(result);});