function getPersonInfo(name) {
    return ServiceWorkerRegistration.getPeople().then(people => {
        return people.find(person => { return person.name === name });
    });
}

async function getPersonInfo(name) {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
}
