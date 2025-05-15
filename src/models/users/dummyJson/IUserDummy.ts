export interface IUserDummy {
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
    hair: IUsersHair;
    ip: string;
    address: IUsersAddress;
    macAddress: string;
    university: string;
    bank: IUsersBank;
    company: IUsersCompany;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: IUsersCrypto;
    role: string;
}

interface IUsersHair {
    color: string;
    type: string;
}
interface IUsersAddressCoordinates {
    lat: number;
    lng: number;
}
interface IUsersAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUsersAddressCoordinates;
    country: string;
}
interface IUsersBank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}
interface IUsersCompanyAddressCoordinates {
    lat: number;
    lng: number;
}
interface IUsersCompanyAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUsersCompanyAddressCoordinates;
    country: string;
}
interface IUsersCompany {
    department: string;
    name: string;
    title: string;
    address: IUsersCompanyAddress;
}
interface IUsersCrypto {
    coin: string;
    wallet: string;
    network: string;
}
