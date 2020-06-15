let signedValue = false;

export function signed() {
    signedValue = true;
}

export function isSigned() {
    return signedValue;
}