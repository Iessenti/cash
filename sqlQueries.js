const sqlQueries = {
    CHECK_IS_DATABASE_CREATED: `SHOW TABLES LIKE 'yourtable'`,

    CREATE_USERS_TABLE: `CREATE TABLE users
    (
        id INT PRIMARY KEY AUTO_INCREMENT,
        phone VARCHAR(20) UNIQUE,
        name VARCHAR(60),
    )`,
    
    CREATE_BANKBOOKS_TABLE: `CREATE TABLE bankbooks
    (
        bankbookId INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(64),
        userId INT,
        currentValue FLOAT,
        FOREIGN KEY (userId) REFERENCES users (id)
    )`,
    
    CREATE_OPERATIONS_LIST_TABLE: `CREATE TABLE operations
    (
        operationsListId INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(64),
        category VARCHAR(64),
        type VARCHAR(1),
        color VARCHAR(7),
        value FLOAT,
        date DATE,
        bankbookId INT,
        FOREIGN KEY (bankbookId) REFERENCES bankbooks (bankbookId)
    )`
}

module.exports = sqlQueries