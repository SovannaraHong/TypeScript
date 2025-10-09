//create object 2 one for user have id name age gender product string []
//create object for admin have copy by user and add author and have role in role have arr_obj for detail about role admin
const createForAdmin = {
    author: "Admin",
    name: "HONG_SOVANNARA",
    age: 20,
    gender: "Male",
    roles: [
        {
            role: "Create",
            detail: "can create product for user see on in website",
        },
        {
            role: "Update",
            detail: "can Update product for user see on in website",
        },
        {
            role: "remove",
            detail: "can remove product for user see on in website",
        },
    ],
};
const createForMember = {
    Id: 2,
    name: "nara",
    age: 23,
    gender: "Male",
};
console.log(createForAdmin, createForMember);
export {};
//# sourceMappingURL=createObj.js.map