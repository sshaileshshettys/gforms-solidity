// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GoogleForm {

    struct FormEntry {
        string name;
        string usn;
        string phone;
        string email;
    }

    address public owner;
    FormEntry[] private entries;
    mapping(address => bool) private hasSubmitted;

    event FormSubmitted(address indexed from, string name, string usn, string phone, string email);
    event OwnerChanged(address indexed oldOwner, address indexed newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier hasNotSubmitted() {
        require(!hasSubmitted[msg.sender], "Form already submitted");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function submitForm(string memory _name, string memory _usn, string memory _phone, string memory _email) 
        public hasNotSubmitted 
    {
        FormEntry memory newEntry = FormEntry({
            name: _name,
            usn: _usn,
            phone: _phone,
            email: _email
        });

        entries.push(newEntry);
        hasSubmitted[msg.sender] = true;

        emit FormSubmitted(msg.sender, _name, _usn, _phone, _email);
    }

    function getEntries() public view onlyOwner returns (FormEntry[] memory) {
        return entries;
    }

    function changeOwner(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid address");
        emit OwnerChanged(owner, newOwner);
        owner = newOwner;
    }
}
