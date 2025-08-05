"use strict";
function logError(errorMessage) {
    console.log(errorMessage);
}
logError('Required Field - Name!');
// ----------
const logErrorExample2 = (errorMessage) => {
    console.log(errorMessage);
};
logError('Required Field - Surnmae!');
// --------
let exemploVoid;
//exemploVoid = 1;
exemploVoid = null;
exemploVoid = undefined;
console.log(exemploVoid);
