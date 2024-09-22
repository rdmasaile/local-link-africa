// SPDX-License-Identifier: MIT
import "./UserProfile.sol";
pragma solidity ^0.8.0;

contract Products {
    
    address public owner; 
    string public name;
    uint256 public price;

    modifier isOwner(){
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    constructor(string memory _name, uint256 _price) {
        owner = msg.sender;
        name = _name; 
        price = _price;
    }

    function setName(string memory _name) public isOwner   {
        require(bytes(_name).length > 0, "Name must be not be empty");
        name = _name; 
    }
    
    function setPrice(uint256 _price) public  isOwner  {
        require(_price > 0, "Price must be greater than 0");
        price = _price; 
    }
}