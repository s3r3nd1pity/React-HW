export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: IUserHair;
    ip: string;
    address: IUserAddress;
    macAddress: string;
    university: string;
    bank: IUserBank;
    company: IUserCompany;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: IUserCrypto;
    role: string;
}

interface IUserHair {
    color: string;
    type: string;
}

interface IUserAddressCoordinates {
    lat: number;
    lng: number;
}

interface IUserAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUserAddressCoordinates;
    country: string;
}

interface IUserBank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

interface IUserCompanyAddressCoordinates {
    lat: number;
    lng: number;
}

interface IUserCompanyAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUserCompanyAddressCoordinates;
    country: string;
}

interface IUserCompany {
    department: string;
    name: string;
    title: string;
    address: IUserCompanyAddress;
}

interface IUserCrypto {
    coin: string;
    wallet: string;
    network: string;
}
