pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract YourContract is ERC721 {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  uint256[] internal allTokens;
  // Mapping from token ID to index of the owner tokens list 
  mapping(uint256 => uint256) internal ownedTokensIndex; 
  //Mapping from token id to position in the allTokens array 
  mapping(uint256 => uint256) internal allTokensIndex;
  
  mapping (address => uint256[]) internal ownedTokens;
  mapping (uint256 => address) internal tokenOwner;
  mapping (address => uint256) internal ownedTokensCount;


  event SetPurpose(address sender, string purpose);

  string public purpose = "Building Unstoppable Apps!";
  
  bool public onSale = false;
  address payable public beneficiaryAddr = 0x0000000000000000000000000000000000000000;
  uint256 public royaltyFee = 1000;

  constructor() public ERC721("YourCollectible", "YCB") {
    _setBaseURI("https://ipfs.io/ipfs/");
  }

  //function setPurpose(string memory newPurpose) public onlyOwner {
  function setPurpose(string memory newPurpose) public {
    purpose = newPurpose;
    console.log(msg.sender,"set purpose to",purpose);
    emit SetPurpose(msg.sender, purpose);
  }

  function setOnSale() public {
    onSale = !onSale;
  }

  function setBeneficiaryAddr(address payable newAddr) public {
    beneficiaryAddr = newAddr;
    console.log(msg.sender,"set beneficiary to",beneficiaryAddr);
  }

  function setRoyaltyFee(uint256 newRoyaltyFee) public {
    royaltyFee = newRoyaltyFee;
    console.log(msg.sender,"set royalty fee to",royaltyFee);
  }

  function buyToken() external payable returns (uint256){
    require(msg.value == 0.01 ether);
    return createToken(msg.sender);
  }

  function createToken(address tokenOwner) internal returns(uint256){
    require(tokenOwner != address(0));
    _tokenIds.increment();

    uint256 id = _tokenIds.current();
    _mint(tokenOwner, id);

    return id;
  }

/*
  // Function to transfer Ether from this contract to address from input
  function transfer(address payable _to, uint _amount) public {
      // Note that "to" is declared as payable
      (bool success,) = _to.call{value: _amount}("");
      require(success, "Failed to send Ether");
  }
*/

  function mintItem(address to, string memory tokenURI)
      public
      
      returns (uint256)
  {
      _tokenIds.increment();

      uint256 id = _tokenIds.current();
      _mint(to, id);
      //_setTokenURI(id, tokenURI);

      return id;
  }

}
