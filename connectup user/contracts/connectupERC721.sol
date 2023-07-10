//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract connectupERC721 is ERC721URIStorage {
    uint256 CONNECTUP_TOKEN_ID;

    constructor() ERC721("ConnectUp NFT", "CN") {}

    function mintNFT(
        address _userOne,
        address _userTwo,
        string memory tokenURI
    ) public {
        _mint(_userOne, CONNECTUP_TOKEN_ID);
        _setTokenURI(CONNECTUP_TOKEN_ID, tokenURI);
        CONNECTUP_TOKEN_ID++;

        _mint(_userTwo, CONNECTUP_TOKEN_ID);
        _setTokenURI(CONNECTUP_TOKEN_ID, tokenURI);
        CONNECTUP_TOKEN_ID++;
    }
}
