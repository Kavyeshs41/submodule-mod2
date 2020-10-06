class HelloMod2 {
    helloModule(req, res, next) {
        return res.status(200).send({"message" : "Hello From Module2"})
    }
}

module.exports = new HelloMod2();