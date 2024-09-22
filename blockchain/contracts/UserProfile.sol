// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract UserProfiles{

    struct UserProfile{
        string  fullname;
        address  owner;
        string  email;
        string  role;
    }

    mapping (address => UserProfile) public userProfiles;
    


    function createProfile(string memory _fullname,string memory _email,string memory _role ) public {
        // require(!userProfiles[msg.sender] ,"you are not allowed to create profile ");
        userProfiles[msg.sender] = UserProfile({fullname : _fullname, email : _email , role : _role ,owner : msg.sender});
    }

    function getUserProfile (address userAddress) public view returns (string memory _fullname,string memory _email,string memory _role ) {
        UserProfile memory profile = userProfiles[userAddress];
        return (profile.fullname,profile.email,profile.role);
    }

}