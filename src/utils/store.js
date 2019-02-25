export class store {
    constructor() {
        if (window.localStorage) {
            const storedData = this.getUserList();
            if (storedData.length === 0) {
                initialData.forEach((data) => {
                    this.addUserToList(data);
                });
            }
        }


        getUserList = () => JSON.parse(localStorage.getItem('userList')) || [];

        addUserToList = (newUser) => {
            const list = this.getUserList();
            localStorage.setItem('userList', JSON.stringify([...list, {
                ...newUser, id: list.length !== 0 ? list[list.length - 1].id + 1 : 1,
            }]));
        }

        userExist = (name, lastName) => {
            const list = this.getUserList();
            const users = list.filter(user => user.lastName === name && user.name === lastName);

            if (users.length === 0) {
                return false;
            } else {
                return true;
            }
        }




        const initialData = [{
            name: "Marta",
            lastName: "Pintaric",
            address: "Pleskovec",
            zip: "Lopatinec 40311",
            birthDate: new Date("1996, 08, 29"),
        },
        {
            name: "Nina",
            lastName: "Horvat",
            address: "Nedelisce",
            zip: "Nedelisce 40305",
            birthDate: new Date("1997, 07, 15"),
        },
        {
            name: "Filip",
            lastName: "Horvat",
            address: "Nedelisce",
            zip: "Nedelisce 40305",
            birthDate: new Date("1991, 12, 23"),
        },
        {
            name: "Mia",
            lastName: "Pintaric",
            address: "Pleskovec",
            zip: "Lopatinec 40311",
            birthDate: new Date("1991, 04, 22"),
        },
        {
            name: "Lovro",
            lastName: "Jelusic",
            address: "Lopatinec",
            zip: "Lopatinec 40311",
            birthDate: new Date("2000, 05, 14"),
        },
        {
            name: "Melita",
            lastName: "Kadi",
            address: "Vucetinec",
            zip: "Lopatinec 40311",
            birthDate: new Date("2001, 08, 14"),
        },
        {
            name: "Jelena",
            lastName: "Pintaric",
            address: "Pleskovec",
            zip: "Lopatinec 40311",
            birthDate: new Date("2005, 09, 21"),
        },
        {
            name: "Barbara",
            lastName: "Horvat",
            address: "Nedelisce",
            zip: "40305",
            birthDate: new Date("2004, 10, 21"),
        },
        {
            name: "Iva",
            lastName: "Sinkovic",
            address: "Ivanovec",
            zip: "40000",
            birthDate: new Date("2009, 11, 22"),
        },
        {
            name: "Ema",
            lastName: "Sinkovic",
            address: "Ivanovec",
            zip: "40005",
            birthDate: new Date("2009, 11, 22"),
        }];
    }
}
