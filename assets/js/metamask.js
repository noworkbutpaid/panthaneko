async function Connect(){
	document.getElementById("exampleModal").style.display = "none";
	let el = document.getElementsByClassName("modal-backdrop");
	while (el.length > 0) el[0].remove()
	
	if (window.ethereum) {
		const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
		const account = accounts[0]
		window.web3 = new Web3(window.ethereum);	

    	const networkId = await web3.eth.net.getId()
    	
    	await window.ethereum.request({
        	method: 'wallet_switchEthereumChain',
        	params: [{ chainId: '0x38' }],
    	});
    	web3.eth.net.getId().then("chain id : " + console.log)	
		
		

	} else {
		alert("Please install MetaMask to use this dApp!");
	}
}
