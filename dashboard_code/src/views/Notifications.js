
import React from "react";
import './MyWallet.css'


function MyWallet() {
  
  return (
    <>
    <div className="container d-flex justify-content-center">
    <div className="content">
    <div class="wallet-container text-center" style={{"margin-top":"300px"}}>
		<p class="page-title"><h5><b>My Wallet</b></h5></p>

		<div class="amount-box text-center">
			<img src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw" alt="wallet"/>
			<p>Total Balance</p>
			<p class="amount">1000pkr</p>
		</div>

		<div class="btn-group text-center">
			<button type="button" class="btn btn-outline-light">Add Money</button>
			{/* <button type="button" class="btn btn-outline-light">Widthdraw</button> */}
			</div>

			<div class="txn-history" style={{"color":"black"}}>
				<p><b>History</b></p>
				<p class="txn-list">Buy ticket <span class="debit-amount">-100pkr</span></p>

				<p class="txn-list">Buy ticket<span class="debit-amount">-150pkr</span></p>

				<p class="txn-list">Buy a ticket <span class="debit-amount">-300pkr</span></p>

				<p class="txn-list">Added an amount<span class="credit-amount">+1000pkr</span></p>
			</div>
	
</div>
      </div>
    </div>
    </>
  );
}

export default MyWallet;
