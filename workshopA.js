const user = {
    name: "Channawat",
    nick: "Keng",
    hobby: "Play Games",
    address: "Thailand",
    province: {
        province:"Bangkok",
        postcode:"10250"
    }
    
}

function getSentence ({name,nick,hobby,postcode}){
    return `${nick} ${hobby} ${postcode}`
}

const o = {
    nick: "My nickname is "+ `${user.nick}`,
    hobby: "My hobby is " + `${user.hobby}`,
    postcode: "and my postcode is "+ `${user.province.postcode}`,
};

console.log(getSentence(o));
