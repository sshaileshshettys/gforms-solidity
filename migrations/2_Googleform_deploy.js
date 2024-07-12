const GoogleForm = artifacts.require("GoogleForm");

module.exports = function(deployer) {
    console.log("deploying GoogleForm contract...")
  deployer.deploy(GoogleForm);
};