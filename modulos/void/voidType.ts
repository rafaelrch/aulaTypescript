function logError(errorMessage: string): void {
    console.log(errorMessage);
}

logError('Required Field - Name!');

// ----------

const logErrorExample2 = (errorMessage: string): void => {
    console.log(errorMessage);
}

logError('Required Field - Surnmae!');

// --------

let exemploVoid: void;
//exemploVoid = 1;
exemploVoid = null;
exemploVoid = undefined;

console.log(exemploVoid);