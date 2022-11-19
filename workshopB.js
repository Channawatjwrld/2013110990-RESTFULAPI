const user = [
    {
        name: "Channawat",
        nick: "Keng",
        hobby: "Play Games",
        address: "Thailand",
        province: {
        province:"Bangkok",
        postcode:"10250"
        }
    },
    {
        name: "Channawat",
        nick: "Kong",
        hobby: "sleep",
        address: "Thailand",
        province: {
        province:"Bangkok",
        postcode:"10251"
        }
    },
    {
        name: "Channawat",
        nick: "Kung",
        hobby: "mairukub",
        address: "Thailand",
        province: {
        province:"Bangkok",
        postcode:"10252"
        }
    },
];
function getSentence ({name,nick,hobby,postcode}){
    return `${nick} ${hobby} ${postcode}`
}

for(const u of user){
const o = {
    nick: "My nickname is "+ `${u.nick}`,
    hobby: "My hobby is " + `${u.hobby}`,
    postcode: "and my postcode is "+ `${u.province.postcode}`,
};

console.log(getSentence(o));
}



