// instructor provided
function Manager (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Manager';
}

Manager.prototype.getRole = function () {
    return this.role;
}

Manager.prototype.getName = function () {
    return this.name;
}

Manager.prototype.getId = function () {
    return this.id;
}

Manager.prototype.getEmail = function () {
    return this.email;
}

module.exports = Manager;