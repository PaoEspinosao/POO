"use strict";
class MySQLDatabase {
    insert() {
        // Lógica para insertar en MySQL
    }
    update() {
        // Lógica para actualizar en MySQL
    }
    delete() {
        // Lógica para eliminar en MySQL
    }
    select() { }
}
class MongoDB {
    insert() {
        // Lógica para insertar en MongoDB
    }
    update() {
        // Lógica para actualizar en MongoDB
    }
    delete() {
        // Lógica para eliminar en MongoDB
    }
    select() { }
}
class ElasticSearchDB {
    insert() {
        // Lógica para insertar en MongoDB
    }
    update() {
        // Lógica para actualizar en MongoDB
    }
    delete() {
        // Lógica para eliminar en MongoDB
    }
    select() { }
}
class BudgetReport {
    constructor(database) {
        this.database = database;
    }
    open(date) {
        // Lógica para abrir el reporte
    }
    save() {
        this.database.insert();
    }
    getData() {
        return this.database.select();
    }
}
const handlerSelectData = (typeDB) => {
    // const mongDB = new MongoDB();
    // const elastic = new ElasticSearchDB();
    const mysql = new MySQLDatabase();
    const budgetReport = new BudgetReport(mysql);
    return budgetReport.getData();
};
