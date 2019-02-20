let options = {
    title : "A Box",
    width: 300,
    height: 300,
    toJson() {
        return JSON.stringify(this)
    }

}

 let dt = new Date(Date.parse('2017/12/01'))
let {title, ...rest} = options
console.log(options.toJson())