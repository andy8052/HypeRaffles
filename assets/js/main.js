/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
var web3js;
var myContract;
var address;
var pageNum = 1;
var postsPerPage = 3;
var currentMax = 0;
var div1 = document.createElement("div");
div1.id = "div1";
var div2 = document.createElement("div");
div2.id = "div2";
var div3 = document.createElement("div");
div3.id = "div3";
window.addEventListener('load', function () {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
    } else {
        document.getElementById('metamask').style.display = "block";
        console.log('No web3? You should consider trying MetaMask!')
    }

    myContract = new web3js.eth.Contract([
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
			},
                {
                    "name": "_value",
                    "type": "uint256"
			}
		],
            "name": "approve",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
			}
		],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
			}
		],
            "name": "finishRaffle",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
			},
                {
                    "name": "",
                    "type": "uint256"
			}
		],
            "name": "rafflesToOwners",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
			},
                {
                    "name": "_to",
                    "type": "address"
			},
                {
                    "name": "_value",
                    "type": "uint256"
			}
		],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
			}
		],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
			}
		],
            "name": "raffleList",
            "outputs": [
                {
                    "name": "id",
                    "type": "uint256"
			},
                {
                    "name": "owner",
                    "type": "address"
			},
                {
                    "name": "maxEntries",
                    "type": "uint8"
			},
                {
                    "name": "joinedParticipants",
                    "type": "uint8"
			},
                {
                    "name": "cost",
                    "type": "uint256"
			},
                {
                    "name": "ended",
                    "type": "bool"
			},
                {
                    "name": "winner",
                    "type": "address"
			},
                {
                    "name": "instagramId",
                    "type": "string"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
			}
		],
            "name": "joinRaffle",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
			},
                {
                    "name": "_subtractedValue",
                    "type": "uint256"
			}
		],
            "name": "decreaseApproval",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
			}
		],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [],
            "name": "decimalFactor",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
			}
		],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "bal",
                    "type": "uint256"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [],
            "name": "buyHypebeastTokens",
            "outputs": [
                {
                    "name": "res",
                    "type": "bool"
			}
		],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_maxEntries",
                    "type": "uint8"
			},
                {
                    "name": "_cost",
                    "type": "uint256"
			},
                {
                    "name": "_instagram",
                    "type": "string"
			}
		],
            "name": "createRaffle",
            "outputs": [
                {
                    "name": "raffleId",
                    "type": "uint256"
			}
		],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [],
            "name": "tokenCost",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
			},
                {
                    "name": "",
                    "type": "uint256"
			}
		],
            "name": "raffleToEntries",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
			},
                {
                    "name": "_value",
                    "type": "uint256"
			}
		],
            "name": "transfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
			}
		],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [
                {
                    "name": "addr",
                    "type": "address"
			}
		],
            "name": "getRafflesToOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [],
            "name": "balance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_email",
                    "type": "string"
			},
                {
                    "name": "_name",
                    "type": "string"
			}
		],
            "name": "createProfile",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [],
            "name": "getRaffleLength",
            "outputs": [
                {
                    "name": "count",
                    "type": "uint256"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
			}
		],
            "name": "addressToProfiles",
            "outputs": [
                {
                    "name": "email",
                    "type": "string"
			},
                {
                    "name": "name",
                    "type": "string"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
			},
                {
                    "name": "_addedValue",
                    "type": "uint256"
			}
		],
            "name": "increaseApproval",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
			}
		],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
			},
                {
                    "name": "_spender",
                    "type": "address"
			}
		],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
			}
		],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
	},
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
			}
		],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
	},
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
	},
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
			},
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
			},
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
			}
		],
            "name": "Transfer",
            "type": "event"
	},
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
			},
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
			},
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
			}
		],
            "name": "Approval",
            "type": "event"
	},
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "buyer",
                    "type": "address"
			},
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
			}
		],
            "name": "Buy",
            "type": "event"
	},
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_chosenNumber",
                    "type": "uint256"
			},
                {
                    "indexed": false,
                    "name": "winner",
                    "type": "address"
			},
                {
                    "indexed": false,
                    "name": "raffleId",
                    "type": "uint256"
			}
		],
            "name": "ChooseWinner",
            "type": "event"
	},
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "",
                    "type": "uint256"
			}
		],
            "name": "RandomNumberGenerated",
            "type": "event"
	},
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
			},
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
			}
		],
            "name": "OwnershipTransferred",
            "type": "event"
	}
], '0x56ab178d54b540cde6cc89813960bd94916ad12f');

    var amount
    var div = document.createElement("div");
    var counter = 0;
    var mod = 0;
    const loadCryptoAssets = async() => {
        var numRaffles = await myContract.methods.getRaffleLength().call()
        console.log(numRaffles);
        var start = numRaffles - 1;
        mod = start % postsPerPage;

        console.log(start - mod);
        console.log(start - postsPerPage - mod);
        for (var i = start - mod; i > start - postsPerPage - mod; i--) {
            var raffleList = await myContract.methods.raffleList(i + mod).call()
            console.log(raffleList)
            if ((i % 3) == 0) {
                createRaffleDisplay(div1, raffleList["instagramId"], raffleList["id"] + mod)
            }
            if ((i % 3) == 1) {
                createRaffleDisplay(div2, raffleList["instagramId"], raffleList["id"] + mod)
            }
            if ((i % 3) == 2) {
                createRaffleDisplay(div3, raffleList["instagramId"], raffleList["id"] + mod)
            }
        }

        currentMax = start - postsPerPage;

        var main = document.getElementById("raffles");
        main.appendChild(div1);
        main.appendChild(div2);
        main.appendChild(div3);
    }

    web3js.eth.getAccounts(function (error, accounts) {
        address = accounts[0];
    });

    loadCryptoAssets()
})

