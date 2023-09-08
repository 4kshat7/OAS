// bidComponents.js

// Function to create a bid item component
function createBidItem(itemName, currentBid, yourBid, auctionEnd) {
    const bidItem = document.createElement('div');
    bidItem.className = 'col-md-3 col-sm-6';
    bidItem.innerHTML = `
      <span class="thumbnail text-center" style="background-color: #292e33;">
        <img src="./images/${itemName.toLowerCase()}.webp" alt="...">
        <h4 class="text-danger">${itemName}</h4>
        <p style="color: greenyellow;">Current Bid: INR ${currentBid}</p>
        <p style="color: darkgoldenrod;">Your bid: INR ${yourBid}</p>
        <p>Auction End in ${auctionEnd} days</p>
        <hr class="line">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <button type="button" class="btn btn-link">Withdraw Bidding</button>
          </div>
          <div class="col-md-6 col-sm-6">
            <button class="btn btn-danger right" onclick="openBidPopup('${itemName}')">RAISE BID</button>
          </div>
        </div>
      </span>
    `;
    return bidItem;
  }
  
  // Function to open the bid popup
  function openBidPopup(itemName) {
    document.getElementById("popupItemName").textContent = itemName;
            document.getElementById("bidPopup").style.display = "block";
  }
  
  // Function to close the bid popup
  function closeBidPopup() {
    document.getElementById("bidPopup").style.display = "none";
  }
  
  // Function to submit a bid
  function submitBid() {
    // Get the bid amount from the input field
    const bidAmount = document.getElementById("bidAmount").value;

    // You can send a request to the API to update the bid here.
    // Make sure to validate the bidAmount before sending the request.

    // Close the bid popup after submission
    closeBidPopup();
  }
  