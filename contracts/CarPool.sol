pragma solidity ^0.4.26;

contract CarPool {
    struct Usage {
        address principal;
        string description;
        uint value;
        bool complete;
        address contractor;
    }

    struct Necessity {
        address principal;
        string description;
        uint value;
        address contractor;
        bool demanded;
        bool confirmed;
    }

    uint public minimalFee;
    mapping(address => bool) public managers;
    mapping(address => bool) public users;
    mapping(address => bool) public vehicles;
    Usage[] public usages;
    Necessity[] public necessities;

    constructor(uint minimum) public {
    	managers[msg.sender] = true;
        minimalFee = minimum;
    }

    function registerUser() public payable {
    	require(msg.value >= minimalFee, "You sent less than minimal fee");
        users[msg.sender] = true;
    }

    function registerVehicle(address vehicle) public managerRestricted {
    	vehicles[vehicle] = true;
    }

    function registerManager(address manager) public managerRestricted {
        managers[manager] = true;
    }

    function registerUsage(string memory description, uint value, address contractor) public vehicleRestricted {
        Usage memory newUsage = Usage({
            principal: msg.sender,
            description: description,
            value: value,
            complete: false,
            contractor: contractor
        });

        usages.push(newUsage);
    }

    function payForUsage(uint usageIndex) public payable userRestricted {
        Usage storage usage = usages[usageIndex];
        require(msg.value == usage.value, "Sent value doesn't match usage value");
        require(!usage.complete, "Usage already completed");

        usage.complete = true;
        usage.contractor = msg.sender;
    }

    function createNecessity(string memory description, uint value) public vehicleRestricted {
        Necessity memory newNecessity = Necessity({
            principal: msg.sender,
            description: description,
            value: value,
            contractor: address(0),
            demanded: false,
            confirmed: false
        });

        necessities.push(newNecessity);
    }

    function fullfillNecessity(uint necessityIndex) public userRestricted {
        Necessity storage necessity = necessities[necessityIndex];
        require(!necessity.confirmed, "Necessity already completed");
        require(!necessity.demanded, "Necessity already demanded");

        necessity.contractor = msg.sender;
        necessity.demanded = true;
    }

    function confirmNecessityFullFillment(uint necessityIndex, bool confirmed) public vehicleRestricted {
        Necessity storage necessity = necessities[necessityIndex];
        require(msg.sender == necessity.principal, "Only principal can confirm necessity");
        if(confirmed) {
            necessity.confirmed = true;
            necessity.contractor.transfer(necessity.value);
        } else {
            necessity.demanded = false;
            necessity.contractor = address(0);
        }
    }

    function getNecessitiesNumber() public view returns(uint256) {
        return necessities.length;
    }

    function getUsagesNumber() public view returns(uint256) {
        return usages.length;
    }

    modifier managerRestricted() {
        require(managers[msg.sender] == true, "Only managers can call this function");
        _;
    }

    modifier userRestricted() {
        require(users[msg.sender] == true, "Only users can call this function");
        _;
    }

    modifier vehicleRestricted() {
        require(vehicles[msg.sender] == true, "Only vehicles can call this function");
        _;
    }
}