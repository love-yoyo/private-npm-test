module.exports = { 
    name: "module-a",
    change: function() {
        // change status
        console.log("have changed the version to 1.0.1 in package.json");
        return "version => 1.0.1";
    }
}
