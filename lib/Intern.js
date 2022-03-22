// instructor provided
function Intern (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Intern';
}

Intern.prototype.getRole = function () {
    return this.role;
}

Intern.prototype.getName = function () {
    return this.name;
}

Intern.prototype.getId = function () {
    return this.id;
}

Intern.prototype.getEmail = function () {
    return this.email;
}

module.exports = Intern;