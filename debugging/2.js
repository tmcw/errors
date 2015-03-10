function getLastNames(people) {
    var names = [];
    for (var i = 0; i < people.length; i++) {
        names.push(people[i].name.lastName);
    }
    return names.join(', ');
}

getLastNames([{
    name: {
        firstName: 'John',
        lastName: 'Smith'
    }
}, {
    name: {
        firstName: 'Tom',
        lastName: 'MacWright'
    }
}, { }]);
