// String
let concertName = "Live Music Festival";
let artist = "Reality Club";
console.log("Concert Name:", concertName);
console.log("Artist:", artist);

// Boolean
let isSoldOut = false;
console.log("Is Sold Out:", isSoldOut);

// Number
let ticketPrice = 50000; 
let attendanceEstimate = 20000;
console.log("Ticket Price:", ticketPrice);
console.log("Attendance Estimate:", attendanceEstimate);

// Array
let genres = ["Rock", "Jazz", "Pop", "Electronic"];
console.log("Genres:", genres);

// Object
let concertLocation = {
    city: "Jakarta",
    venue: "Gelora Bung Karno",
    seatsAvailable: attendanceEstimate
};
console.log("Concert Location:", concertLocation);

// BigInt
let totalRevenue = BigInt(ticketPrice) * BigInt(attendanceEstimate);
console.log("Total Revenue (BigInt):", totalRevenue);

// Undefined
let concertDate;
console.log("Concert Date (Undefined):", concertDate);

// Null
let openingAct = null;
console.log("Opening Act (Null):", openingAct);

// Console Log 
console.log("Concert Information:");
if (isSoldOut) {
    console.log("Unfortunately, the concert is sold out.");
} else {
    console.log("Tickets are still available!");
}

// Logical Operators
let canAttend = !isSoldOut && ticketPrice <= 100000;
console.log("Can I attend the concert?", canAttend); // true jika tidak habis dan harga tiket <= 100000

// Equality Comparison
let discountTicketPrice = "50000"; // Harga dalam bentuk string
let isSamePrice = ticketPrice == discountTicketPrice;  // loose equality
let isExactSamePrice = ticketPrice === discountTicketPrice; // strict equality

console.log("Discount Ticket Price:", discountTicketPrice);
console.log("Is discount price the same (==)?", isSamePrice); // true
console.log("Is discount price exactly the same (===)?", isExactSamePrice); // false

document.getElementById("details-content").innerHTML = `
    <p><strong>Concert Name:</strong> ${concertName}</p>
    <p><strong>Artist:</strong> ${artist}</p>
    <p><strong>Location:</strong> ${concertLocation.venue}, ${concertLocation.city}</p>
    <p><strong>Genres:</strong> ${genres.join(", ")}</p>
    <p><strong>Ticket Price:</strong> Rp ${ticketPrice}</p>
    <p><strong>Estimated Attendance:</strong> ${attendanceEstimate}</p>
    <p><strong>Sold Out:</strong> ${isSoldOut ? "Yes" : "No"}</p>
    <p><strong>Total Revenue (BigInt):</strong> Rp ${totalRevenue}</p>
    <p><strong>Concert Date (Undefined):</strong> ${concertDate}</p>
    <p><strong>Opening Act (Null):</strong> ${openingAct}</p>
    <p><strong>Can I Attend?:</strong> ${canAttend ? "Yes" : "No"}</p>
    <p><strong>Discount Price Comparison (==):</strong> ${isSamePrice}</p>
    <p><strong>Exact Price Comparison (===):</strong> ${isExactSamePrice}</p>
`;