const dispMoreRaffles = async() => {
    if (currentMax < 0) {
        return;
    }

    var start = currentMax;
    mod = start % 3;
    currentMax = start - postsPerPage;
    console.log("curr max " + currentMax);

    //    console.log(start - mod);
    for (var i = start - mod; i > start - postsPerPage - mod; i--) {
        if (i < 0) {
            break;
        }
        var raffleList = await myContract.methods.raffleList(i).call()
        console.log(raffleList)
        if ((i % 3) == 0) {
            createRaffleDisplay(div1, raffleList["instagramId"], raffleList["id"] + mod)
        }
        if ((i % 3) == 1) {
            createRaffleDisplay(div2, raffleList["instagramId"], raffleList["id"] + mod)
        }
        if ((i % 3) == 2) {
            createRaffleDisplay(div3, raffleList["instagramId"], raffleList["id"] + mod)
        }
    }

}

function createRaffleDisplay(div, instaId, raffleId) {
    div.innerHTML += '<a onclick="joinRaffle(' + raffleId + ')"><iframe src="https://www.instagram.com/p/' + instaId + '/embed" width="320" height="380" frameborder="0" scrolling="no"></iframe><h3>Join Raffle</h3></a>'
}

function overWrite(div, instaId, raffleId) {
    div.innerHTML = '<a onclick="joinRaffle(' + raffleId + ')"><iframe src="https://www.instagram.com/p/' + instaId + '/embed" width="320" height="380" frameborder="0" scrolling="no"></iframe><h3>Join Raffle</h3></a>'
}

const ownerRaffles = async() => {
    var raffles = await myContract.methods.getRafflesToOwner(address).call();
    var counter = 0;
    for (var i = 0; i < raffles.length; i++) {
        var raffleList = await myContract.methods.raffleList(raffles[i]).call()

        if ((i % 3) == 0) {
            if (i == 0) {
                overWrite(div1, raffleList["instagramId"], raffleList["id"])
            } else {
                createRaffleDisplay(div1, raffleList["instagramId"], raffleList["id"])
            }
        }
        if ((i % 3) == 1) {
            if (i == 1) {
                overWrite(div2, raffleList["instagramId"], raffleList["id"])
            } else {
                createRaffleDisplay(div2, raffleList["instagramId"], raffleList["id"])
            }
        }
        if ((i % 3) == 2) {
            if (i == 2) {
                overWrite(div3, raffleList["instagramId"], raffleList["id"])
            } else {
                createRaffleDisplay(div3, raffleList["instagramId"], raffleList["id"])
            }
        }
    }
}

function joinRaffle(raffleId) {
    myContract.methods.joinRaffle(0).send({
        from: address
    }).then(console.log);
}

function displayShit() {
    document.getElementById("input").style.display = "block";
}

function hideShit() {
    const reg = /https:\/\/www\.instagram\.com\/p\/(.*)\//g;
    var insta = document.getElementById("instagram").value;
    var myArray = reg.exec(insta);
    insta = myArray[1];
    //    console.log(myArray);
    var entries = document.getElementById("entries").value;
    var cost = document.getElementById("cost").value;

    myContract.methods.createRaffle(entries, cost, insta).send({
        from: address
    }).then(console.log);

    document.getElementById("input").style.display = "none";
}

$(function () {

    // Vars.
    var $window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper');

    // Breakpoints.
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    // Disable animations/transitions until everything's loaded.
    $body.addClass('is-loading');

    $window.on('load', function () {
        $body.removeClass('is-loading');
    });

    // Poptrox.
    $window.on('load', function () {

        $('.thumbnails').poptrox({
            onPopupClose: function () {
                $body.removeClass('is-covered');
            },
            onPopupOpen: function () {
                $body.addClass('is-covered');
            },
            baseZIndex: 10001,
            useBodyOverflow: false,
            usePopupEasyClose: true,
            overlayColor: '#000000',
            overlayOpacity: 0.75,
            popupLoaderText: '',
            fadeSpeed: 500,
            usePopupDefaultStyling: false,
            windowMargin: (skel.breakpoint('small').active ? 5 : 50)
        });

    });

});
