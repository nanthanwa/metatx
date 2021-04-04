export const BouncerProxy = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "sig",
				"type": "bytes"
			},
			{
				"name": "signer",
				"type": "address"
			},
			{
				"name": "destination",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
			},
			{
				"name": "rewardToken",
				"type": "address"
			},
			{
				"name": "rewardAmount",
				"type": "uint256"
			}
		],
		"name": "forward",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_account",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "bool"
			}
		],
		"name": "updateWhitelist",
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_account",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "bool"
			}
		],
		"name": "UpdateWhitelist",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Received",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "sig",
				"type": "bytes"
			},
			{
				"indexed": false,
				"name": "signer",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "destination",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "data",
				"type": "bytes"
			},
			{
				"indexed": false,
				"name": "rewardToken",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "rewardAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_hash",
				"type": "bytes32"
			}
		],
		"name": "Forwarded",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "signer",
				"type": "address"
			},
			{
				"name": "destination",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
			},
			{
				"name": "rewardToken",
				"type": "address"
			},
			{
				"name": "rewardAmount",
				"type": "uint256"
			}
		],
		"name": "getHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
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
		"name": "nonce",
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
			}
		],
		"name": "whitelist",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]