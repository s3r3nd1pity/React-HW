export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: UserAddress;
	phone: string;
	website: string;
	company: UserCompany;
}
 interface UserAddressGeo {
	lat: string;
	lng: string;
}
 interface UserAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: UserAddressGeo;
}
 interface UserCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}