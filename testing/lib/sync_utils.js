const callWithPromise = (method, ...args) => {
    return new Promise((resolve, reject) => {
        Meteor.call(method, ...args, (err, res) => {
            if (err) reject(err.reason || 'Something went wrong.');

            resolve(res);
        });
    });
};


const waitForHandleToBeReady = (handle) => {
    return new Promise((resolve, reject) => {
        Tracker.autorun(c => {
            if (handle.ready()) {
                c.stop();

                resolve();
            }
        })
    })
};

export {
    callWithPromise,
    waitForHandleToBeReady
}