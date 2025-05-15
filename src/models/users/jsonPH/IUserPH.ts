export interface IUserPH {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
}
interface IAddressGeo {
	lat: string;
	lng: string;
}
interface IAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IAddressGeo;
}
interface ICompany {
	name: string;
	catchPhrase: string;
	bs: string;
}