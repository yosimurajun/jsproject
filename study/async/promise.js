let p = new Promise(function(resolve, reject) {
    if(condition){
        resolve('success!');
    }
    else {
        reject('failure');
    }
});

p.then(function(result) {
    //do something with the result
}).catch(function() {
    //error
}).finally(function() {
    // executes
});


function get(url) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', url);

        request.onload = function() {
            if(request.status == 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        }

        request.onerror = function() {
            reject(Error('Network Error'));
        }

        request.send();
    })
}

get('story.json').then(function(response) {
    console.log("Success!", response);
}, function(err) {
    console.error('Failed', error);
});



//

let userCache = {};
function getUserDetail(username) {
    if(userCache[username]) {
        return Promise.resolve(userCache[username]);
    }


    return fetch('users/' + username + '.json')
            .then((result) => {
                userCache[username] = result;
                return result;
            })
            .catch(() => {
                throw new Error('Could not find user: ' + username);
            })
}

new Promise((resolve, reject) => {
    setTimeout(function() { resolve(10); }, 3000);
}).then(function(num) { console.log('first then: ', num); return num * 2; })
    .then(function(num) { console.log('second then: ', num); return num * 2; })
    .then(function(num) { console.log('last then: ', num);})


new Promise(function(resolve, reject) {
	
	setTimeout(function() { reject('Done!'); }, 3000);
}).then(function(e) { console.log('done', e); })
    .catch(function(e) { console.log('catch: ', e); });


(new Promise((resolve, reject) => { reject("Nope"); }))
    .then(() => { console.log("success") })
    .catch(() => { console.log("fail") })
    .finally(res => { console.log("finally") });
//

    Promise.all([promise1, promise2]).then(function(results) {
        // Both promises resolved
    })
    .catch(function(error) {
        // One or more promises was rejected
    });


    var request1 = fetch('/users.json');
var request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function(results) {
	// Both promises done!
});

Promise.all([fetch('/users.json'), navigator.getBattery()]).then(function(results) {
	// Both promises done!
});


var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 4000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { reject('Second!'); }, 3000);
});
Promise.all([req1, req2]).then(function(results) {
	console.log('Then: ', results);
}).catch(function(err) {
	console.log('Catch: ', err);
});

// From the console:
// Catch: Second!


var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 8000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 3000);
});
Promise.race([req1, req2]).then(function(one) {
	console.log('Then: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});

// From the console:
// Then: Second!